const validate = (values) => {
  const errors = {};

  if (values.fullName) {
    if (values.fullName.length < 1) {
      errors.fullName = "Name is required";
    }
  }
  if (values.phoneNumber) {
    if (values.phoneNumber.length < 1) {
      errors.phoneNumber = "phone number is required";
    }
  }

  return errors
};

export default validate;
