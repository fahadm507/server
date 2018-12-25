/*
  commit this file so that the app always knows what keys to use.
  whether in development or production. Note that development(dev.js)
  file will not be committed to Github.
*/
keys.js - figure out what set of credentials to return
if (process.env.NODE_DEV === 'production'){
  //we are in production - return the prod set of keys
  module.exports = require('./prod');
}else {
  //we are in development - return the dev keys
  // in development we'll always fall into this case
  module.exports = require('./dev')
}
