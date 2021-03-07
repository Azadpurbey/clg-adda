import React from 'react'
import * as actionTypes from '../constants/profConstants'

export const profListReducer = (state = {}, action) => {
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

export const profDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.PROF_DETAIL_REQUEST:
      return { loading: true }
    case actionTypes.PROF_DETAIL_SUCCESS:
      return { loading: false, success: true, prof: action.payload }
    case actionTypes.PROF_DETAIL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const profCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.PROF_CREATE_REQUEST:
      return { loading: true }
    case actionTypes.PROF_CREATE_SUCCESS:
      return { loading: false, success: true, prof: action.payload }
    case actionTypes.PROF_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case actionTypes.PROF_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const profDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.PROF_DELETE_REQUEST:
      return { loading: true }
    case actionTypes.PROF_DELETE_SUCCESS:
      return { loading: false, success: true }
    case actionTypes.PROF_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const profUpdateReducer = (state = { prof: {} }, action) => {
  switch (action.type) {
    case actionTypes.PROF_UPDATE_REQUEST:
      return { loading: true }
    case actionTypes.PROF_UPDATE_SUCCESS:
      return { loading: false, success: true, prof: action.payload }
    case actionTypes.PROF_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case actionTypes.PROF_UPDATE_RESET:
      return { prof: {} }
    default:
      return state
  }
}
