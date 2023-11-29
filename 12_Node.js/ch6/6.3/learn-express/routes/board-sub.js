const express = require('express');

const router = express.Router();

router.get('/sub/notice', (req, res) => {
  res.send('공지사항 게시판')
});

router.get('/sub/qna', (req, res) => {
  res.send('공지사항 게시판')
});


router.get('/sub/notice/:id', (req, res) => {
  console.log(req.params, req.query);
  res.end();
});
router.get('/sub/qna/:id', (req, res) => {
  console.log(req.params, req.query);
  res.end();
});

// router.get('/sub/:category', (req, res) => {
//   console.log(`${req.params, req.query}판매 페이지`);
// });


module.exports = router;
