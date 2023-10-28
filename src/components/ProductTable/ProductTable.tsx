import{useState} from 'react';
import { Product } from '../../types/Product';
import { ProductService } from '../../services/ProductService';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import { Button, Table } from 'react-bootstrap';
import { ModalType } from '../../types/ModalType';
import ProductModal from '../ProductModal/ProductModal';
import {EditButton} from '../EditButton/EditButton';
import {DeleteButton} from '../DeleteButton/DeleteButton';



const ProductTable = () => {

    //Variable que guarda 
    const[products, setProducts]= useState<Product[]>([]);

    //Variable que muestra el componente Loader hasta que se reciban los datos de la API
    const[isLoading, setIsLoading]=useState(true);

    //Varianle que va a actualizar los datos de la tabla luego de cada operación exitosa
    // es una dependencia del useEffect
    const[refreshData, setRefreshData]=useState(false);

    //Este hook se ejecuta cada vez que se renderice el componente o refreshData cambie de estado
    useEffect(() => { 

      //Llamamos a la funcion para obtener todos los prod declarados en el service
      const fetchProducts=async()=>{
        const products= await ProductService.getProducts();
        setProducts(products);
        setIsLoading(false);
      };

      fetchProducts(); 

    }, [refreshData]);

    console.log(JSON.stringify(products, null, 2)); //Me muestra el objeto de forma mas legible

  //CONST para inicializar un producto por defecto y evitar el "undefined"
  //Creo un producto nuevo
  const initializableNewProduct=():Product=>{
    return{
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
    };
  };

  // elegimos un producto que se pasa como prop al modal
  const[product, setProduct]= useState<Product>(initializableNewProduct);

  //Const para manejar el estado de un modal
  const [showModal, setShowModal]=useState(false);
  const[modalType, setModalType]=useState<ModalType>(ModalType.NONE);
  const[title, setTitle]=useState("");

  //Logica del modal
  const handleClick=(newTitle: string, prod: Product, modal: ModalType)=>{
    setTitle(newTitle);
    setModalType(modal);
    setProduct(prod);
    setShowModal(true);
  };


  return (
    <> 
    {/* boton que llama a iniciliazar producto, debe ir por encima de la tabla */}
      <Button 
        onClick={()=>handleClick(
            "Nuevo producto",initializableNewProduct(),ModalType.CREATE
          )
        }>
        Nuevo producto
      </Button>
      {isLoading ? <Loader/>:(
        <Table hover>
          <thead>
            <tr>
              <th>TITULO</th>
              <th>PRECIO</th>
              <th>DESCRIPCION</th>
              <th>CATEGORIA</th>
              <th>IMAGEN</th>
              <th>EDITAR</th>
              <th>BORRAR</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product=>(
              <tr key={product.id}>
                <td> {product.title} </td>
                <td> {product.price} </td>
                <td> {product.description} </td>
                <td> {product.category} </td>
                <td> <img src={product.image} alt={product.title} 
                  style={{width:'50px'}}/> 
                </td>
                <td> <EditButton onClick={()=>handleClick("Editar producto", product, ModalType.UPDATE)}/> </td>
                <td> <DeleteButton onClick={()=>handleClick("Borrar producto", product, ModalType.DELETE)}/>  </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {showModal &&(
        <ProductModal
        show={showModal}
        onHide={()=>setShowModal(false)}
        title={title}
        modalType={modalType}
        prod={product}
        refreshData={setRefreshData}
        />
      )}

    </>
  )
  
}
export default ProductTable