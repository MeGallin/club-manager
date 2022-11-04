import axios from 'axios';
import {
  ADMIN_GET_GENERAL_INFO_FAILURE,
  ADMIN_GET_GENERAL_INFO_REQUEST,
  ADMIN_GET_GENERAL_INFO_SUCCESS,
} from '../constants/adminGeneralInfoConstants';

//GET: ADMIN get PLAYER profile
export const adminGetPlayersAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_GET_GENERAL_INFO_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`api/admin/general-info`, config);
    dispatch({ type: ADMIN_GET_GENERAL_INFO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADMIN_GET_GENERAL_INFO_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
