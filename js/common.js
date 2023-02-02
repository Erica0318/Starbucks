
// HEADER > Search > input, 돋보기 영역 

const searchEL = document.querySelector('.search');
const searchInputEl = searchEL.querySelector('input');

searchEL.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  // focused 라는 class를 추가
  searchEL.classList.add('focused');
  // html의 속성 추가 (속성 이름, 속성 값)
  searchInputEl.setAttribute('placeholder', '통합검색')
;});

searchInputEl.addEventListener('blur', function() {
  // focused 라는 class를 제거
  searchEL.classList.remove('focused');
  // html의 속성 추가 (속성 이름, 속성 값)
  searchInputEl.setAttribute('placeholder', '')
;});




// [Footer]
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2023