import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import MinView from '../../MinView'
import './LoginScreen.css'
//import axios from 'axios'
import Loading from '../../Loading'
import ErrorMessage from '../../ErrorMessage'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../actions/userActions'



const LoginScreen = () => {
     
    const Navigate = useNavigate();

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    // const[error,setError]=useState(false)
    // const[loading,setLoading]=useState(false)

    const dispatch = useDispatch()

    const userLogin =useSelector((state)=>state.userLogin)
    const  { loading, error ,userInfo } = userLogin;

    useEffect(() => {
      if(userInfo){
      Navigate("/mynotes")
      }
    },[Navigate,userInfo])
    


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email,password));
      };



  return (
    <MinView tittle={'Login'} payload={
        <>
        <div className='loginContainer'>
            {loading&& <Loading/>}
            {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>
                        Email Address 
                    </Form.Label>
                    <Form.Control value={email} type='email' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                    <Form.Label className='py-3'>
                        Password
                    </Form.Label>
                   
                    <Form.Control maxLength={12} value={password} type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>

                </Form.Group>
                <div>
                        <p style={{fontSize:"x-small" , marginTop:'20px'}}>Maximum Password Length ~ 12</p>
                    </div>
                <div className='BB' >
                <Button variant='primary' type='submit' size='lg'>
                    Submit
                </Button>
                </div>
            </Form>
            <Row className='py-3'>
                <Col>
                New Customer ? <Link to='/register' style={{color:'blue'}}>Register Here</Link></Col>
                 
            </Row>

        </div>

        </>
    }>

    </MinView>
  )
}

export default LoginScreen
