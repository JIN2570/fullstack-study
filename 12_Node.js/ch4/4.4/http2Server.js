const http2 = require('http2');
const fs = require('fs');

// https 모듈을 http2로, createServer() 메소드를 createSecureServer() 메소드로
http2.createSecureServer({
  // 인증기관(예: Let's Encrypt)으로부터 인증서를 발급받아야 함
  cert: fs.readFileSync('도메인 인증서 경로'),
  key: fs.readFileSync('도메인 비밀키 경로'),
  ca: [
    fs.readFileSync('상위 인증서 경로'),
    fs.readFileSync('상위 인증서 경로'),
  ], // 서버 시작되기 전 초기화시에는 동기 메서드 써도 됨
}, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
  .listen(443, () => {
    console.log('443번 포트에서 서버 대기 중입니다!');
  });

// 참고 자료: HTTP의 진화 과정
// https://yozm.wishket.com/magazine/detail/1686/