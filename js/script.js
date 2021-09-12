"use strict";

!function(){
    $( document ).ready(function() {


        //Module: sidebar starts
        !function(){
            $(".navbar-toggler").click(function(e2){
                if(!$("body").hasClass("overflow-stop")) {
                    $("body").on("click", closeNav);
                    $(".navbar-collapse").addClass("show2");
                    $("body").addClass("overflow-stop");
                }
                else {
                    $(".navbar-collapse").removeClass("show2");
                    $("body").removeClass("overflow-stop");
                    $("body").off("click", closeNav);
                }
                e2.stopPropagation();  
                function closeNav(e){
                    if(!$(e.target).closest(".navbar-collapse").length) {
                        $(".navbar-collapse").removeClass("show2");
                        $("body").removeClass("overflow-stop");
                        $("body").off("click", closeNav);
                    }
                }

            });
        }();
        //Module finishes -- Sidebar

















    });
}();









