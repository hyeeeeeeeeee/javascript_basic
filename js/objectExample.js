// 강아지 객체 즉시 생성(틀 없이)
// 객체 리터럴 표현식
let dog = {
  name: '루니',
  age: 8,
  kind: '비숑',
  eat: function () {
    console.log(this.name + '가 밥을 먹습니다.');
  },
  toString : function () {
    return "어머";
  }
};

// 객체의 속성 검색
console.log(dog.name);
console.log(dog['name']);
console.log(dog.age);
console.log(dog.kind);
dog.eat();

// 속성 변경
dog.name = '로니';
console.log(dog.name);

// 속성 제거
delete dog.age;
console.log(dog.age);

// 기능 추가
dog.walk = function () {
  console.log('잘 걷습니다.');
}

dog.walk();

//in 연산자
if ('age' in dog) {
  console.log(dog.age);
} else {
  console.log('age 속성이 없어여');
}

//for ~ in문
for (const key in dog) {
  console.log(key, dog[key]);
}

// for ~ of문
let array = [4, 5, 3, 1];
for (const value of array) {
  console.log(value);
}

console.clear(); 
console.log(dog);
console.dir(dog); // 객체를 상세히 보는 방법