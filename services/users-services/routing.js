const express = require('express');
const app = express.Router()

app.use(require('./get'));
app.use(require('./findById'));
app.use(require('./post'));
app.use(require('./put'));
app.use(require('./delete'));

module.exports = app