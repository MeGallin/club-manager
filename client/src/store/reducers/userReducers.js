import {
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

//Register a USER
export const userRegistrationReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        success: true,
      };
    case USER_REGISTER_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

// USER LOGIN REDUCER
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_LOGIN_FAILURE:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return { ...state };
  }
};

// USER Forgotten EMAIL reducer
export const userForgotEmailReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FORGOT_EMAIL_REQUEST:
      return { loading: true };
    case USER_FORGOT_EMAIL_SUCCESS:
      return { loading: false, success: true, email: action.payload };
    case USER_FORGOT_EMAIL_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

// USER RESET PASSWORD reducer
export const userResetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_RESET_PASSWORD_REQUEST:
      return { loading: true };
    case USER_RESET_PASSWORD_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case USER_RESET_PASSWORD_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
// GET: USER admin details reducer
export const userAdminDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ADMIN_DETAILS_REQUEST:
      return { loading: true };
    case USER_ADMIN_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        userAdmin: action.payload,
      };
    case USER_ADMIN_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
// GET: USER admin UPDATE details reducer
export const userUpdateAdminDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_USER_ADMIN_DETAILS_REQUEST:
      return { loading: true };
    case USER_UPDATE_USER_ADMIN_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        userAdmin: action.payload,
      };
    case USER_UPDATE_USER_ADMIN_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
