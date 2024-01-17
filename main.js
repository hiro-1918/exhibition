$(function(){
    $(window).on('scroll',function(){
        let scroll = $(window).scrollTop();
        
        console.log(scroll);
        let accesstop = $(".access").offset().top;

        



        if(scroll>(accesstop-200)){
            if(scroll>4250){
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

$(function(){
    $(window).on('scroll',function(){
        let scroll = $(window).scrollTop();

        console.log(scroll);
        let no1top = $(".no1").offset().top;

        
    });
});



