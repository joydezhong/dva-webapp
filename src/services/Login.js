import request from '../utils/request';

export function login(params) {
  return request({
    url: `/accounts/login`,
    method: 'post',
    params
  })
}