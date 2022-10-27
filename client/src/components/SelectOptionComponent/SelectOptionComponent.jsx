import './SelectOptionComponent.scss';
import Select from 'react-select';

const SelectOptionComponent = ({ label, options, onChange, defaultValue }) => {
  return (
    <div className="select-component-wrapper">
      <label>{label}</label>
      <Select
        options={options}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default SelectOptionComponent;
