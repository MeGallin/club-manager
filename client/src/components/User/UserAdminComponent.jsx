import { useState } from 'react';
import { useSelector } from 'react-redux';
import './UserAdminComponent.scss';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

import ErrorComponent from '../ErrorComponent/ErrorComponent';
import UserAdminEditComponent from './UserAdminEditComponent';
import ButtonComponent from '../Button/ButtonComponent';
import AdminGetGeneralInfoComponent from '../GeneralInfoComponent/AdminGetGeneralInfoComponent/AdminGetGeneralInfoComponent';

import moment from 'moment';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import UserGetPrivateMessagesComponent from '../PrivateMessages/UserGetPrivateMessagesComponent/UserGetPrivateMessagesComponent';

const UserAdminComponent = () => {
  const [tokenExpiration] = useState(
    'You are about to be logged out. Your token has expired.',
  );
  const [showUserAdminInputs, setShowUserAdminInputs] = useState(true);
  const [hideUserInfo, setHideUserInfo] = useState(true);
  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { loading, success, error, userAdmin } = userAdminDetails;

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {loading ? (
        <SpinnerComponent />
      ) : !userAdmin?.isConfirmed ? (
        <ErrorComponent
          error={
            'Please confirm your email address with the link that was provided.'
          }
        />
      ) : (
        <div>
          <div className="inner-content-wrapper">
            <fieldset className="fieldSet">
              <ButtonComponent
                type="button"
                text={hideUserInfo ? 'SHOW YOUR DETAILS' : 'HIDE YOUR DETAILS'}
                variant="info"
                disabled={false}
                onClick={() => setHideUserInfo(!hideUserInfo)}
              />
            </fieldset>

            {hideUserInfo ? null : (
              <>
                <fieldset className="fieldSet">
                  <ButtonComponent
                    type="button"
                    text={
                      showUserAdminInputs
                        ? 'EDIT YOUR DETAILS'
                        : 'BACK TO USER DETAILS'
                    }
                    variant="warning"
                    disabled={false}
                    onClick={() => setShowUserAdminInputs(!showUserAdminInputs)}
                  />
                </fieldset>

                {success && userAdmin?.isConfirmed ? (
                  showUserAdminInputs ? (
                    <div>
                      <fieldset className="fieldSet">
                        <legend>{userAdmin?.username}</legend>
                        <img
                          src="../assets/male.png"
                          className="user-profile-image"
                          alt={userAdmin?.name}
                        />
                        <p>USER NAME : {userAdmin?.username}</p>
                        <p>EMAIL : {userAdmin?.email}</p>
                        <p>
                          Registered Via Google:
                          {userAdmin?.registeredWithGoogle === false ||
                          userAdmin?.registeredWithGoogle === undefined ? (
                            <FaThumbsDown className="ra-thumbs-down" />
                          ) : (
                            <FaThumbsUp className="ra-thumbs-up" />
                          )}
                        </p>

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
                          <p>
                            CREATED {moment(userAdmin?.createdAt).fromNow()}
                          </p>
                          <p>
                            UPDATED {moment(userAdmin?.updatedAt).fromNow()}
                          </p>
                        </div>
                      </fieldset>
                    </div>
                  ) : (
                    <>
                      <UserAdminEditComponent />
                    </>
                  )
                ) : null}
              </>
            )}
          </div>
          <div>
            <AdminGetGeneralInfoComponent />
            <UserGetPrivateMessagesComponent />
          </div>
        </div>
      )}

      {userAdmin === undefined && !loading ? (
        <>
          <p>{tokenExpiration}</p>
        </>
      ) : null}
    </>
  );
};

export default UserAdminComponent;
