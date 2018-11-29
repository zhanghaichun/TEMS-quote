/**
 * Author: Huibin.guan
 * Date: 2018-09-29
 * Time: 23:57
 *
 */

import * as types from './mutation-types'
import {saveSearch, deleteSearch, clearSearch} from '../utils/cache'

export const saveSearchHistory = function ({commit}, query) {
  commit(types.SET_SEARCH_HISTORY, saveSearch(query))
}

export const deleteSearchHistory = function ({commit}, query) {
  commit(types.SET_SEARCH_HISTORY, deleteSearch(query))
}

export const clearSearchHistory = function ({commit}) {
  commit(types.SET_SEARCH_HISTORY, clearSearch())
}
