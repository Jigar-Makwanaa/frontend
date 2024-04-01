
    $(".menu-bars").click(function(){
        $(".menu").fadeToggle(10000)
    });

    // loader Start
    $(window).on("load", function(){
        $(".loader").fadeOut(4000);
        $(".main-class").fadeIn(4000);
    })
    // loader end

    // header start
    $(window).scroll(function(){
        $("header").css("position", "sticky")
        $("header").css("top", "0px")
    })
    // header end

    // back top to  start
        $(".top-btn").click(function(){
            $("html").animate({
                scrollTop: 0
            }, 1800);
        });
    // back top to end

    // back to top if else start
        $(window).scroll(function(){
            if ($('html').scrollTop()){
                $(".top-btn").fadeIn(1000)
                $(".top-btn").css("display", "flex")
            }

            else {
                $(".top-btn").fadeOut(1000)
            }
        });
    // back to top if else end

    // setting btn switch start
        $(document).ready(function(){
            $(".setting-btn").click(function(){
                $(".switch").slideToggle(500)
            })
        });

        $(".sun").click(white);
        $(".moon").click(black);

        function white() {
            $("body").attr("class", "white")
        };
        
        function black() {
            $("body").attr("class", "black")
        }
    // setting btn switch end
