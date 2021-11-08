const userList = require('./list')
const formSelect = require('./form')

module.exports = [
  {
    url: '/vue-admin-template/list/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: userList.length,
          items: userList
        }
      }
    }
  },
  {
    url: '/vue-admin-template/form/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: formSelect.length,
          items: formSelect
        }
      }
    }
  }
]
