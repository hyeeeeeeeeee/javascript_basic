//학생객체 생성을 위한 틀(생성자 함수)
function Student(ssn, name, korean, english, math) {
  // this = {};
  this.ssn = ssn;
  this.name = name;
  this.korean = korean;
  this.english = english;
  this.math = math;

  // this.getSum = function () {
  //   return this.korean + this.english + this.math;
  // }

  // this.getAverage = function () {
  //   return this.getSum() / 3;
  // }

  // this.toString = function () {
  //   return `${this.ssn} \t ${this.name} \t ${this.korean} \t ${this.english} \t ${this.math} \t ${this.getSum()} \t ${this.getAverage()}}`;
  // }
  // return this;
}

// 정적(static) 속성 및 메소드 추가
Student.schoolName = "EZEN 초등학교";
Student.showSchoolName = function () {
  alert(Student.schoolName);
}

// 생성자 함수(객체)의 메소드를 student의 프로토타입 객체에 할당
Student.prototype.getSum = function () {
  return this.korean + this.english + this.math;
}

Student.prototype.getAverage = function () {
  return this.getSum() / 3;
}

// object 프로토타입객체의 toString() 오버라이딩
Student.prototype.toString = function () {
  return `${this.ssn} \t ${this.name} \t ${this.korean} \t ${this.english} \t ${this.math} \t ${this.getSum()} \t ${this.getAverage()}}`;
}

let student1 = new Student(10, '김기정', 90, 80, 50);
console.log(student1.schoolName);
let student2 = new Student(10, '김기정', 90, 80, 50);
let student3 = new Student(10, '김기정', 90, 80, 50);
console.log(student1.toString()); // 프로토타입 객체의 toString() 메소드 호출
console.log(student2.toString()); // 프로토타입 객체의 toString() 메소드 호출
console.log(student3.toString()); // 프로토타입 객체의 toString() 메소드 호출

// 프로토타입 상속 체인 검증
console.log('name' in student1);
console.log('valueOf' in student1);

// object 프로토타입의 메소드 재사용
console.log(student1.hasOwnProperty('name'));
console.log(student1.hasOwnProperty('valueOf'));
console.log(student1.toString());

// construtor 쓰임새
function doTask(object) {
  if (object.constructor === Student) {
    // if (object instanceof Object) {
    //   console.log("학생일때만 수행하는 메소드입니다.");
    // }
  }
}
doTask({});

Student.showSchoolName();
