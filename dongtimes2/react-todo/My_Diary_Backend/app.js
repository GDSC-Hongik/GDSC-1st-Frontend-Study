require('dotenv').config();

const http = require('http');
const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const cors = require('cors');

const { connectDB } = require('./config/dbConfig');
const router = require('./routes/router');

const app = express();
const port = process.env.PORT || 8000;
const server = http.createServer(app);

connectDB();

app.set('port', port);

server.listen(port, () => {
  console.log('server has been successfully created');
});

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  }),
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.json({ code: err.status, message: err.message });
});

module.exports = app;
