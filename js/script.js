
window.addEventListener("DOMContentLoaded", function() {

    'use strict'

    //Smooth scrolling
    const anchors = document.querySelectorAll("a[href*='#']");

    for (let anchor of anchors) {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();

            const blockId = anchor.getAttribute('href').substr(1);

            document.getElementById(blockId).scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        })  
    }

    //Menu
    const hb = document.querySelector(".header__hamburger"),
          nav = document.querySelector(".nav"),
          navLink = document.querySelectorAll(".nav__link"),
          body = document.querySelector("body"),
          activeOverlay = document.querySelector(".active__overlay"),
          hbSpans = document.querySelector(".header__hamburger-spans");

    hb.addEventListener("click", function() {
        nav.classList.toggle("active");
        hbSpans.classList.toggle("burger-active");
        body.classList.toggle("lock");
        setTimeout(function() {
            activeOverlay.classList.toggle("overlay");
        }, 100);

        navLink.forEach(function(item, i, arr) {
            navLink[i].addEventListener("click", function() {
                nav.classList.remove("active");
                hbSpans.classList.remove("burger-active");
                activeOverlay.classList.remove("overlay");
                body.classList.remove("lock");
            });
        });

        activeOverlay.addEventListener("click", function() {
            nav.classList.remove("active");
            hbSpans.classList.remove("burger-active");
            activeOverlay.classList.remove("overlay");
            body.classList.remove("lock");
        });
    });

    //Intro Swiper
    const introSwiper = new Swiper(".intro__slider", {

        loop: false,
        speed: 800,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },

        mousewheel: {
            eventsTarget: ".intro__slider",
        },

        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },

        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        }

    });

    // Load More
    $('.products__list_item').slice(0, 3).css("display", "flex");
    $('.products__btn .second__btn').on("click", function(e) {
        e.preventDefault();

        $(".products__btn .products__btn-hide").show();

        $('.products__btn .second__btn').css("background", "#FF3000");
        $('.products__btn .second__btn').hover(function() {
            $(this).css("background", "#781700");
        }, function() {
            $(this).css("background", "#FF3000");
        });

        $('.products__list_item:hidden').slice(0, 3).slideDown();

        if ($('.products__list_item:hidden').length == 0) {
            $('.products__btn .second__btn').hide()
        };
    });

    $(".products__btn .products__btn-hide").on("click", function() {
        $('.products__list_item').slice(3, $('.products__list_item').length).slideUp();

        $('.products__btn .second__btn').show();
        $('.products__btn .products__btn-hide').hide();
    })

    // Pics slider
    const picsSlider = new Swiper(".pics__slider", {

        loop: false,
        speed: 600,
        centeredSlides: true,
        initialSlide: 1,
        slidesPerView: 3,
        spaceBetween: 100,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        pagination: {
            el: '.swiper-pagination',
            type: "fraction",
            formatFractionCurrent: function(number) {
                if (number < 10) {
                number = '0' + number;
                }
                return number;
            },
            formatFractionTotal: function(number) {
                if (number < 10) {
                number = '0' + number;
                }
                return number;
            },

            renderFraction: function(currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
            },
        },

        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },

        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },

        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },

        breakpoints: {
            940: {
                slidesPerView: 3,
                initialSlide: 1,
                spaceBetween: 100,
                centeredSlides: true,
            },
        
            320: {
                slidesPerView: 1,
                spaceBetween: 70,
                centeredSlides: false,
            }
        }
        
    });


          
});