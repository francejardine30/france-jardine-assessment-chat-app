const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWU_SECRET, {
    expiresIn: "20d",
  });
};

module.exports = generateToken;
