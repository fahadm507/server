const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

const keys = require("./config/keys");
require("./models/User");
//we require User model before we require passport service, because that's where the user is being used.
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    //expire in 30days, in milliseconds
    mexAge: 30 * 24 * 60 * 60 * 1000,
    //encrypt the cookie
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

if (process.env.NODE_ENV === "production") {
  //if the route is not defined by Express,
  //Express will serve up production assets
  //like our main.js or main.css file!
  app.use(express.static("client/build"));

  //if the above doesn't resolve, it means that we
  //don't understand the route request.
  //Express will serve up the index.hml file
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
//use port that was defined by Heroku or 5000 if it's undefined
const PORT = process.env.PORT || 5000;
app.listen(PORT);
