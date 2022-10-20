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
  const dobRegEx =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  const preferredNumberRegEx = /^[0-9]$|^[1-9][0-9]$|^(100)$/;

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
                className={!dobRegEx.test(dateOfBirth) ? 'invalid' : 'entered'}
                error={
                  !dobRegEx.test(dateOfBirth) && dateOfBirth?.length !== 0
                    ? `yyyy-mm-dd`
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
                className={description.length <= 15 ? 'invalid' : 'entered'}
                error={
                  description.length <= 15 && description?.length !== 0
                    ? `Description must contain at least 16 characters`
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
                    ? `Your preferred position must contain at least 6 characters`
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
                className={
                  !preferredNumberRegEx.test(preferredNumber)
                    ? 'invalid'
                    : 'entered'
                }
                error={
                  !preferredNumberRegEx.test(preferredNumber) &&
                  preferredNumber?.length !== 0
                    ? `Please choose a number between 1 and 100`
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
                  !preferredNumberRegEx.test(preferredNumber) ||
                  preferredPosition.length <= 5
                    ? 'Disabled'
                    : 'submit'
                }
                variant="primary"
                disabled={
                  !emailRegEx.test(email) ||
                  !nameRegEx.test(name) ||
                  !dobRegEx.test(dateOfBirth) ||
                  description.length <= 15 ||
                  !preferredNumberRegEx.test(preferredNumber) ||
                  preferredPosition.length <= 5
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
