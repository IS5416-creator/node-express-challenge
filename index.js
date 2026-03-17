const express = require("express")
const cors = require("cors")
const app = express()
const actors = require("./data/actors.json")
app.use(cors())
app.use(express.json())

app.get("/actors",(req,res)=>{
res.status(200).json(actors)
})

app.get("/actors/:id",(req,res)=>{
const id = parseInt(req.params.id)
const actor = actors.find(a=>a.id === id)
if(!actor) return res.status(404).json({
    success: false,
    message: "actor not found"
})
res.status(200).json(actor)
})

app.post("/actors",(req,res)=>{
const {name, height, birth_year} = req.body
if(!name || !height || !birth_year) return res.status(400).json({
    success:false,
    message:"missing field"
})
const newActor={
    id: actors.length + 1,
    name,
    height,
    birth_year
}

actors.push(newActor)
res.status(201).json({
    success:true,
    message:"actor added successfully",
    data: newActor
})
})

app.put("/actors/:id",(req,res)=>{
const id = parseInt(req.params.id)
const actor = actors.find(a=>a.id===id)
if(!actor) return res.status(404).json({
    success:false,
    message:"actor not found"
})
if (req.body.name !== undefined) actor.name = req.body.name
    if (req.body.height !== undefined) actor.height = req.body.height
    if (req.body.birth_year !== undefined) actor.birth_year = req.body.birth_year
res.status(200).json({
        success:true,
        message:"actor updated successfully",
        data: actor
})
})

app.delete("/actors/:id",(req,res)=>{
const id = parseInt(req.params.id)
const index = actors.findIndex(a=>a.id === id)
if(index === -1) return res.status(404).json({
    success:false,
    message:"actor not found"
})
actors.splice(index,1)
res.status(200).json({
    success:true,
    message:"deleted"
})
})


app.listen(3001,
    console.log("listening at port 3001")
)