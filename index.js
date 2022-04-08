
const express = require('express')

const app = express()

app.listen('3000')

//GET

//app.route('/').get((req,res)=> res.send("olá mundo!") ) 
//app.route('/sobre').get((req,res)=> res.send("olá mundo/sobre!") ) 

//---------------------------------------------------------------------------------------

//middleware
//app.use(express.json())

//---------------------------------------------------------------------------------------

//POST
//app.route('/').post((req,res)=> res.send(req.body))

//---------------------------------------------------------------------------------------

//PUT
/*let author = "Renan"
app.route('/').get((req,res)=> res.send(author) ) 

app.route('/').put((req,res) => {
    author = req.body.author
    res.send(author)
})*/

//--------------------------------------------------------------------------------------

//DELETE

/*let author = "Renan"
app.route('/:identificador').delete((req,res) => {
    author = ""
    res.send(req.params.identificador)
})*/

//--------------------------------------------------------------------------------------

//ROUTE PARAMS

/* app.route('/:variavel').get((req,res) => res.send(req.params.variavel))

app.route('/identidade/:nome').get((req,res) => res.send(req.params.nome)) */

