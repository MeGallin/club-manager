import {
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
