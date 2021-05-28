var body = document.querySelector("body")
var main = document.querySelector("main")
var bg1 = document.getElementById("bg1")
var transparentdiv = document.getElementById("transparentdiv")

document.addEventListener("scroll", function(){
    console.log(scrollY)
    if(scrollY > 1900){
        bg1.style.backgroundImage = "url('./Assets/BGs/bg4.png')"
    }
    if(scrollY < 1900){
        bg1.style.backgroundImage = "url('./Assets/BGs/bg1.jpg')"

    }
})



