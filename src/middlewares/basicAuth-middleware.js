const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const usersRepository = require('../repositories/users-repository')
class BasicAuthMiddleware {
    constructor() {}
  
    async basicAuth(req, res, next) {
      const { userName , pass } = req.body;
  const userExist = await usersRepository.findUser(req.body);
  console.log(userExist);
  
     /*  if (username == 'admin' && password == 'pass') {
        return done(null, { userName, pass });
        } else {
        return done(null, false, { message: 'Incorrect username or password' });
        } */
   /*    
     if (0 === 0) {
         console.log(userName , pass);
          next();
      }else{
          res.status(403).json({message: 'Login fail'});
      }  */
  }
  
  }
  
  module.exports = new BasicAuthMiddleware();