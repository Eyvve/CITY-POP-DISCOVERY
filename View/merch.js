
var cart = []

if(localStorage.getItem('localDataCart')){
    console.log("welcome back")
}else{
    localStorage.setItem('localDataCart', JSON.stringify(cart));
}



var cartContent = JSON.parse(localStorage.getItem('localDataCart'))
var displayCounterLocal = localStorage.getItem('displaycounterlocal')

var submitB = document.getElementById("submitB")

var html = document.querySelector("html")

const b1 = document.getElementById("buy1")
const b2 = document.getElementById("buy2")
const b3 = document.getElementById("buy3")
const b4 = document.getElementById("buy4")
const b5 = document.getElementById("buy5")
const b6 = document.getElementById("buy6")

const pay = document.getElementById("pay")
const openform = document.getElementById("openform")
const thanksmessage = document.getElementById("thanksmessage")
const wipe = document.getElementById("wipe")

var clicked = false

var content = document.getElementById("content")
var content2 = document.getElementById("content2")
const cartValidation = document.getElementById("cartValidation")
const divCartButton = document.getElementById("divCartButton")

const cross = document.getElementById("cross")

var perso1 = 0
var perso2 = 0
var perso3 = 0
var perso4 = 0
var perso5 = 0
var perso6 = 0

var counter = -1
var displayCounter = 0
var limitCounter = 0

var plus1 = document.getElementById("plus1")

var fees



var totalprice = 0
var total = document.getElementById("total")
var totaldiv = document.getElementById("totaldiv")
total.innerHTML = totalprice
totaldiv.innerHTML = totalprice

initialUpdateDiv()

b1.addEventListener("click", function(){
    displayCounter += 1
    if (limitCounter < 100){
        if (perso1 < 1){
            var request = new XMLHttpRequest()
            request.open("GET", "https://raw.githubusercontent.com/Eyvve/doriancanonne.dev/main/data/citypop_discovery.json")
            request.onload = function(){
                var data = JSON.parse(request.responseText)
                var transferedData = {
                    "name" : data[0].name ,
                    "image" : data[0].image ,
                    "price" : data[0].price ,
                    "quantity" : 1
                }
                cart.push(transferedData)
                updatediv()
        }
        counter += 1
        counterblock1 = counter
        request.send(); 
        }else{
            var index1 = counterblock1
            console.log(index1)
            cart[index1].quantity += 1
            updatediv()
        }
        perso1 += 1
        limitCounter +=1
        
    }else{
        alert("Your maximum of 9 items is reached")
    }
    
    
})

b2.addEventListener("click", function(){
    displayCounter += 1
    if (limitCounter < 100){
        if (perso2 < 1){
            var request = new XMLHttpRequest()
            request.open("GET", "https://raw.githubusercontent.com/Eyvve/doriancanonne.dev/main/data/citypop_discovery.json")
            request.onload = function(){
                var data = JSON.parse(request.responseText)
                var transferedData = {
                    "name" : data[1].name ,
                    "image" : data[1].image ,
                    "price" : data[1].price ,
                    "quantity" : 1
                }
                cart.push(transferedData)
                updatediv()
            }
            counter += 1
            counterblock2 = counter
            request.send(); 
        }else{
            var index2 = counterblock2
            console.log(index2)
            cart[index2].quantity += 1
            updatediv()
        }
        perso2 += 1
        limitCounter +=1
    }else{
        alert("Your maximum of 100 items is reached")
    }
})

b3.addEventListener("click", function(){
    displayCounter += 1
    if (limitCounter < 100){
        if (perso3 < 1){
            var request = new XMLHttpRequest()
            request.open("GET", "https://raw.githubusercontent.com/Eyvve/doriancanonne.dev/main/data/citypop_discovery.json")
            request.onload = function(){
                var data = JSON.parse(request.responseText)
                var transferedData = {
                    "name" : data[2].name ,
                    "image" : data[2].image ,
                    "price" : data[2].price ,
                    "quantity" : 1
                }
                cart.push(transferedData)
                updatediv()
            }
            counter += 1
            counterblock3 = counter
            request.send(); 
        }else{
            var index3 = counterblock3
            console.log(index3)
            cart[index3].quantity += 1
            updatediv()
        }
        perso3 += 1
        limitCounter +=1
    }else{
        alert("Your maximum of 100 items is reached")
    }
})

b4.addEventListener("click", function(){
    displayCounter += 1
    if (limitCounter < 100){
        if (perso4 < 1){
            var request = new XMLHttpRequest()
            request.open("GET", "https://raw.githubusercontent.com/Eyvve/doriancanonne.dev/main/data/citypop_discovery.json")
            request.onload = function(){
                var data = JSON.parse(request.responseText)
                var transferedData = {
                    "name" : data[3].name ,
                    "image" : data[3].image ,
                    "price" : data[3].price ,
                    "quantity" : 1
                }
                cart.push(transferedData)
                updatediv()
            }
            counter += 1
            counterblock4 = counter
            request.send(); 
        }else{
            var index4 = counterblock4
            console.log(index4)
            cart[index4].quantity += 1
            updatediv()
        }
        perso4 += 1
        limitCounter +=1
    }else{
        alert("Your maximum of 100 items is reached")
    }
})

b5.addEventListener("click", function(){
    displayCounter += 1
    if (limitCounter < 100){
        if (perso5 < 1){
            var request = new XMLHttpRequest()
            request.open("GET", "https://raw.githubusercontent.com/Eyvve/doriancanonne.dev/main/data/citypop_discovery.json")
            request.onload = function(){
                var data = JSON.parse(request.responseText)
                var transferedData = {
                    "name" : data[4].name ,
                    "image" : data[4].image ,
                    "price" : data[4].price ,
                    "quantity" : 1
                }
                cart.push(transferedData)
                updatediv()
            }
            counter += 1
            counterblock5 = counter
            request.send(); 
        }else{
            var index5 = counterblock5
            console.log(index5)
            cart[index5].quantity += 1
            updatediv()
        }
        perso5 += 1
        limitCounter +=1
    }else{
        alert("Your maximum of 100 items is reached")
    }
})

b6.addEventListener("click", function(){
    displayCounter += 1
    if (limitCounter < 100){
        if (perso6 < 1){
            var request = new XMLHttpRequest()
            request.open("GET", "https://raw.githubusercontent.com/Eyvve/doriancanonne.dev/main/data/citypop_discovery.json")
            request.onload = function(){
                var data = JSON.parse(request.responseText)
                var transferedData = {
                    "name" : data[5].name ,
                    "image" : data[5].image ,
                    "price" : data[5].price ,
                    "quantity" : 1
                }
                cart.push(transferedData)
                updatediv()
            }
            counter += 1
            counterblock6 = counter
            request.send(); 
        }else{
            var index6 = counterblock6
            console.log(index6)
            cart[index6].quantity += 1
            updatediv()
        }
        perso6 += 1
        limitCounter +=1
    }else{
        alert("Your maximum of 100 items is reached")
    }
})


function plusButton(index){
    if(limitCounter < 100 ){
        limitCounter += 1
        displayCounter += 1
        console.log("+1")
        cart[index].quantity += 1
        updatediv()
    }else{
        alert("Your maximum of 100 items is reached")
    }
}

function minusButton(index){
    if(cart[index].quantity > 1){
        limitCounter -= 1
        displayCounter -= 1
        console.log("-1")
        cart[index].quantity -= 1
        updatediv()
    }
    
}

function removeItem(index){
    limitCounter -= parseInt(cart[index].quantity)
    displayCounter -= parseInt(cart[index].quantity)
    cart[index].quantity = 0
    cart.splice(index, 1)
    counter -= 1
    if (index == "0"){
        perso1 = 0
    }else if(index == "1"){
        perso2 = 0
    }else if(index == "2"){
        perso3 = 0
    }else if(index == "3"){
        perso4 = 0
    }else if(index == "4"){
        perso5 = 0
    }else if(index == "5"){
        perso6 = 0
    }
    updatediv()
}


function updatediv(){
    
    content2.innerHTML = ""
    content.innerHTML = ""
    var totallocal = 0
    for(i = 0; i < cart.length; i++){
        console.log("hey")
        var htmlString = "" ;
        htmlString+= `
        <div id="product` + i + `" class="product">
            <img class="cartImage" src=" ` + cart[i].image + `" alt="">
            <div class="cartname">` + cart[i].name + `</div>
            <div id="cartprice` + i + `" class="cartprice">` + "£" + cart[i].price + `</div>
            <div class="cartQuantity">
                <img id="minus` + i + `" class="editbutton" src="./Assets/minus.svg" alt="" onclick="minusButton(` + i + `)">
                <div class="personalcounter" id="personalcounter` + i + `">` + cart[i].quantity + `</div>
                <img id="plus` + i + `" class="editbutton" src="./Assets/plus.svg" alt="" onclick="plusButton(` + i + `)" >
            </div>
            <img id="carttrash` + i + `" class="carttrash" src="./Assets/trash.svg" onclick="removeItem(` + i + `)"></img>
        </div><hr>
        `;
        var htmlString2 = "" ;
        htmlString2+= `
        <div id="product` + i + `" class="product">
            <img class="cartImage2" src=" ` + cart[i].image + `" alt="">
            <div class="cartname2">` + cart[i].name + `</div>
            <div id="cartprice` + i + `" class="cartprice">` + "£" + cart[i].price + `</div>
            <div class="cartQuantity">
                <img id="minus` + i + `" class="editbutton" src="./Assets/black_minus.svg" alt="" onclick="minusButton(` + i + `)">
                <div class="personalcounter2" id="personalcounter` + i + `">` + cart[i].quantity + `</div>
                <img id="plus` + i + `" class="editbutton" src="./Assets/black_plus.svg" alt="" onclick="plusButton(` + i + `)" >
            </div>
            <img id="carttrash` + i + `" class="carttrash" src="./Assets/black_trash.svg" onclick="removeItem(` + i + `)"></img>
        </div><hr>
        `;
        content.insertAdjacentHTML("beforeend", htmlString)
        content2.insertAdjacentHTML("beforeend", htmlString2)
        totallocal += parseInt(cart[i].price) * cart[i].quantity
    }

    total.innerHTML = "Total = £ " + totallocal

    totaldiv.innerHTML = "Total = £ " + totallocal

    var strcounter = String(displayCounter)
    var productCounter = html.style.setProperty("--counter","'" + strcounter +"'");
    console.log("counter = " + counter)

    localStorage.setItem('localDataCart', JSON.stringify(cart));
    localStorage.setItem('valid', true);
    localStorage.setItem('total', JSON.stringify(totallocal));
    localStorage.setItem('displaycounterlocal', JSON.stringify(displayCounter));

}


function initialUpdateDiv(){
    content2.innerHTML = ""
    content.innerHTML = ""
    var totallocal = 0
    for(i = 0; i < cartContent.length; i++){
        console.log("hey")
        var htmlString = "" ;
        htmlString+= `
        <div id="product` + i + `" class="product">
            <img class="cartImage" src=" ` + cartContent[i].image + `" alt="">
            <div class="cartname">` + cartContent[i].name + `</div>
            <div id="cartprice` + i + `" class="cartprice">` + "£" + cartContent[i].price + `</div>
            <div class="cartQuantity">
                <img id="minus` + i + `" class="editbutton" src="./Assets/minus.svg" alt="" onclick="minusButton(` + i + `)">
                <div class="personalcounter" id="personalcounter` + i + `">` + cartContent[i].quantity + `</div>
                <img id="plus` + i + `" class="editbutton" src="./Assets/plus.svg" alt="" onclick="plusButton(` + i + `)" >
            </div>
            <img id="carttrash` + i + `" class="carttrash" src="./Assets/trash.svg" onclick="removeItem(` + i + `)"></img>
        </div><hr>
        `;

        var htmlString2 = "" ;
        htmlString2+= `
        <div id="product` + i + `" class="product">
            <img class="cartImage2" src=" ` + cartContent[i].image + `" alt="">
            <div class="cartname2">` + cartContent[i].name + `</div>
            <div id="cartprice` + i + `" class="cartprice">` + "£" + cartContent[i].price + `</div>
            <div class="cartQuantity">
                <img id="minus` + i + `" class="editbutton" src="./Assets/black_minus.svg" alt="" onclick="minusButton(` + i + `)">
                <div class="personalcounter2" id="personalcounter` + i + `">` + cartContent[i].quantity + `</div>
                <img id="plus` + i + `" class="editbutton" src="./Assets/black_plus.svg" alt="" onclick="plusButton(` + i + `)" >
            </div>
            <img id="carttrash` + i + `" class="carttrash" src="./Assets/black_trash.svg" onclick="removeItem(` + i + `)"></img>
        </div><hr>
        `;

        content.insertAdjacentHTML("beforeend", htmlString)
        content2.insertAdjacentHTML("beforeend", htmlString2)
        totallocal += parseInt(cartContent[i].price) * cartContent[i].quantity
    }
    total.innerHTML = "Total = £ " + totallocal

    totaldiv.innerHTML = "Total = £ " + totallocal

    var strcounter
    if(localStorage.getItem('displaycounterlocal') == null){
        strcounter = 0
    }else{
        strcounter = String(localStorage.getItem('displaycounterlocal'))
        
    }

    var productCounter = html.style.setProperty("--counter","'" + strcounter +"'");
    console.log("counter = " + counter)

}








// ANIMATION DE DIV PANIER


const cartButton = document.getElementById("cartButton")

var divcart = document.getElementById("divcart")

var divcartstatus = false

cartButton.addEventListener("click", function(){
    if(divcartstatus == false){
        divcart.style.display = "block"
        divcartstatus = true 
        divcart.style.animation = "slide 0.5s linear 0s 1 normal none"
    }else{
        divcart.style.display = "none"
        divcartstatus = false 
    }
})

cross.addEventListener("mouseenter", function(){
    cross.src = "./Assets/redCross.svg"
})

cross.addEventListener("mouseleave", function(){
    cross.src = "./Assets/cross.svg"
})

cross.addEventListener("click", function(){
    cartValidation.style.display = "none"
})

divCartButton.addEventListener("click", function(){
    cartValidation.style.display = "block"
    divcart.style.display = "none"
})

openform.addEventListener("click", function(){
    pay.style.display = "block"
    openform.style.display = "none"
})

submitB.addEventListener("click", function(){
    var request = new XMLHttpRequest()
    request.open("POST", "https://raw.githubusercontent.com/Eyvve/doriancanonne.dev/main/data/citypop_discovery.json")
    request.onload = function(){
        var order = {
            'firstname' : document.pay.firstname.value,
            'lastname' : document.pay.lastname.value,
            'email' : document.pay.email.value,
            'address' : document.pay.address.value,
            'cart' : localStorage.getItem('localDataCart'),
            'total' : localStorage.getItem('total')
        }
    }
    request.send(); 

    cartValidation.style.display = "none" 
    thanksmessage.style.display = "flex"

    wipe.addEventListener("click", function(){
        localStorage.clear()
        document.location.reload()
    })
            
})
