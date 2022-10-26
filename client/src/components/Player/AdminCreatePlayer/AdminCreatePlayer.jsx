import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './AdminCreatePlayer.scss';

import InputComponent from '../../../components/Input/InputComponent';
import ButtonComponent from '../../../components/Button/ButtonComponent';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import SuccessComponent from '../../Success/SuccessComponent';

import { adminCreatePlayerAction } from '../../../store/actions/playerActions';

import {
  nameRegEx,
  emailRegEx,
  dobRegEx,
  preferredNumberRegEx,
} from '../../../utils/regEx';
import TextAreaComponent from '../../TextArea/TextAreaComponent';

const AdminCreatePlayer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { userAdmin } = userAdminDetails;

  const [formData, setFormData] = useState({
    name: '',
    shirtNumber: '',
    nameOnShirt: '',
    villageName: '',
    GovernmentId: '',
    dateOfBirth: '',
    startDate: '',
    endDate: '',
    renewalMethod: '',
    status: '',
    uniform: '',
    email: '',
    notes: '',
  });
  const {
    name,
    shirtNumber,
    nameOnShirt,
    villageName,
    GovernmentId,
    dateOfBirth,
    startDate,
    endDate,
    renewalMethod,
    status,
    uniform,
    email,
    notes,
  } = formData;

  const handleOnChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateAdminPlayerSubmit = (e) => {
    e.preventDefault();

    if (!userInfo && !userAdmin?.isAdmin) {
      navigate('/login');
    } else {
      //Dispatch your CREATE action
      dispatch(adminCreatePlayerAction(formData));
    }
  };

  const adminCreatePlayer = useSelector((state) => state.adminCreatePlayer);
  const { error, success } = adminCreatePlayer;

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {success ? (
        <SuccessComponent message="Registration has been successful" />
      ) : null}
      <fieldset className="fieldSet">
        <legend>Create Player Profile</legend>
        <div>
          <form onSubmit={handleCreateAdminPlayerSubmit}>
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
              label="Shirt Number"
              value={shirtNumber}
              type="number"
              name="shirtNumber"
              required
              className={
                !preferredNumberRegEx.test(shirtNumber) ? 'invalid' : 'entered'
              }
              error={
                !preferredNumberRegEx.test(shirtNumber) &&
                shirtNumber?.length !== 0
                  ? `Please choose a number between 1 and 100`
                  : null
              }
              onChange={handleOnChange}
            />

            <InputComponent
              label="Name on Shirt"
              value={nameOnShirt}
              type="text"
              name="nameOnShirt"
              required
              className={!nameRegEx.test(nameOnShirt) ? 'invalid' : 'entered'}
              error={
                !nameRegEx.test(nameOnShirt) && nameOnShirt.length !== 0
                  ? `Name must contain at least 5 characters`
                  : null
              }
              onChange={handleOnChange}
            />

            <InputComponent
              label="Village Name"
              value={villageName}
              type="text"
              name="villageName"
              required
              className={!nameRegEx.test(villageName) ? 'invalid' : 'entered'}
              error={
                !nameRegEx.test(villageName) && villageName.length !== 0
                  ? `Name must contain at least 5 characters`
                  : null
              }
              onChange={handleOnChange}
            />

            <InputComponent
              label="Government ID"
              value={GovernmentId}
              type="text"
              name="GovernmentId"
              required
              className={!nameRegEx.test(GovernmentId) ? 'invalid' : 'entered'}
              error={
                !nameRegEx.test(GovernmentId) && GovernmentId.length !== 0
                  ? `Name must contain at least 5 characters`
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

            <InputComponent
              label="Start Date"
              value={startDate}
              type="text"
              name="startDate"
              required
              className={!dobRegEx.test(startDate) ? 'invalid' : 'entered'}
              error={
                !dobRegEx.test(startDate) && dateOfBirth?.length !== 0
                  ? `dd-mm-yyyy`
                  : null
              }
              onChange={handleOnChange}
            />

            <InputComponent
              label="End Date"
              value={endDate}
              type="text"
              name="endDate"
              required
              className={!dobRegEx.test(endDate) ? 'invalid' : 'entered'}
              error={
                !dobRegEx.test(endDate) && dateOfBirth?.length !== 0
                  ? `dd-mm-yyyy`
                  : null
              }
              onChange={handleOnChange}
            />
            <div className="player-dropdown-wrapper">
              <h3>These should be dropdowns</h3>
              <InputComponent
                label="Renewal Method"
                value={renewalMethod}
                type="text"
                name="renewalMethod"
                required
                className={
                  !nameRegEx.test(renewalMethod) ? 'invalid' : 'entered'
                }
                error={
                  !nameRegEx.test(renewalMethod) && renewalMethod.length !== 0
                    ? `Name must contain at least 5 characters`
                    : null
                }
                onChange={handleOnChange}
              />

              <InputComponent
                label="Status"
                value={status}
                type="text"
                name="status"
                required
                className={!nameRegEx.test(status) ? 'invalid' : 'entered'}
                error={
                  !nameRegEx.test(status) && status.length !== 0
                    ? `Name must contain at least 5 characters`
                    : null
                }
                onChange={handleOnChange}
              />

              <InputComponent
                label="Uniform"
                value={uniform}
                type="text"
                name="uniform"
                required
                className={!nameRegEx.test(uniform) ? 'invalid' : 'entered'}
                error={
                  !nameRegEx.test(uniform) && uniform.length !== 0
                    ? `Name must contain at least 5 characters`
                    : null
                }
                onChange={handleOnChange}
              />
            </div>
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

            <TextAreaComponent
              label="Notes"
              id="notes"
              name="notes"
              value={notes}
              error={
                notes.length <= 15 && notes?.length !== 0
                  ? `Description must contain at least 16 characters`
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
                notes.length <= 15
                  ? 'Disabled'
                  : 'submit'
              }
              variant="primary"
              disabled={
                !emailRegEx.test(email) ||
                !nameRegEx.test(name) ||
                !dobRegEx.test(dateOfBirth) ||
                notes.length <= 15
              }
            />
          </form>
        </div>
      </fieldset>
    </>
  );
};

export default AdminCreatePlayer;
