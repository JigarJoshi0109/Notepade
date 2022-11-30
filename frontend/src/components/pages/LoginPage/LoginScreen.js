import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MinView from '../../MinView'
import './LoginScreen.css'
import axios from 'axios'
import Loading from '../../Loading'
import ErrorMessage from '../../ErrorMessage'

const LoginScreen = () => {

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[error,setError]=useState(false)
    const[loading,setLoading]=useState(false)

const submitHandler = async(e)=>{
    e.preventDefault();
    
    try {
        const config ={
            headers:{
                "Content-type":"application/json"

            }
        }

        setLoading(true)


        const {data}= await axios.post('/api/users/login',{
            email,
            password
        },
        config
        );
        console.log(data);
        localStorage.setItem('userInfo', JSON.stringify(data))

        setLoading(false)
    } catch (error) {
        setError(error.response.data.message)
        setLoading(false)
    }


}



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
                    <Form.Control value={password} type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>

                </Form.Group>
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
