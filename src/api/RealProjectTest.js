import request from '@/utils/request'

export function getTestList(params) {
  return request({
    url: '/vue-admin-template/list/list',
    method: 'get',
    params
  })
}

export function getFormSeletion(query) {
  return request({
    url: '/vue-admin-template/form/list',
    method: 'get',
    query
  })
}
