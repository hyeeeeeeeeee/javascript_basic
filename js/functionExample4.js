// 콜백 함수
function calclate(fn, a, b) {
  // 데이터 처리
  return fn(a, b);
}

let num1 = 300, num2 = 500;

let result = calclate(function (x, y) {
  return x + y;
}, num1, num2);
console.log(result);

result = calclate((x, y) => x + y, num1, num2);
console.log(result);

result = calclate(function (x, y) {
  return x * y;
}, num1, num2)
console.log(result);

//self(즉시) 호출
(function doTask() {
  console.log("나는 즉시 호출되여");
})();