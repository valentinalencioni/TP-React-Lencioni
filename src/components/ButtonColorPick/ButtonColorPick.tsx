import {useState} from "react";
import ModalColorPick from "../ModalColorPick/ModalColorPick";
import { Button } from "react-bootstrap";

const ButtonColorPick = () => {
  
    //color incial
    const [buttonColor, setButtonColor]=useState("#3d7c40");

    //Manejo del Modal
    const [showModal, setShowModal]=useState(false);
    
    //Funcion para cambiar color
    const handleColorChange = (color:string)=>{
        setButtonColor(color);
    }

    //Funcion al hacer click en el boton se muestre el modal
    const handleShowModal=()=>{
        setShowModal(true);
    }

    return (
        <div className="m-3">
           <h2>Ejemplo 3</h2> 

            {/* componente padre */}
            {/* cuando se hace click llama a la funcion show modal y lo muestra */}
            <Button variant="primary" style={{backgroundColor: buttonColor}}
            onClick={handleShowModal}>Cambiar color</Button>

            {/* componente hijo 
            CONDICIONAL*/}
            {showModal && <ModalColorPick 
            show ={showModal}
            onHide={ ()=> setShowModal(false) }
            handleColorChange={handleColorChange} />}
        </div>

    )
}

export default ButtonColorPick