const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => { 
  try {
    res.writeHead(200, { 'Content-type' : 'text/html; charset=utf-8' });
    const data = await fs.readFile('./server2.html'); // 프로미스 방식의 비동기 함수
    res.end(data); // html 문서를 따로 만들고 파일을 읽어서 전송하는게 더 효율적
  } catch (err) {
    console.error(err);
    res.writeHead(500,{ 'Content-type' : 'text/plain; charset=utf-8' }); // 콘텐츠 타입은 일반 문자열
    res.end(err.message);
  }

})
.listen(8081, () => {
  console.log('8081번 포트에서 서버 대기 중입니다!');
})