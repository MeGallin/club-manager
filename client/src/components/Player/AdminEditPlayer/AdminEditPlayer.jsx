import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './AdminEditPlayer.scss';

import ButtonComponent from '../../Button/ButtonComponent';

import {
  nameRegEx,
  emailRegEx,
  dobRegEx,
  preferredNumberRegEx,
} from '../../../utils/regEx';
import TextAreaComponent from '../../TextArea/TextAreaComponent';
import SelectOptionComponent from '../../SelectOptionComponent/SelectOptionComponent';
import InputComponent from '../../Input/InputComponent';

import { adminEditPlayerAction } from '../../../store/actions/playerActions';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import SuccessComponent from '../../Success/SuccessComponent';
import SpinnerComponent from '../../Spinner/SpinnerComponent';

const AdminEditPlayer = ({ playerId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { userAdmin } = userAdminDetails;
  const adminGetPlayers = useSelector((state) => state.adminGetPlayers);
  const { players } = adminGetPlayers;

  const player = players?.filter((player) => {
    if (player._id === playerId) {
      return player;
    }
    return false;
  });

  const [formData, setFormData] = useState({
    id: player[0]._id,
    name: player[0].name,
    shirtNumber: player[0].shirtNumber,
    nameOnShirt: player[0].nameOnShirt,
    villageName: player[0].villageName,
    governmentId: player[0].governmentId,
    dateOfBirth: player[0].dateOfBirth,
    startDate: player[0].startDate,
    endDate: player[0].endDate,
    email: player[0].email,
    notes: player[0].notes,
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

  const handleAdminPEditPlayer = (e) => {
    e.preventDefault();

    if (!userInfo && !userAdmin?.isAdmin) {
      navigate('/login');
    } else {
      //Dispatch your CREATE action

      dispatch(adminEditPlayerAction(formData));
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

  const adminEditPlayer = useSelector((state) => state.adminEditPlayer);
  const { loading, success, error } = adminEditPlayer;

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {success ? (
        <SuccessComponent message="Player profile was successfully updated" />
      ) : null}

      {loading ? (
        <SpinnerComponent />
      ) : (
        <fieldset className="fieldSet">
          <legend>Edit Player Profile</legend>
          <div>
            <form onSubmit={handleAdminPEditPlayer}>
              <InputComponent
                label="Full name and Surname"
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
                  !preferredNumberRegEx.test(shirtNumber)
                    ? 'invalid'
                    : 'entered'
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
                className={
                  !nameRegEx.test(governmentId) ? 'invalid' : 'entered'
                }
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
                    className={
                      !dobRegEx.test(startDate) ? 'invalid' : 'entered'
                    }
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
      )}
    </>
  );
};

export default AdminEditPlayer;
