/* Generated by restful-react */

import React from 'react';
import { Get, GetProps, useGet, UseGetProps, Mutate, MutateProps, useMutate, UseMutateProps } from 'restful-react';

import * as RestfulShesha from '../utils/fetchers';
export const SPEC_VERSION = 'v1';
export interface AjaxResponseBase {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
}

export interface BooleanAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: boolean;
}

export interface ErrorInfo {
  code?: number;
  message?: string | null;
  details?: string | null;
  validationErrors?: ValidationErrorInfo[] | null;
}

export interface FileStreamResultAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: string | null;
}

export interface StoredFileDto {
  error?: string | null;
  id?: string | null;
  name?: string | null;
  fileCategory?: string | null;
  url?: string | null;
  size?: number;
  type?: string | null;
  temporary?: boolean;
}

export interface StoredFileDtoAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: StoredFileDto;
}

export interface StoredFileDtoListAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: StoredFileDto[] | null;
}

/**
 * Stored File version info
 */
export interface StoredFileVersionInfoDto {
  id?: string;
  /**
   * Date of the upload
   */
  dateUploaded?: string | null;
  /**
   * File size
   */
  size?: number | null;
  /**
   * User uploaded this version
   */
  uploadedBy?: string | null;
  /**
   * File name
   */
  fileName?: string | null;
  /**
   * Version number
   */
  versionNo?: number;
  /**
   * Url for version downloading
   */
  url?: string | null;
}

export interface StoredFileVersionInfoDtoListAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: StoredFileVersionInfoDto[] | null;
}

export interface ValidationErrorInfo {
  message?: string | null;
  members?: string[] | null;
}

export interface StoredFileDownloadQueryParams {
  id?: string;
  versionNo?: number;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type StoredFileDownloadProps = Omit<
  GetProps<FileStreamResultAjaxResponse, AjaxResponseBase, StoredFileDownloadQueryParams, void>,
  'path'
>;

export const StoredFileDownload = (props: StoredFileDownloadProps) => (
  <Get<FileStreamResultAjaxResponse, AjaxResponseBase, StoredFileDownloadQueryParams, void>
    path={`/api/StoredFile/Download`}
    {...props}
  />
);

export type UseStoredFileDownloadProps = Omit<
  UseGetProps<FileStreamResultAjaxResponse, AjaxResponseBase, StoredFileDownloadQueryParams, void>,
  'path'
>;

export const useStoredFileDownload = (props: UseStoredFileDownloadProps) =>
  useGet<FileStreamResultAjaxResponse, AjaxResponseBase, StoredFileDownloadQueryParams, void>(
    `/api/StoredFile/Download`,
    props
  );

export type storedFileDownloadProps = Omit<
  RestfulShesha.GetProps<FileStreamResultAjaxResponse, AjaxResponseBase, StoredFileDownloadQueryParams, void>,
  'queryParams'
>;
export const storedFileDownload = (queryParams: StoredFileDownloadQueryParams, props: storedFileDownloadProps) =>
  RestfulShesha.get<FileStreamResultAjaxResponse, AjaxResponseBase, StoredFileDownloadQueryParams, void>(
    `/api/StoredFile/Download`,
    queryParams,
    props
  );

export interface StoredFileUploadQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type StoredFileUploadProps = Omit<
  MutateProps<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileUploadQueryParams, void, void>,
  'path' | 'verb'
>;

export const StoredFileUpload = (props: StoredFileUploadProps) => (
  <Mutate<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileUploadQueryParams, void, void>
    verb="POST"
    path={`/api/StoredFile/Upload`}
    {...props}
  />
);

export type UseStoredFileUploadProps = Omit<
  UseMutateProps<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileUploadQueryParams, void, void>,
  'path' | 'verb'
>;

export const useStoredFileUpload = (props: UseStoredFileUploadProps) =>
  useMutate<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileUploadQueryParams, void, void>(
    'POST',
    `/api/StoredFile/Upload`,
    props
  );

export type storedFileUploadProps = Omit<
  RestfulShesha.MutateProps<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileUploadQueryParams, void, void>,
  'data'
>;
export const storedFileUpload = (props: storedFileUploadProps) =>
  RestfulShesha.mutate<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileUploadQueryParams, void, void>(
    'POST',
    `/api/StoredFile/Upload`,
    undefined,
    props
  );

export interface StoredFileUploadStaticQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type StoredFileUploadStaticProps = Omit<
  MutateProps<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileUploadStaticQueryParams, void, void>,
  'path' | 'verb'
>;

export const StoredFileUploadStatic = (props: StoredFileUploadStaticProps) => (
  <Mutate<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileUploadStaticQueryParams, void, void>
    verb="POST"
    path={`/api/StoredFile/UploadStatic`}
    {...props}
  />
);

export type UseStoredFileUploadStaticProps = Omit<
  UseMutateProps<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileUploadStaticQueryParams, void, void>,
  'path' | 'verb'
>;

export const useStoredFileUploadStatic = (props: UseStoredFileUploadStaticProps) =>
  useMutate<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileUploadStaticQueryParams, void, void>(
    'POST',
    `/api/StoredFile/UploadStatic`,
    props
  );

export type storedFileUploadStaticProps = Omit<
  RestfulShesha.MutateProps<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileUploadStaticQueryParams, void, void>,
  'data'
>;
export const storedFileUploadStatic = (props: storedFileUploadStaticProps) =>
  RestfulShesha.mutate<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileUploadStaticQueryParams, void, void>(
    'POST',
    `/api/StoredFile/UploadStatic`,
    undefined,
    props
  );

export interface StoredFileUploadNewVersionQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type StoredFileUploadNewVersionProps = Omit<
  MutateProps<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileUploadNewVersionQueryParams, void, void>,
  'path' | 'verb'
>;

export const StoredFileUploadNewVersion = (props: StoredFileUploadNewVersionProps) => (
  <Mutate<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileUploadNewVersionQueryParams, void, void>
    verb="POST"
    path={`/api/StoredFile/UploadNewVersion`}
    {...props}
  />
);

export type UseStoredFileUploadNewVersionProps = Omit<
  UseMutateProps<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileUploadNewVersionQueryParams, void, void>,
  'path' | 'verb'
>;

export const useStoredFileUploadNewVersion = (props: UseStoredFileUploadNewVersionProps) =>
  useMutate<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileUploadNewVersionQueryParams, void, void>(
    'POST',
    `/api/StoredFile/UploadNewVersion`,
    props
  );

export type storedFileUploadNewVersionProps = Omit<
  RestfulShesha.MutateProps<
    StoredFileDtoAjaxResponse,
    AjaxResponseBase,
    StoredFileUploadNewVersionQueryParams,
    void,
    void
  >,
  'data'
>;
export const storedFileUploadNewVersion = (props: storedFileUploadNewVersionProps) =>
  RestfulShesha.mutate<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileUploadNewVersionQueryParams, void, void>(
    'POST',
    `/api/StoredFile/UploadNewVersion`,
    undefined,
    props
  );

export interface StoredFileDeleteQueryParams {
  /**
   * File Id
   */
  fileId: string;
  /**
   * Id of the owner entity
   */
  ownerId?: string;
  /**
   * Type short alias of the owner entity
   */
  ownerType?: string;
  /**
   * Property name of the owner entity. Is used for direct links only (when owner references file using foreign key)
   */
  propertyName?: string;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type StoredFileDeleteProps = Omit<
  MutateProps<BooleanAjaxResponse, AjaxResponseBase, StoredFileDeleteQueryParams, void, void>,
  'path' | 'verb'
>;

/**
 * Delete file
 */
export const StoredFileDelete = (props: StoredFileDeleteProps) => (
  <Mutate<BooleanAjaxResponse, AjaxResponseBase, StoredFileDeleteQueryParams, void, void>
    verb="DELETE"
    path={`/api/StoredFile/Delete`}
    {...props}
  />
);

export type UseStoredFileDeleteProps = Omit<
  UseMutateProps<BooleanAjaxResponse, AjaxResponseBase, StoredFileDeleteQueryParams, void, void>,
  'path' | 'verb'
>;

/**
 * Delete file
 */
export const useStoredFileDelete = (props: UseStoredFileDeleteProps) =>
  useMutate<BooleanAjaxResponse, AjaxResponseBase, StoredFileDeleteQueryParams, void, void>(
    'DELETE',
    `/api/StoredFile/Delete`,
    { ...props }
  );

export type storedFileDeleteProps = Omit<
  RestfulShesha.MutateProps<BooleanAjaxResponse, AjaxResponseBase, StoredFileDeleteQueryParams, void, void>,
  'data'
>;
/**
 * Delete file
 */
export const storedFileDelete = (props: storedFileDeleteProps) =>
  RestfulShesha.mutate<BooleanAjaxResponse, AjaxResponseBase, StoredFileDeleteQueryParams, void, void>(
    'DELETE',
    `/api/StoredFile/Delete`,
    undefined,
    props
  );

export interface StoredFileDownloadZipQueryParams {
  /**
   * Set to true to get files of all categories
   */
  allCategories?: boolean;
  /**
   * Id of the owner entity
   */
  ownerId: string;
  /**
   * Type short alias of the owner entity
   */
  ownerType: string;
  /**
   * Category of the file. Is used to split attachments into groups
   */
  filesCategory?: string;
  /**
   * Property name of the owner entity. Is used for direct links only (when owner references file using foreign key)
   */
  propertyName?: string;
  /**
   * Property name of the owner entity. Is used for assign file to the nested entities
   */
  ownerName?: string;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type StoredFileDownloadZipProps = Omit<
  GetProps<FileStreamResultAjaxResponse, AjaxResponseBase, StoredFileDownloadZipQueryParams, void>,
  'path'
>;

/**
 * Download zip archive of all files linked to a specified entity
 */
export const StoredFileDownloadZip = (props: StoredFileDownloadZipProps) => (
  <Get<FileStreamResultAjaxResponse, AjaxResponseBase, StoredFileDownloadZipQueryParams, void>
    path={`/api/StoredFile/DownloadZip`}
    {...props}
  />
);

export type UseStoredFileDownloadZipProps = Omit<
  UseGetProps<FileStreamResultAjaxResponse, AjaxResponseBase, StoredFileDownloadZipQueryParams, void>,
  'path'
>;

/**
 * Download zip archive of all files linked to a specified entity
 */
export const useStoredFileDownloadZip = (props: UseStoredFileDownloadZipProps) =>
  useGet<FileStreamResultAjaxResponse, AjaxResponseBase, StoredFileDownloadZipQueryParams, void>(
    `/api/StoredFile/DownloadZip`,
    props
  );

export type storedFileDownloadZipProps = Omit<
  RestfulShesha.GetProps<FileStreamResultAjaxResponse, AjaxResponseBase, StoredFileDownloadZipQueryParams, void>,
  'queryParams'
>;
/**
 * Download zip archive of all files linked to a specified entity
 */
export const storedFileDownloadZip = (
  queryParams: StoredFileDownloadZipQueryParams,
  props: storedFileDownloadZipProps
) =>
  RestfulShesha.get<FileStreamResultAjaxResponse, AjaxResponseBase, StoredFileDownloadZipQueryParams, void>(
    `/api/StoredFile/DownloadZip`,
    queryParams,
    props
  );

export interface StoredFileFilesListQueryParams {
  /**
   * Id of the owner entity
   */
  ownerId: string;
  /**
   * Type short alias of the owner entity
   */
  ownerType: string;
  /**
   * Category of the file. Is used to split attachments into groups
   */
  filesCategory?: string;
  /**
   * Property name of the owner entity. Is used for direct links only (when owner references file using foreign key)
   */
  propertyName?: string;
  /**
   * Property name of the owner entity. Is used for assign file to the nested entities
   */
  ownerName?: string;
  /**
   * Set to true to get files of all categories
   */
  allCategories?: boolean;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type StoredFileFilesListProps = Omit<
  GetProps<StoredFileDtoListAjaxResponse, AjaxResponseBase, StoredFileFilesListQueryParams, void>,
  'path'
>;

/**
 * Get list of files attached to a specified entity
 */
export const StoredFileFilesList = (props: StoredFileFilesListProps) => (
  <Get<StoredFileDtoListAjaxResponse, AjaxResponseBase, StoredFileFilesListQueryParams, void>
    path={`/api/StoredFile/FilesList`}
    {...props}
  />
);

export type UseStoredFileFilesListProps = Omit<
  UseGetProps<StoredFileDtoListAjaxResponse, AjaxResponseBase, StoredFileFilesListQueryParams, void>,
  'path'
>;

/**
 * Get list of files attached to a specified entity
 */
export const useStoredFileFilesList = (props: UseStoredFileFilesListProps) =>
  useGet<StoredFileDtoListAjaxResponse, AjaxResponseBase, StoredFileFilesListQueryParams, void>(
    `/api/StoredFile/FilesList`,
    props
  );

export type storedFileFilesListProps = Omit<
  RestfulShesha.GetProps<StoredFileDtoListAjaxResponse, AjaxResponseBase, StoredFileFilesListQueryParams, void>,
  'queryParams'
>;
/**
 * Get list of files attached to a specified entity
 */
export const storedFileFilesList = (queryParams: StoredFileFilesListQueryParams, props: storedFileFilesListProps) =>
  RestfulShesha.get<StoredFileDtoListAjaxResponse, AjaxResponseBase, StoredFileFilesListQueryParams, void>(
    `/api/StoredFile/FilesList`,
    queryParams,
    props
  );

export interface StoredFileCreateOrUpdateQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type StoredFileCreateOrUpdateProps = Omit<
  MutateProps<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileCreateOrUpdateQueryParams, void, void>,
  'path' | 'verb'
>;

/**
 * Update existing file
 */
export const StoredFileCreateOrUpdate = (props: StoredFileCreateOrUpdateProps) => (
  <Mutate<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileCreateOrUpdateQueryParams, void, void>
    verb="PUT"
    path={`/api/StoredFile`}
    {...props}
  />
);

export type UseStoredFileCreateOrUpdateProps = Omit<
  UseMutateProps<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileCreateOrUpdateQueryParams, void, void>,
  'path' | 'verb'
>;

/**
 * Update existing file
 */
export const useStoredFileCreateOrUpdate = (props: UseStoredFileCreateOrUpdateProps) =>
  useMutate<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileCreateOrUpdateQueryParams, void, void>(
    'PUT',
    `/api/StoredFile`,
    props
  );

export type storedFileCreateOrUpdateProps = Omit<
  RestfulShesha.MutateProps<
    StoredFileDtoAjaxResponse,
    AjaxResponseBase,
    StoredFileCreateOrUpdateQueryParams,
    void,
    void
  >,
  'data'
>;
/**
 * Update existing file
 */
export const storedFileCreateOrUpdate = (props: storedFileCreateOrUpdateProps) =>
  RestfulShesha.mutate<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileCreateOrUpdateQueryParams, void, void>(
    'PUT',
    `/api/StoredFile`,
    undefined,
    props
  );

export interface StoredFileGetQueryParams {
  id?: string;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type StoredFileGetProps = Omit<
  GetProps<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileGetQueryParams, void>,
  'path'
>;

/**
 * Get file by id
 */
export const StoredFileGet = (props: StoredFileGetProps) => (
  <Get<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileGetQueryParams, void>
    path={`/api/StoredFile`}
    {...props}
  />
);

export type UseStoredFileGetProps = Omit<
  UseGetProps<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileGetQueryParams, void>,
  'path'
>;

/**
 * Get file by id
 */
export const useStoredFileGet = (props: UseStoredFileGetProps) =>
  useGet<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileGetQueryParams, void>(`/api/StoredFile`, props);

export type storedFileGetProps = Omit<
  RestfulShesha.GetProps<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileGetQueryParams, void>,
  'queryParams'
>;
/**
 * Get file by id
 */
export const storedFileGet = (queryParams: StoredFileGetQueryParams, props: storedFileGetProps) =>
  RestfulShesha.get<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileGetQueryParams, void>(
    `/api/StoredFile`,
    queryParams,
    props
  );

export interface StoredFileDeleteFileQueryParams {
  id?: string;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type StoredFileDeleteFileProps = Omit<
  MutateProps<BooleanAjaxResponse, AjaxResponseBase, StoredFileDeleteFileQueryParams, void, void>,
  'path' | 'verb'
>;

/**
 * Delete file
 */
export const StoredFileDeleteFile = (props: StoredFileDeleteFileProps) => (
  <Mutate<BooleanAjaxResponse, AjaxResponseBase, StoredFileDeleteFileQueryParams, void, void>
    verb="DELETE"
    path={`/api/StoredFile`}
    {...props}
  />
);

export type UseStoredFileDeleteFileProps = Omit<
  UseMutateProps<BooleanAjaxResponse, AjaxResponseBase, StoredFileDeleteFileQueryParams, void, void>,
  'path' | 'verb'
>;

/**
 * Delete file
 */
export const useStoredFileDeleteFile = (props: UseStoredFileDeleteFileProps) =>
  useMutate<BooleanAjaxResponse, AjaxResponseBase, StoredFileDeleteFileQueryParams, void, void>(
    'DELETE',
    `/api/StoredFile`,
    { ...props }
  );

export type storedFileDeleteFileProps = Omit<
  RestfulShesha.MutateProps<BooleanAjaxResponse, AjaxResponseBase, StoredFileDeleteFileQueryParams, void, void>,
  'data'
>;
/**
 * Delete file
 */
export const storedFileDeleteFile = (props: storedFileDeleteFileProps) =>
  RestfulShesha.mutate<BooleanAjaxResponse, AjaxResponseBase, StoredFileDeleteFileQueryParams, void, void>(
    'DELETE',
    `/api/StoredFile`,
    undefined,
    props
  );

export interface StoredFileGetEntityPropertyQueryParams {
  /**
   * Property name of the owner entity. Is used for direct links only (when owner references file using foreign key)
   */
  propertyName?: string;
  /**
   * Id of the owner entity
   */
  ownerId: string;
  /**
   * Type short alias of the owner entity
   */
  ownerType: string;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type StoredFileGetEntityPropertyProps = Omit<
  GetProps<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileGetEntityPropertyQueryParams, void>,
  'path'
>;

/**
 * Get file as property of the entity
 */
export const StoredFileGetEntityProperty = (props: StoredFileGetEntityPropertyProps) => (
  <Get<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileGetEntityPropertyQueryParams, void>
    path={`/api/StoredFile/EntityProperty`}
    {...props}
  />
);

export type UseStoredFileGetEntityPropertyProps = Omit<
  UseGetProps<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileGetEntityPropertyQueryParams, void>,
  'path'
>;

/**
 * Get file as property of the entity
 */
export const useStoredFileGetEntityProperty = (props: UseStoredFileGetEntityPropertyProps) =>
  useGet<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileGetEntityPropertyQueryParams, void>(
    `/api/StoredFile/EntityProperty`,
    props
  );

export type storedFileGetEntityPropertyProps = Omit<
  RestfulShesha.GetProps<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileGetEntityPropertyQueryParams, void>,
  'queryParams'
>;
/**
 * Get file as property of the entity
 */
export const storedFileGetEntityProperty = (
  queryParams: StoredFileGetEntityPropertyQueryParams,
  props: storedFileGetEntityPropertyProps
) =>
  RestfulShesha.get<StoredFileDtoAjaxResponse, AjaxResponseBase, StoredFileGetEntityPropertyQueryParams, void>(
    `/api/StoredFile/EntityProperty`,
    queryParams,
    props
  );

export interface StoredFileGetFileVersionsQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export interface StoredFileGetFileVersionsPathParams {
  /**
   * Id of the file
   */
  fileId: string;
}

export type StoredFileGetFileVersionsProps = Omit<
  GetProps<
    StoredFileVersionInfoDtoListAjaxResponse,
    AjaxResponseBase,
    StoredFileGetFileVersionsQueryParams,
    StoredFileGetFileVersionsPathParams
  >,
  'path'
> &
  StoredFileGetFileVersionsPathParams;

/**
 * Get versions of the file with specified Id
 */
export const StoredFileGetFileVersions = ({ fileId, ...props }: StoredFileGetFileVersionsProps) => (
  <Get<
    StoredFileVersionInfoDtoListAjaxResponse,
    AjaxResponseBase,
    StoredFileGetFileVersionsQueryParams,
    StoredFileGetFileVersionsPathParams
  >
    path={`/api/StoredFile/StoredFile/${fileId}/Versions`}
    {...props}
  />
);

export type UseStoredFileGetFileVersionsProps = Omit<
  UseGetProps<
    StoredFileVersionInfoDtoListAjaxResponse,
    AjaxResponseBase,
    StoredFileGetFileVersionsQueryParams,
    StoredFileGetFileVersionsPathParams
  >,
  'path'
> &
  StoredFileGetFileVersionsPathParams;

/**
 * Get versions of the file with specified Id
 */
export const useStoredFileGetFileVersions = ({ fileId, ...props }: UseStoredFileGetFileVersionsProps) =>
  useGet<
    StoredFileVersionInfoDtoListAjaxResponse,
    AjaxResponseBase,
    StoredFileGetFileVersionsQueryParams,
    StoredFileGetFileVersionsPathParams
  >(
    (paramsInPath: StoredFileGetFileVersionsPathParams) => `/api/StoredFile/StoredFile/${paramsInPath.fileId}/Versions`,
    { pathParams: { fileId }, ...props }
  );

export type storedFileGetFileVersionsProps = Omit<
  RestfulShesha.GetProps<
    StoredFileVersionInfoDtoListAjaxResponse,
    AjaxResponseBase,
    StoredFileGetFileVersionsQueryParams,
    StoredFileGetFileVersionsPathParams
  > & {
    /**
     * Id of the file
     */
    fileId: string;
  },
  'queryParams'
>;
/**
 * Get versions of the file with specified Id
 */
export const storedFileGetFileVersions = (
  queryParams: StoredFileGetFileVersionsQueryParams,
  { fileId, ...props }: storedFileGetFileVersionsProps
) =>
  RestfulShesha.get<
    StoredFileVersionInfoDtoListAjaxResponse,
    AjaxResponseBase,
    StoredFileGetFileVersionsQueryParams,
    StoredFileGetFileVersionsPathParams
  >(`/api/StoredFile/StoredFile/${fileId}/Versions`, queryParams, props);
