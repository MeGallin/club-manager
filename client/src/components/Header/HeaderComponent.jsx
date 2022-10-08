import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutComponent from '../LogoutComponent/LogoutComponent';
import './HeaderComponent.scss';
const HeaderComponent = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userInfo);
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
              <span>{userInfo.username} Admin</span>
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
