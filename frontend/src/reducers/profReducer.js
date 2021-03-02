import React from 'react'
import * as actionTypes from '../constants/profConstants'
export const profDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.PROF_LIST_REQUEST:
      return { loading: true }
    case actionTypes.PROF_LIST_SUCCESS:
      return { loading: false, success: true, profs: action.payload }
    case actionTypes.PROF_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
