const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json('server_status_ok');
});

module.exports = router;
