const express=require('express');
const route=require('./Route/index')
const path=require('path')

const app=express()

route(app)

const port=process.env.PORT || 3030

app.listen(port);

console.log(`Listening on port ${port}`)