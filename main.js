$(function(){
    $(window).on('scroll',function(){
        let scroll = $(window).scrollTop();
        
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
    
    
    
    
});

// $(function(){
//     $(window).on('scroll',function(){
//         let scroll = $(window).scrollTop();

//         console.log(scroll);
//         let gallerytop = $(".gellery").offset().top;

//         if(scroll>(gallerytop)){
//             if(scroll>3000){
//                 $(".no1").fadeOut(600);
//             }else{
//                 $(".no1").fadeIn(600);
//             }

//         }else{
//             $(".no1").fadeOut(600);
//         }


//     });
// });



$(function(){
    $(window).scroll(function(){
        $(`.fadein`).each(function(){
            var trangetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if(scroll > trangetElement - windowHeight + 150){
                $(this).addClass(`scrollin`);
            }
        });
    });
});

