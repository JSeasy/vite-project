import type { FormInstance } from 'element-plus';

export interface IFormData {
  communityName: string;
  floor: number;
  address: string;
  compleYear: string;
}
export interface IModalFormInstance {
  form: FormInstance;
  data: IFormData;
}

export interface IUser {
  id: number;
  userName: string;
  age: number;
  city: string;
  school: string;
}

export interface IHouse {
  communityName: string;
  floor: number;
  address: string;
  compleYear: string;
  userId: number | string;
}

export interface IHouseTableRow extends IHouse {
  id: number;
  user: IUser;
}
