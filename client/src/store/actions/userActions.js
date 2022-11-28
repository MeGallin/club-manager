import axios from 'axios';
import {
  GOOGLE_USER_LOGIN_FAILURE,
  GOOGLE_USER_LOGIN_REQUEST,
  GOOGLE_USER_LOGIN_SUCCESS,
  GOOGLE_USER_LOGOUT,
  USER_ADMIN_DETAILS_FAILURE,
  USER_ADMIN_DETAILS_REQUEST,
  USER_ADMIN_DETAILS_SUCCESS,
  USER_FORGOT_EMAIL_FAILURE,
  USER_FORGOT_EMAIL_REQUEST,
  USER_FORGOT_EMAIL_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_RESET_PASSWORD_FAILURE,
  USER_RESET_PASSWORD_REQUEST,
  USER_RESET_PASSWORD_SUCCESS,
  USER_UPDATE_USER_ADMIN_DETAILS_FAILURE,
  USER_UPDATE_USER_ADMIN_DETAILS_REQUEST,
  USER_UPDATE_USER_ADMIN_DETAILS_SUCCESS,
} from '../constants/userConstants';

// USER Registration Done
export const userRegistrationAction = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_END_POINT}api/auth/register`,
      formData,
      config,
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//GET: USER Admin details Done
export const userAdminDetailsAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_ADMIN_DETAILS_REQUEST,
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
        `${process.env.REACT_APP_END_POINT}api/auth/user-admin-details`,
        config,
      );
      dispatch({ type: USER_ADMIN_DETAILS_SUCCESS, payload: data });
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
        `${process.env.REACT_APP_END_POINT}api/auth/user-admin-details`,
        config,
      );
      dispatch({ type: USER_ADMIN_DETAILS_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({
      type: USER_ADMIN_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//User Login Done
export const userLoginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_END_POINT}api/auth/login`,
      { email: email, password: password },
      config,
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
    dispatch(userAdminDetailsAction());
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//GOOGLE User Login
export const googleUserLoginAction = (googleRes) => async (dispatch) => {
  try {
    dispatch({
      type: GOOGLE_USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${googleRes.credential}`,
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_END_POINT}api/auth/google-login`,
      config,
    );

    dispatch({ type: GOOGLE_USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
    dispatch(userAdminDetailsAction());
  } catch (error) {
    dispatch({
      type: GOOGLE_USER_LOGIN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// USER USER_LOGOUT Done
export const userLogoutAction = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: GOOGLE_USER_LOGOUT });
};

//User FORGOT EMAIL ACTION Done
export const userForgotEmailAction = (email) => async (dispatch) => {
  try {
    dispatch({
      type: USER_FORGOT_EMAIL_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_END_POINT}api/auth/forgot-password`,
      { email: email },
      config,
    );
    dispatch({ type: USER_FORGOT_EMAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_FORGOT_EMAIL_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//User Login Done
export const userResetPasswordAction = (updatedInfo) => async (dispatch) => {
  try {
    dispatch({
      type: USER_RESET_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.put(
      `${process.env.REACT_APP_END_POINT}api/auth/resetpassword/${updatedInfo.resetPasswordToken}`,
      updatedInfo,
      config,
    );
    dispatch({ type: USER_RESET_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_RESET_PASSWORD_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//GET: USER UPDATE Admin details Done
export const userUpdateAdminDetailsAction =
  (formData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_UPDATE_USER_ADMIN_DETAILS_REQUEST,
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
        const { data } = await axios.put(
          `${process.env.REACT_APP_END_POINT}api/auth/user/${formData.id}`,
          formData,
          config,
        );
        dispatch({
          type: USER_UPDATE_USER_ADMIN_DETAILS_SUCCESS,
          payload: data,
        });
        dispatch(userAdminDetailsAction());
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

        const { data } = await axios.put(
          `${process.env.REACT_APP_END_POINT}api/auth/user/${formData.id}`,
          formData,
          config,
        );
        dispatch({
          type: USER_UPDATE_USER_ADMIN_DETAILS_SUCCESS,
          payload: data,
        });
        dispatch(userAdminDetailsAction());
      }
    } catch (error) {
      dispatch({
        type: USER_UPDATE_USER_ADMIN_DETAILS_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
