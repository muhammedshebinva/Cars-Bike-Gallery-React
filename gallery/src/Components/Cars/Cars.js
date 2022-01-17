import React from 'react'
import { Card,ListGroup,ListGroupItem } from 'react-bootstrap'
import './Cars.css'
function Cars() {
    return (
        <div>
            <div className="rowOne"> 
            <h1 className='title'>CARS</h1>
        <div className='poster'>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlzc2FuJTIwcjM1JTIwZ3RyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
  <Card.Body>
    <Card.Title>Nisan GTR R35</Card.Title>
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
  <Card.Img variant="top" src="https://img.wallpapersafari.com/tablet/2048/2732/94/58/itrKZj.jpg" />
  <Card.Body>
    <Card.Title>Lamborghini Huracan </Card.Title>
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
        </div>
    )
}

export default Cars
