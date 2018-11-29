/**
 * Author: Huibin.guan
 * Date: 2018-09-29
 * Time: 23:57
 *
 */

import {loadSearch} from '../utils/cache'

const state = {
  studentRequirement: {},
  studentMessageDetail: {},
  searchHistory: loadSearch(),
  teachAddressLatLng: {},
  orgLineCourse: {},
  orgGiftList: [],
  orgTeacher: {},
  agreedDetail: {}
}

export default state
