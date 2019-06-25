var ua = navigator.userAgent;
var isSafari = !!ua.match(/Version\/[\d\.]+.*Safari/);
var isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
var isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
var isAndroid = ua.toLowerCase().indexOf("android") > -1;

$(document).ready(function(){

    $(document).on('click', 'a', function(e){
        if(!$(this).parents('.menu_catalog').length && !$(this).parent().hasClass('item__name') && !$(this).hasClass('item__link')){
            e.preventDefault();
        }
    })

    let link_app = 'https://play.google.com/store/apps/details?id=ru.xcom_shop.shop';

    let localStorageApp = localStorage.getItem('app'),
        limit_app = 30 * 24 * 3600 * 1000; // месяц

    if (localStorageApp === null && !isIOS && !isSafari) {
        $('.app').show();
    }
    if(isAndroid){
        $('.app').addClass('app_google');
    }
    if(isIOS || isMac){
        link_app = 'https://itunes.apple.com/ru/app/ikskom-sop/id1099197743?mt=8';
    }

    $('.app__link').attr('href', link_app);
    
    let modals_data = JSON.parse(localStorageApp);
    if(localStorageApp && +new Date() - modals_data.date > limit_app){
        localStorage.clear('app');
        localStorage.setItem('app', JSON.stringify(modals));
    }

    $(document).on('click', '.app__close, .app__link', function(e){

        if($(this).hasClass('app__close')){
            e.preventDefault();
        }
        
        localStorage.setItem('app', JSON.stringify({
            date: +new Date()
        }));

        $('.app').hide();

    });

    $(document).on('click', '.navbar__trigger', function(e){
        e.preventDefault();

        // $(this).toggleClass('hover');
        $('.navbar__back').addClass('show');

        $('.common-header').addClass('open-navbar');

        $('body').css('overflow', 'hidden');

    });
    $(document).on('click', '.trigger_catalog', function(e){
        e.preventDefault();
        
        $('.navbar__back').addClass('show');

        $('.navbar_catalog').addClass('show');

        $('body').css('overflow', 'hidden');


    });

    $(document).on('click', '.navbar__back', function(e){
        e.preventDefault();

        $('.navbar__back').removeClass('show');

        $('.navbar_catalog').removeClass('show');
        $('.common-header').removeClass('open-navbar');

        $('.filter').removeClass('active');

        $('body').css('overflow', 'auto');

    });

    $(document).on('click', '.search__link', function(e){
        e.preventDefault();

        $('.search_mini').addClass('show');

    });

    $(document).on('click', '.search__close', function(e){
        e.preventDefault();

        $('.search_mini').removeClass('show');

    });

    $(document).on('click', '.product__tabs .button', function(e){
        e.preventDefault();

        if(!$(this).hasClass('active')){
            $(this).parent().parent().find('.active').removeClass('active');
            $(this).addClass('active');
        }

        if($(this).attr('data-type') == 'short'){
            $('.product__text .item_hide').removeClass('show');
        }
        if($(this).attr('data-type') == 'full'){
            $('.product__text .item_hide').addClass('show');
        }

    });

    $(".product__photo").owlCarousel({
        items: 1,
        nav: true,
        autoHeight: true,
        navText: ['<span class="icon_prev"></span>','<span class="icon_next"></span>']
    });

    $(document).on('click', '.filter__title', function(e){
        e.preventDefault();
        $('.filter').toggleClass('filter_show');
        $(this).toggleClass('active');
    });

    $(document).on('click', '.item__trigger', function(e){
        $(this).toggleClass('active');
        $(this).parents('.item_product').find('.item__wrap-buy').toggleClass('active');
    });

    $(document).on('click', '.filter__title', function(e){
        $('.filter').addClass('active');
        $('.navbar__back').addClass('show')
        $('body').css('overflow', 'hidden');
    });

    $(document).on('click', '.sort__title', function(e){
        $('.sort').toggleClass('active');
    });

    $(document).on('click', '.show-all-filter', function(e){
        e.preventDefault();

        $(this).parents('.menu_filter').find('[style="display: none;"]').show();

    });

    if($('body').find('.range').length){

        $(window).on('load', function(event) {
        
          var valueRange = function(el){
            if(el.val() != el.attr('placeholder') && el.val().length > 0){
              el.addClass('active');
            } else {
              el.val(el.attr('placeholder'));
              el.removeClass('active');
            }
          }
          
          $('.range').each(function (index, el) {
              var range = $(this).find(".range__slider"),
                  min = $(this).find('.range__min'),
                  max = $(this).find('.range__max'),
                  rangeRemove = $(this).find('.range__field-remove'),
                  from = parseInt(min.attr('placeholder')),
                  to = parseInt(max.attr('placeholder')),
                  rangeVal,
                  minVal,
                  maxVal;
    
              if(min.val() > 0){
                  min.addClass('active');
              }
              if(max.val() > 0){
                  max.addClass('active');
              }
    
              if (min.val()) {
                  minVal = min.val();
              } else {
                  minVal = from;
              }
    
              if (max.val()) {
                  maxVal = max.val();
              } else {
                  maxVal = to;
              }
    
              range.slider({
                  range: true,
                  min: from,
                  max: to,
                  values: [minVal, maxVal],
                  slide: function (event, ui) {
                    min.val(ui.values[0]);
                    max.val(ui.values[1]);    
                    valueRange(min);
                    valueRange(max);        
                  }
              });
    
              min.change(function () {
                  range.slider("values", 0, $(this).val());
              });
    
              max.change(function () {
                  range.slider("values", 1, $(this).val());          
              });
    
              min.keyup(function(event) {
                valueRange($(this))
              });
              max.keyup(function(event) {
                valueRange($(this))
              });
    
              min.val(range.slider("values", 0));
              max.val(range.slider("values", 1));
    
          });
    
        });
    
    }

});