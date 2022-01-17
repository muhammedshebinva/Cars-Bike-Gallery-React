import React from 'react'
import { Card,ListGroup,ListGroupItem } from 'react-bootstrap'
import '../Cars/Cars.css'

function Bikes() {
    return (
        <div className="rowOne"> 
            <h1 className='title'>Bikes</h1>
        <div className='poster'>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://data1.ibtimes.co.in/en/full/703085/ducati-panigale-v4-r.jpg" />
  <Card.Body>
    <Card.Title>Ducati Panigale V4 R</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>


<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://media.zigcdn.com/media/content/2019/Jul/2020-yamaha-r1-9_560x420.jpg" />
  <Card.Body>
    <Card.Title>Yeamaha R1 </Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
        </div>
        </div>
    )
}

export default Bikes
