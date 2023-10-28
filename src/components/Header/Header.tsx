import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import{useNavigate} from 'react-router-dom';//Hook que nos proporciona la biblioteca. Proporciona una funcion que podemos utilizar para navegar a diferentes ruta de nuestra app de manera dinamica y controlada por nuestro codigo

const Header = ()=>{
    const navigate=useNavigate();
    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand onClick={() => navigate ('/')}>Cafetería Le Fleur</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate ('/')}>Home</Nav.Link>
                            <Nav.Link onClick={() => navigate ('/componentes')}>Componentes</Nav.Link>
                            <Nav.Link onClick={() => navigate ('/administracion')}>Administracion</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>   
        </>
    )
}
export default Header;