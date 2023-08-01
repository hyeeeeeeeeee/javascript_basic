// 전역함수(어디서든 호출이 가능) 선언
function doTask() {
  // console.log("어떤일을 한단다.");
  console.dir(this); // 함수 안의 this는 자기 자신이 아니다
  console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
}

// 객체 생성
let person = { // 객체에서의 this는 자시자신을 가리킴
  name: "박새로이",
  age: 30,
  doTeach: function () {
    console.log("강의한단다.");
  }
}

// 함수 직접 호출
doTask();

// 함수 간접 호출
// doTask.call();
doTask.call(person); // 전역함수 doTask()를 person의 메소드로 변경하여 호출

// 특정 객체에 동적 속성을 추가하는 기능 전역으로 만듬
function addAttribute(key, value) {
  this[key] = value;
}

addAttribute('name', '김기정');
addAttribute('age', 30);

console.dir(window); //미리 생성된 객체

let user = {};
// addAttribute.call(user, 'name', '김기정');
// addAttribute.call(user, 'age', 30);

// addAttribute.apply(user, ['name', '김기정']);
// addAttribute.apply(user, ['age', 30]);

let addProperty = addAttribute.bind(user);
addProperty('name', '김기정');
addProperty('age', 30);

console.dir(user);

let array = [3, 4, 8, 1];

for (const key in array) {
  if (Object.hasOwnProperty.call(array, key)) {
    const value = array[key];
    console.log(value);
  }
}