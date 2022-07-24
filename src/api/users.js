import request from '@/utils/request'

const getLevelList = (current) => {
  return request({
    url: `/admin/user_level/${current}`,
    method: 'get'
  })
}

export default {
  getLevelList
}
