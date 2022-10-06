import React from 'react';
import './ButtonComponent.scss';
import PropTypes from 'prop-types';

const ButtonComponent = ({ id, type, text, onClick, variant }) => {
  switch (variant) {
    case 'primary':
      return (
        <button
          className={`ripple ${variant}`}
          id={id}
          type={type}
          text={text}
          onClick={onClick}
        >
          {text}
        </button>
      );
    case 'secondary':
      return (
        <button
          className={`ripple ${variant}`}
          id={id}
          type={type}
          text={text}
          onClick={onClick}
        >
          {text}
        </button>
      );
    case 'success':
      return (
        <button
          className={`ripple ${variant}`}
          id={id}
          type={type}
          text={text}
          onClick={onClick}
        >
          {text}
        </button>
      );
    case 'danger':
      return (
        <button
          className={`ripple ${variant}`}
          id={id}
          type={type}
          text={text}
          onClick={onClick}
        >
          {text}
        </button>
      );
    case 'warning':
      return (
        <button
          className={`ripple ${variant}`}
          id={id}
          type={type}
          text={text}
          onClick={onClick}
        >
          {text}
        </button>
      );
    case 'info':
      return (
        <button
          className={`ripple ${variant}`}
          id={id}
          type={type}
          text={text}
          onClick={onClick}
        >
          {text}
        </button>
      );
    case 'light':
      return (
        <button
          className={`ripple ${variant}`}
          id={id}
          type={type}
          text={text}
          onClick={onClick}
        >
          {text}
        </button>
      );
    case 'dark':
      return (
        <button
          className={`ripple ${variant}`}
          id={id}
          type={type}
          text={text}
          onClick={onClick}
        >
          {text}
        </button>
      );

    default:
      break;
  }
};

ButtonComponent.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonComponent;