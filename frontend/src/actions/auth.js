import * as actionTypes from '../constants/auth'
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/user/signin',
      { email, password },
      config
    )
    dispatch({
      type: actionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: actionTypes.USER_LOGIN_FAIL,
      payload: 'Invalid Email & Password',
    })
  }
}

export const listUserDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.USER_DETAIL_REQUEST })

    const { data } = await axios.get(`/api/user/${id}`)

    dispatch({
      type: actionTypes.USER_DETAIL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.USER_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listUserTipLink = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.USER_TIP_LINK_REQUEST })

    const { data } = await axios.get(`/api/user/following/${id}`)
    console.log('from listUserTipLink action', data)

    dispatch({
      type: actionTypes.USER_TIP_LINK_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.USER_TIP_LINK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const emailOtp = (email) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.EMAIL_OTP_REQUEST })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('/api/user/otp', { email }, config)
    dispatch({
      type: actionTypes.EMAIL_OTP_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.EMAIL_OTP_FAIL,
      payload: 'Email already exist',
    })
  }
}

export const register = (form) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.USER_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('/api/user/signup', form, config)
    dispatch({
      type: actionTypes.USER_REGISTER_SUCCESS,
      payload: data,
    })
    dispatch({
      type: actionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: actionTypes.USER_REGISTER_FAIL,
      payload: 'OTP NOT CORRECT',
    })
  }
}

export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo')

  dispatch({
    type: actionTypes.USER_LOGOUT,
  })
}

export const update = (updateForm) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.USER_UPDATE_PROFILE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.put(
      '/api/user/editprofile',
      updateForm,
      config
    )
    dispatch({
      type: actionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
    dispatch({
      type: actionTypes.USER_UPDATE_PROFILE_SUCCESS,
    })
  } catch (error) {
    dispatch({ type: actionTypes.USER_UPDATE_PROFILE_FAIL, payload: error })
  }
}

export const userListAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.USER_LIST_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get('/api/user/', config)
    //console.log('from inside auth action', data)
    dispatch({
      type: actionTypes.USER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({ type: actionTypes.USER_LIST_FAIL, payload: error })
  }
}

export const addFollowingAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.FOLLOW_ADD_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()
    // console.log(userInfo.token,id);
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.put(`/api/user/follow/${id}/`, {}, config)
    dispatch({ type: actionTypes.FOLLOW_ADD_SUCCESS, payload: data })
  } catch (err) {
    dispatch({ type: actionTypes.FOLLOW_ADD_FAIL, payload: err })
  }
}

export const addTipAction = (tip) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.ADD_TIP_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const userId = userInfo.user._id

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(
      `/api/user/tip/${userId}`,
      { tip },
      config
    )
    dispatch({
      type: actionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    })
    localStorage.setItem('userInfo', JSON.stringify(data))

    dispatch({
      type: actionTypes.ADD_TIP_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_TIP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const addLinkAction = (link) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.ADD_LINK_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const userId = userInfo.user._id

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(
      `/api/user/link/${userId}`,
      { link },
      config
    )
    dispatch({
      type: actionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    })
    localStorage.setItem('userInfo', JSON.stringify(data))

    dispatch({
      type: actionTypes.ADD_LINK_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_LINK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
