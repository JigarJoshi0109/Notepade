import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const   Footer = () => {
  return (
    <footer style={{
      width: '100%',
      postion:"relative",
      bottom: 0,
      display:'flex',
      justifyContent:'center',
      fontSize:"20px"
    }}>
      
      <Container>
        <Row>
          <Col className='text-center py-3'> Copyright &copy; 𝓝𝓸𝓽𝓮𝓹𝓪𝓭𝓮 </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer