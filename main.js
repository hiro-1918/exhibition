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

        // let visuwidth = $(".mainvisual").offset().width;
        // if(scroll>50){
        //     if(scroll>1000){
        //         $(".mainvisual").each(function(){
        //         visuwidth + scroll/3}
        //         )};
        // };


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

$(function(){
    $(window).scroll(function(){
        $(".mainvisual").each(function(){
            if(scroll >)
        });
    })
});