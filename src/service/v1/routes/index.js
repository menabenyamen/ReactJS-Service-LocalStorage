const express = require('express');

const postItsRoute = require('./postIts');

const router = express.Router();

router.use('/postIts', postItsRoute);

module.exports = router;
