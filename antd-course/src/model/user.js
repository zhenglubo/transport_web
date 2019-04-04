import * as userService from '../service/user';

export default {

  namespace: 'users',

  state: {
    userList: [],
  },

  effects: {
    *queryList({ _ }, { call, put }) {
        console.log('11111111111111111');
        const rsp = yield call(userService.queryList);
        console.log('queryList');
        console.log(rsp);
        yield put({ type: 'saveList', payload: { cardsList: rsp.result } });
    },
  },

  reducers: {
    saveList(state, { payload: { userList } }) {
        return {
          ...state,
          userList,
        }
      },
  },
};
