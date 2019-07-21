$(document).ready(function(){
hideBox();
    
    function hideBox(){
        $("#contactBox").hide();
        $("#portBox").hide();
    }
    
    $("#messBtn").on("click", function(){
        $("#aboutBox").hide();
        $("#portBox").hide();
        $("#contactBox").show();
    });

    $(".logoWrap").on("click", function(){
        $("#aboutBox").show();
        hideBox();
    });
    $("#portBtn").on("click", function(){
        $("#aboutBox").hide();
        $("#contactBox").hide();
        $("#portBox").show();
    })
    console.log("hello")
});