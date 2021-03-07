import axios from 'axios'
import * as actionTypes from '../constants/aluminiConstants'

export const listAluminies = (department) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ALUMINI_LIST_REQUEST })

    const { data } = await axios.get(`/api/alumini/${department}`)

    dispatch({
      type: actionTypes.ALUMINI_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.ALUMINI_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listAluminiDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ALUMINI_DETAIL_REQUEST })

    const { data } = await axios.get(`/api/alumini/profile/${id}`)

    dispatch({
      type: actionTypes.ALUMINI_DETAIL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.ALUMINI_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createAlumini = (alumini) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.ALUMINI_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/alumini`, alumini, config)

    dispatch({
      type: actionTypes.ALUMINI_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.ALUMINI_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteAlumini = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.ALUMINI_DELETE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    await axios.delete(`/api/alumini/${id}`, config)

    dispatch({
      type: actionTypes.ALUMINI_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.ALUMINI_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateAlumini = (alumini) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.ALUMINI_UPDATE_REQUEST })
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
      `/api/alumini/edit/${alumini._id}`,
      alumini,
      config
    )

    dispatch({
      type: actionTypes.ALUMINI_UPDATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.ALUMINI_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
