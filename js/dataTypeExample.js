// 템플릿 스트링
let name = '김기정';
let message = `템플릿 스트링 ${name}`;
console.log(message);

// typeof 연산자
let age = 10;
console.log(typeof age);
console.log(typeof message);

// 특수 숫자 리터럴(키워드)
console.log(10 / 0);
console.log('나는 문자열' / 10);

// 논리형
let flag = false;
let flag2 = NaN;
// let flag2 = 1; // true로 인식, 값이 있으면 무조건 true로 인식, 나중에 오류 가능성 높음
// let flag2 = 0; // 0만 false로 인식, 빈 문자열도 false로 인식
if (flag2) {
  console.log('참입니다..');
}

// 자바스크립트는 자동형변환이 엄청 많이 발생한다
console.log(1000 * '10');
console.log('1000' * '10');