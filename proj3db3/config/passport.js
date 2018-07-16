var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var bcrypt = require("bcrypt");
var bodyParser = require('body-parser');

var db = require("../models");

// Telling passport we want to use a Local Strategy. 
//In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  {
    usernameField: "email"
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.users.findOne({
      where: {
        email0: email
      }
    }).then(function(user) {
      //  no user with the given email
      if (!user) {
        console.log("no such user");
        return retVal = done(null, false, {message: "Incorrect email."});
      }
      // user exists, check password
      else if (!user.validPassword(password)) {
        console.log("wrong password");
        return done(null, false, {message: "Incorrect password."});
      }
      // If none of the above, return the user
      return done(null, user);
    });
  }
));


passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


module.exports = passport;

