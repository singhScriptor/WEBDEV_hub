const express = require('express')

const router = express.Router()

const courses = [

{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

];

router.get('/',(req,res)=>{
    const courseName = courses.map(i=>i.name).join(', ')
    res.send(`Courses: ${courseName}`)
})

router.get('/:id',(req,res)=>{
    const courseId = parseInt(req.params.id)
    const courseName= courses.find(c=>c.id === courseId)
    const description=courses.find(d=>d.id=== courseId)

    if(courseName){
        res.send(`Course: ${courseName.name}, Description: ${description.description}`)
    }
    else{
        res.send("Course not found")
    }
})
module.exports=router