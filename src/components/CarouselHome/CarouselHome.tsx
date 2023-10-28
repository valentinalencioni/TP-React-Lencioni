import Carousel from 'react-bootstrap/Carousel';

const CarouselHome =()=>{
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className='d-block w-100'
                style={{maxHeight:"500px", objectFit:'cover'}}
                src='src/assets/images/cafés.jpeg'   alt='slide1'/>
                <Carousel.Caption style={{color: 'black'}}>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className='d-block w-100'
                style={{maxHeight:"500px", objectFit:'cover'}}
                src='src/assets/images/Tigmi Guide to Paris.jpeg'   alt='slide2'/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img className='d-block w-100'
                style={{maxHeight:"500px", objectFit:'cover'}}
                src='src/assets/images/macarons.jpeg'   alt='slide3'/>
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