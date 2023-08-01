let x = 88.5235334.toFixed(2); // autoboxing
console.log(Number.MAX_VALUE);
console.log(x);

// x = new Number(x);
// console.log(x.toFixed(2));

let y = 32323;
// new 없이 직접 호출 시 형변환 함수로 동작한다...
let result = Number(y); // 형변환
console.log(result);