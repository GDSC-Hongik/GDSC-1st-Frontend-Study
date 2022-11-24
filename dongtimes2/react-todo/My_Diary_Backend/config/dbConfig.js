const mongoose = require('mongoose');

mongoose.connection.once('open', () => {
  console.log('MongoDB has been successfully connected!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const disconnectDB = async () => {
  await mongoose.disconnect();
};

module.exports = {
  connectDB,
  disconnectDB,
};
