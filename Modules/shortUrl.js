const mongoose = require('mongoose')
const shortId = require('shortid')
const makeShortId = require('./server.js')


const shortUrlSchema = new mongoose.Schema({
    full : {
        type : "String",
        required : true
    },
    short :{
        type : "String",
        requiresd : true,
        default : shortId.generate
    },
    clicks :{
        type : "Number",
        required : true,
        default : 0
    }
})

module.exports = mongoose.model('ShortUrl',shortUrlSchema);



// const ShortUrl = mongoose.model('ShortUrl',shortUrlSchema);