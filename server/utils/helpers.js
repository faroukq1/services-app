const bcrypt = require("bcrypt");
const isEmailValid = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

module.exports = {
  isEmailValid,
};
