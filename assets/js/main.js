

// header Search 

  $(".header-search-btn").on('click', function(){
    if($(this).hasClass('toggle-close')) {
      $(this).removeClass('toggle-close').addClass('toggle-open');
      $('.header-top-search-area').addClass('open');
    }
    else {
      $(this).removeClass('toggle-open').addClass('toggle-close');
      $('.header-top-search-area').removeClass('open')
    }
  });

// close search area when click off of container

  $(document).on('click touchstart', function (e){
    if(!$(e.target).is('.header-search-btn, .header-search-btn *, .header-top-search-area, .header-top-search-area *')) {
      $('.header-top-search-area').removeClass('open');
      $('.header-search-btn').addClass('toggle-close');
    }
  });