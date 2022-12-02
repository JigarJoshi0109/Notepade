import React, { useState } from 'react'
import { Button, Form, Row,Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ErrorMessage from '../../ErrorMessage'
import MinView from '../../MinView'
import './RegisterScreen.css'
import axios from 'axios'
import Loading from '../../Loading'

const RegisterScreen = () => {

  const [email, setEmail]= useState("");
  const [name, setName] = useState("");
  const[pic, setPic] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
  const [password,setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message,setMessage]= useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const[error , setError] = useState(false);
  const [loading,setLoading] = useState(false);


const submitHandler = async(e)=>{
  e.preventDefault();
  console.log(email);
  if(password!==confirmPassword){
    setMessage("Password Do not Match")
  }
  else{
    setMessage(null)

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true)
      const {data} = await axios.post("/api/users", {
        name, pic , email ,password
      },config)

      setLoading(false)
       localStorage.setItem("userInfo", JSON.stringify(data));
      
    } catch (error) {
      setError(error.response.data.message)
    }
  }
}

//https://api.cloudinary.com/v1_1/dexpgpnke/image/upload


const postDetails =(pics)=>{

  if(!pics){
    return setPicMessage("Please Select an Image")
  }

  setPicMessage(null)

  if(pics.type==='image/jpeg'||pics.type ==="image/png"){
    const data = new FormData();
    data.append("file",pics)
    data.append("upload_preset","Notepade");
    data.append('cloud_name','dexpgpnke') 
    fetch("https://api.cloudinary.com/v1_1/dexpgpnke/image/upload",{
      method:"post",
      body:data,
    }).then((res)=>res.json()).then((data)=>{
      console.log(data);
      setPic(data.url.toString())
    }).catch((err)=>{
      console.log(err);
    })
  }
  
  else{
    return setPicMessage("Please Select an Image")
  }

}



  return (
    <MinView tittle={'Register'} payload={<>
    
      <div className='registerContainer'>
        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
        {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
        {loading && <Loading/>}
        <Form onSubmit={submitHandler}> 
          <Form.Group controlId='name'>
            <Form.Label className='tittle'>Name</Form.Label>
            <Form.Control value={name} type='name' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
          </Form.Group>
          <Form.Group controlId='formBasicEmail'>
                    <Form.Label className='tittle'>
                        Email Address 
                    </Form.Label>
                    <Form.Control value={email} type='email' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
                    <Form.Label className='tittle'>
                        Password
                    </Form.Label>
                   
                    <Form.Control value={password} maxLength={12} type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>

                </Form.Group>
                <Form.Group controlId='formBasicConfirmPassword'>
                    <Form.Label className='tittle'>
                       Confirm Password
                    </Form.Label>
                   
                    <Form.Control value={confirmPassword} maxLength={12} type='password' placeholder='Confirm Password' onChange={(e)=>setConfirmPassword(e.target.value)}/>

                </Form.Group>
                {picMessage && (<ErrorMessage variant='dager'>{picMessage}</ErrorMessage>)}
                <Form.Group controlId="formFile" >
        <Form.Label className='tittle'>Profile Picture</Form.Label>
        <Form.Control style={{paddingBottom:'13px'}} type="file"  onChange={(e)=>postDetails(e.target.files[0])} />
      </Form.Group>
      <div className='BB'>
      <Button variant='primary' type='register' size='lg'>
              Register
      </Button>
      </div>
    
        </Form>
        <Row className='py-3'>
                <Col>
                Have a account ? <Link to='/login' style={{color:'blue'}}>Login</Link></Col>
                 
            </Row>
      </div>
    
    </>}></MinView>
 
  )
}

export default RegisterScreen
