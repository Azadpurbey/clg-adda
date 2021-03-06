import axios from 'axios'
import * as actionTypes from '../constants/profConstants'

export const listProfs = (department) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PROF_LIST_REQUEST })

    const { data } = await axios.get(`/api/profDetail/${department}`)

    dispatch({
      type: actionTypes.PROF_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.PROF_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listProfDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PROF_DETAIL_REQUEST })

    const { data } = await axios.get(`/api/profDetail/profile/${id}`)

    dispatch({
      type: actionTypes.PROF_DETAIL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.PROF_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createProf = (prof) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.PROF_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/profDetail`, prof, config)

    dispatch({
      type: actionTypes.PROF_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.PROF_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteProf = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.PROF_DELETE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    await axios.delete(`/api/profDetail/${id}`, config)

    dispatch({
      type: actionTypes.PROF_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.PROF_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateProf = (prof) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.PROF_UPDATE_REQUEST })
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
      `/api/profDetail/edit/${prof._id}`,
      prof,
      config
    )

    dispatch({
      type: actionTypes.PROF_UPDATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.PROF_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
