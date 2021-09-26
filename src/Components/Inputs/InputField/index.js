import { Form } from "semantic-ui-react";

import  PrimaryInput from "../PrimaryInput";

const InputField = (props) => {
  const { meta, input, required,placeholder, height, width, icon, type, topLabel, onChange, value, disabled,className, onBlur, name } = props;
  const message = meta.touched && meta.error ? meta.error : topLabel;

  const onBlurHandler = (value) => {
    onBlur(value);
  };

  return (
    <Form.Field required={required} className="FormField">
      {message && <small className={meta.touched && meta.error ? "TopLabelError" : "TopLabel"}>{message}</small>}
      <PrimaryInput
      height={height}
      width={width}
      className={className}
      {...input}
      value={value}
      icon={icon}
      type={type}
      error={!!(meta.touched && meta.error)}
      required={required}
      placeholder={placeholder}
      disabled={disabled}
      onChange ={(e)=>{
          onChange(e)
      }}
      onBlur={()=>{
          onBlurHandler(value)
      }}
      name={name}
      />
    </Form.Field>
  );
};

export default InputField;
