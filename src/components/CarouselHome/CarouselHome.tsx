import Carousel from 'react-bootstrap/Carousel';

const CarouselHome =()=>{
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className='d-block w-100'
                style={{maxHeight:"500px", objectFit:'cover'}}
                src='https://github.com/valentinalencioni/TP-React-Lencioni/blob/main/src/assets/images/caf%C3%A9s.jpeg?raw=true'   alt='slide1'/>
                <Carousel.Caption style={{color: 'black'}}>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className='d-block w-100'
                style={{maxHeight:"500px", objectFit:'cover'}}
                src='https://github.com/valentinalencioni/TP-React-Lencioni/blob/main/src/assets/images/Tigmi%20Guide%20to%20Paris.jpeg?raw=true'   alt='slide2'/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img className='d-block w-100'
                style={{maxHeight:"500px", objectFit:'cover'}}
                src='https://github.com/valentinalencioni/TP-React-Lencioni/blob/main/src/assets/images/macarons.jpeg?raw=true'   alt='slide3'/>
                <Carousel.Caption style={{color: 'black'}}>
                    <h3>Third slide label</h3>
                    <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
    )
}
export default CarouselHome
