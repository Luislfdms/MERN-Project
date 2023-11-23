const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const postAPIRoutes = require('./routes/postAPI');
const userAPIRoutes = require('./routes/userAPI');

// Connection to database
require('./dbConnection'); 

const app = express();
//console.log(config.mongoURI);

// Body parser middleware
app.use(express.json());

app.use(cors());

// MongoDB connection
mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define API routes
app.use('/postAPI', postAPIRoutes);
app.use('/userAPI', userAPIRoutes)


if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));