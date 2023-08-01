// 표준 내장 함수
// const yn = confirm('너 밥먹었냐');
// if (yn) {
//   console.log('네니오');
// } else {
//   console.log('아니오');
// }

// setTimeout(() => console.log('1초 후 실행되었습니다.'), 2000);

// let second = 1;
// let timer =setInterval(() => {
//   document.write(`<h3>${second}초</h3>`);
//   second++;
// }, 1000);

// // 10초 후 타이머 제거
// setTimeout(() => {
//   clearTimeout(timer);
// }, 10000);

let money = '100원';
money = parseInt(money);
console.log(money + 100);

let result = 1000/'김기정';
if(isNaN(result)) {
  console.log('맙소사');
}