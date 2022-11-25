import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './lpage.css'
//import carousel from 'react-responsive-carousel'

const Lpage = () => {
  return (
    
    <div className='main'>
      <Container>
        <Row> 
        <div className='intro-text rounded-pill'>
          <div>
              <h1 className='title'>Welcome to 𝓝𝓸𝓽𝓮𝓹𝓪𝓭𝓮</h1>
              <p className='subtitle'>One Safe Place For All Your Notes</p>
          </div>
          <div className='ButtonContainer'>
                  <a href='/login'> <Button size='lg' className='LandB'  variant='primary'>
                    Login</Button></a>
                    <a href='/register'> <Button size='lg' className='LandB' variant='primary'>
                    SignUp</Button></a>
          </div> 

             
        </div>
          </Row>
      </Container>
      
    </div>
  )
}

export default Lpage
