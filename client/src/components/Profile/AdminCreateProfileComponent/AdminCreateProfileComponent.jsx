import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './AdminCreateProfileComponent.scss';

import { adminCreateProfileAction } from '../../../store/actions/adminActions';

import InputComponent from '../../../components/Input/InputComponent';
import ButtonComponent from '../../../components/Button/ButtonComponent';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import SuccessComponent from '../../Success/SuccessComponent';

import {
  nameRegEx,
  emailRegEx,
  dobRegEx,
  phoneRegEx,
} from '../../../utils/regEx';
import TextAreaComponent from '../../TextArea/TextAreaComponent';

const AdminCreateProfileComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { userAdmin } = userAdminDetails;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    description: '',
    phone: '',
  });
  const { name, email, dateOfBirth, description, phone } = formData;

  const handleOnChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateAdminProfileSubmit = (e) => {
    e.preventDefault();

    if (!userInfo && !userAdmin?.isAdmin) {
      navigate('/login');
    } else {
      //Dispatch your CREATE action
      dispatch(adminCreateProfileAction(formData));
    }

    setFormData({
      name: '',
      email: '',
      dateOfBirth: '',
      description: '',
      phone: '',
    });
  };

  const adminCreateProfile = useSelector((state) => state.adminCreateProfile);
  const { error, success } = adminCreateProfile;

  return (
    <>
      {error ? <ErrorComponent /> : null}
      {success ? <SuccessComponent /> : null}
      <fieldset className="fieldSet">
        <legend>Create ADMIN Profile</legend>
        <div>
          <form onSubmit={handleCreateAdminProfileSubmit}>
            <InputComponent
              label="Name or 'nick-name'"
              value={name}
              type="text"
              name="name"
              required
              className={!nameRegEx.test(name) ? 'invalid' : 'entered'}
              error={
                !nameRegEx.test(name) && name.length !== 0
                  ? `Name must contain at least 5 characters`
                  : null
              }
              onChange={handleOnChange}
            />
            <InputComponent
              label="EMAIL"
              value={email}
              type="email"
              name="email"
              required
              className={!emailRegEx.test(email) ? 'invalid' : 'entered'}
              error={
                !emailRegEx.test(email) && email.length !== 0
                  ? `Invalid email address.`
                  : null
              }
              onChange={handleOnChange}
            />
            <InputComponent
              label="Phone Number"
              value={phone}
              type="text"
              name="phone"
              required
              className={!phoneRegEx.test(phone) ? 'invalid' : 'entered'}
              error={
                !phoneRegEx.test(phone) && phone?.length !== 0
                  ? `123-123-12345`
                  : null
              }
              onChange={handleOnChange}
            />

            <TextAreaComponent
              label="Description"
              id="description"
              name="description"
              value={description}
              error={
                description.length <= 15 && description?.length !== 0
                  ? `Description must contain at least 16 characters`
                  : null
              }
              onChange={handleOnChange}
            />

            <InputComponent
              label="Date of Birth"
              value={dateOfBirth}
              type="text"
              name="dateOfBirth"
              required
              className={!dobRegEx.test(dateOfBirth) ? 'invalid' : 'entered'}
              error={
                !dobRegEx.test(dateOfBirth) && dateOfBirth?.length !== 0
                  ? `dd-mm-yyyy`
                  : null
              }
              onChange={handleOnChange}
            />

            <ButtonComponent
              type="submit"
              text={
                !emailRegEx.test(email) ||
                !nameRegEx.test(name) ||
                !dobRegEx.test(dateOfBirth) ||
                description.length <= 15 ||
                !phoneRegEx.test(phone)
                  ? 'Disabled'
                  : 'submit'
              }
              variant="primary"
              disabled={
                !emailRegEx.test(email) ||
                !nameRegEx.test(name) ||
                !dobRegEx.test(dateOfBirth) ||
                description.length <= 15 ||
                !phoneRegEx.test(phone)
              }
            />
          </form>
        </div>
      </fieldset>
    </>
  );
};

export default AdminCreateProfileComponent;
