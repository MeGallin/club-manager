import {
  ADMIN_CREATE_PLAYER_FAILURE,
  ADMIN_CREATE_PLAYER_REQUEST,
  ADMIN_CREATE_PLAYER_SUCCESS,
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
      };
    case ADMIN_CREATE_PLAYER_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
