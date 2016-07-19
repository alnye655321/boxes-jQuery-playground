$( document ).ready(function() {
    alert( "DOM Ready!" );

// var $secret = $('#secretBox');

//Exercise 2

//1)
$('#secretBox').css("background-color", "white");

//2)
$('#row1 div').addClass("boxType3");

//3)
$('#row4 div:nth-child(4)').css("display" , "none");

//4)
$('.boxType1').css('background-color','white');
$('#container div div').removeClass('boxType1');

//p:nth-child(4)


});
