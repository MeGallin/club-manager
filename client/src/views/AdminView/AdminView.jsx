import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './AdminView.scss';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

import {
  adminUsersDetailsAction,
  adminIsAdminAction,
  adminIsSuspendedAction,
  adminIsCoachAction,
  adminIsParentAction,
  adminIsPlayerAction,
} from '../../store/actions/adminActions';

import ButtonComponent from '../../components/Button/ButtonComponent';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import SpinnerComponent from '../../components/Spinner/SpinnerComponent';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import SearchHighlightComponent from '../../components/SearchHighlightComponent/SearchHighlightComponent';

import moment from 'moment';

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
          <h2>Manage Users</h2>
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

          <div className="wrapper">
            {searchedUsers?.map((user) => (
              <div key={user._id}>
                <fieldset className="fieldSet">
                  <legend>
                    <SearchHighlightComponent
                      value={user.username}
                      keyword={keyword}
                    />
                  </legend>

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
                              <div>
                                <h4>Coach</h4>
                                <ButtonComponent
                                  type="button"
                                  text="Remove Coach ?"
                                  variant="danger"
                                  onClick={() =>
                                    handleIsCoach(user?._id, false)
                                  }
                                  disabled={
                                    user?.username === userInfo?.username ||
                                    user.email === 'admin@mail.com'
                                      ? true
                                      : false
                                  }
                                />
                              </div>

                              <FaThumbsDown className="ra-thumbs-down" />
                            </>
                          ) : (
                            <>
                              <div>
                                <h4>Coach</h4>
                                <ButtonComponent
                                  type="button"
                                  text="Confirm?"
                                  variant="info"
                                  onClick={() => handleIsCoach(user?._id, true)}
                                  disabled={
                                    user?.username === userInfo?.username ||
                                    user.email === 'admin@mail.com'
                                      ? true
                                      : false
                                  }
                                />
                              </div>
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
                              <div>
                                <h4>Player</h4>
                                <ButtonComponent
                                  type="button"
                                  text="Remove Player ?"
                                  variant="danger"
                                  onClick={() =>
                                    handleIsPlayer(user?._id, false)
                                  }
                                  disabled={
                                    user?.username === userInfo?.username ||
                                    user.email === 'admin@mail.com'
                                      ? true
                                      : false
                                  }
                                />
                              </div>

                              <FaThumbsDown className="ra-thumbs-down" />
                            </>
                          ) : (
                            <>
                              <div>
                                <h4>Player</h4>
                                <ButtonComponent
                                  type="button"
                                  text="Confirm?"
                                  variant="info"
                                  onClick={() =>
                                    handleIsPlayer(user?._id, true)
                                  }
                                  disabled={
                                    user?.username === userInfo?.username ||
                                    user.email === 'admin@mail.com'
                                      ? true
                                      : false
                                  }
                                />
                              </div>

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
                              <div>
                                <h4>Parent</h4>
                                <ButtonComponent
                                  type="button"
                                  text="Remove Parent ?"
                                  variant="danger"
                                  onClick={() =>
                                    handleIsParent(user?._id, false)
                                  }
                                  disabled={
                                    user?.username === userInfo?.username ||
                                    user.email === 'admin@mail.com'
                                      ? true
                                      : false
                                  }
                                />
                              </div>

                              <FaThumbsDown className="ra-thumbs-down" />
                            </>
                          ) : (
                            <>
                              <div>
                                <h4>Parent</h4>
                                <ButtonComponent
                                  type="button"
                                  text="Confirm?"
                                  variant="info"
                                  onClick={() =>
                                    handleIsParent(user?._id, true)
                                  }
                                  disabled={
                                    user?.username === userInfo?.username ||
                                    user.email === 'admin@mail.com'
                                      ? true
                                      : false
                                  }
                                />
                              </div>

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
                              <div>
                                <h4>Admin</h4>
                                <ButtonComponent
                                  type="button"
                                  text="Remove?"
                                  variant="danger"
                                  onClick={() =>
                                    handleIsAdmin(user?._id, false)
                                  }
                                  disabled={
                                    user?.username === userInfo?.username ||
                                    user.email === 'admin@mail.com'
                                      ? true
                                      : false
                                  }
                                />
                              </div>

                              <FaThumbsDown className="ra-thumbs-down" />
                            </>
                          ) : (
                            <>
                              <div>
                                <h4>Admin</h4>
                                <ButtonComponent
                                  type="button"
                                  text="Make?"
                                  variant="info"
                                  onClick={() => handleIsAdmin(user?._id, true)}
                                  disabled={
                                    user?.username === userInfo?.username ||
                                    user.email === 'admin@mail.com'
                                      ? true
                                      : false
                                  }
                                />
                              </div>

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
                              <div>
                                <h4>Un-Suspend</h4>
                                <ButtonComponent
                                  type="button"
                                  text="Unsuspend?"
                                  variant="info"
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
                              </div>

                              <FaThumbsUp className="ra-thumbs-up" />
                            </>
                          ) : (
                            <>
                              <div>
                                <h4>Suspend</h4>
                                <ButtonComponent
                                  type="button"
                                  text="Suspend?"
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
                              </div>

                              <FaThumbsDown className="ra-thumbs-down" />
                            </>
                          )}
                        </div>
                      )}
                    </>
                  )}

                  <div className="dates-wrapper">
                    <p> Created: {moment(user.createdAt).fromNow()}</p>
                    <p>Updated: {moment(user.updatedAt).fromNow()}</p>
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
