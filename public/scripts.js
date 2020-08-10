const ingredients = document.querySelector('#ingred');
const prepare  = document.querySelector('#prepa');
const information = document.querySelector('#infor');

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

// buttom script

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

// end

//buttom linked to fullrecipe
 
const cards = document.querySelectorAll('.card .cards')

for (let card of cards) {
    card.addEventListener("click", function(){
        const cardId = card.getAttribute("id");
        window.location.href = `/fullrecipe/${cardId}`
    })
}


// for (let i = 0; cards.length; i++) {
//     cards[i].addEventListener("click", function() {
//         window.location.href = `/fullrecipe/${i}`
//     })
// }

