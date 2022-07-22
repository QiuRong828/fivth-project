import request from '@/utils/request'

const getGoodsList = (current, data) => {
  return request({
    url: `/goods/${current}`,
    method: 'GET',
    data
  })
}

export default {
  getGoodsList
}
