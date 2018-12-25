/*
prod.js - production keys go here.commit prod.js file,
so that Heroku will able able to use these keys in production.
Note: these keys will be commit to github, rather, we'll
set up all our environment viriables on heroku.
*/
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
};
