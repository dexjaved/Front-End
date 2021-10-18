// "use strict"

function sayHello(){
    alert('hello World there');
}
var button = document.getElementById("btn");
button.addEventListener("click", sayHello);



var box = document.getElementById("box");
var countt = document.getElementById("countt");
 var count = 0;
box.addEventListener('click',function(){
    count++;
    countt.innerText = count
    console.log(count);
});
box.addEventListener("mouseover",function(){
    console.log("Mouse Over");
});

box.addEventListener("mouseout",function(){
    console.log("Mouse Out");
});

var search = document.getElementById("search");
search.addEventListener('keydown',function(){
    console.log("KeyPress");
});


var outer = document.getElementById("outer");
var inner = document.getElementById("inner");

outer.addEventListener("click", function(){
    console.log("Outer Box");
    event.stopPropagation();
});

inner.addEventListener("click", function(){
    console.log("Inner Box");
    event.stopPropagation();
});

document.addEventListener("click", function(){
    console.log("Document");
});

var div = document.getElementById("div1");
var scroll = document.getElementById("scroll");

div.addEventListener("onscroll",function(){
    scroll.innerText = "You Scroll The Mouse";
});



var toggled = false;
var body = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");

document.getElementById("toggle").onclick = function () {
        
    if(!toggled) {
        body.classList.add("bck-color-black");
        circle.style.marginLeft = "100px";
        toggled = true;
        
    } else {
        
        body.classList.remove("bck-color-black");
        circle.style.marginLeft = "1px";
        
        toggled = false;
        
    }
    
}

console.log("hey");