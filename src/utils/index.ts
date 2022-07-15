const getDataType = (target: object) =>
  Object.prototype.toString.call(target).slice(8, -1);

export function deepClone(target: any) {
  if (target === null || target === undefined) {
    return undefined;
  }
  const datatype = getDataType(target);
  if (datatype === 'object') {
    const copiedTarget: any = {};
    for (const key in target) {
      copiedTarget[key] = deepClone(target[key]);
    }
  }
}

// 清空数据中的为空数据
export const transformData = ({ data, params }: any) => {
  if (data || params) {
    const target = data || params;
    const props = Object.keys(target);
    props.forEach((prop) => {
      if (target[prop] === '') {
        delete target[prop];
      }
    });
  }
};
