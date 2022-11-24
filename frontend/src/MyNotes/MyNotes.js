import {React , useEffect, useState} from 'react'
import {  Accordion, Badge, Button, Card } from 'react-bootstrap'
import MinView from '../components/MinView'
import { Link } from 'react-router-dom'
//import notes from '../Data/notes'
import axios from 'axios'

const MyNotes = () => {

 const [ notes , setnotes]= useState([])

  const deleteHandler = (id) => {
    if(window.confirm("Are you Sure....")){

    }
  }

  const fetchNotes = async() =>{
    const {data} = await axios.get("/api/notes")
   setnotes(data);
  }

console.log(notes);
 useEffect(() => {
    
   fetchNotes()
 }, [])
 


  return (
    <MinView tittle="Welcome Back Jigar Joshi" payload={
    <>
<Link  to="/createnote">
        <Button variant='success' style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new Note
        </Button>
        
      </Link>
      {
      notes.map(note=>(  
        
       <Accordion key={note._id}>
        <Accordion.Item eventKey='0'>
        <Card className='card text-white bg-secondary mb-3' style={{margin:10}}>
          
      <Card.Header style={{display:'flex'}}>
        <span style={{color:'black',
      textDecoration:'none',
      flex:1,
      cursor:'pointer',
      alignSelf:'center',
      fontSize:18}}>
        <Accordion.Button>
        {note.title}</Accordion.Button></span>
        <div>
          <Button href={`/note/${note._id }`} variant='primary'>Edit</Button>
          <Button variant='danger' style={{marginLeft:8}} onClick={()=>deleteHandler(note._id)}>Delete</Button>
        </div>
        </Card.Header>

        <Accordion.Collapse eventKey='0'>
        <Card.Body>
          <h4><Badge style={{color:'white'}}>
            Catagory - {note.category}
            </Badge>  </h4>
          

        <blockquote className="blockquote mb-0" style={{color:'black'}}>
        <p>
        
         {note.content}
        </p>
        <footer className="blockquote-footer">
          Created On --Date
        </footer>
      </blockquote>

        </Card.Body>
        </Accordion.Collapse>

    </Card>
    </Accordion.Item>
       </Accordion> ))
    }
    
</>
    
}>
 
    </MinView>
  )
}
export default MyNotes
