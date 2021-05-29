// Bonjour Damien,
// Désolé mon code est un peu bordélique, j'ai réalisé trop tard que j'aurais du stocker bien plus 
// de variables dans le json local pour éviter de créer 45000 variables du même genre, ça m'aurait aussi épargné pas mal de galères.

// Features 100% fonctionnelles :
//  - Sélection de produits et affichage dans le panier
//  - Sauvegarde du panier dans le localstorage
//  - possibilité de modifier les infos du localstorage
//  - boutons pour augmenter ou diminuer les quantités
//  - Bouton pour supprimer un élément du panier (seulement supprimer)
//  - Limite d'articles à 9 pour chaque
//  - formulaire et envoi des informations du form + du panier a une adresse bidon en POST
//  - Nettoyage du panier et refresh a la validation du message d'envoi de commande

// Bugs :
//  - Le panier bug a la suppression d'un élément : les index bougent en local mais l'algo ne suit pas
//  ce qui provoque, tu le contateras par toi-même, un bordel / une modification des mauvais articles.
//  j'aimerais tout corriger mais je n'ai malheureusement pas le temps, pourrais-tu m'aider a corriger ce bug ?





var request = new XMLHttpRequest()
request.open("GET", "https://raw.githubusercontent.com/Eyvve/doriancanonne.dev/main/data/citypop_discovery.json")
request.onload = function(){
    var data = JSON.parse(request.responseText)
    fetchContent(data)
}
request.send(); 

var cart = []
var displayCounter = 0
var counter = parseInt(-1)

if(localStorage.getItem('localDataCart')){
    // se déclanche si ce n'est pas la première connexion
    console.log("welcome back")
    perso0 = parseInt(localStorage.getItem("perso0"))
    perso1 = parseInt(localStorage.getItem("perso1"))
    perso2 = parseInt(localStorage.getItem("perso2"))
    perso3 = parseInt(localStorage.getItem("perso3"))
    perso4 = parseInt(localStorage.getItem("perso4"))
    perso5 = parseInt(localStorage.getItem("perso5"))
    counterblock1 = parseInt(localStorage.getItem("counterblock1"))
    counterblock2 = parseInt(localStorage.getItem("counterblock2"))
    counterblock3 = parseInt(localStorage.getItem("counterblock3"))
    counterblock4 = parseInt(localStorage.getItem("counterblock4"))
    counterblock5 = parseInt(localStorage.getItem("counterblock5"))
    counterblock6 = parseInt(localStorage.getItem("counterblock6"))

}else{
    // initialisation de toutes les infos nécessaires au localstorage, se déclanche apres la seconde connexion
    localStorage.setItem('localDataCart', JSON.stringify(cart))
    parseInt(localStorage.setItem('displaycounterlocal', JSON.stringify(displayCounter)));
    parseInt(localStorage.setItem('counterlocal', JSON.stringify(counter)));
    var perso0 = 0
    var perso1 = 0
    var perso2 = 0
    var perso3 = 0
    var perso4 = 0
    var perso5 = 0

    var counterblock1
    var counterblock2
    var counterblock3
    var counterblock4
    var counterblock5
    var counterblock6
}



// Initialisation des variables utilisées dans tous les cas


var cartContent = JSON.parse(localStorage.getItem('localDataCart'))
var displayCounterLocal = parseInt(localStorage.getItem('displaycounterlocal'))
var counterlocal = parseInt(localStorage.getItem('counterlocal'))

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

var merchcontainer = document.getElementById("merchcontainer")

var content = document.getElementById("content")
var content2 = document.getElementById("content2")
const cartValidation = document.getElementById("cartValidation")
const divCartButton = document.getElementById("divCartButton")
const cleanCart = document.getElementById("cleanCart")

const cross = document.getElementById("cross")

var limitCounter = 0
var plus1 = document.getElementById("plus1")

var totalprice = 0
var total = document.getElementById("total")
var totaldiv = document.getElementById("totaldiv")
total.innerHTML = totalprice
totaldiv.innerHTML = totalprice

// Se lance au lancement de la page et redistribue les infos du localstorage dans la page
initialUpdateDiv() 

// Fonctions au click de chaque bouton, je me suis rendu compte un peu trop tard que j'aurais pu optimiser ça

function buy0(){
    displayCounterLocal += 1
    if (perso0 < 9){
        if (perso0 < 1){
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
                perso0 += 1
                counterlocal += 1
                counterblock1 = counterlocal
                localStorage.setItem("counterblock1", counterblock1)
                cartContent.push(transferedData)
                updatediv()
        }
        request.send(); 
        }else{
            if(cartContent[counterblock1].quantity < 9){
                perso0 += 1
                var index1 = counterblock1
                console.log(index1)
                cartContent[index1].quantity += 1
                updatediv()
            }
        }
        limitCounter +=1
        
    }else{
        alert("Your maximum of 9 items is reached")
    }
    
    
}

function buy1(){
    displayCounterLocal += 1
    if (perso1 < 9){
        if (perso1 < 1){
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
                perso1 += 1
                counterlocal += 1
                counterblock2 = counterlocal
                localStorage.setItem("counterblock2", counterblock2)
                cartContent.push(transferedData)
                updatediv()
            }
            request.send(); 
        }else{
            if(cartContent[counterblock2].quantity < 9){
                perso1 += 1
                var index2 = counterblock2
                console.log(index2)
                cartContent[index2].quantity += 1
                updatediv()
            }
        }
        limitCounter +=1
    }else{
        alert("Your maximum of 9 items is reached")
    }
}

function buy2(){
    displayCounterLocal += 1
    if (perso2 < 9){
        if (perso2 < 1){
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
                perso2 += 1
                counterlocal += 1
                counterblock3 = counterlocal
                localStorage.setItem("counterblock3", counterblock3)
                cartContent.push(transferedData)
                updatediv()
            }
            request.send(); 
        }else{
            if(cartContent[counterblock3].quantity < 9){
                perso2 += 1
                var index3 = counterblock3
                console.log(index3)
                cartContent[index3].quantity += 1
                updatediv()
            }
        }
        limitCounter +=1
    }else{
        alert("Your maximum of 9 items is reached")
    }
}

function buy3(){
    displayCounterLocal += 1
    if (perso3 < 9){
        if (perso3 < 1){
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
                perso3 += 1
                counterlocal += 1
                counterblock4 = counterlocal
                localStorage.setItem("counterblock4", counterblock4)
                cartContent.push(transferedData)
                updatediv()
            }
            request.send(); 
        }else{
            if(cartContent[counterblock4].quantity < 9){
                perso3 += 1
                var index4 = counterblock4
                console.log(index4)
                cartContent[index4].quantity += 1
                updatediv()
            }
        }
        limitCounter +=1
    }else{
        alert("Your maximum of 9 items is reached")
    }
}

function buy4(){
    displayCounterLocal += 1
    if (perso4 < 9){
        if (perso4 < 1){
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
                perso4 += 1
                counterlocal += 1
                counterblock5 = counterlocal
                localStorage.setItem("counterblock5", counterblock5)
                cartContent.push(transferedData)
                updatediv()
            }
            request.send(); 
        }else{
            if(cartContent[counterblock5].quantity < 9){
                perso4 += 1
                var index5 = counterblock5
                console.log(index5)
                cartContent[index5].quantity += 1
                updatediv()
            }
        }
        limitCounter +=1
    }else{
        alert("Your maximum of 9 items is reached")
    }
}

function buy5(){
    displayCounterLocal += 1
    if (perso5 < 9){
        if (perso5 < 1){
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
                perso5 += 1
                counterlocal += 1
                counterblock6 = counterlocal
                localStorage.setItem("counterblock6", counterblock6)
                cartContent.push(transferedData)
                updatediv()
            }
            request.send(); 
        }else{
            if(cartContent[counterblock6].quantity < 9){
                perso5 += 1
                var index6 = counterblock6
                console.log(index6)
                cartContent[index6].quantity += 1
                updatediv()
            }
        }
        limitCounter +=1
    }else{
        alert("Your maximum of 9 items is reached")
    }
}


// Fonction du bouton + du panier

function plusButton(index){
    if(cartContent[index].quantity < 9 ){
        limitCounter += 1
        displayCounterLocal += 1
        console.log("+1")
        cartContent[index].quantity += 1
        if (index == "0"){
            perso0 += 1
        }else if(index == "1"){
            perso1 += 1
        }else if(index == "2"){
            perso2 += 1
        }else if(index == "3"){
            perso3 += 1
        }else if(index == "4"){
            perso4 += 1
        }else if(index == "5"){
            perso5 += 1
        }
        updatediv()
    }else{
        alert("Your maximum of 9 items is reached")
    }
}

// Fonction du bouton - du panier

function minusButton(index){
    if(cartContent[index].quantity > 1){
        limitCounter -= 1
        displayCounterLocal -= 1
        console.log("-1")
        cartContent[index].quantity -= 1
        if (index == "0"){
            perso0 -= 1
        }else if(index == "1"){
            perso1 -= 1
        }else if(index == "2"){
            perso2 -= 1
        }else if(index == "3"){
            perso3 -= 1
        }else if(index == "4"){
            perso4 -= 1
        }else if(index == "5"){
            perso5 -= 1
        }
        updatediv()
    }
    
}

// Fonction de suppression d'un élément du panier

function removeItem(index){
    limitCounter -= parseInt(cartContent[index].quantity)
    displayCounterLocal -= parseInt(cartContent[index].quantity)
    cartContent[index].quantity = 0
    cartContent.splice(index, 1)
    counterlocal -= 1
    if (index == "0"){
        perso0 = 0
    }else if(index == "1"){
        perso1 = 0
    }else if(index == "2"){
        perso2 = 0
    }else if(index == "3"){
        perso3 = 0
    }else if(index == "4"){
        perso4 = 0
    }else if(index == "5"){
        perso5 = 0
    }
    updatediv()
}

function fetchContent(data){
    merchcontainer.innerHTML = ""
    for(i = 0; i < data.length; i++){
        var htmlString = ""
        htmlString+= `
        <div class="carte">
            <img src="` + data[i].image + `">
            <div class="name">` + data[i].name + `</div>
            <div class="price">` + "£" + data[i].price +  `</div>
            <button class="buy" onclick="buy` + i + "()" + `"><p>Add to cart</p></button>
        </div>
        `;
        merchcontainer.insertAdjacentHTML("beforeend", htmlString)
    }
}


// Fonction de refresh, se déclanche a chaque intéraction et refresh tout le panier en mettant à jour ses infos

function updatediv(){
    
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

    var strcounter = String(displayCounterLocal)
    var productCounter = html.style.setProperty("--counter","'" + strcounter +"'");
    console.log("counter = " + counterlocal)

    localStorage.setItem('localDataCart', JSON.stringify(cartContent));
    localStorage.setItem('valid', true);
    localStorage.setItem('total', JSON.stringify(totallocal));
    parseInt(localStorage.setItem('displaycounterlocal', JSON.stringify(displayCounterLocal)));
    parseInt(localStorage.setItem("perso0", perso0))
    parseInt(localStorage.setItem("perso1", perso1))
    parseInt(localStorage.setItem("perso2", perso2))
    parseInt(localStorage.setItem("perso3", perso3))
    parseInt(localStorage.setItem("perso4", perso4))
    parseInt(localStorage.setItem("perso5", perso5))

}

cleanCart.addEventListener("click", function(){
    localStorage.clear()
    document.location.reload()
})

// Fonction d'initialisation du panier, ne déclare pas de variables du localstorage

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

    parseInt(localStorage.setItem("perso0", perso0))
    parseInt(localStorage.setItem("perso1", perso1))
    parseInt(localStorage.setItem("perso2", perso2))
    parseInt(localStorage.setItem("perso3", perso3))
    parseInt(localStorage.setItem("perso4", perso4))
    parseInt(localStorage.setItem("perso5", perso5))

    var strcounter
    if(localStorage.getItem('displaycounterlocal') == null){
        strcounter = 0
    }else{
        strcounter = String(localStorage.getItem('displaycounterlocal'))
        
    }

    var productCounter = html.style.setProperty("--counter","'" + strcounter +"'");
    console.log("counter = " + counterlocal)

}








// ANIMATION DE DIV PANIER

// déclanchement d'animations et d'interactions visuelles

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

// fait changer la croix du panier final

cross.addEventListener("mouseenter", function(){
    cross.src = "./Assets/redCross.svg"
})

cross.addEventListener("mouseleave", function(){
    cross.src = "./Assets/cross.svg"
})

cross.addEventListener("click", function(){
    cartValidation.style.display = "none"
})


// Ces fonctions ont pour but de faire apparaitre la div de form

divCartButton.addEventListener("click", function(){
    cartValidation.style.display = "block"
    divcart.style.display = "none"
})

openform.addEventListener("click", function(){
    pay.style.display = "block"
    openform.style.display = "none"
})


// Fonction de récupération et d'envoi des informations du form et du panier a un 
// tiers pour qu'il lui envoie (fictionnellement) un mail avec un récap de la commande 
// et un bouton qui le redirige vers un site tiers pour le paiement

submitB.addEventListener("click", function(){
    var request = new XMLHttpRequest()
    request.open("POST", "https://recuperationdecommande.json")
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
