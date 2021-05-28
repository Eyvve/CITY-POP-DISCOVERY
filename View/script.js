var body = document.querySelector("body")
var main = document.querySelector("main")
var bg1 = document.getElementById("bg1")
var transparentdiv = document.getElementById("transparentdiv")

document.addEventListener("scroll", function(){
    console.log(scrollY)
    if(scrollY > 4513){
        bg1.style.backgroundImage = "url('./View/Assets/BGs/bg4.png')"
    }
    if(scrollY < 4513){
        bg1.style.backgroundImage = "url('./View/Assets/BGs/bg1.jpg')"

    }
})



