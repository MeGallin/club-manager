import {
  CONTACT_FORM_FAILURE,
  CONTACT_FORM_REQUEST,
  CONTACT_FORM_SUCCESS,
} from '../constants/contactFormConstants';
import axios from 'axios';

//POST: Contact form details
export const contactFormAction = (formData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONTACT_FORM_REQUEST,
    });

    console.log(formData);

    const { data } = await axios.post(
      `${process.env.REACT_APP_END_POINT}api/contact-form`,
      formData,
    );
    dispatch({ type: CONTACT_FORM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CONTACT_FORM_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
