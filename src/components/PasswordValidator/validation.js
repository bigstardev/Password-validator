const validation = (password, confirmPassword, minLength) => {
  const result = {
    requirements: [],
    matched: false,
    valid: false,
  };
  if (password) {
    if (confirmPassword === password) {
      result.matched = true;
    }
    if (password.length < minLength) {
      result.requirements.push(
        `Password has a min length of ${minLength} characters`
      );
      result.valid = false;
    }
    if (password.toLowerCase() === password) {
      result.requirements.push("Password has at least 1 uppercase character");
    }
    if (password.toUpperCase() === password) {
      result.requirements.push("Password has at least 1 lowercase character");
    }
    if (!/\d/.test(password)) {
      result.requirements.push("Password has at least 1 number");
    }

    if (!/[!@#$%^&*()_/\-+={/[}/\]/|:;"'<,>.]/.test(password)) {
      result.requirements.push("Password has at least 1 special character ");
    }
  } else {
    result.requirements.push("Please input password");
  }
  const isPasswordValid = result.requirements.length === 0 && result.matched;

  if (isPasswordValid) {
    result.valid = true;
  }

  return result;
};
export default validation;
