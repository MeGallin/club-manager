import axios from 'axios';
import {
  ADMIN_CREATE_PLAYER_FAILURE,
  ADMIN_CREATE_PLAYER_REQUEST,
  ADMIN_CREATE_PLAYER_SUCCESS,
} from '../constants/playerConstants';

//POST: ADMIN create PLAYER profile
export const adminCreatePlayerAction =
  (formData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_CREATE_PLAYER_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `api/admin/player-create`,
        formData,
        config,
      );
      dispatch({ type: ADMIN_CREATE_PLAYER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ADMIN_CREATE_PLAYER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
