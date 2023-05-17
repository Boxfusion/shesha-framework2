/* Generated by restful-react */

import React from 'react';
import { Get, GetProps, useGet, UseGetProps, Mutate, MutateProps, useMutate, UseMutateProps } from 'restful-react';
export const SPEC_VERSION = 'v1';
export interface GuidNullableEntityWithDisplayNameDto {
  id?: string | null;
  displayText?: string | null;
}

export interface ReferenceListItemDto {
  id?: string;
  item?: string | null;
  itemValue?: number;
  description?: string | null;
  orderIndex?: number;
  referenceList?: GuidNullableEntityWithDisplayNameDto;
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

export interface ReferenceListItemDtoAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: ReferenceListItemDto;
}

export interface AjaxResponseBase {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
}

export interface ReferenceListItemDtoPagedResultDto {
  items?: ReferenceListItemDto[] | null;
  totalCount?: number;
}

export interface ReferenceListItemDtoPagedResultDtoAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: ReferenceListItemDtoPagedResultDto;
}

export interface ReferenceListItemGetQueryParams {
  id?: string;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type ReferenceListItemGetProps = Omit<
  GetProps<ReferenceListItemDtoAjaxResponse, AjaxResponseBase, ReferenceListItemGetQueryParams, void>,
  'path'
>;

export const ReferenceListItemGet = (props: ReferenceListItemGetProps) => (
  <Get<ReferenceListItemDtoAjaxResponse, AjaxResponseBase, ReferenceListItemGetQueryParams, void>
    path={`/api/services/app/ReferenceListItem/Get`}
    {...props}
  />
);

export type UseReferenceListItemGetProps = Omit<
  UseGetProps<ReferenceListItemDtoAjaxResponse, AjaxResponseBase, ReferenceListItemGetQueryParams, void>,
  'path'
>;

export const useReferenceListItemGet = (props: UseReferenceListItemGetProps) =>
  useGet<ReferenceListItemDtoAjaxResponse, AjaxResponseBase, ReferenceListItemGetQueryParams, void>(
    `/api/services/app/ReferenceListItem/Get`,
    props
  );

export interface ReferenceListItemGetAllQueryParams {
  sorting?: string | null;
  skipCount?: number;
  maxResultCount?: number;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type ReferenceListItemGetAllProps = Omit<
  GetProps<ReferenceListItemDtoPagedResultDtoAjaxResponse, AjaxResponseBase, ReferenceListItemGetAllQueryParams, void>,
  'path'
>;

export const ReferenceListItemGetAll = (props: ReferenceListItemGetAllProps) => (
  <Get<ReferenceListItemDtoPagedResultDtoAjaxResponse, AjaxResponseBase, ReferenceListItemGetAllQueryParams, void>
    path={`/api/services/app/ReferenceListItem/GetAll`}
    {...props}
  />
);

export type UseReferenceListItemGetAllProps = Omit<
  UseGetProps<
    ReferenceListItemDtoPagedResultDtoAjaxResponse,
    AjaxResponseBase,
    ReferenceListItemGetAllQueryParams,
    void
  >,
  'path'
>;

export const useReferenceListItemGetAll = (props: UseReferenceListItemGetAllProps) =>
  useGet<ReferenceListItemDtoPagedResultDtoAjaxResponse, AjaxResponseBase, ReferenceListItemGetAllQueryParams, void>(
    `/api/services/app/ReferenceListItem/GetAll`,
    props
  );

export interface ReferenceListItemCreateQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type ReferenceListItemCreateProps = Omit<
  MutateProps<
    ReferenceListItemDtoAjaxResponse,
    AjaxResponseBase,
    ReferenceListItemCreateQueryParams,
    ReferenceListItemDto,
    void
  >,
  'path' | 'verb'
>;

export const ReferenceListItemCreate = (props: ReferenceListItemCreateProps) => (
  <Mutate<
    ReferenceListItemDtoAjaxResponse,
    AjaxResponseBase,
    ReferenceListItemCreateQueryParams,
    ReferenceListItemDto,
    void
  >
    verb="POST"
    path={`/api/services/app/ReferenceListItem/Create`}
    {...props}
  />
);

export type UseReferenceListItemCreateProps = Omit<
  UseMutateProps<
    ReferenceListItemDtoAjaxResponse,
    AjaxResponseBase,
    ReferenceListItemCreateQueryParams,
    ReferenceListItemDto,
    void
  >,
  'path' | 'verb'
>;

export const useReferenceListItemCreate = (props: UseReferenceListItemCreateProps) =>
  useMutate<
    ReferenceListItemDtoAjaxResponse,
    AjaxResponseBase,
    ReferenceListItemCreateQueryParams,
    ReferenceListItemDto,
    void
  >('POST', `/api/services/app/ReferenceListItem/Create`, props);

export interface ReferenceListItemUpdateQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type ReferenceListItemUpdateProps = Omit<
  MutateProps<
    ReferenceListItemDtoAjaxResponse,
    AjaxResponseBase,
    ReferenceListItemUpdateQueryParams,
    ReferenceListItemDto,
    void
  >,
  'path' | 'verb'
>;

export const ReferenceListItemUpdate = (props: ReferenceListItemUpdateProps) => (
  <Mutate<
    ReferenceListItemDtoAjaxResponse,
    AjaxResponseBase,
    ReferenceListItemUpdateQueryParams,
    ReferenceListItemDto,
    void
  >
    verb="PUT"
    path={`/api/services/app/ReferenceListItem/Update`}
    {...props}
  />
);

export type UseReferenceListItemUpdateProps = Omit<
  UseMutateProps<
    ReferenceListItemDtoAjaxResponse,
    AjaxResponseBase,
    ReferenceListItemUpdateQueryParams,
    ReferenceListItemDto,
    void
  >,
  'path' | 'verb'
>;

export const useReferenceListItemUpdate = (props: UseReferenceListItemUpdateProps) =>
  useMutate<
    ReferenceListItemDtoAjaxResponse,
    AjaxResponseBase,
    ReferenceListItemUpdateQueryParams,
    ReferenceListItemDto,
    void
  >('PUT', `/api/services/app/ReferenceListItem/Update`, props);

export interface ReferenceListItemDeleteQueryParams {
  id?: string;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type ReferenceListItemDeleteProps = Omit<
  MutateProps<void, unknown, ReferenceListItemDeleteQueryParams, void, void>,
  'path' | 'verb'
>;

export const ReferenceListItemDelete = (props: ReferenceListItemDeleteProps) => (
  <Mutate<void, unknown, ReferenceListItemDeleteQueryParams, void, void>
    verb="DELETE"
    path={`/api/services/app/ReferenceListItem/Delete`}
    {...props}
  />
);

export type UseReferenceListItemDeleteProps = Omit<
  UseMutateProps<void, unknown, ReferenceListItemDeleteQueryParams, void, void>,
  'path' | 'verb'
>;

export const useReferenceListItemDelete = (props: UseReferenceListItemDeleteProps) =>
  useMutate<void, unknown, ReferenceListItemDeleteQueryParams, void, void>(
    'DELETE',
    `/api/services/app/ReferenceListItem/Delete`,
    { ...props }
  );
