import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderComponent.scss';
const HeaderComponent = () => {
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
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
