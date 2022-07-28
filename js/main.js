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
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  }else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //0.7, 1.4, 2.1, 2.8
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true, //반복재생
  // autoplay: {
  //   delay: 5000
  // },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true, //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //false = 보이고 있다.
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion //boolean 타입인 반대의 값을 대입한다.
  if(isHidePromotion) {
    // 숨김 처리 !!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!!
    promotionEl.classList.remove('hide');
  }
});



// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) { //매개변수 : 요소, 지연시간, 위아래로 움직이는 크기(px)
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size, //내려가는 크기(px)
    repeat: -1, //무한반복
    yoyo: true, //내려왔다가 다시 올라가는 효과
    ease: Power1.easeInOut, // gsap easing 이라고 검색후 -> power1, easeInOut 선택한 결과 
    delay: random(0, delay) //애니메이션 지연시간 (0으로 시작해서 매개변수 delay시간까지의 random한 수)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating1', .5, 15);
floatingObject('.floating1', 1.5, 20);