import {
  ADMIN_GET_ALL_USERS_FAILURE,
  ADMIN_GET_ALL_USERS_REQUEST,
  ADMIN_GET_ALL_USERS_SUCCESS,
  ADMIN_IS_ADMIN_FAILURE,
  ADMIN_IS_ADMIN_REQUEST,
  ADMIN_IS_ADMIN_SUCCESS,
  ADMIN_IS_COACH_FAILURE,
  ADMIN_IS_COACH_REQUEST,
  ADMIN_IS_COACH_SUCCESS,
  ADMIN_IS_PARENT_FAILURE,
  ADMIN_IS_PARENT_REQUEST,
  ADMIN_IS_PARENT_SUCCESS,
  ADMIN_IS_PLAYER_FAILURE,
  ADMIN_IS_PLAYER_REQUEST,
  ADMIN_IS_PLAYER_SUCCESS,
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

// PUT: ADMIN isCoach reducer
export const adminIsCoachReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_IS_COACH_REQUEST:
      return { loading: true };
    case ADMIN_IS_COACH_SUCCESS:
      return {
        loading: false,
        success: true,
        isCoach: action.payload,
      };
    case ADMIN_IS_COACH_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

// PUT: ADMIN isParent reducer
export const adminIsParentReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_IS_PARENT_REQUEST:
      return { loading: true };
    case ADMIN_IS_PARENT_SUCCESS:
      return {
        loading: false,
        success: true,
        isParent: action.payload,
      };
    case ADMIN_IS_PARENT_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

// PUT: ADMIN isPlayer reducer
export const adminIsPlayerReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_IS_PLAYER_REQUEST:
      return { loading: true };
    case ADMIN_IS_PLAYER_SUCCESS:
      return {
        loading: false,
        success: true,
        isPlayer: action.payload,
      };
    case ADMIN_IS_PLAYER_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
