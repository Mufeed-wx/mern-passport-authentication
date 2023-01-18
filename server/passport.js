const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

GOOGLE_CLIENT_ID ="43792379726-3rmrv5caka1t9jfpq2ua777op6mc75hn.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID:GOOGLE_CLIENT_ID,
    clientSecret:GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
      console.log(profile,'profileda');
      done(null,profile)
  }
));

passport.serializeUser((user, done) => {
    console.log(user,'userda');
    done(null,user)
})

passport.deserializeUser((user, done) => {
    console.log(user,'userda');
    done(null,user)
})