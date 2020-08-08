const ingredients = document.querySelector('.ing');
const prepare  = document.querySelector('.prep');
const information = document.querySelector('.info');


document.querySelector("#ing").addEventListener("click", function() {
    if (ingredients.classList.contains("hide")) {
        ingredients.classList.remove("hide")
   
    } else {
        ingredients.classList.add("hide")
    }

})

document.querySelector("#prep").addEventListener("click", function() {
    if (prepare.classList.contains("hide")) {
        prepare.classList.remove("hide")
   
    } else {
        prepare.classList.add("hide")
    }
})

document.querySelector("#info").addEventListener("click", function() {
    if (information.classList.contains("hide")) {
        information.classList.remove("hide")
   
    } else {
        information.classList.add("hide")
    }    
})

const buttomIng = document.getElementById("ing")

buttomIng.addEventListener("click", function(){
    if (buttomIng.innerHTML === "ESCONDER") {
        buttomIng.innerHTML = "MOSTRAR";
    }else {
        buttomIng.innerHTML = "ESCONDER";
    }
})

const buttomPrep = document.getElementById("prep")

buttomPrep.addEventListener("click", function(){
    if (buttomPrep.innerHTML === "ESCONDER") {
        buttomPrep.innerHTML = "MOSTRAR";
    }else {
        buttomPrep.innerHTML = "ESCONDER";
    }
})

const buttomInfo = document.getElementById("info")

buttomInfo.addEventListener("click", function(){
    if ( buttomInfo.innerHTML === "ESCONDER") {
        buttomInfo.innerHTML = "MOSTRAR";
    }else {
        buttomInfo.innerHTML = "ESCONDER";
    }
})

 
const cards = document.querySelectorAll('.card')


for (let card of cards) {
    card.addEventListener("click", function () {
        const getRecipeId = card.getAttribute("id");
        window.location.href = `/fullrecipe/${getRecipeId}`
        
    })
}


cards.onClick = function (){console.log(1)}