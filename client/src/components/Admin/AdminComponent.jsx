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
import GeneralInfoComponent from '../GeneralInfoComponent/GeneralInfoComponent';

const AdminComponent = () => {
  const dispatch = useDispatch();
  const [tokenExpiration] = useState(
    'You are about to be logged out. Your token has expired.',
  );
  const [showUserAdminInputs, setShowUserAdminInputs] = useState(true);

  useEffect(() => {
    let ignore = false;
    //Dispatch your get action
    if (!ignore) {
      dispatch(userAdminDetailsAction());
    }
    return () => {
      ignore = true;
    };
  }, [dispatch]);

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
          <div className="admin-nav-buttons-wrapper">
            <ButtonComponent
              type="button"
              text={
                <NavLink
                  className={(navData) => (navData.isActive ? 'active' : '')}
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
                  className={(navData) => (navData.isActive ? 'active' : '')}
                  to="/admin-players"
                >
                  Manage Players
                </NavLink>
              }
              variant="info"
              disabled={false}
            />
          </div>
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
              onClick={() => setShowUserAdminInputs((prev) => !prev)}
            />
          </fieldset>

          {success && userAdmin?.isConfirmed ? (
            showUserAdminInputs ? (
              <>
                <fieldset className="fieldSet">
                  <legend>USER DETAILS</legend>
                  <div className="inner-content-wrapper">
                    <div
                      className="user-profile-image"
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
          ) : null}
        </div>

        <div className="cont-wrapper">
          <AdminProfileComponent />
          <GeneralInfoComponent />
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
