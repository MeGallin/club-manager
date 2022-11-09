import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './UserAdminComponent.scss';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { userAdminDetailsAction } from '../../store/actions/userActions';

import ErrorComponent from '../ErrorComponent/ErrorComponent';
import UserAdminEditComponent from './UserAdminEditComponent';
import ButtonComponent from '../Button/ButtonComponent';
import AdminGetGeneralInfoComponent from '../GeneralInfoComponent/AdminGetGeneralInfoComponent/AdminGetGeneralInfoComponent';

import moment from 'moment';

const UserAdminComponent = () => {
  const dispatch = useDispatch();

  const [tokenExpiration] = useState(
    'You are about to be logged out. Your token has expired.',
  );
  const [showUserAdminInputs, setShowUserAdminInputs] = useState(true);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    let ignore = false;
    //Dispatch your get action
    if (userInfo) {
      if (!ignore) dispatch(userAdminDetailsAction());
    }
    return () => (ignore = true);
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

      <div className="wrapper">
        <div className="inner-content-wrapper">
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
              <div>
                <fieldset className="fieldSet">
                  <legend>USER DETAILS</legend>
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

                  <div className="dates-wrapper">
                    <p>CREATED {moment(userAdmin?.createdAt).fromNow()}</p>
                    <p>UPDATED {moment(userAdmin?.updatedAt).fromNow()}</p>
                  </div>
                </fieldset>
              </div>
            ) : (
              <>
                <UserAdminEditComponent />
              </>
            )
          ) : null}
        </div>
        <div>
          <AdminGetGeneralInfoComponent />
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
