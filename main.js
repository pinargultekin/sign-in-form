
$(document).ready(function(){

    $("#input-text").click(function(){
        $("#email").attr("placeholder", "Invalid email input");
    })   ;

    $("#append-icon").click(function(){
        $("#warning").css("display", "flex");
        $("#input-text").css("border", "1px solid #4c2982");
        $("#email").attr("placeholder", "Invalid email input");
    });

})
