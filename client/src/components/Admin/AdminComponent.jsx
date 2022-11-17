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

import moment from 'moment';
import SpinnerComponent from '../Spinner/SpinnerComponent';

const AdminComponent = () => {
  const dispatch = useDispatch();
  const [tokenExpiration] = useState(
    'You are about to be logged out. Your token has expired.',
  );
  const [showUserAdminInputs, setShowUserAdminInputs] = useState(true);

  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { loading, error, userAdmin } = userAdminDetails;

  useEffect(() => {
    let ignore = false;
    //Dispatch your get action
    if (!ignore) {
      if (!userAdmin) {
        dispatch(userAdminDetailsAction());
      }
    }
    return () => {
      ignore = true;
    };
  }, [dispatch, userAdmin]);

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
      {loading ? (
        <SpinnerComponent />
      ) : (
        <>
          <div>
            {userAdmin?.isAdmin ? (
              <fieldset className="fieldSet">
                <div className="admin-nav-buttons-wrapper">
                  <ButtonComponent
                    type="button"
                    text={
                      <NavLink
                        className={(navData) =>
                          navData.isActive ? 'active' : ''
                        }
                        to="/admin"
                      >
                        Manage Users
                      </NavLink>
                    }
                    variant="info"
                    disabled={false}
                  />
                  <ButtonComponent
                    type="button"
                    text={
                      <NavLink
                        className={(navData) =>
                          navData.isActive ? 'active' : ''
                        }
                        to="/admin-players"
                      >
                        Manage Players
                      </NavLink>
                    }
                    variant="info"
                    disabled={false}
                  />
                  <ButtonComponent
                    type="button"
                    text={
                      <NavLink
                        className={(navData) =>
                          navData.isActive ? 'active' : ''
                        }
                        to="/admin-general-information"
                      >
                        Manage General Information
                      </NavLink>
                    }
                    variant="info"
                    disabled={false}
                  />
                </div>
              </fieldset>
            ) : null}
          </div>

          <div className="wrapper">
            <div className="inner-content-wrapper">
              <fieldset className="fieldSet">
                <legend>Edit your details</legend>
                <ButtonComponent
                  type="button"
                  text={
                    showUserAdminInputs
                      ? 'EDIT YOUR DETAILS'
                      : 'BACK TO USER DETAILS'
                  }
                  variant="warning"
                  disabled={false}
                  onClick={() => setShowUserAdminInputs((prev) => !prev)}
                />
              </fieldset>

              {userAdmin?.isConfirmed ? (
                showUserAdminInputs ? (
                  <>
                    <fieldset className="fieldSet">
                      <legend>{userAdmin?.username}</legend>
                      <div>
                        <img
                          src="../assets/male.png"
                          className="user-profile-image"
                          alt={userAdmin?.name}
                        />

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
                      <div className="dates-wrapper">
                        <p>Created {moment(userAdmin?.createdAt).fromNow()}</p>
                        <p>Updated {moment(userAdmin?.updatedAt).fromNow()}</p>
                      </div>
                    </fieldset>
                  </>
                ) : (
                  <>
                    <UserAdminEditComponent />
                  </>
                )
              ) : (
                <SpinnerComponent />
              )}
            </div>

            <AdminProfileComponent />
          </div>
        </>
      )}

      {userAdmin === undefined && !loading ? (
        <>
          <p>{tokenExpiration}</p>
        </>
      ) : null}
    </>
  );
};

export default AdminComponent;
