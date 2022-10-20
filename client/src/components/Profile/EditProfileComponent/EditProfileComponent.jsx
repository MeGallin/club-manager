import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './EditProfileComponent.scss';

import { profileEditProfileAction } from '../../../store/actions/profileActions';

import InputComponent from '../../Input/InputComponent';
import ButtonComponent from '../../Button/ButtonComponent';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import SuccessComponent from '../../Success/SuccessComponent';

const EditProfileComponent = () => {
  const dispatch = useDispatch();

  const nameRegEx = /[a-zA-Z]{3,}/;
  const emailRegEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  const dobRegEx =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  const preferredNumberRegEx = /^[0-9]$|^[1-9][0-9]$|^(100)$/;

  const profileGetProfile = useSelector((state) => state.profileGetProfile);
  const { profile } = profileGetProfile;

  const [formData, setFormData] = useState({
    id: profile?._id,
    name: profile !== undefined ? profile?.name : '',
    email: profile !== undefined ? profile?.email : '',
    dateOfBirth: profile !== undefined ? profile?.dateOfBirth : '',
    description: profile !== undefined ? profile?.description : '',
    preferredPosition: profile !== undefined ? profile?.preferredPosition : '',
    preferredNumber: profile !== undefined ? profile?.preferredNumber : '',
  });
  const {
    name,
    email,
    dateOfBirth,
    description,
    preferredPosition,
    preferredNumber,
  } = formData;

  const handleOnChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    //Dispatch EDit profile action
    dispatch(profileEditProfileAction(formData));

    setFormData({
      name: '',
      email: '',
      dateOfBirth: '',
      description: '',
      preferredPosition: '',
      preferredNumber: '',
    });
  };

  const profileEditProfile = useSelector((state) => state.profileEditProfile);
  const { loading, error, success } = profileEditProfile;

  return (
    <div>
      {error ? <ErrorComponent error={error} /> : null}
      {success ? <SuccessComponent message={'Update was successful'} /> : null}
      <fieldset className="fieldSet">
        <legend>Edit Your PROFILE Details</legend>
        <form onSubmit={handleUpdateSubmit}>
          <InputComponent
            label="Name or nick-name"
            value={name}
            type="text"
            name="name"
            required
            className={!nameRegEx.test(name) ? 'invalid' : 'entered'}
            error={
              !nameRegEx.test(name) && name?.length !== 0
                ? `Username must contain at least 3 characters`
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
              !emailRegEx.test(email) && email?.length !== 0
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
            className={preferredPosition.length <= 5 ? 'invalid' : 'entered'}
            error={
              preferredPosition.length <= 5 && preferredPosition.length !== 0
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
      </fieldset>
    </div>
  );
};

export default EditProfileComponent;
