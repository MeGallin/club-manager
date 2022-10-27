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
import SelectOptionComponent from '../../SelectOptionComponent/SelectOptionComponent';

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
    governmentId: '',
    dateOfBirth: '',
    startDate: '',
    endDate: '',
    email: '',
    notes: '',
  });

  const {
    name,
    shirtNumber,
    nameOnShirt,
    villageName,
    governmentId,
    dateOfBirth,
    startDate,
    endDate,
    email,
    notes,
  } = formData;

  const handleOnChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.name]: e.value,
    }));
  };

  const handleCreateAdminPlayerSubmit = (e) => {
    e.preventDefault();

    if (!userInfo && !userAdmin?.isAdmin) {
      navigate('/login');
    } else {
      //Dispatch your CREATE action
      dispatch(adminCreatePlayerAction(formData));
      setFormData({
        name: '',
        shirtNumber: '',
        nameOnShirt: '',
        villageName: '',
        governmentId: '',
        dateOfBirth: '',
        startDate: '',
        endDate: '',
        email: '',
        notes: '',
      });
    }
  };

  const adminCreatePlayer = useSelector((state) => state.adminCreatePlayer);
  const { error, success } = adminCreatePlayer;

  const renewalInputOptions = [
    { label: 'Manual', value: 'Manual', name: 'renewalMethod' },
    { label: 'Online', value: 'Online', name: 'renewalMethod' },
  ];
  const statusInputOptions = [
    { label: 'Renewed', value: 'Renewed', name: 'status' },
    { label: 'New', value: 'New', name: 'status' },
    { label: 'Pending', value: 'Pending', name: 'status' },
  ];
  const uniformInputOptions = [
    { label: 'Yes', value: 'true', name: 'uniform' },
    { label: 'No', value: 'false', name: 'uniform' },
  ];

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {success ? (
        <SuccessComponent message={'Your profile was successfully created'} />
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
              onChange={(e) => handleOnChange(e.target)}
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
              onChange={(e) => handleOnChange(e.target)}
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
              onChange={(e) => handleOnChange(e.target)}
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
              onChange={(e) => handleOnChange(e.target)}
            />

            <InputComponent
              label="Government ID"
              value={governmentId}
              type="text"
              name="governmentId"
              required
              className={!nameRegEx.test(governmentId) ? 'invalid' : 'entered'}
              error={
                !nameRegEx.test(governmentId) && governmentId.length !== 0
                  ? `Name must contain at least 5 characters`
                  : null
              }
              onChange={(e) => handleOnChange(e.target)}
            />

            <div className="player-dropdown-wrapper">
              <div className="player-dropdown-wrapper__inner">
                <InputComponent
                  label="Date of Birth"
                  value={dateOfBirth}
                  type="text"
                  name="dateOfBirth"
                  required
                  className={
                    !dobRegEx.test(dateOfBirth) ? 'invalid' : 'entered'
                  }
                  error={
                    !dobRegEx.test(dateOfBirth) && dateOfBirth?.length !== 0
                      ? `dd-mm-yyyy`
                      : null
                  }
                  onChange={(e) => handleOnChange(e.target)}
                />
              </div>
              <div className="player-dropdown-wrapper__inner">
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
                  onChange={(e) => handleOnChange(e.target)}
                />
              </div>
              <div className="player-dropdown-wrapper__inner">
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
                  onChange={(e) => handleOnChange(e.target)}
                />
              </div>
            </div>

            <div className="player-dropdown-wrapper">
              <div className="player-dropdown-wrapper__inner">
                <SelectOptionComponent
                  onChange={handleOnChange}
                  options={renewalInputOptions}
                  label="Renewal"
                />
              </div>
              <div className="player-dropdown-wrapper__inner">
                <SelectOptionComponent
                  onChange={handleOnChange}
                  options={statusInputOptions}
                  label="Status"
                />
              </div>
              <div className="player-dropdown-wrapper__inner">
                <SelectOptionComponent
                  onChange={handleOnChange}
                  options={uniformInputOptions}
                  label="Uniform"
                />
              </div>
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
              onChange={(e) => handleOnChange(e.target)}
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
              onChange={(e) => handleOnChange(e.target)}
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
