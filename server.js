if(process.env.NODE_ENV!=='production'){
    require('dotenv').config()
}



const express = require('express')
const app =express();

app.set('view engine','ejs')
app.set('views',__dirname+'/views')
const indexRouter = require('./routes')

app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connection(process.env.DATABASE_URL,{
    useNewUrlParser : true , useUnifiedTopology: true
})
const db =mongoose.connection
db.on('error',error =>console.error(error)
)
db.once('open',()=>{
    console.log("connected to datatbase");
    
})





app.use('/',indexRouter)


app.listen(process.env.PORT || 9896)