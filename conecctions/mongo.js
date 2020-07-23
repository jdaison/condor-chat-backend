const mongoose = require('mongoose');
require('dotenv').config();

const userName = process.env.USER_MONGO;
const password = process.env.PASS_MONGO;
const host = process.env.HOST_MONGO;
//const connectionString = `mongodb+srv://${userName}:${password}@${host}?retryWrites=true&w=majority`;
const connectionString = 'mongodb://localhost/test'

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

mongoose.connection.on('connected', () => {
  console.log('Mongo has connected succesfully')
})
mongoose.connection.on('reconnected', () => {
  console.log('Mongo has reconnected')
})
mongoose.connection.on('error', error => {
  console.log('Mongo connection has an error', error)
  mongoose.disconnect()
})
mongoose.connection.on('disconnected', () => {
  console.log('Mongo connection is disconnected')
})