/*
Author: webthemez.com
Author URL: http://webthemez.com
*/
jQuery(function($) {
    'use strict';
     
    $(window).scroll(function(event) {
        Scroll();
    });

    $('.navbar-collapse ul li a').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 5
        }, 1000);
        return false;
    });
 
    function Scroll() {
        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;
        $('.navbar-collapse').find('.scroll a').each(function() {
            contentTop.push($($(this).attr('href')).offset().top);
            contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
        })
        $.each(contentTop, function(i) {
            if (winTop > contentTop[i] - rangeTop) {
                $('.navbar-collapse li.scroll')
                    .removeClass('active')
                    .eq(i).addClass('active');
            }
        })
    };

    $('#tohash').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 5
        }, 1000);
        return false;
    });

    //   Clint Area Start
    //     $('.logo-area').slick({
    //         slidesToShow: 6,
    //         slidesToScroll: 1,
    //         autoplay: true,
    //         autoplaySpeed: 5000,
    //         arrows: false,
    //         dots: false,
    //         pushOnHover: false,
    //     })
    // };

    $(document).ready(function(){
        $('.logo-area').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 520,
                settings: { 
                slidesToShow: 3
            }
            }]
            });
          })
    
    // Clint Area End
    
// Filter Gallery

// Filter Gallery

let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');
        
        if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('active');
        }
    }
    })
}

    new WOW().init();
     
    smoothScroll.init();

    
    $(window).load(function() {
        'use strict';
        var $portfolio_selectors = $('.portfolio-filter >li>a');
        var $portfolio = $('.portfolio-items');
        $portfolio.isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $portfolio_selectors.on('click', function() {
            $portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: selector
            });
            return false;
        });
    });

    $(document).ready(function() {
   
        $.fn.animateNumbers = function(stop, commas, duration, ease) {
            return this.each(function() {
                var $this = $(this);
                var start = parseInt($this.text().replace(/,/g, ""));
                commas = (commas === undefined) ? true : commas;
                $({
                    value: start
                }).animate({
                    value: stop
                }, {
                    duration: duration == undefined ? 1000 : duration,
                    easing: ease == undefined ? "swing" : ease,
                    step: function() {
                        $this.text(Math.floor(this.value));
                        if (commas) {
                            $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                        }
                    },
                    complete: function() {
                        if (parseInt($this.text()) !== stop) {
                            $this.text(stop);
                            if (commas) {
                                $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                            }
                        }
                    }
                });
            });
        };

        $('.business-stats').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
            var $this = $(this);
            if (visible) {
                $this.animateNumbers($this.data('digit'), false, $this.data('duration'));
                $this.unbind('inview');
            }
        });
    });

 
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });
 

});