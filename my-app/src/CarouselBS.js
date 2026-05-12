import React from 'react'
import { Container, Col, Row ,Carousel} from 'react-bootstrap'

function CarouselBS() {
  return (
    <div>
      <Container>
        <Row>
            <Col>
                <Carousel fluid fade>
                {/* <Carousel slide={false}> */}
                    <Carousel.Item interval={1000}>
                        <img src='images/shiva.jpg' alt='NA' height="500px" className='d-block w-100'/>
                        <Carousel.Caption>
                          <h3>Shiva</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img src='images/FunWithTech.jpg' alt='NA' height="500px" className='d-block w-100'/>
                        <Carousel.Caption>
                          <h3 className='text-dark'>FunWithTeck</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={200}>
                        <img src='images/SS.png' alt='NA' height="500px" className='d-block w-100'/>
                        <Carousel.Caption>
                          <h3 className='text-dark'>SS</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                      <img src='https://static.vecteezy.com/system/resources/thumbnails/023/009/485/small_2x/abstract-animal-owl-portrait-with-colorful-double-exposure-paint-with-generative-ai-free-photo.jpeg' alt='' className='d-block w-100' height="500px"/>
                      <Carousel.Caption>
                        <h3>Eagle Paint</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CarouselBS
