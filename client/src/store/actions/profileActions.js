import axios from 'axios';
import {
  PROFILE_CREATE_PROFILE_FAILURE,
  PROFILE_CREATE_PROFILE_REQUEST,
  PROFILE_CREATE_PROFILE_SUCCESS,
  PROFILE_EDIT_PROFILE_REQUEST,
  PROFILE_EDIT_PROFILE_SUCCESS,
  PROFILE_GET_PROFILE_FAILURE,
  PROFILE_GET_PROFILE_REQUEST,
  PROFILE_GET_PROFILE_SUCCESS,
} from '../constants/profileConstants';

//PUT: ADMIN isSuspended toggle
export const profileGetProfileAction =
  (userId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PROFILE_GET_PROFILE_REQUEST,
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

      const { data } = await axios.get(`api/profile/${userId}`, config);
      dispatch({ type: PROFILE_GET_PROFILE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PROFILE_GET_PROFILE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//POST: USER create profile as user
export const profileCreateProfileAction =
  (formData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PROFILE_CREATE_PROFILE_REQUEST,
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

      const { data } = await axios.post(`api/profile`, formData, config);
      dispatch({ type: PROFILE_CREATE_PROFILE_SUCCESS, payload: data });
      dispatch(profileGetProfileAction(data.profile?.user));
    } catch (error) {
      dispatch({
        type: PROFILE_CREATE_PROFILE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
//PUT: USER EDIT profile as user
export const profileEditProfileAction =
  (formData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PROFILE_EDIT_PROFILE_REQUEST,
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
        `api/profile-edit/${formData.id}`,
        formData,
        config,
      );

      dispatch({ type: PROFILE_EDIT_PROFILE_SUCCESS, payload: data });
      dispatch(profileGetProfileAction(data.updatedInfo?.user));
    } catch (error) {
      dispatch({
        type: PROFILE_CREATE_PROFILE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
