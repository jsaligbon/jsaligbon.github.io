// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// written by Liontheme
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
jQuery(document).ready(function() {
    'use strict';

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // change menu on mobile version
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


    $(window).load(function() {
    

    //     $('#menu-btn').click(function(){
    //         var iteration=$(this).data('iteration')||1
    //         switch ( iteration) {
    //             case 1:
    //                 jQuery("#mainmenu-container").stop().animate({'left': "0"}, 'slow', 'easeInOutQuart'); 
    //                 jQuery(this).addClass("clicked");
    //                 break;
                
    //             case 2:
    //                 jQuery("#mainmenu-container").animate({'left': "100%"}, 'slow' , 'easeInOutQuart');
    //                 jQuery(this).removeClass("clicked");
    //                 break;
    //         }
    //         iteration++;
    //         if (iteration>2) iteration=1
    //         $(this).data('iteration',iteration)
    // })


        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        // filtering gallery
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        var $container = jQuery('#gallery');
        $container.isotope({
            itemSelector: '.item',
            filter: '*',
        });
        jQuery('#filters a').click(function() {
            var $this = jQuery(this);
            if ($this.hasClass('selected')) {
                return false;
            }
            var $optionSet = $this.parents();
            $optionSet.find('.selected').removeClass('selected');
            $this.addClass('selected');

            var selector = jQuery(this).attr('data-filter');
            $container.isotope({
                filter: selector,
            });
            return false;
        });

    })




    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // paralax background
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
    var $window = jQuery(window);
    jQuery('section[data-type="background"]').each(function() {
        var $bgobj = jQuery(this); // assigning the object

        jQuery(window).scroll(function() {
            var speed = 0;
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            var coords = '50% ' + yPos + 'px';
            $bgobj.css({
                backgroundPosition: coords
            });

        });
    });
    document.createElement("article");
    document.createElement("section");

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // prettyPhoto function
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
    jQuery("area[data-gal^='prettyPhoto']").prettyPhoto();
    jQuery("body:first a[data-gal^='prettyPhoto']").prettyPhoto({
        animation_speed: 'fast',
        theme: 'light_square',
        slideshow: 3000,
        autoplay_slideshow: false
    });
    jQuery("body:gt(0) a[data-gal^='prettyPhoto']").prettyPhoto({
        animation_speed: 'fast',
        slideshow: 10000,
        hideflash: true
    });

    jQuery("#custom_content a[data-gal^='prettyPhoto']:first").prettyPhoto({
        custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
        changepicturecallback: function() {
            initialize();
        }
    });
    jQuery("#custom_content a[data-gal^='prettyPhoto']:last").prettyPhoto({
        custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
        changepicturecallback: function() {
            _bsap.exec();
        }
    });

    



    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // scroll to top
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
    jQuery().UItoTop({
        easingType: 'easeInOutExpo'
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // gallery hover
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
    jQuery('.gallery .item').hover(function() {
        jQuery(this).stop().animate({
            opacity: .5
        }, 100);
    }, function() {
        jQuery(this).stop().animate({
            opacity: 1
        });
    }, 100);


    jQuery('.img-hover').hover(function() {
        jQuery(this).stop().animate({
            opacity: .5
        }, 100);
    }, function() {
        jQuery(this).stop().animate({
            opacity: 1
        });
    }, 100);

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // resize
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
    window.onresize = function(event) {
        jQuery('#gallery').isotope('reLayout');
    };



    jQuery("#room-carousel").owlCarousel({
        items: 3,
        singleItem: false,
        pagination: false,
        navigation: false,
        autoPlay: false,
    });


    jQuery(".single-room-carousel").owlCarousel({
        items: 1,
        singleItem: true,
        pagination: true,
        navigation: false,
        autoPlay: false,
    });

    // TODO: move to RoomItem component
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // image hover effect
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
    jQuery(".pic-hover .hover").hide();
    jQuery(".pic-hover").hover(
        function() {
            jQuery(this).find(".hover").width(jQuery(this).find("img").css("width"));
            jQuery(this).find(".hover").height(jQuery(this).find("img").css("height"));
            jQuery(this).find(".hover").fadeTo(150, .9);

            picheight = jQuery(this).find("img").css("height");
            newheight = (picheight.substring(0, picheight.length - 2) / 2);
            //alert(newheight);
            jQuery(this).find(".btn-view-details").css({
                'margin-top': newheight
            }, 'fast');

        },
        function() {
            jQuery(this).find(".hover").fadeTo(150, 0);
        })




    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // lazyload
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	

    jQuery('.main-slider.flexslider').flexslider({
        animation: "slide",
        directionNav: false,



        start: function() {
            jQuery(".slider-info").animate({
                "margin-bottom": "60px",
                "opacity": "toggle"
            }, 500, 'easeOutBack');
        },
        after: function() {
            jQuery(".slider-info").animate({
                "margin-bottom": "60px",
                "opacity": "toggle"
            }, 500, 'easeOutBack');
        },
        before: function() {
            jQuery(".slider-info").animate({
                "margin-bottom": "-200px",
                "opacity": "toggle"
            }, 500, 'easeOutBack');
        }
    });


    jQuery('.testi-slider.flexslider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true

    });


    // --------------------------------------------------
    // tabs
    // --------------------------------------------------
    jQuery('.lt_tab').find('.lt_tab_content div').hide();
    jQuery('.lt_tab').find('.lt_tab_content div:first').show();

    jQuery('.lt_nav li').click(function() {
        jQuery(this).parent().find('li span').removeClass("active");
        jQuery(this).find('span').addClass("active");
        jQuery(this).parent().parent().find('.lt_tab_content div').hide();

        var indexer = jQuery(this).index(); //gets the current index of (this) which is #nav li
        jQuery(this).parent().parent().find('.lt_tab_content div:eq(' + indexer + ')').fadeIn(); //uses whatever index the link has to open the corresponding box 
    });

});