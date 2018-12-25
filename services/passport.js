const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

//Get the User model from mongoose
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ googleId: profile.id });

        if (existingUser) {
          //we already have a record with the give profile ID
          //done() tells passpword that we are done.
          return done(null, existingUser);
        }
        //we don't have a user record with this ID, make a new record with profile ID
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      } catch (error) {
        console.log("some error occured ", error);
      }
    }
  )
);
