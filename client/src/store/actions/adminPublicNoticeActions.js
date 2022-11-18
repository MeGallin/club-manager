import axios from 'axios';
import {
  GET_PUBLIC_NOTICE_FAILURE,
  GET_PUBLIC_NOTICE_REQUEST,
  GET_PUBLIC_NOTICE_SUCCESS,
} from '../constants/adminPublicNoticeConstants';

//GET: ADMIN get PLAYER profile
export const getPublicNoticeAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_PUBLIC_NOTICE_REQUEST,
    });

    const { data } = await axios.get(
      `${process.env.REACT_APP_END_POINT}api/public-notices`,
    );
    dispatch({ type: GET_PUBLIC_NOTICE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PUBLIC_NOTICE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
