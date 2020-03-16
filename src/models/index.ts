export default {
    namespace: 'index', // 默认与文件名相同
    state: 'index',
    subscriptions: {
    //   setup({ dispatch, history }) {
    //   },
    },
    reducers: {
      update(state: any) {
        return `${state}_count`;
      },
    },
    effects: {
    //   *fetch({ type, payload }, { put, call, select }) {
    //   },
    },
  }