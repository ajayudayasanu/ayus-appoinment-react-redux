

import { Icon, Input } from "semantic-ui-react";

const PrimaryInput = (props) => {
  const { width, height, Children, diasbled, className, required, error, fluid, icon, label,type,placeholder } = props;
  return (
    <div className={className}>
      {required && <Icon className="required" size="tiny" name="asterisk" />}
      <Input disabled={diasbled} error={error} fluid={fluid}
      type={type}
      placeholder={placeholder}
      icon={icon} label={label} width={width} height={height}>
          {Children}
      </Input>
    </div>
  );
};

export default PrimaryInput
