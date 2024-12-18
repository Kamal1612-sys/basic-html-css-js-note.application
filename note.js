

var popupbox=document.querySelector(".popupbox")
var popupoverlay=document.querySelector(".popupoverlay")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener ("click",function(){

    popupoverlay.style.display="block"
    popupbox.style.display="block"

})

var cancelbutton=document.getElementById("cancelbutton")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".container")
var addbutton=document.getElementById("addbutton")
var notetitleinput=document.getElementById("notetitleinput")
var aboutinput=document.getElementById("aboutinput")
var noteinput=document.getElementById("noteinput")

addbutton.addEventListener("click" ,function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=` <h3>${notetitleinput.value}</h3>
        <h5>${aboutinput.value}</h5>
        <p>${noteinput.value}</p>
        <button onclick="deletenote(event)">Delete</button>`
        container.append(div)
         popupoverlay.style.display="none"
         popupbox.style.display="none"
})

function deletenote(event){
    event.target.parentElement.remove()

}