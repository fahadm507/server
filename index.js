const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there'});
});


//use port that was defined by Heroku or 5000 if it's undefined
const PORT = process.env.PORT || 5000;
app.listen(PORT)
