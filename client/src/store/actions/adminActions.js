import axios from 'axios';
import {
  ADMIN_GET_ALL_USERS_FAILURE,
  ADMIN_GET_ALL_USERS_REQUEST,
  ADMIN_GET_ALL_USERS_SUCCESS,
} from '../constants/adminConstants';

//GET: USER Admin details
export const adminUsersDetailsAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_GET_ALL_USERS_REQUEST,
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

    const { data } = await axios.get(`api/admin/users`, config);

    dispatch({ type: ADMIN_GET_ALL_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADMIN_GET_ALL_USERS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
