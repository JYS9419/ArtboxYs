$(document).ready(function(){
    $(".swiper-wrapper").slick({
        autoplay:true, 
        infinite: true,
        slidesToShow:3, 
        dots:false,
        arrows:true, 
        speed:500,
        focusOnSelect: true,
        centerMode: true, /*홀수*/
        centerPadding: '90px',
    });
    // 자동 재생 시작 버튼 이벤트
    $("#autoplay-btn-start").click(function() {
        swiper.slick("slickPlay");
    });

    // 자동 재생 멈춤 버튼 이벤트
    $("#autoplay-btn-stop").click(function() {
        swiper.slick("slickPause");
    });
});

$(document).ready(function(){
    $('.best-slider').slick({
        autoplay:false, 
        infinite: true,
        dots:false,
        arrows:true, 
        speed:400,
        focusOnSelect: true,
        centerMode: true, /*홀수*/
        centerPadding: '60px',
        slidesToShow: 5, // 한 번에 보여지는 슬라이드 수
        slidesToScroll: 1, // 슬라이드 이동 시 스크롤 수
        prevArrow: $('#Bs-BtnPrev'), // 이전 버튼 요소 선택자
        nextArrow: $('#Bs-BtnNext'), // 다음 버튼 요소 선택자
        // 다양한 설정 옵션들...
    });
  });

  $(document).ready(function(){
    var currentPosition = parseInt($(".quickmenu").css("top"));
    $(window).scroll(function() {
      var position = $(window).scrollTop(); 
      $(".quickmenu").stop().animate({"top":position+currentPosition+"px"},1500);
    });
  });

// btn_top
$(function () {
    // 하단화살표 클릭시 최상단으로 이동
    $(".btn_top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
});