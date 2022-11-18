import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './HeaderComponent.scss';

import LogoutComponent from '../LogoutComponent/LogoutComponent';
import LogoComponent from '../LogoComponent/LogoComponent';

const HeaderComponent = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { userAdmin } = userAdminDetails;

  return (
    <>
      <header>
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : '')}
          to="/home"
        >
          <LogoComponent />
        </NavLink>

        <nav className="nav-wrapper">
          {userInfo ? (
            <>
              {userAdmin?.isAdmin ? (
                <>
                  <span>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? 'active' : ''
                      }
                      to="/admin-profile"
                    >
                      <div className="logged-in-user-wrapper">
                        <div className="logged-in-user">
                          {userAdmin?.username}
                        </div>
                      </div>
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
                      className={(navData) =>
                        navData.isActive ? 'active' : ''
                      }
                      to="/user-admin"
                    >
                      <div className="logged-in-user-wrapper">
                        <div className="logged-in-user">
                          {userAdmin?.username}
                        </div>
                      </div>
                    </NavLink>
                  </span>
                  <span>
                    <LogoutComponent />
                  </span>
                </>
              )}
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
