// let array = new Array();
let array = [];
array.push(10);
array.push('김기정씨');
array.push(new Student(10, '김기정', 90, 80, 30));
array.push(new Student(11, '박상훈', 80, 95, 100));
array.unshift(new Student(12, '이희영', 90, 95, 80));

for (const value of array) {
  console.log(value);
}

console.log(array[0]);
// console.dir(array);
console.log(array.length);

// delete array[0];
array.shift();
// array.pop();
console.dir(array);