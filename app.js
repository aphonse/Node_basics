const express = require('express')
const ejs = require('ejs')
const app = express()
const routes=require('./router')

app.use(express.static('views'))
app.set('view engine','ejs')
app.use(express.urlencoded({ extended: true }));

app.use(routes)


app.listen(8080,()=>{
    console.log("Server started...")
})