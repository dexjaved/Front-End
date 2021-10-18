function sayHello(){
    alert("this is a internal Javascript Code");
}
function sayBye(){
    alert("Byee");
}
var helloButton2 = document.getElementById("btn2");
helloButton2.addEventListener('click',sayHello);
helloButton2.addEventListener('click',sayBye);
       

/*box click time*/

var box = document.getElementById('box');
var clickCount = document.getElementById('click-count');
count = 0;

box.addEventListener('click', function(){
    count++;
    console.log(count);
    clickCount.innerText = count + " ";
});

/* mouse over mouse out */
var outerDiv = document.getElementById("outer");
outerDiv.addEventListener('mouseover',function(){
    console.log("mouse over")
});
outerDiv.addEventListener('mouseout',function(){
    console.log("mouseo out")
});

var searchInput = document.getElementById('search');
searchInput.addEventListener("keypress",function(){
    console.log("key press");
});

 /* kahi bhi press karo useful in game use document for this  */
// document.addEventListener('keypress',function(){
//     console.log("keypress");
// });
/*keypress dosnet detect up down key shift alt tab crl for this keydown/keyup */

// document.addEventListener('keydown',function(){
//     console.log("keydown");
// });

/**keydown work on up down left right alt ctl shift */

//**now want to check whic key is press*/
document.addEventListener('keydown',function(event){
    console.log("key down",event.keyCode);
});