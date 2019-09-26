const express = require('express');
const router = express.Router();
// const client = require("../models")
 const addPage = require("../views/addPage")


router.get("/",(req,res,next)=>{
    res.send(" WikiPost" )
})

router.post("/", (req, res, next) => {
    res.send("Hello World")
  
})

router.get("/add",(req, res,next) => {

    res.send(addPage());
 
})

module.exports = router;