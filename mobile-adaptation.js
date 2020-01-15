$(document).ready(function () {
  const header = $('.header'),
        mHeader = $('.m-header'),
        bonusNum = $('#head_username .green.push').text()

  const mHeaderContent = function(){
    return (
      `<div class='m-header'>
        <div class='m-header__leftSide'>
          <a href="https://www.xcom-shop.ru/" title="На главную">
            <div class='m-logo'></div>
          </a>
          <ul class="m-location">
            <li class="m-location__active"> Москва
              <ul class="m-location-list">
                <li class='m-location-list__item'>
                  <a href='http://www.xcomspb.ru/'>Санкт-Петербург</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class='m-header__rightSide'>
          <div class="m-header-button">
            <div class="m-header-button__icon m-header-button__icon--cart"></div>
          </div>
          <div class="m-header-button">
            <div class="m-header-button__icon m-header-button__icon--phone"></div>
          </div>
          <div class="m-header-button m-user">
            <div class="m-header-button__icon m-header-button__icon--user"></div>
            <ul class='m-user-list'>
              <li class='m-user-list__item'><a href='/profile/'>Профиль</a></li>
              <li class='m-user-list__item'><a href='/history/'>История заказов</a></li>
              <li class='m-user-list__item'><a href='#' onclick="logout();return false;">Выйти</a></li>
              <li class='m-user-list__item'><span class='green'>${bonusNum}</span></li>

            </ul>
          </div>
          <div class='m-menu'>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class='m-menu-block m-scroll'>
            <div class='m-menu-block__close'>Закрыть</div>
            <ul class='m-menu-list'>
              <li class='m-menu-list__item'><a href="https://www.xcom-shop.ru/pages/delivery/">Доставка</a></li>
              <li class='m-menu-list__item'><a href="https://www.xcom-shop.ru/pages/contacts/">Контакты</a></li>
              <li class='m-menu-list__item'><a href="https://www.xcom-shop.ru/pages/payment/">Оплата</a></li>
              <li class='m-menu-list__item'><a href="https://www.xcom-shop.ru/pages/warranty/">Гарантия</a></li>
              <li class='m-menu-list__item'><a href="https://www.xcom-shop.ru/pages/about/">О&nbsp;нас</a></li>
              <li class='m-menu-list__item'><a href="http://forum.xcom-shop.ru/" target="_blank">Форум</a></li>
              <li class='m-menu-list__item'><a href="https://www.xcom-shop.ru/pages/sale/">Распродажа</a></li>
            </ul>
            <ul class='m-menu-list m-menu-list--phone'>
              <li class='m-menu-list__item'><a href="tel:+74957999669">+7 495 799-96-69</a></li>
              <li class='m-menu-list__item'><a href="tel:+78002000069">8 800 200-00-69</a></li>
              <li class='m-menu-list__item'><a href="viber://chat?number=79067999669" class="soc-link">
                        <img width="24px" src="/toecto/xcom-mobile-mutation/master/main_files/icon_viber.svg" alt="">
                    </a>
                    <noindex>
                        <a href="https://wa.me/79067999669" class="soc-link" target="_blank">
                            <img width="24px" src="/toecto/xcom-mobile-mutation/master/main_files/icon_whatsapp.svg" alt="">
                        </a>
                    </noindex>
              </li>
              
              
            </ul>
            <div class='btn-store'>
                <a class='btn-store__item' href="https://itunes.apple.com/ru/app/ikskom-sop/id1099197743?mt=8"><img src="/toecto/xcom-mobile-mutation/master/assets/icons/appstore.png" alt="Доступно в AppStore" border="0"></a>
                <a class='btn-store__item' href="https://play.google.com/store/apps/details?id=ru.xcom_shop.shop"><img src="/toecto/xcom-mobile-mutation/master/assets/icons/googleplay.png" alt="Доступно в Google play" border="0"></a>

            </div>
            

            <ul class='m-menu-list'>
              <li class='m-menu-list__item'><a href="mailto:val@xcom.ru" class="black">Прием жалоб и предложений</a></li>
              <li class='m-menu-list__item'><a href="https://www.xcom-shop.ru/complaint/" class="black">Отдел рекламаций</a></li>
              <li class='m-menu-list__item'><a href="https://www.xcom-shop.ru/pages/services/" class="black">Наши услуги</a></li>
              <li class='m-menu-list__item'><a href="https://www.xcom-shop.ru/pages/corporate_department/" class="black">Постоянным покупателям</a></li>
              <li class='m-menu-list__item'><a href="https://www.xcom-shop.ru/catalog/ytsenennye_tovary/" class="black">Уцененные товары</a></li>
              <li class='m-menu-list__item'><a href="https://www.xcom-shop.ru/pages/our_games/" class="black">Наши игры</a></li>
              <li class='m-menu-list__item'><a href="https://www.xcom-shop.ru/pages/customer/" class="black">Уголок покупателя</a></li>
            </ul>
          </div>
        </div>
        
      </div>`
    )
  }
  header.append(mHeaderContent)
  mHeader.hide()
  
  $(document).on('mouseup', function (e) {
    var div = $('.m-location')
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $('.m-location-list').slideUp()
    } else {
      $('.m-location-list').slideToggle(200)
    }
  })
  $(document).on('mouseup', function (e) {
    var div = $('.m-user')
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $('.m-user-list').fadeOut()
    } else {
      $('.m-user-list').fadeToggle(200)
      $('.m-menu-block').fadeOut('fast')

    }
  })
  $(document).on('click', '.m-menu', function () {
    $('.m-menu-block').fadeToggle(200)
  })
  $(document).on('click', 'a.btn-show', function () {
    $(this).closest('.catalog-menu').toggleClass('show')

  })
  $(document).on('click', '.m-menu-block__close', function () {
    $('.m-menu-block').fadeOut(200)
  })
  
  $('#foot').find('table').addClass('footer-info')
  $('#recent_topics').closest('table').addClass('forum-public')
  $('.catalog-nav .search .show-main-menu').attr('id', 'main-menu')
  $(document).on('click', '.main-menu-mobile__close', function () {
    $('#main-menu-mobile').fadeOut(200)
  })

  $(document).on('click', '#main-menu-btn', function () {
    $('#main-menu-mobile').fadeIn(200)
  })
  
  //main-menu
  let items = []
  $('.navbar-catalog .catalog-menu .catalog-menu__item').each(function (i, el) {
    const item = {}
    let str = ''

    item.title = $(el).find('.catalog-menu__title').text()
    item.href = $(el).find('a').attr('href')

    item.img = $(el).find('.catalog-menu__icon').find('img').attr('src').match(/[^\/\\]*$/)
    items.push(item)
  })

  

  // end main-menu

  let mainMenuBtnCreate = false,
    mainMenuMobileCreate = false

  //1023
  function w1023() {
    if (document.body.clientWidth <= 1023) {
      console.log('Desktop');
      header.find('.right-block').hide()
      mHeader.show()

    } else {  
      header.find('.right-block').show()
      mHeader.hide()
    }
  }
  
  function w999() {
    if (document.body.clientWidth <= 999) {
      console.log('Table');
      let catalog = $('#catalog_nav')
      
      const mainMenuBtn = `
        <div id='main-menu-btn'>
            <span>Каталог</span>
        </div>
      `

      if (!mainMenuBtnCreate) {
        $('#main-menu').hide()
        $('#search-div').find('form').append(mainMenuBtn)
        mainMenuBtnCreate = true
      } 
      $('#main-menu2').show()
      $('#main-menu-btn').css('display','table-cell')
      $('#main-menu').hide()

      if (!mainMenuMobileCreate) {
        const mainMenuMobile = `
        <div id='main-menu-mobile' class="main-menu-mobile">
          <div class="main-menu-mobile__close">Закрыть</div>
          <ul id='menu-mobile-list' class="main-menu-mobile__list">
            
          </ul>
        </div>
        `
        $('#catalog_nav').after(mainMenuMobile)
        mainMenuMobileCreate = true

        items.forEach(function (val, index, arr) {
          const li = `
          <li class='menu-mobile__item'>
            <a href="${val.href}">
              <div class='menu-mobile__item__img'><img src="/toecto/xcom-mobile-mutation/master/assets/icons/menu/${val.img}" alt="${val.title}"></div>
              <div class='menu-mobile__item__title'>${val.title}</div>
            </a>
          </li>
          `
          $('#menu-mobile-list').append(li)
        })
      } 
      

      
    } else {  
      $('#main-menu2').hide()
      $('#main-menu-mobile').hide()
      $('#main-menu-btn').hide()
      $('#main-menu').show()
    }
    
  }

  let closeBtnCreate = false
  function w767() {
    
    if (document.body.clientWidth <= 767) {
      const closeBtn = `
        <div class="main-menu__close">Закрыть</div>
      `
      
      if (!closeBtnCreate){
        setTimeout(function () {
          $('.catalog-nav .catalog-menu .main-menu').prepend(closeBtn)
        }, 1000)
        
        closeBtnCreate = true
      }
    } else {
      $('.catalog-nav .catalog-menu .main-menu').find('.main-menu__close').remove()
      closeBtnCreate = false
    }
  }

  w1023()
  w999()
  w767()

  $(window).resize(function () {
    w1023()
    w999()
    w767()
  });

  
  
})