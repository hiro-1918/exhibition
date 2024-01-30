$(function(){
    $(window).on('scroll',function(){
        let scroll = $(window).scrollTop();
        
        $('.header').css({
        top:(scroll+10)+"px"
        });

        if(scroll>650){
            $('.header').fadeIn(600);
        }else{
            $('.header').fadeOut(600);
        };


        console.log(scroll);
        let accesstop = $(".access").offset().top;
        
        
        if(scroll>(accesstop-200)){
            if(scroll>6700){
                $(".accessback").fadeOut(600);
            }else{
                $(".accessback").fadeIn(600);
            }
            
        }else{
            $(".accessback").fadeOut(600);
        }
        
        
        $('.mainvisual img').css({
            width:100/3+(scroll/10)+"%"    
        });
        
        
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
        
        //     ↑35行目　効いてない？
        // if(scroll>900){
        //     if(scroll>5200){
        //         $('.side').removeClass('side2');
        //     }else{
        //         $('.side').addClass('side2');
        //     }
        // }else{
        //     $('.side').removeClass('side2');
        // };
        
    });
    
    
    $('.mainvisual img').css({
        width:100/3+"%"
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
        
        
        
        
        