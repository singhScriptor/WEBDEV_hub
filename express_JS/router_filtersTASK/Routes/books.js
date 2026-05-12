const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
    res.send("Here is the list of books!")
})

router.post('/',(req,res)=>{
    console.log(req.body)
    res.json({
        message:"Book has been added!",
        book:req.body
    })
})

module.exports=router
