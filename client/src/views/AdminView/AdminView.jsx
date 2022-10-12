import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { adminUsersDetailsAction } from '../../store/actions/adminActions';

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
                Admin User
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
                  <p>
                    IS ADMIN:
                    {user.isAdmin ? (
                      <FaThumbsUp className="ra-thumbs-up" />
                    ) : (
                      <FaThumbsDown className="ra-thumbs-down" />
                    )}
                  </p>
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
                  <p>
                    CREATED:
                    {moment(user.createdAt).format('Do MMM YYYY, h:mm:ss')}
                  </p>
                  <p>
                    UPDATED:{' '}
                    {moment(user.updatedAt).format('Do MMM YYYY, h:mm:ss')}
                  </p>
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
