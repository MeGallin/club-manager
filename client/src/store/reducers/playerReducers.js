import {
  ADMIN_CREATE_PLAYER_FAILURE,
  ADMIN_CREATE_PLAYER_REQUEST,
  ADMIN_CREATE_PLAYER_SUCCESS,
  ADMIN_EDIT_PLAYER_FAILURE,
  ADMIN_EDIT_PLAYER_REQUEST,
  ADMIN_EDIT_PLAYER_SUCCESS,
  ADMIN_GET_PLAYERS_FAILURE,
  ADMIN_GET_PLAYERS_REQUEST,
  ADMIN_GET_PLAYERS_SUCCESS,
} from '../constants/playerConstants';

// POST: ADMIN Create PLAYER reducer
export const adminCreatePlayerReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_CREATE_PLAYER_REQUEST:
      return { loading: true };
    case ADMIN_CREATE_PLAYER_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case ADMIN_CREATE_PLAYER_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

// GET: ADMIN get PLAYERS reducer
export const adminGetPlayersReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_GET_PLAYERS_REQUEST:
      return { loading: true };
    case ADMIN_GET_PLAYERS_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case ADMIN_GET_PLAYERS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

// PUT: ADMIN Create PLAYER reducer
export const adminEditPlayerReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_EDIT_PLAYER_REQUEST:
      return { loading: true };
    case ADMIN_EDIT_PLAYER_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case ADMIN_EDIT_PLAYER_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
