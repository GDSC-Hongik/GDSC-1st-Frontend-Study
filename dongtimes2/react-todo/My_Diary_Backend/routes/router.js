const express = require('express');

const index = require('./index');
const todo = require('./todo');

const router = express.Router();

router.use('/', index);
router.use('/todo', todo);

module.exports = router;
