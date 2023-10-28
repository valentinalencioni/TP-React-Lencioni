import {useState} from 'react';
import AlertGenerator from '../AlertGenerator/AlertGenerator';

 const AlertMessage = () => {
    // Guarda el valor del campo de texto
    const[inputValue, setInputValue]=useState('');

    //Guarda el mensaje
    const [message, setMessage]=useState('');

    //Muestra el componente hijo segun el estado
    const [showAlert, setShowAlert]=useState(false);

    //Si el campo de texto no está vacío, se guarda lo que escribió el usuario en "mesage"
    //Se renderiza el componente hijo
    const handleClick=()=>{
        if(inputValue.trim()!==''){
            setShowAlert(true);
            setMessage(inputValue);
        }else{
            setShowAlert(false);
        }
    }
  
    return (
    <div className='m-3'>
        <h2>Ejemplo 2</h2>

        {/* componente padre */}
        {/* vinculamos el campo de texto al estado inputValue, siempre contiene el valor actual del campo de texto
        y onChange se activa cada vez que el usuario cambia el campo de texto */}
        <input type="text" value={inputValue} onChange={(e)=>
        setInputValue(e.target.value)}/>

        {/* usamos el evento onClick para que ejecute la funcion handle click */}
        <button onClick={handleClick}>Enviar</button>
        
        {/* conexion con el componente hijo 
        Si showAlert es verdadero, va a mostrar AlertGenerator y va a recibir el prop message que 
        le mandamos*/}
       {showAlert && <AlertGenerator message={message}/>}
        

    </div>
  )
}
export default AlertMessage
