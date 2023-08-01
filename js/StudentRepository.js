// 여러 학생목록 관리 객체
function StudentRepository() {
  // this = {};
  // this.students = new Array();
  this.students = [];

  this.addStudent = function (student) {
    this.students.push(student);
  }

  this.getStudnets = function () {
    return this.students;
  }

  // 학번으로 학생 검색
  this.findBySsn = function (ssn) {
    for (const student of this.students) {
      if (student.ssn === ssn) {
        return student;
      }
    }
    return undefined;
  }

  // 이름으로 학생 검색
  this.findByName = function (name) {
    let list = [];
    for (const student of this.students) {
      if (student.ssn === ssn) {
        return student;
      }
    }
    return undefined;
  }

    // 학번으로 학생 삭제
    this.removeBySsn = function (ssn) {
      for(let i = 0; i < this.students.length; i++)
    }

    // 평균 범위로 검색
    this.findByRange = function (start, end) {
      // 구현하기 
    }

    // return this;
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