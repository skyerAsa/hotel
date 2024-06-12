const {
    createApp,
    ref,
    onMounted,
    moumted
} = Vue;

createApp({
    setup() {
        $(window).scroll(showMenu);

        $(function() {
            $(".headerpage").load("header.html"); 
            $(".footerpage").load("footer.html");
             
            $(".burger").on("click", function() {
                $(".menu").toggleClass("on");
                $(".menu_bg").toggleClass("on");
                $(".header").removeClass("on");
                $(".menu_black").toggleClass("on");
                $(".menu_item").toggleClass("on");
                $(".top_menu").toggleClass("on");
                $(".menu_link").toggleClass("on");
                $(".menu_footer").toggleClass("on");
                $(".header_m").toggleClass("off");
                $(".m_bg").toggleClass("on");
            });
            $(".language_box").on("click", function() {
                $(".language_list").toggleClass("on");
            });
            $(".inner_close").on("click", function() {
                $(".start_ad").toggleClass("off");
                $(".start_ad").removeClass("on");

            });
            $(".privacy_close").on("click", function() {
                $(".privacy_option").removeClass("on");
            });
            $(".choose").on("click", function() {
                $(".privacy_option").removeClass("on");
                $(".remind").toggleClass("off");
            });

            $(".all_allow_button").on("click", function() {
                $(".privacy_option").removeClass("on");
                $(".remind").toggleClass("off");
            });
            $(".cookies").on("click", function() {
                $(".privacy_option").toggleClass("on");
            });
            $(".slide_need").on("click", function() {
                $(".slide_need").toggleClass("off");
                $(".manage_txt").toggleClass("off");
                $(".choose").toggleClass("on");
            });
        });
        const widthOutput = document.querySelector("#menu_list");

        function reportWindowSize() {

            if (window.innerWidth < 500) {
                $(".start_ad").removeClass("on");
            }
        }
        window.onresize = reportWindowSize;

        var params = sessionStorage['params'] || '';
        console.log(params)
        if (params == '') {
            sessionStorage['params'] = '1';
            $(function() {
                $(".start_bg").addClass("on");
                $(".start_ad").addClass("on");
                $(".remind").addClass("on");
            })
        }

        function showMenu() {
            if ($(window).scrollTop() > 300) {
                $(".header").addClass("on");

            } else {
                $(".header").removeClass("on");
            }
            if ($(window).scrollTop() > 300) {
                $(".header_m").addClass("on");

            } else {
                $(".header_m").removeClass("on");
            }
            if ($(window).scrollTop() > 400) {
                $(".brand_txt").addClass("on");
                $(".brand_list").addClass("on");
                $(".brand_img").addClass("on");
                $(".label_list").addClass("on");
                $(".logo_brand").addClass("on");
            } else {
                $(".label_list").removeClass("on");
                $(".logo_brand").removeClass("on");
            }

            if ($(window).scrollTop() > 650) {
                $(".label_list").addClass("on");
                $(".logo_brand").addClass("on");
            } else {
                $(".label_list").removeClass("on");
                $(".logo_brand").removeClass("on");
            }

            if ($(window).scrollTop() > 1300) {
                $(".field").addClass("on");
            }

            if ($(window).scrollTop() > 1500) {
                $(".environment").addClass("on");
                $(".logo_brand").removeClass("on");
                $(".serve").removeClass("on");
            } else {
                $(".environment").removeClass("on");
            }

            if ($(window).scrollTop() > 2500) {
                $(".events").addClass("on");
                $(".serve").addClass("on");
                $(".environment").removeClass("on");
                $(".logo_brand").removeClass("on");
            }
            if ($(window).scrollTop() > 3000) {
                $(".rooms_title").addClass("on");
                $(".rooms_about").addClass("on");
                $(".rooms_txt").addClass("on");
                $(".room_list_carousel").addClass("on");
                $(".clous").addClass("on");
                $(".collection").addClass("on");
                $(".mountain").addClass("on");
                $(".morioka").addClass("on");
                $(".reflection").addClass("on");
                $(".linshan").addClass("on");

            }
            if ($(window).scrollTop() > 3500) {
                $(".stay").addClass("on");
                $(".serve").removeClass("on");
                $(".environment").removeClass("on");
                $(".logo_brand").removeClass("on");
            } else {
                $(".stay").removeClass("on");
            }
            if ($(window).scrollTop() > 4000) {
                $(".dining_title").addClass("on");
            }
            if ($(window).scrollTop() > 4500) {
                $(".label_list").addClass("mid");
            } else {
                $(".label_list").removeClass("mid");
            }


            if ($(window).scrollTop() > 4000) {
                $(".food").addClass("on");
                $(".stay").removeClass("on");
                $(".serve").removeClass("on");
                $(".environment").removeClass("on");
                $(".logo_brand").removeClass("on");
            } else {
                $(".food").removeClass("on");
            }

            if ($(window).scrollTop() > 4700) {
                $(".left_box").addClass("on");
                $(".middle_box").addClass("on");
                $(".right_box").addClass("on");
                $(".go_top").addClass("on");
            }
            if ($(window).scrollTop() > 4700) {
                $(".activity").addClass("on");
                $(".food").removeClass("on");
                $(".stay").removeClass("on");
                $(".serve").removeClass("on");
                $(".environment").removeClass("on");
                $(".logo_brand").removeClass("on");
            } else {
                $(".activity").removeClass("on");
            }


            if ($(window).scrollTop() > 250) {
                $(".scroll_img").addClass("on");
            } else {
                $(".scroll_img").removeClass("on");
            }
            if ($(window).scrollTop() > 250) {
                $(".scroll_img").addClass("aa");
            } else {
                $(".scroll_img").removeClass("aa");
            }
            if ($(window).scrollTop() > 300) {
                $(".scroll_img").addClass("bb");
            } else {
                $(".scroll_img").removeClass("bb");
            }
            if ($(window).scrollTop() > 450) {
                $(".scroll_img").addClass("cc");
            } else {
                $(".scroll_img").removeClass("cc");
            }
            if ($(window).scrollTop() > 600) {
                $(".scroll_img").addClass("dd");
            } else {
                $(".scroll_img").removeClass("dd");
            }
            if ($(window).scrollTop() > 750) {
                $(".scroll_img").addClass("ee");
            } else {
                $(".scroll_img").removeClass("ee");
            }
            if ($(window).scrollTop() > 900) {
                $(".scroll_img").addClass("ff");
            } else {
                $(".scroll_img").removeClass("ff");
            }
            if ($(window).scrollTop() > 1050) {
                $(".scroll_img").addClass("gg");
            } else {
                $(".scroll_img").removeClass("gg");
            }
            if ($(window).scrollTop() > 1200) {
                $(".scroll_img").addClass("hh");
            } else {
                $(".scroll_img").removeClass("hh");
            }
            if ($(window).scrollTop() > 1350) {
                $(".scroll_img").addClass("ii");
            } else {
                $(".scroll_img").removeClass("ii");
            }
        }


        $(document).ready(function() {
            $('.header_bg').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                cssEase: 'linear',
                fade: true,
                variableWidth: true,
                dots: true,
                pauseOnFocus: false
            });
        });
        $(document).ready(function() {
            $('.field_list').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                autoplay: true,
                variableWidth: true,
            });
        });
        $(document).ready(function() {
            $('.content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                cssEase: 'linear',
                fade: true,
                variableWidth: true,
                dots: true,
                arrows: false,
                pauseOnFocus: false,
            });
        });
        $(document).ready(function() {
            $('.dining_list').slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                variableWidth: true,
                pauseOnFocus: false,
            });
        });
        $(document).ready(function() {
            $('.room_list_carousel').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: true,
                adaptiveHeight: true,
            });
        });
        onMounted(() => {});
        return {};
    },
}).mount("#app");