import {
  PROFILE_CREATE_PROFILE_FAILURE,
  PROFILE_CREATE_PROFILE_REQUEST,
  PROFILE_CREATE_PROFILE_SUCCESS,
  PROFILE_GET_PROFILE_FAILURE,
  PROFILE_GET_PROFILE_REQUEST,
  PROFILE_GET_PROFILE_SUCCESS,
} from '../constants/profileConstants';

// GET: USER Get your profile as user
export const profileGetProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_GET_PROFILE_REQUEST:
      return { loading: true };
    case PROFILE_GET_PROFILE_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case PROFILE_GET_PROFILE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
// POST: USER Create your profile as user
export const profileCreateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_CREATE_PROFILE_REQUEST:
      return { loading: true };
    case PROFILE_CREATE_PROFILE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case PROFILE_CREATE_PROFILE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
