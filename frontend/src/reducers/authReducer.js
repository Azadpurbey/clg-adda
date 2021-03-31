import * as actionTypes from '../constants/auth'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_REQUEST:
      return { laoding: true }
    case actionTypes.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case actionTypes.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case actionTypes.USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_DETAIL_REQUEST:
      return { laoding: true }
    case actionTypes.USER_DETAIL_SUCCESS:
      return { loading: false, curUser: action.payload }
    case actionTypes.USER_DETAIL_FAIL:
      return { loading: false, error: action.payload }
    case actionTypes.USER_DETAIL_RESET:
      return {}
    default:
      return state
  }
}

export const userTipLinkReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_TIP_LINK_REQUEST:
      return { laoding: true }
    case actionTypes.USER_TIP_LINK_SUCCESS:
      return { loading: false, tipLink: action.payload }
    case actionTypes.USER_TIP_LINK_FAIL:
      return { loading: false, error: action.payload }
    case actionTypes.USER_TIP_LINK_RESET:
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_REGISTER_REQUEST:
      return { laoding: true }
    case actionTypes.USER_REGISTER_SUCCESS:
      return { loading: false, userRegister: true }
    case actionTypes.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    case actionTypes.USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const emailOtpUserReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.EMAIL_OTP_REQUEST:
      return { loading: true }
    case actionTypes.EMAIL_OTP_SUCCESS:
      return { loading: false, success: true }
    case actionTypes.EMAIL_OTP_FAIL:
      return { loading: false, error: action.payload, success: false }
    case actionTypes.USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const updateUserProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_UPDATE_PROFILE_REQUEST:
      return { loading: true }
    case actionTypes.USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true }
    case actionTypes.USER_UPDATE_PROFILE_FAIL:
      return { loading: false, success: false, error: action.payload }
<<<<<<< HEAD
    case actionTypes.USER_UPDATE_PROFILE_RESET:
      return {}
    case actionTypes.USER_LOGOUT:
=======
    case USER_LOGOUT:
    case USER_UPDATE_REFRESH:
>>>>>>> 89a783a84016f7619f51a0bf8cc7193210b56641
      return {}
    default:
      return state
  }
}

export const userListReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_LIST_REQUEST:
      return { loading: true }
    case actionTypes.USER_LIST_SUCCESS:
      return { loading: false, success: true, userLists: action.payload }
    case actionTypes.USER_LIST_FAIL:
      return { loading: false, success: false, error: action.payload }
    default:
      return state
  }
}

export const addFollowUserReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FOLLOW_ADD_REQUEST:
      return { loading: true }
    case actionTypes.FOLLOW_ADD_SUCCESS:
      return { loading: false, success: true, message: action.payload }
    case actionTypes.FOLLOW_ADD_FAIL:
      return { loading: false, success: false, error: action.payload }
    default:
      return state
  }
}

export const addTipReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_TIP_REQUEST:
      return { loading: true }
    case actionTypes.ADD_TIP_SUCCESS:
      return { loading: false, success: true }
    case actionTypes.ADD_TIP_FAIL:
      return { loading: false, error: action.payload }
    case actionTypes.ADD_TIP_RESET:
      return {}
    default:
      return state
  }
}

export const addLinkReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_LINK_REQUEST:
      return { loading: true }
    case actionTypes.ADD_LINK_SUCCESS:
      return { loading: false, success: true }
    case actionTypes.ADD_LINK_FAIL:
      return { loading: false, error: action.payload }
    case actionTypes.ADD_LINK_RESET:
      return {}
    default:
      return state
  }
}
