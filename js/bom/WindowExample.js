// BOM의 구조
console.dir(window);

let myWindow = open('../../hello.html', '내 창');
if(myWindow) {
  alert('팝업 해제해줘');
}

// myWindow.close();