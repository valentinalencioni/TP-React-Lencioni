import React, {useState} from "react";
import { Form } from "react-bootstrap";
import DangerBar from "../DangerBar/DangerBar";

const DangerInput = () => {
    // value guarda el estado actual y el valor que elige el usuario, setValue lo cambia. 
    const [value, setValue]=useState(0);

    // la funcion se ejecuta c vez que el usuario cambia el valor en el formulario
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        // event.target es una referencia al elemento del DOM que desencadenó el evento
        //Number convierte el string que se pasa como parámetro en el setValue
        setValue(Number(event.target.value));
    }

    return (
        <div className='m-3 w-50'>
            <h2>Ejemplo 1</h2>

            {/* Componente Padre */}
            <Form.Range value={value} onChange={handleChange}/>

            {/* Componente Hijo */}
            <DangerBar value={value}/>

        </div>
    )
}

export default DangerInput
