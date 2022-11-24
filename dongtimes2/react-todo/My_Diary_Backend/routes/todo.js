const express = require('express');

const todoController = require('./controller/todo.controller');

const router = express.Router();

router.get('/:date', todoController.get);
router.post('/:date', todoController.post);

module.exports = router;
