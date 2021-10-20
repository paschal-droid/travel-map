const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv").config();
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");

const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));


mongoose.connect('mongodb://localhost:27017/mapDB').then(()=>{
    console.log("DB has connected sucessfully");
});

app.use("/map/pins",pinRoute);
app.use("/map/users",userRoute);

app.listen(8800,()=>{
    console.log("backend server has started");
})