const expressAsyncHandler = require("express-async-handler");
const Note = require("../Models/noteModel");

const getNotes = expressAsyncHandler(async(req,res)=>{
    const notes = await Note.find({user: req.user._id})
    res.json(notes)
})

const CreateNote = expressAsyncHandler(async(req,res)=>{
    const {tittle,content,category} = req.body

    if (!tittle || !content || !category) {
        res.status(400);
        throw new Error("Please Fill all the feilds");
        return;
      } else {
        const note = new Note({ user: req.user._id, tittle, content, category });
    
        const createdNote = await note.save();
    
        res.status(201).json(createdNote);
      }
})

const getNotebyID = expressAsyncHandler(async(req,res)=>{
    const note = await Note.findById(req.params.id)

    if(note){
     res.json(note)   
    }
    else{
        res.status("404").json({message:"Note not found"})
    }
})


const UpdateNote = expressAsyncHandler(async(req,res)=>{
    const {tittle,content,category} = req.body;

    const note = await Note.findById(req.params.id)

    if(note.user.toString()!==req.user._id.toString()){
        res.status(401)
        throw new Error("You are not authorized to perform this action")
    }
    if(note){
        note.tittle = tittle;
        note.content= content;
        note.category= category;

        const UpdatedNote = await note.save();

        res.json(UpdatedNote);
    }
    else{
        res.status(404)
        throw new Error("Note not found !")
    }

})

const DeleteNote = expressAsyncHandler(async(req,res)=>{
    const note = await Note.findById(req.params.id)

    if(note.user.toString()!==req.user._id.toString()){
        res.status(401)
        throw new Error("You are not authorized to perform this action")
    }

    if(note){
        await note.remove();
        res.json({message: " Note Removed "})
    }
    else{
        res.status(404)
        throw new Error("Note not found !")
    }

})

module.exports = {getNotes,CreateNote,getNotebyID, UpdateNote,DeleteNote}