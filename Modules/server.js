const express = require("express");
const shortId = require("shortid");


const custmizedId = shortId.generate();
console.log(custmizedId);

function makeShortId (num){
    let arrayOfElement = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
      ]
      let arrayofWords = [
        "kanhaiya", "Tushar","Harshal","Kunal","Gaurav",
        "Athrav","Londe","Ritesh","Rohan","Dn"
    ]
      let words = [] ;
    for(let i=0;i<=num;i++){
        let randomNum = Math.floor(Math.random()*10);
        let randomChar = arrayOfElement[randomNum];
         words.push(randomChar);
        // let randomChar = arrayofWords[randomNum];
        // return randomChar

    }
     let wordsOfChar =  words.join('')
     return wordsOfChar ;
}


let result = makeShortId(6);
 console.log(result);



module.exports = custmizedId

// const app =express();
// const port = 3000 ;

// app.listen(port,function(err){
//     console.log(`Server is running on port ${port}`)
// })


