'use strict';
$(document).ready(function () {
    //fix
    if ($('#news_block_heading').length > 0) {
        $('#news_block_heading .heading1').append('<a href="/news/rss/" target="_blank" class="rss"></a>')
    }
    //end fix
    
    
    
    

    const header = $('.header'),
        mHeader = $('.m-header'),
        bonusNum = $('#head_username .green.push').text();
    
    let mainPage = false
    
    if (window.location.pathname == '/') {
        mainPage = true
    } else {
        mainPage = false
    }
    const mHeaderContent = function () {
        return (
            `<div class='m-header'>
        <div class='m-header__leftSide'>
            <a href="/" title="На главную">
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
            <div class="m-header-button" id='mobile-cart'>
            <div class="m-header-button__icon m-header-button__icon--cart"></div>
            <div class="m-header-button__notification"><span id='basketCounter'></span></div>
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
                <li class='m-menu-list__item'><a href="/pages/delivery/">Доставка</a></li>
                <li class='m-menu-list__item'><a href="/pages/contacts/">Контакты</a></li>
                <li class='m-menu-list__item'><a href="/pages/payment/">Оплата</a></li>
                <li class='m-menu-list__item'><a href="/pages/warranty/">Гарантия</a></li>
                <li class='m-menu-list__item'><a href="/pages/about/">О&nbsp;нас</a></li>
                <li class='m-menu-list__item'><a href="http://forum.xcom-shop.ru/" target="_blank">Форум</a></li>
                <li class='m-menu-list__item'><a href="/pages/sale/">Распродажа</a></li>
            </ul>
            <ul class='m-menu-list m-menu-list--phone'>
                <li class='m-menu-list__item'><a href="tel:+74957999669">+7 495 799-96-69</a></li>
                <li class='m-menu-list__item'><a href="tel:+78002000069">8 800 200-00-69</a></li>
                <li class='m-menu-list__item'>
                    <a href="http://telegram.me/xcom_shop" class="soc-link" target="_blank">
                        <img width="24px" src="/mod/site/images/svg/teleg.svg" alt="">
                    </a>
                    <a href="sms:+79067999669" class="soc-link">
                        <span class="viber">
                            <img src="/mod/site/images/svg/comment.svg" alt="">
                        </span>
                    </a>
                    <a href="viber://chat?number=79067999669" class="soc-link">
                        <img width="24px" src="/mod/site/images/svg/icon_viber.svg" alt="">
                    </a>
                    <a href="whatsapp://send?phone=79067999669" class="soc-link">
                        <img width="24px" src="/mod/site/images/svg/icon_whatsapp.svg" alt="">
                    </a>
                </li>
            </ul>
            <div class='btn-store'>
                <a class='btn-store__item' href="https://itunes.apple.com/ru/app/ikskom-sop/id1099197743?mt=8"><img src="/mod/site/images/appstore.png" alt="Доступно в AppStore" border="0"></a>
                <a class='btn-store__item' href="https://play.google.com/store/apps/details?id=ru.xcom_shop.shop"><img src="/mod/site/images/googleplay.png" alt="Доступно в Google play" border="0"></a>
            </div>
            <ul class='m-menu-list'>
                <li class='m-menu-list__item'><a href="mailto:val@xcom.ru" class="black">Прием жалоб и предложений</a></li>
                <li class='m-menu-list__item'><a href="/complaint/" class="black">Отдел рекламаций</a></li>
                <li class='m-menu-list__item'><a href="/pages/services/" class="black">Наши услуги</a></li>
                <li class='m-menu-list__item'><a href="/pages/corporate_department/" class="black">Постоянным покупателям</a></li>
                <li class='m-menu-list__item'><a href="/catalog/ytsenennye_tovary/" class="black">Уцененные товары</a></li>
                <li class='m-menu-list__item'><a href="/pages/our_games/" class="black">Наши игры</a></li>
                <li class='m-menu-list__item'><a href="/pages/customer/" class="black">Уголок покупателя</a></li>
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
        $('#main-menu-mobile').slideToggle(200)
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
        if (screen.width <= 1023) {
            header.find('.right-block').hide()
            mHeader.show()

        } else {
            header.find('.right-block').show()
            mHeader.hide()
        }
    }

    function w999() {
        if (screen.width <= 999) {
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
            $('#main-menu-btn').css('display', 'table-cell')
            $('#main-menu').hide()

            if (!mainMenuMobileCreate) {
            //   <div class="main-menu-mobile__close">Закрыть</div>
                const mainMenuMobile = `
                    <div id='main-menu-mobile' class="main-menu-mobile">
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
              <div class='menu-mobile__item__img'><img src="./assets/icons/menu/${val.img}" alt="${val.title}"></div>
              <div class='menu-mobile__item__title'>${val.title}</div>
            </a>
          </li>
          `
                    $('#menu-mobile-list').append(li)
                })
            }

            if (mainPage) {
                $('#main-menu-mobile').show()
            }


            setTimeout(function () {
                $(".action_tiles__wrap").getNiceScroll().remove()
                $(".action_tiles__wrap").css('overflow-x', 'auto')
            }, 1000)

        } else {
            $('#main-menu2').hide()
            $('#main-menu-mobile').hide()
            $('#main-menu-btn').hide()
            $('#main-menu').show()
            var niceScroll = $(".action_tiles__wrap").niceScroll({
                cursorcolor: "#0069ab"
            });
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

    //end Main

    //productPage
        if ($('p.fake-list').length > 0) {
            $('p.fake-list').closest('table').addClass('fake-table')
        }
        let availability = $('#card #offer_details tr:nth-child(3) td:nth-child(3)').addClass('availability')
        if (screen.width <= 567) {
            availability.detach()
            $('.card_content table').prepend('<tr></tr>')
            availability.appendTo($('.card_content table tr:nth-child(1)'))
        }

        let basket = 0

        function basketCheck() {
            const notif = $('#mobile-cart .m-header-button__notification')
            basket ? notif.fadeIn(200) : notif.hide()
        }
        basketCheck()

        function basketCounter() {
            basket = 0
            $('#bill_container').find('input[data-price]').each(function (i, el) {
                const val = $(el).val()
                basket += +val
            })
            $('#basketCounter').text(basket)
        }
        basketCounter()

        $(document).on('click', function () {
            basketCounter()
            basketCheck()
        })
        $(window).resize(function () {
            basketCheck()
        });
    
    // end productPage

    //category
    let catalogTransform = false
    let catalogMobileCreate = false
    function category(){
        if (screen.width <= 999 && !catalogTransform) {

            let catalogSubfolders = $('#catalog_subfolders').addClass('category-tabs__item').detach()

            let catalogFilters = $('#catalog_filters').addClass('category-tabs__item').detach()
            let content = $('#content .catalog tr td:nth-child(2)').attr('id', 'product-list').addClass('category-tabs__item').detach()
            
            let catalogMobile = `
            <div id="catalogMobile" class="catalogMobile">
                <ul id="category-link" class="category-link">
                    <li class='category-link__item'>Разделы</li>
                    <li class='category-link__item'>Фильтры</li>
                    <li class='category-link__item'>Товары</li>
                </ul>

                <div id="category-tabs" class="category-tabs">
                </div>
            </div>`
            
            
            $('#navigation_left').hide()
            if (!catalogMobileCreate){
                $('#main-menu-mobile').after(catalogMobile)
                catalogMobileCreate = true
            }
            if(catalogMobileCreate){
                $('.category-link__item').each(function () {
                    $(this).removeClass('active')
                })
                $('.category-tabs__item').each(function () {
                    $(this).removeClass('active')
                })
                $('.category-tabs__item:nth-child(1)').addClass('active')
            }
            


            $('#category-tabs').append(catalogSubfolders).append(catalogFilters).append(content)
            if (catalogSubfolders.length == 0 || null) {
                $('#category-link li:nth-child(1)').remove()
                $('#product-list').addClass('active')
                $('#category-link').addClass('w50')
                $('#category-link li:nth-child(2)').addClass('active')
            } else {
                $('#catalog_subfolders').addClass('active')
                $('#category-link li:nth-child(1)').addClass('active')
            }


            function tabsSelect(tab, contentTab, callback) {
                var tcl = $(tab);
                var ct = $(contentTab);

                tcl.click(function () {
                    if (!$(this).hasClass('active')) {
                        tcl.removeClass('active')
                        var i = $(this).index();
                        $(this).addClass('active');
                        ct.children().removeClass('active').hide().eq(i).addClass('active').fadeIn(300);
                        $(window).scrollTop(95) 
                    }

                });
            }
            tabsSelect('#category-link li', '#category-tabs')
            catalogTransform = true
            $(document).on('scroll', function (e) {
                if ($(this).scrollTop() > 97){
                    $('#category-link').css('position','fixed')
                    $('#catalog_nav').css('margin-bottom', '38px')
                } else {
                    $('#category-link').css('position', 'relative')
                    $('#catalog_nav').css('margin-bottom', '0')
                }
            })
        } else if (screen.width > 999 && catalogTransform) {
            $('.category-tabs__item').each(function(){
                $(this).removeClass('active').show()
            })
            let catalogSubfolders = $('#catalog_subfolders').detach()
            let catalogFilters = $('#catalog_filters').detach()
            let content = $('#product-list').detach()

            $('#navigation_left .block-universal:nth-child(1)').append(catalogSubfolders)
            $('#navigation_left').append(catalogFilters)
            $('#content .catalog tr').append(content)
            $('#navigation_left').show()
            catalogTransform = false
        }
    }
    category()
    $(window).resize(function () {
        category()
    });
    //end category

    //temp
    
    // $('#category-link li:nth-child(3)').addClass('active')
    
})