const mongoose = require('mongoose');
require('dotenv').config();

const userName = process.env.USER_MONGO;
const password = process.env.PASS_MONGO;
const host = process.env.HOST_MONGO;
const connectionString = `mongodb+srv://${userName}:${password}@${host}?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
