/**
 * Author: Huibin.guan
 * Date: 2018-09-29
 * Time: 23:57
 *
 */

import * as types from './mutation-types'

const matations = {
  [types.SET_STUENT_REQUIREMENT] (state, studentRequirment) {
    state.studentRequirement = studentRequirment
  },
  [types.SET_STUDENT_MESSAGE_DETAIL] (state, studentMessageDetail) {
    state.studentMessageDetail = studentMessageDetail
  },
  [types.SET_SEARCH_HISTORY] (state, history) {
    state.searchHistory = history
  },
  [types.SET_TEACH_ADDRESS_LAT_LNG] (state, latlng) {
    state.teachAddressLatLng = latlng
  },
  [types.SET_ORG_LINE_COURSE] (state, orgLineCourse) {
    state.orgLineCourse = orgLineCourse
  },
  [types.SET_ORG_GIFT_LIST] (state, orgGiftList) {
    state.orgGiftList = orgGiftList
  },
  [types.SET_ORG_TEACHER] (state, orgTeacher) {
    state.orgTeacher = orgTeacher
  },
  [types.SET_AGREED_DETAIL] (state, agreedDetail) {
    state.agreedDetail = agreedDetail
  }
}

export default matations
