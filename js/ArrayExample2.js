// Array 객체의 주요 메소드
let array = [1, 5, 3, 7, 4, 8, 9, 6, 2, 10];

let list = array.slice(2, 5);
console.dir(list);

let deleteList = array.splice(7, 1);
console.dir(deleteList);

// array.splice(2, 0, '김기정바보', '김기정임돠');
// console.dir(array);

// 검색 메소드 활용

// 판별 함수
/*
function findCondition(num) {
  if (num === 7) {
    return true;
  }
  return false;
}
*/

/*
let findNum = array.find(function (num) {
  return num === 7 ? true : false;
});
*/

let findNum = array.find(num => num === 7 ? true : false);

console.log(findNum);

// 배열에서 짝수목록만 검색하고 싶어여
let findNums = array.filter(num => num % 2 === 0 ? true : false);
console.dir(findNums);

// 배열 반복(순회)
array.forEach((num, index) => {
  console.log(num, index);
});

// 배열 정렬
// array.sort();
array.sort((num1, num2) => {
  return num1 - num2; // 오림차순
  // return num2 - num1; // 내림차순
});
console.log(array);