import React from 'react';
import './SuccessComponent.scss';
import PropTypes from 'prop-types';
import 'animate.css';

const SuccessComponent = ({ message }) => {
  return (
    <div className=" animate__animated animate__bounceInLeft">
      <span className="success-component">{message}</span>
    </div>
  );
};
SuccessComponent.propTypes = {
  message: PropTypes.string,
};
export default SuccessComponent;
