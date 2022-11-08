import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import {
  adminUsersDetailsAction,
  adminIsAdminAction,
  adminIsSuspendedAction,
  adminIsCoachAction,
  adminIsParentAction,
  adminIsPlayerAction,
} from '../../store/actions/adminActions';

import ButtonComponent from '../../components/Button/ButtonComponent';

import './AdminView.scss';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import SpinnerComponent from '../../components/Spinner/SpinnerComponent';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

import moment from 'moment';
import SearchComponent from '../../components/SearchComponent/SearchComponent';

const AdminView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    let ignore = false;

    if (!userInfo) {
      navigate('/login');
    } else {
      if (!ignore) dispatch(adminUsersDetailsAction());
    }
    return () => (ignore = true);
  }, [userInfo, navigate, dispatch]);

  const adminUsersDetails = useSelector((state) => state.adminUsersDetails);
  const { loading, error, users } = adminUsersDetails;

  const handleIsAdmin = (userId, isAdmin) => {
    dispatch(adminIsAdminAction(userId, isAdmin));
  };

  const handleIsSuspended = (userId, isSuspended) => {
    dispatch(adminIsSuspendedAction(userId, isSuspended));
  };

  const handleIsCoach = (userId, isCoach) => {
    dispatch(adminIsCoachAction(userId, isCoach));
  };

  const handleIsParent = (userId, isParent) => {
    dispatch(adminIsParentAction(userId, isParent));
  };
  const handleIsPlayer = (userId, isPlayer) => {
    dispatch(adminIsPlayerAction(userId, isPlayer));
  };

  //Search for allUsers
  const [keyword, setKeyword] = useState('');
  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };
  const searchedUsers = users?.filter((user) => {
    if (user.username !== undefined) {
      return user.username.toLowerCase().includes(keyword.toLowerCase());
    }
    return false;
  });
  //Search for allUsers

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {loading ? (
        <SpinnerComponent />
      ) : (
        <>
          <div className="admin-get-player__top-wrapper">
            <SearchComponent
              placeholder="search username"
              value={keyword}
              onChange={handleSearch}
              quantity={searchedUsers?.length}
              total={users?.length}
            />
            <ButtonComponent
              type="button"
              text={
                <NavLink
                  className={(navData) => (navData.isActive ? 'active' : '')}
                  to="/admin-profile"
                >
                  Go Back
                </NavLink>
              }
              variant="info"
              disabled={false}
            />
          </div>

          <div className="admin-wrapper">
            {searchedUsers?.map((user) => (
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
                    <div>CONFIRMED</div>
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
                          {user?.isCoach ? (
                            <>
                              <ButtonComponent
                                type="button"
                                text="Remove Coach ?"
                                variant="danger"
                                onClick={() => handleIsCoach(user?._id, false)}
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
                                text="Confirm is Coach ?"
                                variant="dark"
                                onClick={() => handleIsCoach(user?._id, true)}
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
                            You can't remove yourself as administrator
                          </p>
                        </>
                      ) : (
                        <div className="toggle-wrapper">
                          {user?.isPlayer ? (
                            <>
                              <ButtonComponent
                                type="button"
                                text="Remove Player ?"
                                variant="danger"
                                onClick={() => handleIsPlayer(user?._id, false)}
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
                                text="Confirm is Player ?"
                                variant="dark"
                                onClick={() => handleIsPlayer(user?._id, true)}
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
                            You can't remove yourself as administrator
                          </p>
                        </>
                      ) : (
                        <div className="toggle-wrapper">
                          {user?.isParent ? (
                            <>
                              <ButtonComponent
                                type="button"
                                text="Remove Parent ?"
                                variant="danger"
                                onClick={() => handleIsParent(user?._id, false)}
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
                                text="Confirm is Parent ?"
                                variant="dark"
                                onClick={() => handleIsParent(user?._id, true)}
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
