import request from '../utils/request';

export function getProductLists(params) {
  return request({
    url: `/product/lists`,
    method: 'get',
    // params
  })
}