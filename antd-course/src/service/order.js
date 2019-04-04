import request from '../util/request';

export async function search(params) {
    console.log(params);
    return request('http://localhost:8080/order/listSearch',{
      method:'POST',
      data:{
          ...params,
         method:'post',
      }
    });
}




export async function addRule(params) {
    return request('/api/rule', {
      method: 'POST',
      data: {
        ...params,
        method: 'post',
      },
    });
}
