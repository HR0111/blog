// import mongoose
const mongoose = require("mongoose");

//route handler
const commentSchema = new mongoose.Schema({

    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Post",   // ref to the post model                      // kis post pe comment kar rahe ho
    },
    user:{
        type:String,
        required:true,  // kon comment kar raha hai
    },
    body:{
        type:String,    // ky comment kar raha hai
        required:true,
    }
});

// export
module.exports = mongoose.model("Comment",commentSchema);

