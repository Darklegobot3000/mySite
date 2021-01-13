#!/usr/bin/env node

const express = require('express')
const http = require('http')
const path = require('path')
const httpShutdown = require('http-shutdown')

//create server
const app = express();
const server = httpShutdown(http.createServer(app))

//import api routes
//Load API routes

//Setup static hosting
app.use('/',express.static(path.join(__dirname,'public')))


//launch app
const PORT = process.env.PORT || '3000';
server.listen(PORT,()=>{
    console.log('listening on port ' + PORT)
});

//test route
app.get('/test',(req,res)=>{
    res.send("Hello World!")
})
