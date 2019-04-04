import * as orderService from '../service/order'


export default{
    namespace:'order',

    state:{
      
      data:[],
      paganation:{
        current:1,
        pageSize:10,
        total:0
      }
      
    },


    effects: {
        *queryList({payload}, { call, put }) {
            const rsp = yield call(orderService.search,payload);
            console.log(rsp.data);
            debugger;

            yield put({ type: 'saveList', payload: rsp.data});
        },
        *updateOrder({payload}){
          console.log("===============")
          //console.log(payload);
          debugger;
        }
      },
    
      reducers: {
        saveList(state, { payload: rsp }) {
            return {
              ...state,
              data:rsp.records,
              paganation:this.state({paganation:{current:rsp.current,pageSize:rsp.size,total:rsp.total}}),
            }
          },
      },

}