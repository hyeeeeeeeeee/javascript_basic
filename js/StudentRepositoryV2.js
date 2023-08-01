// 여러 학생목록 관리 객체
function StudentRepository() {
  // this = {};
  // this.students = new Array();
  this.students = [];
  // return this;
}

StudentRepository.prototype.addStudent = function (student) {
  this.students.push(student);
}

StudentRepository.prototype.getStudnets = function () {
  return this.students;
}

// 학번으로 학생 검색
StudentRepository.prototype.findBySsn = function (ssn) {
  return this.students.find(student => student.ssn === ssn ? true : false);
}

// 이름으로 학생 검색
StudentRepository.prototype.findByName = function (name) {
  return this.students.filter(student => student.name === name ? true : false);
}

// 학번으로 학생 삭제
StudentRepository.prototype.removeBySsn = function (ssn) {
  let deleted = false;

  this.students.forEach((student, index) => {
    if (student.ssn === ssn) {
      this.students.splice(index, 1);
      deleted = true;
    }
  });
  return deleted;
}

// 평균 범위로 검색
StudentRepository.prototype.findByRange = function (start, end) {
  let list = [];
  this.students.forEach(student => {
    if (student.getAverage() >= start && student.getAverage() <= end) {
      list.push(student);
    }
  });
  return list;
}

// ??정렬하여 전체 검색
StudentRepository.prototype.findAllbySort = function (fn) {
  return this.students.sort(fn);
}
// 임시 테스트
let studentRepository = new StudentRepository();
studentRepository.addStudent(new Student(10, '김기정', 90, 80, 50));
studentRepository.addStudent(new Student(11, '이기정', 90, 60, 80));
studentRepository.addStudent(new Student(12, '한기정', 90, 80, 90));
studentRepository.addStudent(new Student(13, '앗기정', 40, 70, 90));
studentRepository.addStudent(new Student(14, '힛기정', 50, 40, 50));
studentRepository.addStudent(new Student(15, '이기정', 90, 60, 70));

let allList = studentRepository.getStudnets();
for (const student of allList) {
  console.log(student.toString());
}
  console.clear();

//학번으로 검색 테스트




console.log("===============================================");
// 평균 내림차순으로 정렬하여 목록 보여주고 싶다
let sortedList = studentRepository.findAllbySort((student1, student2) => student2.getAverage() - student1.getAverage());
sortedList.forEach(student => {
  console.log(student.toString());
})