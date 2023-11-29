const express = require('express');

const router = express.Router();

router.get('/shirts', (req, res) => {
  res.send('셔츠 판매 페이지');
});

router.get('/pants', (req, res) => {
  res.send('바지 판매 페이지')
});

// 매개변수
router.get('/shirts/:id', (req, res) => {
  console.log(req.params, req.query);
  res.end();
});
router.get('/pants/:id', (req, res) => {
  console.log(req.params, req.query);
  res.end();
});

// router.get('/:category', (req, res) => {
//   console.log(`${req.params, req.query}판매 페이지`);
// });



module.exports = router;
