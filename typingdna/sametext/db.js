const mongoose = require('mongoose');

function connectToDatabase() {
  const connectionString = 'mongodb://localhost:27017/my-database';

  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });

  mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
  });
}

module.exports = connectToDatabase;
