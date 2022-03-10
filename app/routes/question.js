const express = require('express');

const questionController = require('../controllers/question');

const router = express.Router();

router.get('/question', questionController.getQuestion);

module.exports = router;