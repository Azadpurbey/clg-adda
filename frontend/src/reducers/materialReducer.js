import React from 'react'
import * as actionTypes from '../constants/materialConstants'

export const materialListReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.MATERIAL_LIST_REQUEST:
      return { loading: true }
    case actionTypes.MATERIAL_LIST_SUCCESS:
      return { loading: false, success: true, materials: action.payload }
    case actionTypes.MATERIAL_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const materialCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.MATERIAL_CREATE_REQUEST:
      return { loading: true }
    case actionTypes.MATERIAL_CREATE_SUCCESS:
      return { loading: false, success: true, material: action.payload }
    case actionTypes.MATERIAL_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case actionTypes.MATERIAL_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const materialDetailsReducer = (state = { material: {} }, action) => {
  switch (action.type) {
    case actionTypes.MATERIAL_DETAILS_REQUEST:
      return { loading: true, ...state }
    case actionTypes.MATERIAL_DETAILS_SUCCESS:
      return { loading: false, material: action.payload }
    case actionTypes.MATERIAL_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const materialUpdateReducer = (state = { material: {} }, action) => {
  switch (action.type) {
    case actionTypes.MATERIAL_UPDATE_REQUEST:
      return { loading: true }
    case actionTypes.MATERIAL_UPDATE_SUCCESS:
      return { loading: false, success: true, material: action.payload }
    case actionTypes.MATERIAL_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case actionTypes.MATERIAL_UPDATE_RESET:
      return { material: {} }
    default:
      return state
  }
}
