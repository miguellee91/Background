// alert('hi') 연결확인 경고창 확인
// 태그 선택querySelector는 (css), getElementById(id)
const css = document.querySelector('h3');
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const body = document.getElementById('gradient')

//색입력 color1과 color2를 선택시 두 색을 linear gradient로 body에 표시하는 함수
function shuffle() {
    const c1 = color1.value; //선택한 색
    const c2 = color2.value;
    //자바스크립트 문자열 안에 변수 넣기 `` 백틱 따옴표 사용
    body.style.background = `linear-gradient(to right, ${c1} , ${c2})`;
    css.innerText = body.style.background + ";"  // ;를 추가함으로써 해당 CSS 속성과 값을 제대로 구분하여 할당
}

//이벤트 리스너 사용
// body.addEventListener('dblclick', click);   // 객체명.addEventListner('이벤트유형', 함수명, 캡처여부) 마우스 이벤트: click/mouseenter/mouseleave

// function click() {
//     alert('click');
// }

color1.addEventListener('input', shuffle)
color2.addEventListener('input', shuffle)