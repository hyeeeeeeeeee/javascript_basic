// 함수를 맹그는 방법 3가지
// 1. 함수 선언식
// 2. 함수 표현식
// 3. Function 생성자 함수를 이용한 동적 함수 생성

// 스크립트 준비단계에서 하는 동작 // 일급객체
// function Function() {
//   // -------
// }

//자바스크립트 동적 생성
// let Object = new Function('~~~~~~');
// let String = new Function('~~~~~~');
// let Date = new Function('~~~~~~');
// let Number = new Function('~~~~~~');
// let Boolean = new Function('~~~~~~');

// 나도 동적으로 함수 맹글어 봐야지
let sum = new Function('x', 'y', 'return x + y');
let result = sum(10, 20);
console.log(result);

// function doTask() {
//   console.log('노우');
// }
// doTask();
// doTask.call(); // call은 펑션 프로토타입 객체가 제공함     표준 내장 객체는 평션 생성자 함수에 의해 동ㅈ거ㅓㄱ 생성된다