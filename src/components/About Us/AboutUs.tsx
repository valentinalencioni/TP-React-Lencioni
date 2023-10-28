import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const AboutUs =()=>{
    return(
        <>
        <div style={{padding:'50px 96px 0px'}}>
            <cite style={{fontSize:'30px'}}>ABOUT US</cite>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illo magni eos ab totam nam laudantium 
                corporis voluptate vero. Harum iure, vel sunt obcaecati quidem eligendi laudantium perspiciatis modi fugit.
            </p>
        </div>
        
        <CardGroup style={{padding:'50px 96px'}}>
            <Card>
                <Card.Img 
                variant="top" 
                src="src/assets/images/Blue Teapot Cake Tea Tea Time Blue and White Tea Set - Etsy.jpeg" 
                style={{height:'280px'}}
                alt='infusiones'/>
                <Card.Body>
                    <Card.Title>Infusiones</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                </Card.Body>
          </Card>
          <Card>
                <Card.Img 
                variant="top" 
                src="src/assets/images/promos.jpeg" 
                style={{height:'280px'}}
                alt='Promos'/>
                <Card.Body>
                    <Card.Title>Promociones</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                </Card.Body>
          </Card>
          <Card>
                <Card.Img variant="top" 
                src="src/assets/images/tortas.jpeg" 
                style={{height:'280px'}}
                alt='tortas'/>
                <Card.Body>
                    <Card.Title>Porciones individuales</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                </Card.Body>
          </Card>
          <Card>
                <Card.Img variant="top" 
                src="src/assets/images/postres.jpeg" 
                style={{height:'280px'}}
                alt='postres'/>
                <Card.Body>
                    <Card.Title>Postres</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                </Card.Body>
          </Card>
        </CardGroup>
        </>
    )
}
export default AboutUs
