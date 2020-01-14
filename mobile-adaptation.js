$(document).ready(function () {
  const header = $('.header'),
    mHeader = $('.m-header'),
    bonusNum = $('#head_username .green.push').text()

  const mHeaderContent = function () {
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
                        <img width="24px" src="./main_files/icon_viber.svg" alt="">
                    </a>
                    <noindex>
                        <a href="https://wa.me/79067999669" class="soc-link" target="_blank">
                            <img width="24px" src="./main_files/icon_whatsapp.svg" alt="">
                        </a>
                    </noindex>
              </li>
              
              
            </ul>
            <div class='btn-store'>
                <a class='btn-store__item' href="https://itunes.apple.com/ru/app/ikskom-sop/id1099197743?mt=8"><img src="./assets/icons/appstore.png" alt="Доступно в AppStore" border="0"></a>
                <a class='btn-store__item' href="https://play.google.com/store/apps/details?id=ru.xcom_shop.shop"><img src="./assets/icons/googleplay.png" alt="Доступно в Google play" border="0"></a>

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
  $(document).on('click', '.main-menu__close', function () {
    $('.catalog-nav .main-menu').fadeOut(200)
  })

  //1023
  function w1023() {
    if (screen.width <= 1023) {
      console.log('Desktop');
      header.find('.right-block').hide()
      mHeader.show()

    } else {
      header.find('.right-block').show()
      mHeader.hide()
    }
  }
  let catalogNavBtnCreate = false,
    mainMenuBtnCreate = false
  function w999() {
    if (screen.width <= 999) {
      console.log('Table');
      let catalog = $('#catalog_nav')
      const catalogNavBtn = `
      <li class="catalog-menu__item catalog-menu__item--arrow">
        <a href="#" class='btn-show'>
          <span class="catalog-menu__icon">
            <img src="./assets/icons/chevron-down-white.svg" alt=""></span>
          <span class="catalog-menu__title">Показать все</span>
        </a>
      </li>
      `
      const mainMenuBtn = `
        <div class="show-main-menu" id='main-menu2'>
            <span>Каталог</span>
        </div>
      `
      if (!catalogNavBtnCreate) {
        catalog.find('.catalog-menu').prepend(catalogNavBtn)
        catalogNavBtnCreate = true
      }
      if (!mainMenuBtnCreate) {
        $('#main-menu').hide()
        $('#search-div').find('form').append(mainMenuBtn)
        mainMenuBtnCreate = true
      }
    } else {
      $('#catalog_nav').find('.catalog-menu__item--arrow').remove()
      catalogNavBtnCreate = false
      $('#main-menu2').remove()
      catalogNavBtnCreate = false
      $('#main-menu').show()
    }
  }

  let closeBtnCreate = false
  function w767() {

    if (screen.width <= 767) {
      const closeBtn = `
        <div class="main-menu__close">Закрыть</div>
      `

      if (!closeBtnCreate) {
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