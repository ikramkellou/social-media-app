/* ===============================================
  Open header search
=============================================== */

jQuery(document).ready(function(){
  jQuery('.close-search-form').hide();
});

function social_media_expert_open_search_form() {
  jQuery('.header-search .search-form').addClass('is-open');
  jQuery('body').addClass('no-scrolling');
  setTimeout(function(){
    jQuery('.search-form  #header-searchform input#header-s').filter(':visible').focus();
    jQuery('.close-search-form').show();
    jQuery('.search-form #searchform #search').focus();
  }, 100);

  return false;
}

jQuery( ".header-search a.open-search-form").on("click", social_media_expert_open_search_form);

/* ===============================================
  Close header search
=============================================== */

function social_media_expert_close_search_form() {
  jQuery('.header-search .search-form').removeClass('is-open');
  jQuery('body').removeClass('no-scrolling');
  jQuery('.close-search-form').hide();
}

jQuery( ".header-search a.close-search-form").on("click", social_media_expert_close_search_form);

/* ===============================================
  TRAP TAB FOCUS ON MODAL SEARCH
============================================= */

jQuery('.search-form #searchform #search').on('keydown', function (e) {
  if (jQuery("this:focus") && (e.which === 9 && !e.shiftKey)) {
    e.preventDefault();
    jQuery(this).blur();
    jQuery('.search-form #searchform :input.search-submit').focus();
  }
 else if (jQuery("this:focus") && (e.which === 9 && e.shiftKey)){
    e.preventDefault();
    jQuery(this).blur();
    jQuery('.search-form a.close-search-form').focus();
  }
});

jQuery('.search-form #searchform :input.search-submit').on('keydown', function (e) {
  if (jQuery("this:focus") && (e.which === 9 && !e.shiftKey)) {
    e.preventDefault();
    jQuery(this).blur();
    jQuery('.search-form a.close-search-form').focus();
  }
  else if (jQuery("this:focus") && (e.which === 9 && e.shiftKey)){
    e.preventDefault();
    jQuery(this).blur();
    jQuery('.search-form #searchform #search').focus();
  }
});

jQuery('.search-form a.close-search-form').on('keydown', function (e) {
  if (jQuery("this:focus") && (e.which === 9 && !e.shiftKey)) {
    e.preventDefault();
    jQuery(this).blur();
    jQuery('.search-form #searchform #search').focus();
  }
  else if (jQuery("this:focus") && (e.which === 9 && e.shiftKey)){
    e.preventDefault();
    jQuery(this).blur();
    jQuery('.search-form #searchform :input.search-submit').focus();
  }
});

/* ===============================================
	OWL CAROUSEL SLIDER
=============================================== */

jQuery('document').ready(function(){
  var owl = jQuery('.slider .owl-carousel');
    owl.owlCarousel({
    margin:20,
    nav: true,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: false,
    dots:false,
    navText : ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i> '],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});

/* ===============================================
  OPEN CLOSE Menu
============================================= */

function social_media_expert_open_menu() {
  jQuery('button.menu-toggle').addClass('close-panal');
  setTimeout(function(){
    jQuery('nav#main-menu').show();
  }, 100);

  return false;
}

jQuery( "button.menu-toggle").on("click", social_media_expert_open_menu);

function social_media_expert_close_menu() {
  jQuery('button.close-menu').removeClass('close-panal');
  jQuery('nav#main-menu').hide();
}

jQuery( "button.close-menu").on("click", social_media_expert_close_menu);

/* ===============================================
  TRAP TAB FOCUS ON MODAL MENU
============================================= */

jQuery('button.close-menu').on('keydown', function (e) {
  if (jQuery("this:focus") && (e.which === 9)) {
    e.preventDefault();
    jQuery(this).blur();
    jQuery('button.menu-toggle').focus();
  }
});

/* ===============================================
  Scroll Top //
============================================= */

jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 100) {
      jQuery('.scroll-up').fadeIn();
  } else {
      jQuery('.scroll-up').fadeOut();
  }
});

jQuery('a[href="#tobottom"]').click(function () {
  jQuery('html, body').animate({scrollTop: 0}, 'slow');
  return false;
});

/*===============================================
 PRELOADER
=============================================== */

jQuery('document').ready(function($){
  setTimeout(function () {
  jQuery(".cssloader").fadeOut("slow");
},1000);
});

/* ===============================================
  STICKY-HEADER
============================================= */

jQuery(window).scroll(function () {
    var sticky = jQuery('.sticky-header'),
    scroll = jQuery(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed-header');
    else sticky.removeClass('fixed-header');
  });
