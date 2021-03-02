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
