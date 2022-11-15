import axios from 'axios';
import {
  ADMIN_ALL_PROFILES_FAILURE,
  ADMIN_ALL_PROFILES_REQUEST,
  ADMIN_ALL_PROFILES_SUCCESS,
  ADMIN_CREATE_PROFILE_FAILURE,
  ADMIN_CREATE_PROFILE_REQUEST,
  ADMIN_CREATE_PROFILE_SUCCESS,
  ADMIN_EDIT_PROFILE_FAILURE,
  ADMIN_EDIT_PROFILE_REQUEST,
  ADMIN_EDIT_PROFILE_SUCCESS,
  ADMIN_GET_ALL_USERS_FAILURE,
  ADMIN_GET_ALL_USERS_REQUEST,
  ADMIN_GET_ALL_USERS_SUCCESS,
  ADMIN_IS_ADMIN_FAILURE,
  ADMIN_IS_ADMIN_REQUEST,
  ADMIN_IS_ADMIN_SUCCESS,
  ADMIN_IS_COACH_FAILURE,
  ADMIN_IS_COACH_REQUEST,
  ADMIN_IS_COACH_SUCCESS,
  ADMIN_IS_PARENT_FAILURE,
  ADMIN_IS_PARENT_REQUEST,
  ADMIN_IS_PARENT_SUCCESS,
  ADMIN_IS_PLAYER_FAILURE,
  ADMIN_IS_PLAYER_REQUEST,
  ADMIN_IS_PLAYER_SUCCESS,
  ADMIN_IS_SUSPENDED_FAILURE,
  ADMIN_IS_SUSPENDED_REQUEST,
  ADMIN_IS_SUSPENDED_SUCCESS,
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
    const { data } = await axios.get(
      `${process.env.REACT_APP_END_POINT}api/admin/users`,
      config,
    );
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
        `${process.env.REACT_APP_END_POINT}api/admin/user-is-admin/${userId}`,
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
//PUT: ADMIN isSuspended toggle
export const adminIsSuspendedAction =
  (userId, isSuspended) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_IS_SUSPENDED_REQUEST,
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
        `${process.env.REACT_APP_END_POINT}api/admin/user-is-suspended/${userId}`,
        { isSuspended },
        config,
      );
      dispatch({ type: ADMIN_IS_SUSPENDED_SUCCESS, payload: data });
      dispatch(adminUsersDetailsAction());
    } catch (error) {
      dispatch({
        type: ADMIN_IS_SUSPENDED_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//PUT: ADMIN isCoach toggle
export const adminIsCoachAction =
  (userId, isCoach) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_IS_COACH_REQUEST,
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
        `${process.env.REACT_APP_END_POINT}api/admin/user-is-coach/${userId}`,
        { isCoach },
        config,
      );
      dispatch({ type: ADMIN_IS_COACH_SUCCESS, payload: data });
      dispatch(adminUsersDetailsAction());
    } catch (error) {
      dispatch({
        type: ADMIN_IS_COACH_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//PUT: ADMIN isParent toggle
export const adminIsParentAction =
  (userId, isParent) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_IS_PARENT_REQUEST,
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
        `${process.env.REACT_APP_END_POINT}api/admin/user-is-parent/${userId}`,
        { isParent },
        config,
      );
      dispatch({ type: ADMIN_IS_PARENT_SUCCESS, payload: data });
      dispatch(adminUsersDetailsAction());
    } catch (error) {
      dispatch({
        type: ADMIN_IS_PARENT_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//PUT: ADMIN isPlayer toggle
export const adminIsPlayerAction =
  (userId, isPlayer) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_IS_PLAYER_REQUEST,
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
        `${process.env.REACT_APP_END_POINT}api/admin/user-is-player/${userId}`,
        { isPlayer },
        config,
      );
      dispatch({ type: ADMIN_IS_PLAYER_SUCCESS, payload: data });
      dispatch(adminUsersDetailsAction());
    } catch (error) {
      dispatch({
        type: ADMIN_IS_PLAYER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//POST: ADMIN create ADMIN profile
export const adminCreateProfileAction =
  (formData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_CREATE_PROFILE_REQUEST,
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
        `${process.env.REACT_APP_END_POINT}api/admin/profile-create`,
        formData,
        config,
      );
      dispatch({ type: ADMIN_CREATE_PROFILE_SUCCESS, payload: data });
      dispatch(adminAllProfilesAction());
    } catch (error) {
      dispatch({
        type: ADMIN_CREATE_PROFILE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//GET: ADMIN ALL profiles
export const adminAllProfilesAction =
  (userId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_ALL_PROFILES_REQUEST,
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

      const { data } = await axios.get(
        `${process.env.REACT_APP_END_POINT}api/admin/profiles`,
        config,
      );
      dispatch({ type: ADMIN_ALL_PROFILES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ADMIN_ALL_PROFILES_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//PUT: ADMIN edit profile
export const adminEditProfileAction =
  (formData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_EDIT_PROFILE_REQUEST,
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
        `${process.env.REACT_APP_END_POINT}api/admin/profile-edit/${formData.id}`,
        formData,
        config,
      );
      dispatch({ type: ADMIN_EDIT_PROFILE_SUCCESS, payload: data });
      dispatch(adminAllProfilesAction());
    } catch (error) {
      dispatch({
        type: ADMIN_EDIT_PROFILE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
