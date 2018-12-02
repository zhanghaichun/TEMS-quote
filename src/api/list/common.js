/**
 * Author: Huibin.guan
 * Date: 2018-08-29
 * Time: 21:33
 *
 */
import api from 'utils/axios'

export const fileUpload = (body) => {
  return api.post('/softwareMall/softwareInfo/queryByConductions', body)
}
