import { Alert } from "react-bootstrap";

//este componente hijo puede recibir solamente messages de tipo string
type AlertGeneratorProps={
    message: string;
}

//El componente hijo tiene argumentos de tipo "AlertGeneratorPropr"
const AlertGenerator = ({message}:AlertGeneratorProps) => {
  return (
    <Alert variant="success" className="mt-2 w-25">
        <Alert.Heading>Mensaje recibido</Alert.Heading>
        <p> {message} </p>
    </Alert>
  ) 
}

export default AlertGenerator