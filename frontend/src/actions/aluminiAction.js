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

export const getAluminiDetail = (id) => async (dispatch) => {
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
