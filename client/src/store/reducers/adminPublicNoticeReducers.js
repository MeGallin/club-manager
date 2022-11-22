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

// GET: Public Notice GET all posts
export const getPublicNoticeReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PUBLIC_NOTICE_REQUEST:
      return { loading: true };
    case GET_PUBLIC_NOTICE_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case GET_PUBLIC_NOTICE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

// POST: ADMIN CREATE PUBLIC NOTICE POST reducer
export const adminCreatePublicNoticeReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_CREATE_PUBLIC_NOTICE_REQUEST:
      return { loading: true };
    case ADMIN_CREATE_PUBLIC_NOTICE_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case ADMIN_CREATE_PUBLIC_NOTICE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

// PUT: ADMIN EDIT Public Notice POST
export const adminEditPublicNoticeReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_EDIT_PUBLIC_NOTICE_REQUEST:
      return { loading: true };
    case ADMIN_EDIT_PUBLIC_NOTICE_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case ADMIN_EDIT_PUBLIC_NOTICE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

// Delete: ADMIN DELETE Public Notice POST
export const adminDeletePublicNoticeReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_DELETE_PUBLIC_NOTICE_REQUEST:
      return { loading: true };
    case ADMIN_DELETE_PUBLIC_NOTICE_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case ADMIN_DELETE_PUBLIC_NOTICE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
