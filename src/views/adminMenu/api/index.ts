import type { IQueryResult, IResponse } from '../../../interfaces';
import request from '../../../request';
import type {
  ICreateMenuForm,
  ICreateMenuFormTree,
  IMenuTableRow,
  IQueryMenuCondition,
} from '../interface';

export const add = <T extends ICreateMenuForm>(data: T) =>
  request<T, IResponse<null>>({
    method: 'POST',
    url: '/api/menu',
    data,
  });

export const list = <T extends IQueryMenuCondition>(params: T) =>
  request<T, IResponse<IQueryResult<IMenuTableRow>>>({
    method: 'GET',
    url: '/api/menu',
    params,
  });

export const getTreeApi = () =>
  request<undefined, IResponse<ICreateMenuFormTree[]>>({
    method: 'GET',
    url: '/api/menu/tree',
  });

export const delApi = (id: number) =>
  request<undefined, IResponse<null>>({
    method: 'DELETE',
    url: `/api/menu/${id}`,
  });
