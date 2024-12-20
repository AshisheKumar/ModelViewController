const express = require('express');
const app = express();
const PORT = 8000;
const userRouter = require('./routes/user');
const {connectMongoDb} = require('./connection');  
const {logReqRes} = require('./middlewares');

connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(()=>{
    console.log("MongoDB Connected");
});


app.use(express.urlencoded({extended : true}));
app.use(logReqRes("log.txt"));
app.use("/api/users",userRouter);


app.listen(PORT, ()=>{console.log("Server running at port 8000")});