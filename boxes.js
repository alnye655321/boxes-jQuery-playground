$( document ).ready(function() {
    //alert( "DOM Ready!" );

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

//5)
$('#row2 div:first-child').removeClass();
$('#row2 div:nth-child(2)').removeClass();

//6)
$('div').not('.row, #secretBox, #container').css("width" , "20px");


//Exercise 3

});
