import request from '../util/request';

export function queryList() {
  return request('localhost:8080/user/listSearch',{method:'post'});
}



