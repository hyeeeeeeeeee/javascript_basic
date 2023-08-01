// 생성자 함수를 이용한 객체 틀
function Dog(name, age, kind) {
  // this = {}; -> new로 인해 넣어진 코드
  // 포로퍼티(속성) 추가
  this.name = name;
  this.age = age;
  this.kind = kind;

  //기능(메소드) 추가
  this.cry = function () {
    console.log(`${this.name} 강아지가 웁니다`);
  }

  // return this; ->new로 인해 리턴됨, 이것도 new로 인해 넣어짐
}

let dog = new Dog('루니', 8, '비송');
console.log(dog);
dog.cry();
let dog2 = new Dog('꼬미', 8, '길바닥');
console.log(dog2);
dog2.cry();

//자바스크립트 표준 객체(생성자 함수)를 사용
let string = new String("뽈롱");
let count = string.length;
console.log(count);

let ssn = "680313-1234567";
let ch = ssn.charAt(7);
switch (ch) {
  case '1': console.log('남자'); break;
  case '2': console.log('여자'); break;
}

let number = new Number(10);
console.log(number);
let bool = new Boolean(true);
console.log(bool);
let today = new Date();
console.log(today.toLocaleString());

// 자바의 List, Set, Queue, Stack 기능이 들어있는 배열
let array = new Array();