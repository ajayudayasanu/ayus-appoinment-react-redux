
import { Icon, Input } from "semantic-ui-react";
import './styles.scss'
const PrimaryInput = (props) => {
  const { 
    width, 
    height,
    Children,
    diasbled,
    className,
    required,
    error,
    onBlur,
    fluid,
    icon,
    iconPosition,
    label,
    labelPosition,
    type,
    placeholder,
    action,
    actionPosition,
    as,
    disabled,
    foucus,
    inverted,
    onChange,
    size,
    transparent,
    value,
    name,
    defaultValue
    

  } = props;
  return (
    <div className={className}>
      {/* {required &&className==='primaryInput' && <Icon className="required" size="tiny" name="asterisk" />} */}

      <Input
      action={action}
      actionPosition={actionPosition}
      as={as}
      foucus={foucus}
      size={size}
      disabled={diasbled} 
      inverted={inverted}
      transparent={transparent}
      error={error} 
      fluid={fluid}
      type={type}
      placeholder={placeholder}
      icon={icon}
      iconPosition={iconPosition}
      label={label}
      labelPosition={labelPosition}
      onChange={onChange}
      width={width} 
      height={height}
      onBlur={onBlur}
      style={{width:width,height:height}}
      name={name}
      defaultValue={defaultValue}
      autoCapitalize="off"
      >
          {Children}
      </Input>
    </div>
  );
};

PrimaryInput.defaultProps ={
  className:'primaryInput'
}

export default PrimaryInput
