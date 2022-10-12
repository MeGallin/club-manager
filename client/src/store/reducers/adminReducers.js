import {
  ADMIN_GET_ALL_USERS_FAILURE,
  ADMIN_GET_ALL_USERS_REQUEST,
  ADMIN_GET_ALL_USERS_SUCCESS,
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
