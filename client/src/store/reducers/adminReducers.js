import {
  ADMIN_GET_ALL_USERS_FAILURE,
  ADMIN_GET_ALL_USERS_REQUEST,
  ADMIN_GET_ALL_USERS_SUCCESS,
  ADMIN_IS_ADMIN_FAILURE,
  ADMIN_IS_ADMIN_REQUEST,
  ADMIN_IS_ADMIN_SUCCESS,
  ADMIN_IS_SUSPENDED_FAILURE,
  ADMIN_IS_SUSPENDED_REQUEST,
  ADMIN_IS_SUSPENDED_SUCCESS,
} from '../constants/adminConstants';

// GET: ADMIN All USERS details reducer
export const adminUsersDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_GET_ALL_USERS_REQUEST:
      return { loading: true };
    case ADMIN_GET_ALL_USERS_SUCCESS:
      return {
        loading: false,
        success: true,
        allUsers: action.payload,
      };
    case ADMIN_GET_ALL_USERS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
// PUT: ADMIN isAdmin reducer
export const adminIsAdminReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_IS_ADMIN_REQUEST:
      return { loading: true };
    case ADMIN_IS_ADMIN_SUCCESS:
      return {
        loading: false,
        success: true,
        isAdmin: action.payload,
      };
    case ADMIN_IS_ADMIN_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

// PUT: ADMIN isSuspended reducer
export const adminIsSuspendedReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_IS_SUSPENDED_REQUEST:
      return { loading: true };
    case ADMIN_IS_SUSPENDED_SUCCESS:
      return {
        loading: false,
        success: true,
        isSuspended: action.payload,
      };
    case ADMIN_IS_SUSPENDED_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
