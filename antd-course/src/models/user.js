import * as userService from '../service/user';
import { consoleTestResultHandler } from '_tslint@5.12.1@tslint/lib/test';

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
    *updateOrder({payload}){
      console.log("===============")
      //console.log(payload);
      debugger;
    }
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
