$(function(){
    $(window).on('scroll',function(){
        let scroll = $(window).scrollTop();
        
        $('.header').css({
            top:(scroll+10)+"px"
        });
        
        if(scroll>650){
            $('header').fadeIn(600);
        }else{
            $('header').fadeOut(600);
        };
        
        
        $('.menu-culumn').css({
            top:(scroll-20)+"px"
        });
        
        
        console.log(scroll);
        let accesstop = $(".access").offset().top;
        
        
        if(scroll>(accesstop)){
            console.log (accesstop);
            $(".accessback").fadeIn(600);
            // if(scroll>(accesstop+900)){
            //     $(".accessback").fadeOut(600);
            // }else{
            //     $(".accessback").fadeIn(600);
            // }
            
        }else{
            $(".accessback").fadeOut(600);
        }
        
        // $('.mainvisual img').css({
        //     width:100/3+(scroll/10)+"%"
        // });
        

        var wid = $(window).width();   

        if(wid < 700){
            $('.mainvisual img').css({
                width:100-(scroll/10)+"%"
            });
        }else{
            $('.mainvisual img').css({
                width:100/3+(scroll/10)+"%"
            });
        };
        
        
        $(`.fadein`).each(function(){
            var trangetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if(scroll > trangetElement - windowHeight + 150){
                $(this).addClass(`scrollin`);
            }
        });
        
        
        
        
        $('.side').css({
            top:(scroll+630)+"px"
        });
        
        if(scroll>900){
            if(scroll>5200){
                $('.side').fadeOut(400);
            }else{
                $('.side').addClass('side2');
                $('.side').fadeIn(400);
            }
        }else{
            $('.side').fadeOut(400);
        };
        
    });
    

    var wid = $(window).width();   

    if(wid < 700){
        $('.mainvisual img').css({
            width:100-(scroll/10)+"%"
        });
    }else{
        $('.mainvisual img').css({
            width:100/3+(scroll/10)+"%"
        });
    };
    
    
    // $('.mainvisual img').css({
    //     width:100/3+"%"
    // });
    
    
    $('.menu').click(function(){
        var line1 = $('.line1') ;
        if(line1.hasClass('line1after')){
            line1.removeClass('line1after');
        }else{
            line1.addClass('line1after');
        };
        var line2 = $('.line2') ;
        if(line2.hasClass('line2after')){
            line2.removeClass('line2after');
        }else{
            line2.addClass('line2after');
        };
        var line3 = $('.line3') ;
        if(line3.hasClass('line3after')){
            line3.removeClass('line3after');
        }else{
            line3.addClass('line3after');
        };
        
        // $('.height').css({
        //     top:5+"px"
        // })
        
        var height = $('.height');
        if(height.hasClass('heightafter')){
            height.removeClass('heightafter');
        }else{
            height.addClass('heightafter');
        };
        
        var culumn = $('.menu-culumn');
        if(culumn.hasClass('open')){
            culumn.removeClass('open');
            culumn.slideUp();
        }else{
            culumn.addClass('open');
            culumn.slideDown();
        }
    });
    
    
    
    
    $('#contact1').hover(
        function(){
            $('.arrow').addClass('rightfade');
            // $('.arrowsub').addClass('subgray');
            $('#contact1').addClass('gray');
        },
        function(){
            $('.arrow').removeClass('rightfade');
            // $('.arrowsub').removeClass('subgray');
            $('#contact1').removeClass('gray');
        });
        
        
        $('#contact2').hover(
            function(){
                $('.arrow2').addClass('rightfade');
                // $('.arrow2sub').addClass('rightfade').addClass('transform');
                $('#contact2').addClass('gray');
            },
            function(){
                $('.arrow2').removeClass('rightfade');
                // $('.arrow2sub').removeClass('rightfade').removeClass('transform');
                $('#contact2').removeClass('gray');
            });
        });
        

        
        
        