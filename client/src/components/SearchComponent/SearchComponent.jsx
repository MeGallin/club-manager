import { useRef } from 'react';
import './SearchComponent.scss';
import PropTypes from 'prop-types';

const SearchComponent = ({
  type,
  placeholder,
  onChange,
  className,
  value,
  quantity,
  total,
}) => {
  const inputRef = useRef(null);
  const checkFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <div className="search-input-wrapper">
        <input
          ref={inputRef}
          type={type}
          className={className}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          multiple
          required
          onClick={checkFocus}
        />
        <p>
          {inputRef.current
            ? `Your search found ${quantity} out of ${total}`
            : null}
        </p>
      </div>
    </>
  );
};

SearchComponent.defaultProps = {
  type: 'search',
};

SearchComponent.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchComponent;
