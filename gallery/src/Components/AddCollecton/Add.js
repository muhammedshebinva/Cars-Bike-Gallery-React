// import React, { Fragment } from 'react';
import '../AddCollecton/Add.css'
import React from "react"
import { Form,Row,Col,Button } from 'react-bootstrap'
function Add() {
    return (
    
<div className="FormDiv">

    <Form className="FormMain">
  

  <Form.Group as={Row} className="mb-3" controlId="Text">
    <Form.Label column sm="2">
      Name
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label column sm="2">
        Description
        </Form.Label>
    <Col sm="10">
    <Form.Control as="textarea" rows={3} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="Text2">
    <Form.Label column sm="2">
      Engine
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="Text3">
    <Form.Label column sm="2">
      Power
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formFileMultiple">
    <Form.Label column sm="2">
        Image
    </Form.Label>
    <Col sm="10">
    <Form.Control type="file" multiple />
    </Col>
  </Form.Group>

  <Button className='submit_btn' variant="primary" type="submit">
    Submit
  </Button>

</Form>
</div>
    )
}

export default Add
