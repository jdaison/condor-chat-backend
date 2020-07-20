

const express = require('express');
const app = express();
const http = require('http').createServer(app);
//const Sentry = require('@sentry/node');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('compression');
const { handlerError } = require('./src/middlewares');
const cors = require('cors');
const io = require('socket.io')(http);
const favicon = require('serve-favicon');
const path = require('path');

require('dotenv').config();

require('./conecctions/mongo');

app.set('io', io);
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

const staticPath = path.join(__dirname, 'static');
app.use(express.static(staticPath, { dotfiles: 'allow' }));

app.use(favicon(path.join(staticPath, 'favicon.ico')));

// Sentry.init({
//   dsn: process.env.SENTRY_URL,
//   environment: process.env.NODE_ENV,
// });

// The request handler must be the first middleware on the app
// app.use(Sentry.Handlers.requestHandler());

// All controllers should live here
require('./src/routes')(app);

// app.get('/debug-sentry', function mainHandler(req, res) {
//   throw new Error('My first Sentry error!');
// });

// The error handler must be before any other error middleware and after all controllers
// app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(handlerError);

const port = process.env.PORT || 3000;

const server = http.listen(port, () => console.log(`run server on port ${port}`));

io.on('connection', function (socket) {
  console.log('New socket connection, socketId: ', socket.id);
});

module.exports = server;
