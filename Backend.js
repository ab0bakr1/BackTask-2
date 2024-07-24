const express = require('express')
const app = express()

const port = process.env.PORT || 3000

const path = require ("path")
const publicDirectory =  path.join(__dirname , './Public')
app.use (express.static (publicDirectory))

app.set('view engine', 'hbs');

const viewsDirectory = path.join (__dirname , './Temp/views')
app.set('views', viewsDirectory);

var hbs = require('hbs');
const partialsPath = path.join(__dirname , "./Temp/Partials")
hbs.registerPartials(partialsPath)

 
app.get ('/' , (req,res) => {
    res.render('Person1' , {
        title : "HOME",
        desc : "This is home page"
    })
})

app.get ('/Person2' , (req,res) => {
    res.render('Person2' , {
        title : "Person2",
        name: "Abobakr",
        city:"Jeddah",
        age: 20,
        img1: "images/trainer-3.jpg"
    })
})

app.get ('/Person3' , (req,res) => {
    res.render('Person3' , {
        title : "Person3",
        name: "fahad",
        city:"Jeddah",
        age: 21,
        img2: "images/trainer-2.jpg"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })