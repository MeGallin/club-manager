import axios from 'axios';
import {
  ADMIN_CREATE_GENERAL_INFO_FAILURE,
  ADMIN_CREATE_GENERAL_INFO_REQUEST,
  ADMIN_CREATE_GENERAL_INFO_SUCCESS,
  ADMIN_GET_GENERAL_INFO_FAILURE,
  ADMIN_GET_GENERAL_INFO_REQUEST,
  ADMIN_GET_GENERAL_INFO_SUCCESS,
} from '../constants/adminGeneralInfoConstants';

//GET: ADMIN get PLAYER profile
export const adminGetGeneralInfoAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_GET_GENERAL_INFO_REQUEST,
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

    const { data } = await axios.get(`api/admin/general-info`, config);
    dispatch({ type: ADMIN_GET_GENERAL_INFO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADMIN_GET_GENERAL_INFO_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//POST: ADMIN create General info POST
export const adminCreateGeneralInfoAction =
  (formData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_CREATE_GENERAL_INFO_REQUEST,
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
        `api/admin/general-info-create`,
        formData,
        config,
      );
      dispatch({ type: ADMIN_CREATE_GENERAL_INFO_SUCCESS, payload: data });
      dispatch(adminGetGeneralInfoAction());
    } catch (error) {
      dispatch({
        type: ADMIN_CREATE_GENERAL_INFO_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
