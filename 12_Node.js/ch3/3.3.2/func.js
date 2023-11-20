// const value = require('./var');
// console.log(value);

const { odd, even } = require('./var'); // 구조 분해 할당

function checkOddEven(num) {
  if (num % 2) { // 홀수면
    return odd;
  } // 불필요한 else 생략 가능
  return even;
}

module.exports = checkOddEven;
