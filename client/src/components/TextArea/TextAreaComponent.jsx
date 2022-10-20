import PropTypes from 'prop-types';
import './TextAreaComponent.scss';

const TextAreaComponent = ({
  id,
  name,
  value,
  placeholder,
  onChange,
  label,
  error,
}) => {
  return (
    <div>
      {label && <label htmlFor="input-field">{label}</label>}
      <textarea
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <p className="validation-error">{error}</p>}
    </div>
  );
};

TextAreaComponent.defaultProps = {
  type: PropTypes.string,
};

TextAreaComponent.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextAreaComponent;
