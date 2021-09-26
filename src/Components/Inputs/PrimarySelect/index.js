
import { Icon, Dropdown } from "semantic-ui-react";
import "./styles.scss";
const PrimarySelect = (props) => {
  const { options, placeholder, className, required, error, handleOnChange, name, value, key, defaultValue, disabled } = props;
 const selectClasses = error ? `${className} Error`: className
  return (
    <div className="primary-select">
        {required && className==="primarySelect" && <Icon className="Required" size="tiny" name='asterisk'/>}
      <Dropdown 
      fluid
      selection
      className ={`Base ${selectClasses}`}
      placeholder={placeholder}
      options={options}
     // icon='chevron down'
      key={key || undefined}
      onChange={(e,{value}) =>handleOnChange(value)}
      name={name}
      defaultValue={defaultValue}
      value={value}
      disabled={disabled}
      />
    </div>
  );
};

PrimarySelect.defaultProps ={
    className: 'primarySelect'
}
export default PrimarySelect
