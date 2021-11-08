import request from '@/utils/request'

export function userList(params) {
  return request({
    url: '/vue-admin-template/list/list',
    method: 'get',
    params
  })
}

export function transactionList(query) {
  return request({
    url: '/vue-admin-template/form/list',
    method: 'get',
    query
  })
}
