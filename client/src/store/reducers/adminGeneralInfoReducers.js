import {
  ADMIN_GET_GENERAL_INFO_FAILURE,
  ADMIN_GET_GENERAL_INFO_REQUEST,
  ADMIN_GET_GENERAL_INFO_SUCCESS,
} from '../constants/adminGeneralInfoConstants';

// GET: ADMIN get General info POSTS reducer
export const adminGetGeneralInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_GET_GENERAL_INFO_REQUEST:
      return { loading: true };
    case ADMIN_GET_GENERAL_INFO_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case ADMIN_GET_GENERAL_INFO_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
