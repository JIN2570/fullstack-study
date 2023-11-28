const dev = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const express = require('express');
const path = require('path');

// Quiz: 프로젝트 세팅해보기
// dotenv 설정
dev.config();

// 라우터 가져오기
const indexRouter = require('./routes/index'); // indexRouter 가져오기()(/index는 생략 가능)
const userRouter = require('./routes/user'); // userRouter 가져오기
const app = express();
// app 관련 설정들(전역속성) 설정
app.set('port', process.env.PORT || 3000);
// 공통 미들웨어 설정(morgan, static, body-parser, cookie-parser, express-session)
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
  },
  name: 'session-cookie',
}));

// 라우터 분리하기
// 개발을 하다보면 app.get(), app.post() 등이 계속 늘어나는데
// 이걸 app.js 같은 하나의 파일에 계속 쓰다보면 코드가 길어지고 복잡해짐(=코드 수정 및 유지보수 어려움)
// 라우터(API)들을 다른 파일로 추출하는 것이 좋음
// 1) routes 폴더 생성
// 2) '/', '/user'로 들어오는 요청을 모아놓을 파일 생성
// 3) router 설정 -> 라우터(API) 작성(이 때 app을 전부 router로 변경)
// 4) router 내보내기(module.exports) -> app.js에서 가져오기(require)

// 기본 '/' 라우터 작성
// app.get('/', (req, res) => {
//   console.log('Hi');
//   res.send('hi');
// });

// 분리한 라우터들을 미들웨어로 등록
app.use('/', indexRouter); // '/'로 요청이 들어오면 indexRouter로 
app.use('/user', userRouter); // '/user'로 요청이 들어오면 userRouter로 


// app.post('/', (req, res) => {
//   // res.send('hi')
//   console.log('Hi');
// })
// 404, 에러 처리 미들웨어
// app.use((req, res, next) => {
//   try {
//     // console.log(fwefw);
//     next();
//   } catch (err) {
//     next(err);
//   }
// });
app.use((req, res, next) => {
  res.status(404).send('404 못 찾겠어요');
  // next(err);
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('에러가 나서 보여주는 내용');
});
// 서버연결
app.listen(app.get('port'), () => {
  console.log(app.get('port') + '번에서 익스프레스 서버 실행');
})