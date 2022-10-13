import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import {
  adminUsersDetailsAction,
  adminIsAdminAction,
  adminIsSuspendedAction,
} from '../../store/actions/adminActions';

import ButtonComponent from '../../components/Button/ButtonComponent';

import './AdminView.scss';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import SpinnerComponent from '../../components/Spinner/SpinnerComponent';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

import moment from 'moment';

const AdminView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    } else {
      dispatch(adminUsersDetailsAction());
    }
  }, [userInfo, navigate, dispatch]);

  const adminUsersDetails = useSelector((state) => state.adminUsersDetails);
  const { loading, error, allUsers } = adminUsersDetails;

  const handleIsAdmin = (userId, isAdmin) => {
    //Dispatch isAdmin Action
    dispatch(adminIsAdminAction(userId, isAdmin));
  };

  const handleIsSuspended = (userId, isSuspended) => {
    //Dispatch isAdmin Action
    dispatch(adminIsSuspendedAction(userId, isSuspended));
  };

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {loading ? (
        <SpinnerComponent />
      ) : (
        <>
          <ButtonComponent
            type="button"
            text={
              <NavLink
                className={(navData) => (navData.isActive ? 'active' : '')}
                to="/user-admin"
              >
                Return to your admin page
              </NavLink>
            }
            variant="light"
            disabled={false}
          />
          <div className="admin-wrapper">
            {allUsers?.users.map((user) => (
              <div key={user._id}>
                <fieldset className="fieldSet">
                  <legend>{user.username}</legend>

                  <div className="toggle-wrapper">
                    <div>EMAIL</div>
                    <p>
                      <a href={`mailto:${user.email}`}>{user.email}</a>
                    </p>
                  </div>

                  <div className="toggle-wrapper">
                    <div>CONFIRMED ?</div>
                    {user.isConfirmed ? (
                      <FaThumbsUp className="ra-thumbs-up" />
                    ) : (
                      <FaThumbsDown className="ra-thumbs-down" />
                    )}
                  </div>

                  {loading ? (
                    <SpinnerComponent />
                  ) : (
                    <>
                      {user?.username === userInfo?.username ||
                      user.email === 'admin@mail.com' ? (
                        <>
                          <p className="admin-warning">
                            You can't remove yourself as administrator
                          </p>
                        </>
                      ) : (
                        <div className="toggle-wrapper">
                          {user?.isAdmin ? (
                            <>
                              <ButtonComponent
                                type="button"
                                text="Remove Admin ?"
                                variant="danger"
                                onClick={() => handleIsAdmin(user?._id, false)}
                                disabled={
                                  user?.username === userInfo?.username ||
                                  user.email === 'admin@mail.com'
                                    ? true
                                    : false
                                }
                              />
                              <FaThumbsDown className="ra-thumbs-down" />
                            </>
                          ) : (
                            <>
                              <ButtonComponent
                                type="button"
                                text="Make Admin ?"
                                variant="dark"
                                onClick={() => handleIsAdmin(user?._id, true)}
                                disabled={
                                  user?.username === userInfo?.username ||
                                  user.email === 'admin@mail.com'
                                    ? true
                                    : false
                                }
                              />
                              <FaThumbsUp className="ra-thumbs-up" />
                            </>
                          )}
                        </div>
                      )}
                    </>
                  )}

                  {loading ? (
                    <SpinnerComponent />
                  ) : (
                    <>
                      {user?.username === userInfo?.username ||
                      user.email === 'admin@mail.com' ? (
                        <>
                          <p className="admin-warning">
                            You can't suspended yourself.
                          </p>
                        </>
                      ) : (
                        <div className="toggle-wrapper">
                          {user?.isSuspended ? (
                            <>
                              <ButtonComponent
                                type="button"
                                text="Unsuspend ?"
                                variant="dark"
                                onClick={() =>
                                  handleIsSuspended(user?._id, false)
                                }
                                disabled={
                                  user?.username === userInfo?.username ||
                                  user.email === 'admin@mail.com'
                                    ? true
                                    : false
                                }
                              />
                              <FaThumbsUp className="ra-thumbs-up" />
                            </>
                          ) : (
                            <>
                              <ButtonComponent
                                type="button"
                                text="Suspend ?"
                                variant="danger"
                                onClick={() =>
                                  handleIsSuspended(user?._id, true)
                                }
                                disabled={
                                  user?.username === userInfo?.username ||
                                  user.email === 'admin@mail.com'
                                    ? true
                                    : false
                                }
                              />
                              <FaThumbsDown className="ra-thumbs-down" />
                            </>
                          )}
                        </div>
                      )}
                    </>
                  )}

                  <div className="admin-dates-wrapper">
                    <p>
                      CREATED:
                      {moment(user.createdAt).format('Do MMM YYYY, h:mm:ss')}
                    </p>
                    <p>
                      UPDATED:{' '}
                      {moment(user.updatedAt).format('Do MMM YYYY, h:mm:ss')}
                    </p>
                  </div>
                </fieldset>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default AdminView;
