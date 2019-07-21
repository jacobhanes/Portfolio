$(document).ready(function(){
hideBox();
    
    function hideBox(){
        $("#contactBox").hide();
    }
    
    $("#messBtn").on("click", function(){
        $("#aboutBox").hide();
        $("#contactBox").show();
    });

    $(".logoWrap").on("click", function(){
        $("#aboutBox").show();
        hideBox();
    });
    console.log("hello")
});