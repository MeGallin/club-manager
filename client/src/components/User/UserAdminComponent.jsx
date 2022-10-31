import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './UserAdminComponent.scss';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { userAdminDetailsAction } from '../../store/actions/userActions';

import ErrorComponent from '../ErrorComponent/ErrorComponent';
import UserAdminEditComponent from './UserAdminEditComponent';
import ButtonComponent from '../Button/ButtonComponent';
import ProfileComponent from '../Profile/ProfileComponent/ProfileComponent';

import EditProfileComponent from '../Profile/EditProfileComponent/EditProfileComponent';

import moment from 'moment';
import CreateProfileComponent from '../Profile/CreateProfileComponent/CreateProfileComponent';

const UserAdminComponent = () => {
  const dispatch = useDispatch();

  const [tokenExpiration] = useState(
    'You are about to be logged out. Your token has expired.',
  );
  const [showUserAdminInputs, setShowUserAdminInputs] = useState(true);
  const [showProfileInputs, setShowProfileInputs] = useState(true);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    //Dispatch your get action
    if (userInfo) {
      dispatch(userAdminDetailsAction());
    }
  }, [userInfo, dispatch]);

  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { success, error, userAdmin } = userAdminDetails;

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
            variant="danger"
            disabled={false}
          />
        ) : null}
      </div>

      <div className="wrapper">
        <div className="cont-wrapper">
          <fieldset className="fieldSet">
            <ButtonComponent
              type="button"
              text={
                showUserAdminInputs
                  ? 'EDIT USER DETAILS'
                  : 'BACK TO USER DETAILS'
              }
              variant="dark"
              disabled={false}
              onClick={() => setShowUserAdminInputs(!showUserAdminInputs)}
            />
          </fieldset>

          {success && userAdmin?.isConfirmed ? (
            showUserAdminInputs ? (
              <>
                <fieldset className="fieldSet">
                  <legend>USER DETAILS</legend>
                  <div className="inner-content-wrapper">
                    <div
                      className="user-profile-image inner-inner-wrapper"
                      style={{
                        backgroundImage: `url('../assets/male.png')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        margin: '0.2em',
                      }}
                    ></div>
                    <div className="inner-inner-wrapper">
                      <p>USER NAME : {userAdmin?.username}</p>
                      <p>EMAIL : {userAdmin?.email}</p>
                      <p>
                        ADMIN :{' '}
                        {userAdmin?.isAdmin === false ? (
                          <FaThumbsDown className="ra-thumbs-down" />
                        ) : (
                          <FaThumbsUp className="ra-thumbs-up" />
                        )}
                      </p>
                      <p>
                        COACH :{' '}
                        {userAdmin?.isCoach === false ? (
                          <FaThumbsDown className="ra-thumbs-down" />
                        ) : (
                          <FaThumbsUp className="ra-thumbs-up" />
                        )}
                      </p>
                      <p>
                        PLAYER :{' '}
                        {userAdmin?.isPlayer === false ? (
                          <FaThumbsDown className="ra-thumbs-down" />
                        ) : (
                          <FaThumbsUp className="ra-thumbs-up" />
                        )}
                      </p>
                      <p>
                        PARENT :{' '}
                        {userAdmin?.isParent === false ? (
                          <FaThumbsDown className="ra-thumbs-down" />
                        ) : (
                          <FaThumbsUp className="ra-thumbs-up" />
                        )}
                      </p>
                      <p>
                        CONFIRMED :{' '}
                        {userAdmin?.isConfirmed === false ? (
                          <FaThumbsDown className="ra-thumbs-down" />
                        ) : (
                          <FaThumbsUp className="ra-thumbs-up" />
                        )}
                      </p>
                      <p>
                        SUSPENDED :{' '}
                        {userAdmin?.isSuspended === false ? (
                          <FaThumbsDown className="ra-thumbs-down" />
                        ) : (
                          <FaThumbsUp className="ra-thumbs-up" />
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="dates-wrapper">
                    <p>CREATED {moment(userAdmin?.createdAt).fromNow()}</p>
                    <p>UPDATED {moment(userAdmin?.updatedAt).fromNow()}</p>
                  </div>
                </fieldset>
              </>
            ) : (
              <>
                <UserAdminEditComponent />
              </>
            )
          ) : null}
        </div>

        <div className="cont-wrapper">
          <fieldset className="fieldSet">
            <ButtonComponent
              type="button"
              text={
                !showProfileInputs
                  ? ' BACK TO PROFILE DETAILS'
                  : 'EDIT ADMIN PROFILE DETAILS'
              }
              variant="warning"
              disabled={false}
              onClick={() => setShowProfileInputs(!showProfileInputs)}
            />
          </fieldset>
          {showProfileInputs ? (
            <>
              <CreateProfileComponent />
              <ProfileComponent />
            </>
          ) : (
            <>
              <EditProfileComponent />
            </>
          )}
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

export default UserAdminComponent;
