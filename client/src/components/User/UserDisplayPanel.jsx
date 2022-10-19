import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './UserAdminPanel.scss';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { userAdminDetailsAction } from '../../store/actions/userActions';

import ErrorComponent from '../ErrorComponent/ErrorComponent';
import UserAdminPanel from './UserAdminPanel';
import ButtonComponent from '../../components/Button/ButtonComponent';
import ProfileComponent from '../Profile/ProfileComponent/ProfileComponent';
import CreateProfileComponent from '../Profile/CreateProfileComponent/CreateProfileComponent';
import SpinnerComponent from '../Spinner/SpinnerComponent';

const UserDisplayPanel = () => {
  const dispatch = useDispatch();

  const [tokenExpiration] = useState(
    'You are about to be logged out. Your token has expired.',
  );
  const [showInputs, setShowInputs] = useState(true);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    //Dispatch your get action
    if (userInfo) {
      dispatch(userAdminDetailsAction());
    }
  }, [userInfo, dispatch]);

  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { loading, success, error, userAdmin } = userAdminDetails;

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}

      {!userAdmin?.isConfirmed ? (
        <ErrorComponent
          error={
            'Please confirm your email address with the link that was provided.'
          }
        />
      ) : null}

      <div className="wrapper">
        <div className="button-wrapper">
          <div>
            {userAdmin?.isAdmin ? (
              <ButtonComponent
                type="button"
                text={
                  <NavLink
                    className={(navData) => (navData.isActive ? 'active' : '')}
                    to="/admin"
                  >
                    Admin View
                  </NavLink>
                }
                variant="light"
                disabled={false}
              />
            ) : null}
          </div>
          <ButtonComponent
            type="button"
            text={showInputs ? 'EDIT USER DETAILS' : 'DISPLAY USER DETAILS'}
            variant="dark"
            disabled={false}
            onClick={() => setShowInputs(!showInputs)}
          />
        </div>

        <div className="cont-wrapper">
          {success && userAdmin?.isConfirmed ? (
            showInputs ? (
              <>
                <fieldset className="fieldSet">
                  <legend>USER DETAILS</legend>

                  <p>Photo to follow</p>
                  <p>USER NAME : {userAdmin?.username}</p>

                  <p>EMAIL : {userAdmin?.email}</p>
                  <p>
                    IS ADMIN :{' '}
                    {userAdmin?.isAdmin === false ? (
                      <FaThumbsDown className="ra-thumbs-down" />
                    ) : (
                      <FaThumbsUp className="ra-thumbs-up" />
                    )}
                  </p>
                  <p>
                    IS CONFIRMED :{' '}
                    {userAdmin?.isConfirmed === false ? (
                      <FaThumbsDown className="ra-thumbs-down" />
                    ) : (
                      <FaThumbsUp className="ra-thumbs-up" />
                    )}
                  </p>
                  <p>
                    IS SUSPENDED :{' '}
                    {userAdmin?.isSuspended === false ? (
                      <FaThumbsDown className="ra-thumbs-down" />
                    ) : (
                      <FaThumbsUp className="ra-thumbs-up" />
                    )}
                  </p>
                  <p>CREATED : {userAdmin?.createdAt}</p>
                  <p>UPDATED : {userAdmin?.updatedAt}</p>
                </fieldset>
                <ProfileComponent />
                <CreateProfileComponent />
              </>
            ) : (
              <>
                <UserAdminPanel />
              </>
            )
          ) : null}
        </div>
      </div>

      {userAdmin === undefined ? (
        <>
          <p>{tokenExpiration}</p>
        </>
      ) : null}
    </>
  );
};

export default UserDisplayPanel;
