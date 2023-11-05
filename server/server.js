const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const apiRoutes = require('./routes/api');

// Connection to database
require('./dbConnection'); 

const app = express();
console.log(config.mongoURI);

// Body parser middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define API routes
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));