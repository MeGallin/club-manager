import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './AdminComponent.scss';

import { userAdminDetailsAction } from '../../store/actions/userActions';

import ErrorComponent from '../ErrorComponent/ErrorComponent';
import ButtonComponent from '../Button/ButtonComponent';
import AdminProfileComponent from '../Profile/AdminProfileComponent/AdminProfileComponent';
import UserAdminComponent from '../User/UserAdminComponent';

const AdminComponent = () => {
  const dispatch = useDispatch();
  const [tokenExpiration] = useState(
    'You are about to be logged out. Your token has expired.',
  );

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
  const { error, userAdmin } = userAdminDetails;

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

      <div className="inner-content-wrapper">
        <UserAdminComponent />
        <AdminProfileComponent />
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
