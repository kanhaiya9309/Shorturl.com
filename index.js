const express  =  require('express');
const mongoose  = require('mongoose');
const ejs  = require('ejs');
require('dotenv').config()
const routes = require('./Routes/shorturl.js')


const app = express();
const port = process.env.PORT

app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}))

app.use('/', routes);

mongoose.connect(process.env.MONGOOSEURL)
  .then(()=>{
    console.log("Database is connected")
    app.listen(port, function(){
      console.log(`Server is running on port ${port}`)
})
  })
  .catch((error)=>{
    console.log(error)
  })



