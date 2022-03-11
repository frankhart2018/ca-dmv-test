const express = require('express');

const questionController = require('../controllers/question');

const router = express.Router();

router.get('/question', questionController.getQuestion);

router.post('/question/result', questionController.postCorrectQuestion);

module.exports = router;