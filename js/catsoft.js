//const fileinclude = require("gulp-file-include");

$(document).ready(function() {

    $('.examples_slider').slick({
      arrows: true,
      dots: true,
      slidesToShow: 1,
      speed: 800,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1800,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            adaptiveHeight: true
          }        
        }
      ]      
    });

    $(document).on('click','.show-thanks', function() {
      $('#thanks').show(); 
      $('body').addClass('fixed'); 
        return false;
      });
      $(document).on('click','.show-form', function() {
        $('#form').show(); 
        $('body').addClass('fixed'); 
          return false;
        });
        $(document).on('click','.show-anketa-dealer', function() {
          $('#anketa-d').show();  
          $('body').addClass('fixed');
            return false;
          });
          $(document).on('click','.show-anketa-customer', function() {
            $('#anketa-c').show(); 
            $('body').addClass('fixed'); 
              return false;
            });

      $(document).on('click','.popup_close, .popup_overlay', function() {
        $('.popup_wrapper').hide();
        $('body').removeClass('fixed');  
          return false;
        });

      $(document).on('click','.show-mobile-menu', function() {
        $('.heder-menu').slideDown();  
        $(this).hide();
        $('.hide-mobile-menu').show();                
        return false;
      });

      $(document).on('click','.hide-mobile-menu', function() {
        $('.heder-menu').slideUp();  
        $(this).hide();
        $('.show-mobile-menu').show();                
        return false;
      });

      $(document).on('click', '.heder-menu a', function(e) {
          e.preventDefault();
          var id  = $(this).attr('href');
          var top = $(id).offset().top;
          var topN = top - 80;
          $('body, html').animate({scrollTop: topN}, 500);
      });

      $(document).click(function(event){            
        var windowW = $(window).width();
        if (windowW < 1001){
          if ($(event.target).closest('.show-menu, .hide-menu').length) return;
          $('.heder-menu').slideUp();
          $('.hide-mobile-menu').hide();
          $('.show-mobile-menu').show();  
          event.stopPropagation();
          } 
      });

      $(document).on('click','#platform-base', function() {
        $(this).parents('.platform-switcher').find('span').removeClass('active');
        $(this).addClass('active'); 
        $('.tarifs_platform .base').css('display','table-cell');  
        $('.tarifs_platform .stand').hide();
        $('.tarifs_platform .prem').hide(); 
        return false;
      });

      $(document).on('click','#platform-prem', function() {    
        $(this).parents('.platform-switcher').find('span').removeClass('active');
        $(this).addClass('active'); 
        $('.tarifs_platform .prem').css('display','table-cell');  
        $('.tarifs_platform .base').hide();
        $('.tarifs_platform .stand').hide(); 
        return false;
      });

      $(document).on('click','#platform-stand', function() {
        $(this).parents('.platform-switcher').find('span').removeClass('active');     
        $(this).addClass('active');  
        $('.tarifs_platform .stand').css('display','table-cell');  
        $('.tarifs_platform .base').hide();
        $('.tarifs_platform .prem').hide(); 
        return false;
      });

      $(document).on('click','#develop-base', function() {
        $(this).parents('.develop-switcher').find('span').removeClass('active');
        $(this).addClass('active'); 
        $('.tarifs_develop .base').css('display','table-cell');  
        $('.tarifs_develop .stand').hide();
        $('.tarifs_develop .prem').hide(); 
        return false;
      });

      $(document).on('click','#develop-prem', function() {    
        $(this).parents('.develop-switcher').find('span').removeClass('active');
        $(this).addClass('active'); 
        $('.tarifs_develop .prem').css('display','table-cell');  
        $('.tarifs_develop .base').hide();
        $('.tarifs_develop .stand').hide(); 
        return false;
      });

      $(document).on('click','#develop-stand', function() {
        $(this).parents('.develop-switcher').find('span').removeClass('active');     
        $(this).addClass('active');  
        $('.tarifs_develop .stand').css('display','table-cell');  
        $('.tarifs_develop .base').hide();
        $('.tarifs_develop .prem').hide(); 
        return false;
      });
        

});