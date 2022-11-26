import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MinView from '../../MinView'
import './LoginScreen.css'
const LoginScreen = () => {
  return (
    <MinView tittle={'Login'} payload={
        <>
        <div className='loginContainer'>
            <Form>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label className='py-3'>
                        Email Address 
                    </Form.Label>
                    <Form.Control className='py-3' type='email' placeholder='Enter Email'/>
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                    <Form.Label className='py-3'>
                        Password
                    </Form.Label>
                    <Form.Control className='py-3' type='password' placeholder='Password'/>

                </Form.Group>
                <Button className='BB' variant='primary' type='submit' size='lg'>
                    Submit
                </Button>
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
