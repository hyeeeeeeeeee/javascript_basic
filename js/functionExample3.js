// 함수 리터럴 표현식
// 익명 함수
let myFunction = function (message) {
  console.log(message);
}

function doTask(fn) {
  // 콜백함수
  fn();
}

// 함수 호출
myFunction('함수 리터럴 표현식입니다.');

doTask(myFunction);