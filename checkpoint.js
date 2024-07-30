const express = require('express')
const app = express()
const date= require ("./Midel/date")
const port = 3000

//route 
app.get('/get',(req,res)=>{
    res.send('you did first express project ')
})
app.get('/offlinepage',(req,res)=>{
    res.send('arja3 ghodwa ')
})

// jiben les fichiers html 
app.use('/static',express.static(__dirname +'/checkpoint'))


app.get('/',date,(req,res)=>{
    res.sendFile(__dirname + '/checkpoint/Home Page.html')
})

app.get('/Services',date,(req,res)=>{
    res.sendFile(__dirname + '/checkpoint/Our Services.html')
})
app.get('/Contact',date,(req,res)=>{
    res.sendFile(__dirname + '/checkpoint/Contact us.html')
})

app.listen(port,err=>{
err? console.log(err):console.log(`you are connected to the ${port}`)
})
