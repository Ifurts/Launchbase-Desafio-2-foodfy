const express = require('express')
const nunjucks = require('nunjucks')

const recipe = require("./data")

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false
})

// rotas

server.get("/", function(req, res){
    return res.render("foodfy", { items: recipe})
})

server.get("/about", function(req, res){
    return res.render("about")
})

server.get("/recipes", function(req, res){
    return res.render("recipes", { items: recipe})
})

server.get("/full-recipe", function(req, res){
    return res.render("full-recipe", { items: recipe})
})


server.use(function(req, res) {
    res.status(404).render("not-found");
  })

// fim rotas

server.listen(5000, function() {
    console.log("server is running")
});


// server.get("/full-recipe", function(req, res) {
//     const id = re.query.id

//     const fullRecipe = recipes.find(function(fullRecipe){
//         if (fullRecipe.id == id) {
//             return true
//         }
//     })

//     if (!fullRecipe) {
//         return res.render("not-found")
//     }

//     return res.render("fullRecipe", { fullRecipe})
// })



