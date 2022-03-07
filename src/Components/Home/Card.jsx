import React from 'react';
import {useState} from 'react';
import styles from '../Cards/StockCard.module.css';

const Component = ({ name, stock, price, stocktype, sale, id }) => {

    const [quantity, setQuantity] = useState('')

    const onChange = (event)=>{
        setQuantity(Number(event.target.value))
    }

    const onBlur = ()=>{
        sale(name, quantity, price, stocktype, id)
    }

    return (
        <div className={styles['Card-Container']}>
            <div className={styles['Card-Column']}>
                <div className={styles['Card-Column-inner']}>
                    <h3>Producto</h3>
                    <h3>{name}</h3>
                </div>
                <div className={styles['Card-Column-inner']}>
                    <h3>Stock</h3>
                    {<h3>{stock} {stocktype==='kg' ? 'Kilos':'Unidades'}</h3>}
                </div>
                <div className={styles['Card-Column-inner']}>
                    <h3>Cantidad de {stocktype==='kg' ? 'Gramos':'Unidades'}</h3>
                    <input name='quantity'
                    value={quantity}
                    onBlur={onBlur}
                    onChange={onChange}></input>
                </div>
                <div className={styles['Card-Column-inner']}>
                    <h3>Precio Unitario</h3>
                    {<h3>${price}</h3>}
                </div>
            </div>
        </div>
        );
};


export default Component;
