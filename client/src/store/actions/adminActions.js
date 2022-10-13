import axios from 'axios';
import {
  ADMIN_GET_ALL_USERS_FAILURE,
  ADMIN_GET_ALL_USERS_REQUEST,
  ADMIN_GET_ALL_USERS_SUCCESS,
  ADMIN_IS_ADMIN_FAILURE,
  ADMIN_IS_ADMIN_REQUEST,
  ADMIN_IS_ADMIN_SUCCESS,
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
//PUT: ADMIN isAdmin toggle
export const adminIsAdminAction =
  (userId, isAdmin) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_IS_ADMIN_REQUEST,
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

      const { data } = await axios.put(
        `api/admin/user-is-admin/${userId}`,
        { isAdmin },
        config,
      );
      dispatch({ type: ADMIN_IS_ADMIN_SUCCESS, payload: data });
      dispatch(adminUsersDetailsAction());
    } catch (error) {
      dispatch({
        type: ADMIN_IS_ADMIN_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
