import {
  ADMIN_CREATE_GENERAL_INFO_FAILURE,
  ADMIN_CREATE_GENERAL_INFO_REQUEST,
  ADMIN_CREATE_GENERAL_INFO_SUCCESS,
  ADMIN_DELETE_GENERAL_INFO_FAILURE,
  ADMIN_DELETE_GENERAL_INFO_REQUEST,
  ADMIN_DELETE_GENERAL_INFO_SUCCESS,
  ADMIN_EDIT_GENERAL_INFO_FAILURE,
  ADMIN_EDIT_GENERAL_INFO_REQUEST,
  ADMIN_EDIT_GENERAL_INFO_SUCCESS,
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

// POST: ADMIN CREATE General info POST reducer
export const adminCreateGeneralInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_CREATE_GENERAL_INFO_REQUEST:
      return { loading: true };
    case ADMIN_CREATE_GENERAL_INFO_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case ADMIN_CREATE_GENERAL_INFO_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

// PUT: ADMIN EDIT General info POST
export const adminEditGeneralInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_EDIT_GENERAL_INFO_REQUEST:
      return { loading: true };
    case ADMIN_EDIT_GENERAL_INFO_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case ADMIN_EDIT_GENERAL_INFO_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

// DELETE: ADMIN Delete General info POST
export const adminDeleteGeneralInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_DELETE_GENERAL_INFO_REQUEST:
      return { loading: true };
    case ADMIN_DELETE_GENERAL_INFO_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case ADMIN_DELETE_GENERAL_INFO_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
