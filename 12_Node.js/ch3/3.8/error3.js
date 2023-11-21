const fs = require('fs').promises;

setInterval(() => {
  // catch() 생략 시 문제됨, 습관적으로 쓰자!
  fs.unlink('./abcdefg.js')
  .catch((err) => {
    console.error(err);
  });
  // fs.unlink('./abcdefg.js').catch(console.error);
}, 1000);