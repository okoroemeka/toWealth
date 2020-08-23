const emailValidator = (email) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

const passwordValidator = (password) => {
  let minMaxLength = /^[\s\S]{8,32}$/,
    upper = /[A-Z]/,
    lower = /[a-z]/,
    number = /[0-9]/,
    special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
  if (
    minMaxLength.test(password) &&
    upper.test(password) &&
    lower.test(password) &&
    number.test(password) &&
    special.test(password)
  ) {
    return true;
  }

  return false;
};

const validateFullName = (name) => {
  return name.length < 1;
};

export { emailValidator, passwordValidator, validateFullName };
