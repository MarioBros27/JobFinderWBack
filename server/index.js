const express = require("express");
const path = require('path');
// const enforce = require('express-sslify');

const PORT = process.env.PORT || 3001;

const app = express();


// Have Node serve the files for our built React app
app.use(function(req, res, next) {
  if ((req.get('X-Forwarded-Proto') !== 'https')) {
    res.redirect('https://' + req.get('Host') + req.url);
  } else
    next();
});
app.use(express.static(path.resolve(__dirname, '../client/build')));


// Handle GET requests to /api route
app.get("/api/images/:project/:name", (req, res) => {
  const project = req.params.project
  const name = req.params.name
  res.sendFile(path.resolve(__dirname,"../client/public/images",project,name))
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });