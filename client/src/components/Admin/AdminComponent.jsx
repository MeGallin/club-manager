import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './AdminComponent.scss';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { userAdminDetailsAction } from '../../store/actions/userActions';

import ErrorComponent from '../ErrorComponent/ErrorComponent';
import UserAdminEditComponent from '../User/UserAdminEditComponent';
import ButtonComponent from '../Button/ButtonComponent';
import AdminProfileComponent from '../Profile/AdminProfileComponent/AdminProfileComponent';
import AdminEditProfileComponent from '../Profile/AdminEditProfileComponent/AdminEditProfileComponent';

import moment from 'moment';

const AdminComponent = () => {
  const dispatch = useDispatch();
  const [tokenExpiration] = useState(
    'You are about to be logged out. Your token has expired.',
  );
  const [showUserAdminInputs, setShowUserAdminInputs] = useState(true);
  const [showProfileInputs, setShowProfileInputs] = useState(true);

  useEffect(() => {
    //Dispatch your get action
    dispatch(userAdminDetailsAction());
  }, [dispatch]);
  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { success, error, userAdmin } = userAdminDetails;

  // const handleCreateAdminProfile = () => {
  //   //Dispatch create admin profile action
  //   console.log('create admin profile action');
  // };
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
                  <div>
                    <h3>PHOTO TO FOLLOW</h3>
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
          {/* <fieldset className="fieldSet">
            <ButtonComponent
              type="button"
              text="Create Admin Profile"
              variant="info"
              disabled={false}
              onClick={() => handleCreateAdminProfile()}
            />
          </fieldset> */}
          <fieldset className="fieldSet">
            <ButtonComponent
              type="button"
              text={
                showProfileInputs
                  ? 'EDIT PROFILE DETAILS'
                  : 'BACK TO PROFILE DETAILS'
              }
              variant="warning"
              disabled={false}
              onClick={() => setShowProfileInputs(!showProfileInputs)}
            />
          </fieldset>
          {showProfileInputs ? (
            <>
              <AdminProfileComponent />
            </>
          ) : (
            <AdminEditProfileComponent />
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

export default AdminComponent;
