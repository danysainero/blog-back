const ExtractJwt = require('passport-jwt').ExtractJwt;
const userSchema = require('../resources/users/users-schema');
const SECRET_KEY = 'secret_token'; //normally store this in process.env.secret
const RoleChecker = require('../validators/check-role');

const jwtMiddleware = {}

jwtMiddleware.jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
};

jwtMiddleware.verifyToken = async (token, done) =>{
    try {
      const user = await userSchema.findOne({ userName: token.body.userName }).exec();
     await RoleChecker.roleVerify(user);
      return done(null, user);
    } catch (error) {
      return done(error.message);
    }  
  }

  module.exports = jwtMiddleware;

