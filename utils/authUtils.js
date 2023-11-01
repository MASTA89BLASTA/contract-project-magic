require("dotenv").config();
const jwt = require("jsonwebtoken");
const { access, refresh } = require("../config/jwtConfig");

const generateTokens = (payload) => ({
  refreshToken: jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: access.expiresIn,
  }),
  accessToken: jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: refresh.expiresIn,
  }),
});

module.exports = generateTokens;
