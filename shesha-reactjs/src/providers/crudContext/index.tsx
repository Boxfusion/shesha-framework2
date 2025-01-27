import { Form } from 'antd';
import React, { FC, PropsWithChildren, useContext, useEffect, useRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { RowDataInitializer } from '@/components/reactTable/interfaces';
import useThunkReducer from '@/hooks/thunkReducer';
import { IErrorInfo } from '@/interfaces/errorInfo';
import { FormProvider } from '@/providers';
import { IFlatComponentsStructure, IFormSettings } from '@/providers/form/models';
import {
  deleteFailedAction,
  deleteStartedAction,
  deleteSuccessAction,
  resetErrorsAction,
  saveFailedAction,
  saveStartedAction,
  saveSuccessAction,
  setAllowDeleteAction,
  setAllowEditAction,
  setAutoSaveAction,
  setInitialValuesAction,
  setInitialValuesLoadingAction,
  switchModeAction,
} from './actions';
import { CRUD_CONTEXT_INITIAL_STATE, CrudContext, ICrudContext } from './contexts';
import { CrudMode } from './models';
import reducer from './reducer';
import { FormWrapper } from './formWrapper';

export type DataProcessor = (data: any) => Promise<any>;

export interface ICrudProviderProps {
  isNewObject: boolean;
  allowEdit: boolean;
  allowDelete: boolean;
  mode?: CrudMode;
  allowChangeMode: boolean;
  data: object | RowDataInitializer;
  updater?: DataProcessor;
  creater?: DataProcessor;
  deleter?: () => Promise<any>;
  onSave?: DataProcessor;
  autoSave?: boolean;
  editorComponents?: IFlatComponentsStructure;
  displayComponents?: IFlatComponentsStructure;
  formSettings?: IFormSettings;
}

const CrudProvider: FC<PropsWithChildren<ICrudProviderProps>> = (props) => {
  const {
    children,
    data,
    updater,
    creater,
    deleter,
    isNewObject,
    mode = 'read',
    allowEdit,
    allowDelete,
    onSave,
    allowChangeMode,
    autoSave = false,
    formSettings
  } = props;
  const [state, dispatch] = useThunkReducer(reducer, {
    ...CRUD_CONTEXT_INITIAL_STATE,
    isNewObject,
    allowEdit,
    allowDelete,
    mode,
    allowChangeMode,
    autoSave,
    initialValues: typeof data !== 'function' ? data : undefined,
  });

  const switchModeInternal = (mode: CrudMode, allowChangeMode: boolean) => {
    dispatch(switchModeAction({ mode, allowChangeMode }));
  };

  const switchMode = (mode: CrudMode) => {
    if (state.allowChangeMode) switchModeInternal(mode, state.allowChangeMode);
  };

  useEffect(() => {
    if (autoSave !== state.autoSave) dispatch(setAutoSaveAction(autoSave));
  }, [autoSave]);

  useEffect(() => {
    //to restore the edit pen when toggling between inLine edit mode(all-at-once/one-by-one) 
    const modeToUse = mode ==='read'?mode:allowChangeMode ? state.mode : mode;

    if (state.allowChangeMode !== allowChangeMode || state.mode !== modeToUse)
      switchModeInternal(modeToUse, allowChangeMode);
  }, [mode, allowChangeMode]);

  const [form] = Form.useForm();

  const setInitialValuesLoading = (loading: boolean) => {
    dispatch(setInitialValuesLoadingAction(loading));
  };

  const setInitialValues = (values: object) => {
    dispatch(setInitialValuesAction(values));
  };

  useEffect(() => {
    if (typeof data === 'function') {
      setInitialValuesLoading(true);
      const dataResponse = data();

      Promise.resolve(dataResponse).then((response) => {
        setInitialValues(response);
        form.setFieldsValue(response);
      });
    } else {
      setInitialValues(data);
      form.setFieldsValue(data);
    }
  }, [data]);

  //#region Allow Edit/Delete/Create

  const setAllowEdit = (allowEdit: boolean) => {
    dispatch(setAllowEditAction(allowEdit));
  };

  useEffect(() => {
    if (state.allowEdit !== allowEdit) setAllowEdit(allowEdit);
  }, [allowEdit]);

  const setAllowDelete = (allowDelete: boolean) => {
    dispatch(setAllowDeleteAction(allowDelete));
  };

  useEffect(() => {
    if (state.allowDelete !== allowDelete) setAllowDelete(allowDelete);
  }, [allowDelete]);

  //#endregion

  const resetErrors = () => {
    dispatch(resetErrorsAction());
  };

  const getErrorInfo = (error: any, message: string): IErrorInfo => {
    return {
      message: message,
      ...error,
    };
  };

  const performSave = (processor: DataProcessor, updateType: string) => {
    if (!processor) return Promise.reject('`processor` must be defined');

    dispatch(saveStartedAction());

    return form
      .validateFields()
      .then((values) => {
        // todo: call common data preparation code (check configurableFormRenderer)
        const mergedData = { ...state.initialValues, ...values };

        const finalDataPromise = onSave ? Promise.resolve(onSave(mergedData)) : Promise.resolve(mergedData);

        return finalDataPromise.then((finalData) => {
          return processor(finalData)
            .then(() => {
              dispatch(saveSuccessAction());
            })
            .catch((error) => {
              dispatch(saveFailedAction(getErrorInfo(error, `${updateType} failed`)));
              throw error;
            });
        });
      })
      .catch((validationErrors) => {
        dispatch(saveFailedAction(getErrorInfo(validationErrors, `${updateType} failed`)));
        throw validationErrors;
      });
  };

  const performUpdate = () => {
    if (!updater) return Promise.reject('CrudProvider: `updater` property is not specified');

    return performSave(updater, 'Update');
  };

  const debouncedUpdate = useDebouncedCallback(
    () => {
      performUpdate();
    },
    // delay in ms
    300
  );

  const performCreate = () => {
    if (!creater) return Promise.reject('CrudProvider: `creater` property is not specified');

    return performSave(creater, 'Create');
  };

  const performDelete = async () => {
    if (!deleter) throw 'CrudProvider: `deleter` property is not specified';

    dispatch(deleteStartedAction());

    try {
      await deleter();
      dispatch(deleteSuccessAction());
    } catch (error) {
      dispatch(deleteFailedAction(getErrorInfo(error, 'Failed to delete row')));
      throw error;
    }
  };

  const reset = async () => {
    await form.resetFields();
    resetErrors();
  };

  const getFormData = () => {
    return form.getFieldsValue();
  };
  const getInitialData = () => {
    return state.initialValues;
  };

  const autoSaveEnqueued = useRef<boolean>(false);
  const onValuesChange = () => {
    if (!state.autoSave || state.mode !== 'update') return;

    if (!form.isFieldsTouched()) return;

    autoSaveEnqueued.current = true;
  };

  const handleFocusIn = () => {
    if (autoSaveEnqueued.current === true) {
      autoSaveEnqueued.current = false;
      // auto save
      debouncedUpdate();
    }
  };

  useEffect(() => {
    document.addEventListener('focusin', handleFocusIn);
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, []);

  const contextValue: ICrudContext = {
    ...state,
    switchMode,
    performUpdate,
    performCreate,
    performDelete,
    reset,
    getFormData,
    getInitialData,
  };

  const flatComponents = state.mode === 'read' ? props.displayComponents : props.editorComponents;

  return (
    <CrudContext.Provider value={contextValue}>
      {true && (
        <FormProvider
          key={state.mode} /* important for re-rendering of the provider after mode change */
          form={form}
          name={''}
          allComponents={flatComponents.allComponents}
          componentRelations={flatComponents.componentRelations}
          formSettings={formSettings}
          mode={state.mode === 'read' ? 'readonly' : 'edit'}
          isActionsOwner={false}
        >
          <FormWrapper form={form} initialValues={state.initialValues} onValuesChange={onValuesChange} formSettings={formSettings}>
            {children}
          </FormWrapper>
        </FormProvider>
      )}
    </CrudContext.Provider>
  );
};

function useCrud(require: boolean = true) {
  const context = useContext(CrudContext);

  if (context === undefined && require) {
    throw new Error('useCrud must be used within a CrudProvider');
  }

  return context;
}

export { CrudProvider, useCrud };
