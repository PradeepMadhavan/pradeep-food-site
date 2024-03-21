var popupfull = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var plusbtn = document.getElementById("addbtn");

plusbtn.addEventListener("click",function(){
    popupbox.style.display="block"  
    popupfull.style.display="block"
})

var cancelbtn = document.getElementById("cancel-popup")

cancelbtn.addEventListener("click", function(event){
    event.preventDefault()
    popupbox.style.display="none"  
    popupfull.style.display="none"
    document.getElementById("choose-input").value = ""
document.getElementById("hotel-input").value = ""
 document.getElementById("description-input").value = ""
})

var container = document.querySelector(".container");
var additem = document.getElementById("add-food");
var choosefood = document.getElementById("choose-input")
var hotelname = document.getElementById("hotel-input");
var description= document.getElementById("description-input");


additem.addEventListener("click",function(event){
   event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","hotels")
    div.innerHTML=`<h2 style="  font-family: 'Space Grotesk', sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;">${choosefood.value}</h2>
    <h4 style="color: rgb(207, 255, 232); font-family: 'Josefin Sans', sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;">${hotelname.value}</h4>
    <p style="  font-family: 'Ojuju', sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;letter-spacing: 1px;">${description.value}</p>
    <button onclick="del(event)" style="color: rgb(187, 205, 195);">Delete</button>`
    container.append(div)
    popupbox.style.display="none"  
    popupfull.style.display="none"
    document.getElementById("choose-input").value = ""
document.getElementById("hotel-input").value = ""
 document.getElementById("description-input").value = ""
})

function del(event){
event.target.parentElement.remove()
}