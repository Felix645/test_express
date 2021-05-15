const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// Import Routes

const postsRoute = require('./routes/posts');


app.use('/posts', postsRoute);


// Routes
app.get('/', (req, res) => {
  res.send('We are on home');
});


// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION, 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  },
  () => console.log('connected to DB!')
);


// Start Server
app.listen(3000);