import React from 'react'
import './App.css'
import { Container,Row, Col, Card, CardBody, CardHeader, CardTitle, CardSubtitle, CardText, CardLink, CardFooter, Button, CardImgOverlay} from 'react-bootstrap'

function CardBootstrap() {
  return (
    <Container className='App'>
        <Row>
            <Col md={4}>
                <Card bg='secondary' border='primary'>
                    <CardHeader>This is the Card Header</CardHeader>
                    <Card.Img src="images/shiva.jpg"/>
                    <CardBody>
                        <CardTitle>Shiva Image</CardTitle>
                        <CardSubtitle>God Shiva</CardSubtitle>
                        <CardText>Lord Shiva, also known as Mahadeva, is one of the principal deities of Hinduism, revered as the Supreme Being in Shaivism. He is part of the Trimurti, where he represents the role of the destroyer, balancing creation and preservation.</CardText>
                        <CardLink href='https://en.wikipedia.org/wiki/Shiva'>Know More About God Shiva</CardLink>
                        <br /> <br />
                        <div className="d-grid">
                            <Button variant='outline-warning'>Read More</Button>
                        </div>   
                    </CardBody>
                    <CardFooter className='bg-dark text-white'>This is the Card Footer</CardFooter>
                </Card>
            </Col>
            <Col md={4}>
                <Card bg='success' border='warning'>
                    <CardHeader>This is the Card Header</CardHeader>
                    <Card.Img src="images/FunWithTech.jpg"/>
                    <CardBody>
                        <CardTitle>FunWitTech Image</CardTitle>
                        <CardSubtitle>FunWithTech</CardSubtitle>
                        <CardText>Lord Shiva, also known as Mahadeva, is one of the principal deities of Hinduism, revered as the Supreme Being in Shaivism. He is part of the Trimurti, where he represents the role of the destroyer, balancing creation and preservation.</CardText>
                        <CardLink href='https://en.wikipedia.org/wiki/Shiva'>Know More About FunWithTech Platform</CardLink>
                        <br /> <br />
                        <div className="d-grid">
                            <Button variant='outline-danger'>Read More</Button>
                        </div>   
                    </CardBody>
                    <CardFooter className='bg-dark text-white'>This is the Card Footer</CardFooter>
                </Card>
            </Col>
            <Col md={4}>
                <Card bg='secondary' border='primary'>
                    <CardHeader>This is the Card Header</CardHeader>
                    <Card.Img src="images/SS.png"/>
                    <CardImgOverlay>
                        <CardTitle>Shiva Image</CardTitle>
                        <CardSubtitle>God Shiva</CardSubtitle>
                        <CardText>Lord Shiva, also known as Mahadeva, is one of the principal deities of Hinduism, revered as the Supreme Being in Shaivism. He is part of the Trimurti, where he represents the role of the destroyer, balancing creation and preservation.</CardText>
                        <CardLink href='https://en.wikipedia.org/wiki/Shiva'>Know More About God Shiva</CardLink>
                        <br /> <br />
                        <div className="d-grid">
                            <Button variant='outline-warning'>Read More</Button>
                        </div>   
                    </CardImgOverlay>
                    <CardFooter className='bg-dark text-white'>This is the Card Footer</CardFooter>
                </Card>
            </Col>
            
        </Row>
    </Container>
  )
}

export default CardBootstrap
