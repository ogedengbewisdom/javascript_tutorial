let andiEl = document.getElementById("andi")
let chairEl = document.getElementById("chair")
let clairEl = document.getElementById("clair")
let nikkiEl = document.getElementById("nikki")
let sharleenEl = document.getElementById("sharleen")


function andi() {
    document.querySelector("#andi").classList.toggle("hidden")
    document.querySelector("#clair").classList.add("hidden")
    document.querySelector("#nikki").classList.add("hidden")
    document.querySelector("#sharleen").classList.add("hidden")

}

function clair() {
    document.querySelector("#clair").classList.toggle("hidden")
    document.querySelector("#andi").classList.add("hidden")
    
    document.querySelector("#nikki").classList.add("hidden")
    document.querySelector("#sharleen").classList.add("hidden")

}
function nikki() {
    document.querySelector("#nikki").classList.toggle("hidden")
   
    document.querySelector("#clair").classList.add("hidden")
    document.querySelector("#andi").classList.add("hidden")
    document.querySelector("#sharleen").classList.add("hidden")

}
function sharleen() {
    document.querySelector("#sharleen").classList.toggle("hidden")
   
    document.querySelector("#clair").classList.add("hidden")
    document.querySelector("#nikki").classList.add("hidden")
    document.querySelector("#andi").classList.add("hidden")

}