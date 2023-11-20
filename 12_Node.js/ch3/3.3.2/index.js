const { odd, even } = require('./var'); // 구조 분해 할당 시에는 속성명이랑 변수명이랑 동일해야 함
const checkNumber = require('./func'); // 변수명은 내 마음대로 지을 수 있음

function checkStringOddOrEven(str) {
  if (str.length % 2) { // 홀수 면
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));