const express = require("express");
const app = express();

// app.listen(3000, () => {
//   console.log("APP IS RUNNING");
// });

// app.get("/" , (res,req)=>{
//     res.send(`<h1> This is Home Page <h1/>`)
// })

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

const blog = require("./routes/blog")
//mount
app.use("/api/v1",blog);

const connectWithDb = require("./config/database");
connectWithDb();

//start with server
app.listen(PORT, () => {
console.log(`APP IS RUNNING${PORT}`);
 });
    
app.get("/",(req,res)=>{
    res.send(`<h1> This is Home Page <h1/>`)
}) 