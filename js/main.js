const toTopEl = document.querySelector('#to-top');
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
    // 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0, //원래 자리로 돌아오도록
    });
  }else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100, //우측으로 100px만큼 사라지도록
    });
  }
}, 300));

//버튼 클릭시 최상단으로 이동하도록 만듦
toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, { //window객체를 통해 화면을 제어한다는 뜻
    scrollTo: 0, // .7초 동안 화면의 위치를 0인 최상단으로 옮겨주겠다는 뜻
  });
});


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
new Swiper('.awards .swiper-container', {
  direction: 'horizontal',
  autoplay: true, // 자동재생 true
  loop: true, //반복재생 true
  spaceBetween: 30, //사이사이의 여백 30px
  slidesPerView: 5, //한번의 페이지에 보여질 슬라이드의 수 5개
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
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
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, /* 보여짐의 여부를 감시할 요소를 지정*/
      triggerHook: .8 /* 뷰포트의 0 ~ 1 사이에서,  0.8지점이 보이기 시작하면 setClassToggle()을 수행한다는 뜻 */
    })
    .setClassToggle(spyEl, 'show') /* spyEl : 요소, show : 넣었다가 뺐다 토클할 클래스명 */
    .addTo(new ScrollMagic.Controller());
});
