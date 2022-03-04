import React from 'react';
import {useState, useEffect} from 'react';
import ProductForm from './NewProduct.jsx'


const Component = () => {

    const [showForm, setShowForm] = useState(true)


    const newProduct = () =>{
        setShowForm(!showForm)
        console.log(showForm)
    }


    return (
        <div>
            <button className='product-adder' onClick={newProduct}>
                Cargar Producto
            </button>
            {showForm ? <ProductForm toggle={newProduct}/> : <></>  }
        </div>
    );
};



export default Component;
