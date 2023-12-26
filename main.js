$(function(){
    $(window).on('scroll',function(){
        let scroll = $(window).scrollTop();
        
        console.log(scroll);
        let accesstop = $(".access").offset().top;



        if(scroll>(accesstop-500)){
            if(scroll>5500){
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


    });


});







