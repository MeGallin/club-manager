import axios from 'axios';
import {
  ADMIN_CREATE_PRIVATE_MESSAGES_FAILURE,
  ADMIN_CREATE_PRIVATE_MESSAGES_REQUEST,
  ADMIN_CREATE_PRIVATE_MESSAGES_SUCCESS,
  ADMIN_GET_PRIVATE_MESSAGES_FAILURE,
  ADMIN_GET_PRIVATE_MESSAGES_REQUEST,
  ADMIN_GET_PRIVATE_MESSAGES_SUCCESS,
  ADMIN_IS_COMPLETE_PRIVATE_MESSAGES_FAILURE,
  ADMIN_IS_COMPLETE_PRIVATE_MESSAGES_REQUEST,
  ADMIN_IS_COMPLETE_PRIVATE_MESSAGES_SUCCESS,
  USER_CREATE_REPLY_PRIVATE_MESSAGES_FAILURE,
  USER_CREATE_REPLY_PRIVATE_MESSAGES_REQUEST,
  USER_CREATE_REPLY_PRIVATE_MESSAGES_SUCCESS,
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

//POST: ADMIN create private message
export const adminCreatePrivateMessageAction =
  (formData, userId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_CREATE_PRIVATE_MESSAGES_REQUEST,
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

      const { data } = await axios.post(
        `${process.env.REACT_APP_END_POINT}api/admin/private-message-create/${userId}`,
        formData,
        config,
      );
      dispatch({ type: ADMIN_CREATE_PRIVATE_MESSAGES_SUCCESS, payload: data });
      dispatch(adminGetPrivateMessagesAction());
    } catch (error) {
      dispatch({
        type: ADMIN_CREATE_PRIVATE_MESSAGES_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//PATCH: ADMIN IS COMPLETE Toggle
export const adminIsCompletePrivateMessageAction =
  (isComplete, userId, messageId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_IS_COMPLETE_PRIVATE_MESSAGES_REQUEST,
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

      const { data } = await axios.patch(
        `${process.env.REACT_APP_END_POINT}api/admin/private-message-is-complete/${userId}`,
        { isComplete, messageId },
        config,
      );
      dispatch({
        type: ADMIN_IS_COMPLETE_PRIVATE_MESSAGES_SUCCESS,
        payload: data,
      });
      dispatch(adminGetPrivateMessagesAction());
    } catch (error) {
      dispatch({
        type: ADMIN_IS_COMPLETE_PRIVATE_MESSAGES_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//USERS USERS USERS

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

//POST: USER create private REPLY
export const userCreateReplyPrivateMessageAction =
  (formData, userId) => async (dispatch, getState) => {
    console.log(formData, userId);
    try {
      dispatch({
        type: USER_CREATE_REPLY_PRIVATE_MESSAGES_REQUEST,
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
        const { data } = await axios.post(
          `${process.env.REACT_APP_END_POINT}api/user/private-message-reply-create/${userId}`,
          formData,
          config,
        );
        dispatch({
          type: USER_CREATE_REPLY_PRIVATE_MESSAGES_SUCCESS,
          payload: data,
        });
        dispatch(userGetPrivateMessagesAction(userId));
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

        const { data } = await axios.post(
          `${process.env.REACT_APP_END_POINT}api/user/private-message-reply-create/${userId}`,
          formData,
          config,
        );
        dispatch({
          type: USER_CREATE_REPLY_PRIVATE_MESSAGES_SUCCESS,
          payload: data,
        });
        dispatch(userGetPrivateMessagesAction(userId));
      }
    } catch (error) {
      dispatch({
        type: USER_CREATE_REPLY_PRIVATE_MESSAGES_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
