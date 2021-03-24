import {
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  EMAIL_OTP_FAIL,
  EMAIL_OTP_REQUEST,
  EMAIL_OTP_SUCCESS,
} from '../constants/auth'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { laoding: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { laoding: true }
    case USER_REGISTER_SUCCESS:
      return { loading: false, userRegister: true }
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const emailOtpUserReducer = (state = {}, action) => {
  switch (action.type) {
    case EMAIL_OTP_REQUEST:
      return { loading: true }
    case EMAIL_OTP_SUCCESS:
      return { loading: false, success: true }
    case EMAIL_OTP_FAIL:
      return { loading: false, error: action.payload, success: false }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const updateUserProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true }
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true }
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, success: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}
