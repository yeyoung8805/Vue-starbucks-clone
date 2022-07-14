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
window.addEventListener('scroll', function() {
  console.log('scroll!');
});
