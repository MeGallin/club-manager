import axios from 'axios';
import {
  ADMIN_CREATE_PLAYER_FAILURE,
  ADMIN_CREATE_PLAYER_REQUEST,
  ADMIN_CREATE_PLAYER_SUCCESS,
  ADMIN_DELETE_PLAYER_FAILURE,
  ADMIN_DELETE_PLAYER_REQUEST,
  ADMIN_DELETE_PLAYER_SUCCESS,
  ADMIN_EDIT_PLAYER_FAILURE,
  ADMIN_EDIT_PLAYER_REQUEST,
  ADMIN_EDIT_PLAYER_SUCCESS,
  ADMIN_GET_PLAYERS_FAILURE,
  ADMIN_GET_PLAYERS_REQUEST,
  ADMIN_GET_PLAYERS_SUCCESS,
} from '../constants/playerConstants';

//GET: ADMIN get PLAYER profile Done
export const adminGetPlayersAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_GET_PLAYERS_REQUEST,
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

    const { data } = await axios.get(
      `${process.env.REACT_APP_END_POINT}api/admin/players`,
      config,
    );
    dispatch({ type: ADMIN_GET_PLAYERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADMIN_GET_PLAYERS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

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
        `${process.env.REACT_APP_END_POINT}api/admin/player-create`,
        formData,
        config,
      );
      dispatch({ type: ADMIN_CREATE_PLAYER_SUCCESS, payload: data });
      dispatch(adminGetPlayersAction());
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

//PUT: ADMIN edit PLAYER profile
export const adminEditPlayerAction =
  (formData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_EDIT_PLAYER_REQUEST,
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

      const { data } = await axios.put(
        `${process.env.REACT_APP_END_POINT}api/admin/player-edit/${formData.id}`,
        formData,
        config,
      );
      dispatch({ type: ADMIN_EDIT_PLAYER_SUCCESS, payload: data });
      dispatch(adminGetPlayersAction());
    } catch (error) {
      dispatch({
        type: ADMIN_EDIT_PLAYER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//DELETE: ADMIN delete PLAYER profile
export const adminDeletePlayerAction =
  (playerId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_DELETE_PLAYER_REQUEST,
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

      const { data } = await axios.delete(
        `${process.env.REACT_APP_END_POINT}api/admin/player-delete/${playerId}`,
        config,
      );
      dispatch({ type: ADMIN_DELETE_PLAYER_SUCCESS, payload: data });
      dispatch(adminGetPlayersAction());
    } catch (error) {
      dispatch({
        type: ADMIN_DELETE_PLAYER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
