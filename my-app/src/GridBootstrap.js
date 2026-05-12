import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'

function GridBootstrap() {
  return (
    <div>
      <Container fluid="lg">
        <Row>
            <Col xl={6}>
                <div className='bg-primary p-4 text-center'>
                    Row 1 --Grid 1
                </div>
            </Col>
            <Col>
                <div className='bg-success p-4 text-center'>
                    Row 1 --Grid 2
                </div>
            </Col>
            <Col>
                <div className='bg-secondary p-4 text-center'>
                    Row 1 --Grid 3
                </div>
            </Col>
        </Row>
        <Row className="mt-2">
            <Col md={5} sm={3}>
                <div className='bg-primary p-4 text-center'>
                    Row 2 --Grid 1
                </div>
            </Col>
            <Col>
                <div className='bg-success p-4 text-center'>
                    Row 2 --Grid 2
                </div>
            </Col>
            <Col>
                <div className='bg-secondary p-4 text-center'>
                    Row 2 --Grid 3
                </div>
            </Col>
            <Col>
                <div className='bg-danger p-4 text-center'>
                    Row 2 --Grid 4
                </div>
            </Col>
        </Row>
        <Row className="mt-2">
            <Col lg={{offset:1}}>
                <div className='bg-primary p-4 text-center'>
                    Row 3 --Grid 1
                </div>
            </Col>
            <Col lg={{span:5}}>
                <div className='bg-success p-4 text-center'>
                    Row 2 --Grid 2
                </div>
            </Col>
            <Col lg={{offset:1,span:2}}>
                <div className='bg-secondary p-4 text-center'>
                    Row 2 --Grid 3
                </div>
            </Col>
            <Col>
                <div className='bg-danger p-4 text-center'>
                    Row 2 --Grid 4
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GridBootstrap
