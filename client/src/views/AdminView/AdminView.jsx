import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import {
  adminUsersDetailsAction,
  adminIsAdminAction,
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
                  <p>EMAIL:{user.email}</p>

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
                          <p>
                            Administrator:
                            {user.isAdmin ? (
                              <FaThumbsUp className="ra-thumbs-up" />
                            ) : (
                              <FaThumbsDown className="ra-thumbs-down" />
                            )}
                          </p>

                          {user?.isAdmin ? (
                            <ButtonComponent
                              type="button"
                              text="Remove Admin"
                              variant="danger"
                              onClick={() => handleIsAdmin(user?._id, false)}
                              disabled={
                                user?.username === userInfo?.username ||
                                user.email === 'admin@mail.com'
                                  ? true
                                  : false
                              }
                            />
                          ) : (
                            <ButtonComponent
                              type="button"
                              text="Make Admin"
                              variant="dark"
                              onClick={() => handleIsAdmin(user?._id, true)}
                              disabled={
                                user?.username === userInfo?.username ||
                                user.email === 'admin@mail.com'
                                  ? true
                                  : false
                              }
                            />
                          )}
                        </div>
                      )}
                    </>
                  )}

                  <p>
                    IS CONFIRMED:
                    {user.isConfirmed ? (
                      <FaThumbsUp className="ra-thumbs-up" />
                    ) : (
                      <FaThumbsDown className="ra-thumbs-down" />
                    )}
                  </p>
                  <p>
                    IS SUSPENDED:
                    {user.suspended ? (
                      <FaThumbsUp className="ra-thumbs-up" />
                    ) : (
                      <FaThumbsDown className="ra-thumbs-down" />
                    )}
                  </p>
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
