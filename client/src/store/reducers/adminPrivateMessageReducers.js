import {
  ADMIN_CREATE_PRIVATE_MESSAGES_FAILURE,
  ADMIN_CREATE_PRIVATE_MESSAGES_REQUEST,
  ADMIN_CREATE_PRIVATE_MESSAGES_SUCCESS,
  ADMIN_GET_PRIVATE_MESSAGES_FAILURE,
  ADMIN_GET_PRIVATE_MESSAGES_REQUEST,
  ADMIN_GET_PRIVATE_MESSAGES_SUCCESS,
  USER_GET_PRIVATE_MESSAGES_FAILURE,
  USER_GET_PRIVATE_MESSAGES_REQUEST,
  USER_GET_PRIVATE_MESSAGES_SUCCESS,
} from '../constants/adminPrivateMessagesConstants';

// GET: ADMIN get General info POSTS reducer
export const adminGetPrivateMessagesReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_GET_PRIVATE_MESSAGES_REQUEST:
      return { loading: true };
    case ADMIN_GET_PRIVATE_MESSAGES_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case ADMIN_GET_PRIVATE_MESSAGES_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

// POST: ADMIN CREATE private message
export const adminCreatePrivateMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_CREATE_PRIVATE_MESSAGES_REQUEST:
      return { loading: true };
    case ADMIN_CREATE_PRIVATE_MESSAGES_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case ADMIN_CREATE_PRIVATE_MESSAGES_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

// GET: USER get PRIVATE MESSAGES POSTS reducer
export const userGetPrivateMessagesReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_GET_PRIVATE_MESSAGES_REQUEST:
      return { loading: true };
    case USER_GET_PRIVATE_MESSAGES_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case USER_GET_PRIVATE_MESSAGES_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
