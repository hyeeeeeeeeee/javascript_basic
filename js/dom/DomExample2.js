// 동적 스타일 적용하기
// let list = document.querySelectorAll('h1');
// list.forEach(element => {
//   element.style.color = 'white';
//   element.style['backgroundColor'] = 'blue';
// });

// 확인
// let hoverList = document.querySelectorAll('h1:hover');
// hoverList.forEach(element => {
//   element.style['backgroundColor'] = 'yellow';
// });

let list = document.querySelectorAll('h1');
list.forEach(element => {
  // element.classList.add('head');
  // element.classList.remove('head');
  setInterval(() => {
    element.classList.toggle('head');
  }, 1000);
});