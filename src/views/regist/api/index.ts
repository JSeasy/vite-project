import type { IResponse } from '../../../interfaces';
import request from '../../../request';
import type { ICreateUserForm } from '../interface';

export const registApi = <T extends ICreateUserForm>(data: T) =>
  request<T, IResponse<null>>({
    method: 'POST',
    url: '/api/user/regist',
    data,
  });
