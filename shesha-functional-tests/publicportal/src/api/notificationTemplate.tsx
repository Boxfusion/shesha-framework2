/* Generated by restful-react */

import React from 'react';
import { Get, GetProps, useGet, UseGetProps, Mutate, MutateProps, useMutate, UseMutateProps } from 'restful-react';
export const SPEC_VERSION = 'v1';
export interface GuidEntityDto {
  id?: string;
}

export interface GuidNullableEntityWithDisplayNameDto {
  id?: string | null;
  displayText?: string | null;
}

export interface ReferenceListItemValueDto {
  item?: string | null;
  itemValue?: number | null;
}

export interface NotificationTemplateDto {
  id?: string;
  isEnabled?: boolean;
  name?: string | null;
  body?: string | null;
  subject?: string | null;
  notification?: GuidNullableEntityWithDisplayNameDto;
  sendType?: ReferenceListItemValueDto;
  bodyFormat?: ReferenceListItemValueDto;
}

export interface ValidationErrorInfo {
  message?: string | null;
  members?: string[] | null;
}

export interface ErrorInfo {
  code?: number;
  message?: string | null;
  details?: string | null;
  validationErrors?: ValidationErrorInfo[] | null;
}

export interface NotificationTemplateDtoAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: NotificationTemplateDto;
}

export interface AjaxResponseBase {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
}

export interface NotificationTemplateDtoPagedResultDto {
  items?: NotificationTemplateDto[] | null;
  totalCount?: number;
}

export interface NotificationTemplateDtoPagedResultDtoAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: NotificationTemplateDtoPagedResultDto;
}

export interface NotificationTemplateDeleteQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type NotificationTemplateDeleteProps = Omit<
  MutateProps<void, unknown, NotificationTemplateDeleteQueryParams, GuidEntityDto, void>,
  'path' | 'verb'
>;

export const NotificationTemplateDelete = (props: NotificationTemplateDeleteProps) => (
  <Mutate<void, unknown, NotificationTemplateDeleteQueryParams, GuidEntityDto, void>
    verb="POST"
    path={`/api/services/app/NotificationTemplate/Delete`}
    {...props}
  />
);

export type UseNotificationTemplateDeleteProps = Omit<
  UseMutateProps<void, unknown, NotificationTemplateDeleteQueryParams, GuidEntityDto, void>,
  'path' | 'verb'
>;

export const useNotificationTemplateDelete = (props: UseNotificationTemplateDeleteProps) =>
  useMutate<void, unknown, NotificationTemplateDeleteQueryParams, GuidEntityDto, void>(
    'POST',
    `/api/services/app/NotificationTemplate/Delete`,
    props
  );

export interface NotificationTemplateUpdateQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type NotificationTemplateUpdateProps = Omit<
  MutateProps<
    NotificationTemplateDtoAjaxResponse,
    AjaxResponseBase,
    NotificationTemplateUpdateQueryParams,
    NotificationTemplateDto,
    void
  >,
  'path' | 'verb'
>;

export const NotificationTemplateUpdate = (props: NotificationTemplateUpdateProps) => (
  <Mutate<
    NotificationTemplateDtoAjaxResponse,
    AjaxResponseBase,
    NotificationTemplateUpdateQueryParams,
    NotificationTemplateDto,
    void
  >
    verb="PUT"
    path={`/api/services/app/NotificationTemplate/Update`}
    {...props}
  />
);

export type UseNotificationTemplateUpdateProps = Omit<
  UseMutateProps<
    NotificationTemplateDtoAjaxResponse,
    AjaxResponseBase,
    NotificationTemplateUpdateQueryParams,
    NotificationTemplateDto,
    void
  >,
  'path' | 'verb'
>;

export const useNotificationTemplateUpdate = (props: UseNotificationTemplateUpdateProps) =>
  useMutate<
    NotificationTemplateDtoAjaxResponse,
    AjaxResponseBase,
    NotificationTemplateUpdateQueryParams,
    NotificationTemplateDto,
    void
  >('PUT', `/api/services/app/NotificationTemplate/Update`, props);

export interface NotificationTemplateGetQueryParams {
  id?: string;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type NotificationTemplateGetProps = Omit<
  GetProps<NotificationTemplateDtoAjaxResponse, AjaxResponseBase, NotificationTemplateGetQueryParams, void>,
  'path'
>;

export const NotificationTemplateGet = (props: NotificationTemplateGetProps) => (
  <Get<NotificationTemplateDtoAjaxResponse, AjaxResponseBase, NotificationTemplateGetQueryParams, void>
    path={`/api/services/app/NotificationTemplate/Get`}
    {...props}
  />
);

export type UseNotificationTemplateGetProps = Omit<
  UseGetProps<NotificationTemplateDtoAjaxResponse, AjaxResponseBase, NotificationTemplateGetQueryParams, void>,
  'path'
>;

export const useNotificationTemplateGet = (props: UseNotificationTemplateGetProps) =>
  useGet<NotificationTemplateDtoAjaxResponse, AjaxResponseBase, NotificationTemplateGetQueryParams, void>(
    `/api/services/app/NotificationTemplate/Get`,
    props
  );

export interface NotificationTemplateGetAllQueryParams {
  sorting?: string | null;
  skipCount?: number;
  maxResultCount?: number;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type NotificationTemplateGetAllProps = Omit<
  GetProps<
    NotificationTemplateDtoPagedResultDtoAjaxResponse,
    AjaxResponseBase,
    NotificationTemplateGetAllQueryParams,
    void
  >,
  'path'
>;

export const NotificationTemplateGetAll = (props: NotificationTemplateGetAllProps) => (
  <Get<NotificationTemplateDtoPagedResultDtoAjaxResponse, AjaxResponseBase, NotificationTemplateGetAllQueryParams, void>
    path={`/api/services/app/NotificationTemplate/GetAll`}
    {...props}
  />
);

export type UseNotificationTemplateGetAllProps = Omit<
  UseGetProps<
    NotificationTemplateDtoPagedResultDtoAjaxResponse,
    AjaxResponseBase,
    NotificationTemplateGetAllQueryParams,
    void
  >,
  'path'
>;

export const useNotificationTemplateGetAll = (props: UseNotificationTemplateGetAllProps) =>
  useGet<
    NotificationTemplateDtoPagedResultDtoAjaxResponse,
    AjaxResponseBase,
    NotificationTemplateGetAllQueryParams,
    void
  >(`/api/services/app/NotificationTemplate/GetAll`, props);

export interface NotificationTemplateCreateQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type NotificationTemplateCreateProps = Omit<
  MutateProps<
    NotificationTemplateDtoAjaxResponse,
    AjaxResponseBase,
    NotificationTemplateCreateQueryParams,
    NotificationTemplateDto,
    void
  >,
  'path' | 'verb'
>;

export const NotificationTemplateCreate = (props: NotificationTemplateCreateProps) => (
  <Mutate<
    NotificationTemplateDtoAjaxResponse,
    AjaxResponseBase,
    NotificationTemplateCreateQueryParams,
    NotificationTemplateDto,
    void
  >
    verb="POST"
    path={`/api/services/app/NotificationTemplate/Create`}
    {...props}
  />
);

export type UseNotificationTemplateCreateProps = Omit<
  UseMutateProps<
    NotificationTemplateDtoAjaxResponse,
    AjaxResponseBase,
    NotificationTemplateCreateQueryParams,
    NotificationTemplateDto,
    void
  >,
  'path' | 'verb'
>;

export const useNotificationTemplateCreate = (props: UseNotificationTemplateCreateProps) =>
  useMutate<
    NotificationTemplateDtoAjaxResponse,
    AjaxResponseBase,
    NotificationTemplateCreateQueryParams,
    NotificationTemplateDto,
    void
  >('POST', `/api/services/app/NotificationTemplate/Create`, props);
