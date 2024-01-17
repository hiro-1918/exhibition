$(function(){
    $(window).on('scroll',function(){
        let scroll = $(window).scrollTop();
        
        console.log(scroll);
        let accesstop = $(".access").offset().top;


        if(scroll>(accesstop-300)){
            if(scroll>5000){
                $(".accessback").fadeOut(600);
            }else{
                $(".accessback").fadeIn(600);
            }
            
        }else{
            $(".accessback").fadeOut(600);
        }

        // if(scroll>6000){
        //     $(".accessback").fadeOut(600);
        // }else{
        //     $(".accessback").fadeIn(600);
        // }


        // if(scroll>1600){
        //     $(".no1").fadeIn(500);
        // }

        // if(scroll>2000){
        //     $(".no2").fadeIn(500);
        // }

        // if(scroll>2800){
        //     $(".no3").fadeIn(500);
        // }

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