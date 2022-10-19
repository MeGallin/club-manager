import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './CreateProfileComponent.scss';
import InputComponent from '../../../components/Input/InputComponent';
import ButtonComponent from '../../../components/Button/ButtonComponent';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import SuccessComponent from '../../Success/SuccessComponent';

import { profileCreateProfileAction } from '../../../store/actions/profileActions';

const CreateProfileComponent = () => {
  const dispatch = useDispatch();

  const nameRegEx = /[a-zA-Z]{4,}/;
  const emailRegEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    description: '',
    preferredPosition: '',
    preferredNumber: '',
  });
  const {
    name,
    email,
    dateOfBirth,
    description,
    preferredPosition,
    preferredNumber,
  } = formData;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const profileGetProfile = useSelector((state) => state.profileGetProfile);
  const { profile } = profileGetProfile;

  const profileCreateProfile = useSelector(
    (state) => state.profileCreateProfile,
  );
  const { success, error } = profileCreateProfile;

  console.log('Create success', success, error);

  const handleOnChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateProfileSubmit = (e) => {
    e.preventDefault();

    if (userInfo) {
      //Dispatch your CREATE action
      dispatch(profileCreateProfileAction(formData));
    }

    setFormData({
      name: '',
      email: '',
      dateOfBirth: '',
      description: '',
      preferredPosition: '',
      preferredNumber: '',
    });
  };

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {success ? (
        <SuccessComponent message="Registration has been successful" />
      ) : null}
      {!profile ? (
        <fieldset className="fieldSet">
          <legend>Create Profile Form</legend>
          <div>
            <form onSubmit={handleCreateProfileSubmit}>
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
                label="Date of Birth"
                value={dateOfBirth}
                type="text"
                name="dateOfBirth"
                required
                className={dateOfBirth.length <= 5 ? 'invalid' : 'entered'}
                error={
                  dateOfBirth.length <= 5 && dateOfBirth.length !== 0
                    ? `Date of birth must contain at least 6 characters`
                    : null
                }
                onChange={handleOnChange}
              />
              <InputComponent
                label="Description"
                value={description}
                type="text"
                name="description"
                required
                className={description.length <= 5 ? 'invalid' : 'entered'}
                error={
                  description.length <= 5 && description.length !== 0
                    ? `Date of birth must contain at least 6 characters`
                    : null
                }
                onChange={handleOnChange}
              />
              <InputComponent
                label="Preferred Position"
                value={preferredPosition}
                type="text"
                name="preferredPosition"
                required
                className={
                  preferredPosition.length <= 5 ? 'invalid' : 'entered'
                }
                error={
                  preferredPosition.length <= 5 &&
                  preferredPosition.length !== 0
                    ? `Date of birth must contain at least 6 characters`
                    : null
                }
                onChange={handleOnChange}
              />
              <InputComponent
                label="Preferred Number"
                value={preferredNumber}
                type="number"
                name="preferredNumber"
                required
                className={preferredNumber.length <= 1 ? 'invalid' : 'entered'}
                error={
                  preferredNumber.length <= 1 && preferredNumber.length !== 0
                    ? `Number field cant be empty`
                    : null
                }
                onChange={handleOnChange}
              />

              <ButtonComponent
                type="submit"
                text="submit"
                variant="primary"
                disabled={
                  !emailRegEx.test(email) ||
                  !nameRegEx.test(name) ||
                  description.length <= 10 ||
                  preferredNumber.length <= 1 ||
                  preferredPosition.length <= 10
                }
              />
            </form>
          </div>
        </fieldset>
      ) : null}
    </>
  );
};

export default CreateProfileComponent;
