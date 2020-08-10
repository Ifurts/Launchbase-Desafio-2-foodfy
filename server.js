const express = require('express')
const nunjucks = require('nunjucks')

const recipe = require("./data")

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
    
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

server.get("/fullrecipe/:index", function(req, res){
    const recipeData = req.params.index
    if (!recipe[recipeData]) {
        res.status(404).render("not-found");
        
    } else {
        return res.render("fullrecipe", {items : recipe[recipeData]})
        
    }
})


server.use(function(req, res) {
    res.status(404).render("not-found");
})

// fim rotas

server.listen(5000, function() {
    console.log("server is running")
});

