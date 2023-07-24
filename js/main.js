$(function(){

  var mvHeight = $('.mainvisual').outerHeight(true);
  $(window).scroll(function(){
    if($(this).scrollTop()>mvHeight){
      $('.sp-header-site-title').fadeIn(400);
    }
    else{
      $('.sp-header-site-title').fadeOut(400);
    }
  });

  //---------- バーガーメニュー ----------
  $('#show').on('click', function(){
    $(this).toggleClass('active');
    $('.sp-nav-wrap').toggleClass('active');
    $('body').toggleClass('active');
    $('.burger').toggleClass('js-bg-change');
  });


  // --------------------メインビジュアルののびるやつここから ---------------------
  function BgFadeAnime(){
    $('.bgLRextendTrigger').each(function(){
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        $(this).addClass('bgLRextend');
      }else{
        $(this).removeClass('bgLRextend');
      }
    });	

    $('.bgappearTrigger').each(function(){ 
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        $(this).addClass('bgappear');
      }else{
        $(this).removeClass('bgappear');
      }
    });
  }

  $(window).on('load', function(){
    BgFadeAnime();
  });
  // --------------------メインビジュアルののびるやつここまで ---------------------


    $('.works-slide__item').hover(
      function(){
      var thumbSrc = $(this).find(".works-slide__thumb").attr("src");
      $('.works-bg img').attr("src", thumbSrc).addClass('scall');
      $('.works__wrap').css("opacity", '0.8');
      $('.works-slide__item').not(this).css("opacity", 0.2);
    },
    function () {
      var defSrc = "images/spring.jpg";
      $('.works-bg img').attr("src", defSrc).removeClass('scall');
      $('.works__wrap').css("opacity", '1');
        $('.works-slide__item').not(this).css("opacity", 1);
      }
    );

      // ----------------メインビジュアルのタイピング -----------------
  function TextTypingAnime() {
    $('.TextTyping').each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var thisChild = "";
      if (scroll >= elemPos - windowHeight) {
        thisChild = $(this).children();
        thisChild.each(function (i) {
          var time = 100;
          $(this).delay(time * i).fadeIn(time);
        });
      } else {
        thisChild = $(this).children();
        thisChild.each(function () {
          $(this).stop(); 
          $(this).css("display", "none");
        });
      }
    });
  }
  
  $(window).scroll(function () {
    TextTypingAnime();
  });
  
  $(window).on('load', function () {
    var element = $(".TextTyping");
    element.each(function () {
      var text = $(this).html();
      var textbox = "";
      text.split('').forEach(function (t) {
        if (t !== " ") {
          textbox += '<span>' + t + '</span>';
        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);

    });

    $('.TextTyping span:nth-child(14)').append('<br>');
  });
  // ----------------メインビジュアルのタイピングここまで -----------------

    // --------------------フェードインここから ---------------------
 //------------- 左からフェードイン -----------------
 function fadeLeftAnime(){
  $('.fadeInLeft').each(function(){ 
    var elemPos = $(this).offset().top; 
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeLeftAnime');
    }else{
      $(this).removeClass('fadeLeftAnime');
      }
  });
}

$(window).on('load scroll', function (){
  fadeLeftAnime();
});

   // ---------------- その場でフェードイン  ----------------
   function onFadeAnime(){
    $('.onFadeTrigger').each(function(){ 
      var elemPos = $(this).offset().top + 200; 
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('onFadeAnime');
      }else{
      $(this).removeClass('onFadeAnime');
      }
    });
  }
  
  $(window).scroll(function (){
    onFadeAnime();
  });

  //画面をスクロールしたらフェードイン
  var mainHeight = $('.bg-gradation').outerHeight(true);
  console.log(mainHeight);
  $(window).scroll(function(){
    if($(this).scrollTop()>mainHeight){
      $('#toTop').fadeIn(400);
    }
    else{
      $('#toTop').fadeOut(400);
    }
  });

  $('#toTop').on('click', function() {
    $('html, body').animate({ 
      scrollTop: 0 }, 300);
    return false;
  });


});