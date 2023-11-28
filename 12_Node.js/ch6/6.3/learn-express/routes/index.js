const express = require('express');

const router = express.Router();

// GET / 라우터
router.get('/', (req, res) => {
  console.log('Hi');
  res.send('hi');
});

module.exports = router;