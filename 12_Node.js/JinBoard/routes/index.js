const express = require('express');

const { client } = require('../database');
const db = client.db('board'); // board 데이터베이스에 연결

const router = express.Router();

// GET / 라우터
router.get('/', (req, res) => {
  res.render('main'); // .ejs는 생략가능
});


// GET /insert 라우터
// DB에 데이터 저장하기 테스트(테스트 후 데이터 삭제)

router.get('/insert', async (req, res) => {
  try {
    await db.collection('post').insertOne({ 
      title: '제발 들어가라'
    // JS Object 형태로 저장
    });
    res.send('데이터 저장 완료');
  } catch (err) {
    console.error(err);
  }
});

// Quiz: /time으로 접속하면 현재 서버의 날짜/시간을 보여주는 기능 만들기
router.get('/time', (req, res) => {
  const clock = new Date();
  console.log(clock);
  res.render('time', { clock });
});
// time.ejs로 웹페이지 만들어서 그 안에 서버의 시간을 넣어 보내주면 됨

module.exports = router;