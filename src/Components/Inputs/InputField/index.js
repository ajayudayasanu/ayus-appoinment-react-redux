import { Form } from "semantic-ui-react";

import { PrimaryInput } from "../PrimaryInput";

const InputField = (props) => {
  const { meta, input, required, height, width, icon, type, topLabel, onChange, value, disabled,className, onBlur, name } = props;
  const message = meta.touched && meta.error ? meta.error : meta.topLabel;

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
      icon={icon}
      type={type}
      error={!!(meta.touched && meta.error)}
      />
    </Form.Field>
  );
};

export default InputField;
