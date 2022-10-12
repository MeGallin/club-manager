import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './HeaderComponent.scss';

import LogoutComponent from '../LogoutComponent/LogoutComponent';

const HeaderComponent = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { userAdmin } = userAdminDetails;

  return (
    <>
      <header>
        <nav className="nav-wrapper">
          <span>
            <NavLink
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/home"
            >
              Home
            </NavLink>
          </span>

          {userInfo ? (
            <>
              <span>
                <NavLink
                  className={(navData) => (navData.isActive ? 'active' : '')}
                  to="/user-admin"
                >
                  {userAdmin?.username} Admin Area
                </NavLink>
              </span>
              <span>
                <LogoutComponent />
              </span>
            </>
          ) : (
            <>
              <span>
                <NavLink
                  className={(navData) => (navData.isActive ? 'active' : '')}
                  to="/about"
                >
                  About
                </NavLink>
              </span>
              <span>
                <NavLink
                  className={(navData) => (navData.isActive ? 'active' : '')}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </span>
              <span>
                <NavLink
                  className={(navData) => (navData.isActive ? 'active' : '')}
                  to="/login"
                >
                  Login
                </NavLink>
              </span>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
