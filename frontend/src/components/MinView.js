import { Container, Row } from 'react-bootstrap'
import '../MinView.css'

const MinView = ({tittle, payload}) => {
  return (
    <div className='mainBck'>
        <Container>
            <Row>
                <div className='page'>

                    {
                        tittle && (<>

                        <h1 className='heading'> {tittle} </h1>
                        <hr/>
                        </>)
                       
                    }
                    {payload}
                    

                </div>
            </Row>
        </Container>
      
    </div>
  )
}

export default MinView
