import axios from 'axios';
import {
  ADMIN_CREATE_PUBLIC_NOTICE_FAILURE,
  ADMIN_CREATE_PUBLIC_NOTICE_REQUEST,
  ADMIN_CREATE_PUBLIC_NOTICE_SUCCESS,
  ADMIN_DELETE_PUBLIC_NOTICE_FAILURE,
  ADMIN_DELETE_PUBLIC_NOTICE_REQUEST,
  ADMIN_DELETE_PUBLIC_NOTICE_SUCCESS,
  ADMIN_EDIT_PUBLIC_NOTICE_FAILURE,
  ADMIN_EDIT_PUBLIC_NOTICE_REQUEST,
  ADMIN_EDIT_PUBLIC_NOTICE_SUCCESS,
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

//POST: ADMIN create Public notice POST
export const adminCreatePublicNoticeAction =
  (formData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_CREATE_PUBLIC_NOTICE_REQUEST,
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
        `${process.env.REACT_APP_END_POINT}api/admin/public-notice-create`,
        formData,
        config,
      );
      dispatch({ type: ADMIN_CREATE_PUBLIC_NOTICE_SUCCESS, payload: data });
      dispatch(getPublicNoticeAction());
    } catch (error) {
      dispatch({
        type: ADMIN_CREATE_PUBLIC_NOTICE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//PUT: ADMIN EDIT Public Notice POST
export const adminEditPublicNoticeAction =
  (formData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_EDIT_PUBLIC_NOTICE_REQUEST,
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
        `${process.env.REACT_APP_END_POINT}api/admin/public-notice-edit/${formData.id}`,
        formData,
        config,
      );
      dispatch({ type: ADMIN_EDIT_PUBLIC_NOTICE_SUCCESS, payload: data });
      dispatch(getPublicNoticeAction());
    } catch (error) {
      dispatch({
        type: ADMIN_EDIT_PUBLIC_NOTICE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//DELETE: ADMIN DELETE Public Notice POST
export const adminDeletePublicNoticeAction =
  (noticeId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_DELETE_PUBLIC_NOTICE_REQUEST,
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

      const { data } = await axios.delete(
        `${process.env.REACT_APP_END_POINT}api/admin/public-notice-delete/${noticeId}`,
        config,
      );
      dispatch({ type: ADMIN_DELETE_PUBLIC_NOTICE_SUCCESS, payload: data });
      dispatch(getPublicNoticeAction());
    } catch (error) {
      dispatch({
        type: ADMIN_DELETE_PUBLIC_NOTICE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
