import axios from 'axios';
import {
  ADMIN_GET_PRIVATE_MESSAGES_FAILURE,
  ADMIN_GET_PRIVATE_MESSAGES_REQUEST,
  ADMIN_GET_PRIVATE_MESSAGES_SUCCESS,
  USER_GET_PRIVATE_MESSAGES_FAILURE,
  USER_GET_PRIVATE_MESSAGES_REQUEST,
  USER_GET_PRIVATE_MESSAGES_SUCCESS,
} from '../constants/adminPrivateMessagesConstants';

//GET: ADMIN get ALL private messages
export const adminGetPrivateMessagesAction =
  () => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_GET_PRIVATE_MESSAGES_REQUEST,
      });

      if (getState().userLogin.userInfo) {
        const {
          userLogin: { userInfo },
        } = getState();

        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        const { data } = await axios.get(
          `${process.env.REACT_APP_END_POINT}api/admin/private-messages-get`,
          config,
        );
        dispatch({ type: ADMIN_GET_PRIVATE_MESSAGES_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({
        type: ADMIN_GET_PRIVATE_MESSAGES_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//GET: USER get PRIVATE MESSAGES
export const userGetPrivateMessagesAction =
  (userId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_GET_PRIVATE_MESSAGES_REQUEST,
      });

      if (getState().userLogin.userInfo) {
        const {
          userLogin: { userInfo },
        } = getState();

        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        const { data } = await axios.get(
          `${process.env.REACT_APP_END_POINT}api/user/private-messages-get/${userId}`,
          config,
        );
        dispatch({ type: USER_GET_PRIVATE_MESSAGES_SUCCESS, payload: data });
      }

      if (getState().googleUserLogin.userInfo) {
        const {
          googleUserLogin: { userInfo },
        } = getState();

        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
          },
        };

        const { data } = await axios.get(
          `${process.env.REACT_APP_END_POINT}api/user/private-messages-get/${userId}`,
          config,
        );
        dispatch({ type: USER_GET_PRIVATE_MESSAGES_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({
        type: USER_GET_PRIVATE_MESSAGES_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
