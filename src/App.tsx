import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import {BrowserRouter as Router} from "react-router-dom" //el browserRouter es el enrutador ppal
import AppRoutes from "./routes/AppRoutes";
import { Container } from "react-bootstrap";
import Loader from "./components/Loader/Loader";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <>
      <ToastContainer/>
     	<Router>
       {/* //Estan afuera del App routes porque estan en todas las paginas de nuestra aplicacion, asi evitamos que se vuelvan a renderizar cada vez que lo utilizamos */}
        <Header/>
        <Container style={{minHeight: '100vh', minWidth: '100%', padding: '0'}}>
        {/* esto se carga primero y cuando termine se carga el app routes */}
          <Suspense fallback={<Loader/>}>
            <AppRoutes/>
          </Suspense>
          
        </Container>
        
        <Footer/>
      </Router>
    </>
  )
}

export default App
