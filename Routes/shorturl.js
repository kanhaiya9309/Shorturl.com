const express  =  require('express');
const shortId = require('shortid');
const ShortUrl = require('../Modules/shortUrl.js');
const routes = express.Router();



routes.get('/', async(req,res)=>{
    const shortUrls = await ShortUrl.find()
    res.render("index", {shortUrls :shortUrls});
  })
  
routes.post('/shortUrl',async(req,res)=>{
      try{
          await ShortUrl.create({full: req.body.fullUrl})
          //let urlExample = shortId.generate();
          //console.log(urlExample);
          res.redirect('/')
      }
      catch(err){
          console.log(err)
      }
  })
  
routes.get('/:shortUrl',async(req,res)=>{
     const shortUrl  = await ShortUrl.findOne({short:req.params.shortUrl})
       console.log(shortUrl);
  
     if(shortUrl === null){
      return res.sendStatus(404);
     }
     shortUrl.clicks++;
     shortUrl.save();
     res.redirect(shortUrl.full);
  
 })


module.exports = routes ;