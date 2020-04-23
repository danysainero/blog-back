const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'SECRET_KEY' //normally store this in process.env.secret


class JwtMiddleware {
  constructor() {}

 /*  async verify(userName, pass, done) {
    const user = await usersRepository.findUser(userName, pass);
    if (!user) {
      return done(null, false, { message: 'User not found' });
    } else {
      return done(null, userName);
    }
  } */
}

module.exports = new JwtMiddleware();


