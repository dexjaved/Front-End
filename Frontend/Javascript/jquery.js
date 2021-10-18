// var para1  = document.getElementById("para1");
// para1.innerHTML = "Welcome";

//$('#para1').html('welcome');

//$('#para1').hide();

//$('#para1').css('color','red');

$('p').css({
    color: "red",
    fontSize : "50px"
});

$('div').css({
    width : "100px",
    height : "100px",
    backgroundColor : "red"
});

// $('div').click(function(){
//     alert("div clicked");
// });

// $('div').on('click',function(){
//     alert("div clicked");
// });

// $('a').on('click',function(){
//     alert("anchor tag clicked");
// });

// to surpress the default 

$('a').on('click',function(event){
    event.preventDefault();
    alert("anchor tag clicked");
});

$('div').on('click',function(){
    var element = $(this);
    element.width(element.width()+10+"px")
    //alert("div clicked");
});

