const validation = (values) => {
  console.log("errors");
  console.log("Validationn values::>", values);

  let errors = {};
  if (!values.firstName) {
    errors.firstName = "firstname is required";
  }
  if (!values.lastName) {
    errors.lastName = "lastname is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(values.email)) {
    errors.email = "Email is invalid";
  }
  if (!values.password) {
    errors.password = "password is required";
  } else if (values.password.length < 5) {
    errors.password = "password must be more than 5 characters";
  }

  return errors;
};
export default validation;
