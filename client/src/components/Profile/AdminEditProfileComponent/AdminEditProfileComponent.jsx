import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './AdminEditProfileComponent.scss';

import { adminEditProfileAction } from '../../../store/actions/adminActions';

import InputComponent from '../../Input/InputComponent';
import ButtonComponent from '../../Button/ButtonComponent';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import SuccessComponent from '../../Success/SuccessComponent';
import TextAreaComponent from '../../TextArea/TextAreaComponent';
import {
  nameRegEx,
  emailRegEx,
  dobRegEx,
  phoneRegEx,
} from '../../../utils/regEx';

const AdminEditProfileComponent = () => {
  const dispatch = useDispatch();

  const adminAllProfiles = useSelector((state) => state.adminAllProfiles);
  const { profiles } = adminAllProfiles;
  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { userAdmin } = userAdminDetails;

  const adminProfile = profiles?.filter((profile) => {
    if (profile?.user === userAdmin?._id) {
      return profile;
    }
    return false;
  });

  const [formData, setFormData] = useState({
    id: adminProfile[0]?._id,
    name: adminProfile[0]?.name,
    email: adminProfile[0]?.email,
    phone: adminProfile[0]?.phone,
    description: adminProfile[0]?.description,
    dateOfBirth: adminProfile[0]?.dateOfBirth,
  });
  const { name, email, dateOfBirth, description, phone } = formData;

  const handleOnChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditAdminProfileSubmit = (e) => {
    e.preventDefault();
    //Dispatch action
    dispatch(adminEditProfileAction(formData));
  };

  const adminEditProfile = useSelector((state) => state.adminEditProfile);
  const { success, error } = adminEditProfile;

  return (
    <>
      {error ? <ErrorComponent /> : null}
      {success ? (
        <SuccessComponent message="Profile was successfully updated" />
      ) : null}
      <fieldset className="fieldSet">
        <legend>Edit ADMIN Profile</legend>
        <div>
          <form onSubmit={handleEditAdminProfileSubmit}>
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

export default AdminEditProfileComponent;
