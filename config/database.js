const mongoose = require("mongoose");


require("dotenv").config(); // jo bhi .env me hai vo sara ka sara load hojayega process ke andar

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{ // for making connetion btw node and database
            useNewUrlParser:true,
            useUnifiedTopology:true,
    })            
    .then(()=>console.log("DBka connection is SuccessFul "))
    .catch((error)=>{
        console.log("Issue is occured");
        console.error(error.message);
        process.exit(1);
    });
}


module.exports = dbConnect;
