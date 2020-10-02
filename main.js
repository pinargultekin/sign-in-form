
$(document).ready(function(){

    $("#input-text").click(function(){
        $("#email").attr("placeholder", "Invalid email input");
    })   ;

    $("#append-icon").click(function(){
        $("#warning").css("display", "flex");
        $(".signup").css("height", "16.3rem");
        $("#input-text").css("border", "1px solid #4c2982");
        $("#email").attr("placeholder", "Invalid email input");
        
    });

})
