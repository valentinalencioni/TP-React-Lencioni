//contiene todas las funciones y metodos relacionados con la comunicacion de la API
import { Product } from "../types/Product";

const BASE_URL = 'https://fakestoreapi.com';

export const ProductService={
    // Me devuelve un array con todos los productos
    getProducts:async (): Promise<Product[]> => {
        const response = await fetch(`${BASE_URL}/products`);
        const data= response.json();
        return data;
    },

    getProduct:async (id:number): Promise<Product> => {
        const response = await fetch(`${BASE_URL}/products/${id}`); //nos dirige a un producto en particular dependiendo el id que se ingrese
        const data= await response.json();
        return data;
    },

    createProduct:async (product:Product): Promise<Product> => {
        const response = await fetch(`${BASE_URL}/products`,{
            method: "POST", //Por defecto fetch hace un get pero aca queremos crear un producto entonces usamos post
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        const data= await response.json();
        return data;
    },

    updateProduct:async (id:number, product:Product): Promise<Product> => {
        const response= await fetch(`${BASE_URL}/products/${id}`, {
            method: "PUT",
            headers:{
                'Content-Type': 'application/json'   
            },
            body:JSON.stringify(product)
        });
        
        const data=await response.json();
        return data;
    },

    deleteProduct:async (id:number): Promise<void> => {
        await fetch(`${BASE_URL}/products/${id}`,{
            method: "DELETE"
        });
    }
}