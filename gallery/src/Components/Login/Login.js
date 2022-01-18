import React from 'react'
import { Form,Row,Col,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../AddCollecton/Add.css'
function Login() {
    return (
        <div>
            <Form className='FormMain'>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control type='email' placeholder='Email' />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Form.Label column sm="2">

    <Link to='/signup'>Create New Account</Link>

    </Form.Label>
    <Col sm="10">
    <Button variant="primary" type="submit">
    Submit
  </Button>
    </Col>
  </Form.Group>

</Form>
        </div>
    )
}

export default Login
