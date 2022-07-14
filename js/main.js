const searchEl = document.querySelector('.search');
// const searchInputEl = document.querySelector('.search input');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() { //blur 는 focus 이벤트의 반대
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');
// _.throttle(함수, 시간) 함수를 통해 안에 실행되는 기능의 발생횟수를 제한한다.
window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    //배지 숨기기
    badgeEl.style.display = 'none';
  }else {
    //배지 보이기
    badgeEl.style.display = 'block';
  }
}, 300));
