const express = require('express');

const router = express.Router();

const app = express();
// GET / 라우터
router.get('/', (req, res) => {
  console.log('Hi');
  res.send('hi');
  // (참고) req 객체를 통해 app 객체에 접근 가능
  console.log(req.app.get('port')); // 3002
  console.log(app.get('port')); // undefined
});

module.exports = router;