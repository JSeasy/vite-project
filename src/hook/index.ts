import { reactive } from 'vue';

const useBatchUpdate = (originState: any) => {
  const target = reactive({ ...originState });
  const setTarget = (newState: any) => {};
  return [target, setTarget];
};

export default useBatchUpdate;
