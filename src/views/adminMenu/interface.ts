export interface ICreateMenuForm {
  parentId: number | string;
  pathName: string;
  componentName: string;
  menuName: string;
  iconName: string;
}

export interface IQueryMenuCondition {
  current?: number;
  pageSize?: number;
  menuName?: string;
  iconName?: string;
  createDateBefore?: string;
  createDateAfter?: string;
}

export interface IMenuTableRow extends ICreateMenuForm {
  id: number;
  updateDate: Date;
  createdDate: Date;
}

function a() {
  return new Promise((reolve, reject) => {
    reolve(1);
  });
}
export interface ICreateMenuFormTree extends IMenuTableRow {
  children: ICreateMenuFormTree[];
}

// const PENDING = "pending";
// const FULFILLED = "fulfilled";
// const REJECTED = "rejected";
// class MyPromise {
//   constructor(executor: any) {
//     try {
//       executor(this.resolve, this.reject);
//     } catch (error) {
//       this.reject(error);
//     }
//   }
//   status = PENDING;
//   value = undefined;
//   successCallback: any = [];
//   failCallback: any = [];
//   reason = undefined;

//   reject(reson: any) {
//     if (this.status !== PENDING) return;
//     this.status = REJECTED;
//     this.reason = reson;
//     while (this.failCallback.length) {
//       this.failCallback.shift()();
//     }
//   }
//   resolve(value: any) {
//     if (this.status !== PENDING) return;
//     this.status = FULFILLED;
//     this.value = value;
//     while (this.successCallback.length) {
//       this.successCallback.shift()();
//     }
//   }
//   then(successCallback: any, failCallback: any) {
//     successCallback ? successCallback : (value: any) => value;
//     failCallback = failCallback
//       ? failCallback
//       : (reason: any) => {
//           throw reason;
//         };

//     const promise2 = new MyPromise((resolve, reject) => {
//       if (this.status === FULFILLED) {

//       }
//     });
//   }
// }
