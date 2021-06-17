module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmedPassword
) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "username must not be empty";
  }

  if (email.trim() === "") {
    errors.username = "Email must not be empty";
  }
  if (password === "") {
    errors.password = "Password cant be empty";
  } else if (password !== confirmedPassword) {
    errors.confirmedPassword = "Password doesnt match";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validatesLogInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "username must not be empty";
  }
  if (password.trim() === "") {
    errors.username = "password must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
