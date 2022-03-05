import React from 'react';
import {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from '../../Redux/actions/index.js';
import styles from './StockCard.module.css';
import { FaRegEdit } from 'react-icons/fa'


const Component = ({name, stock, price, stocktype, flag, id}) => {



    const dispatch = useDispatch()
    const editconfig = ()=>{
        setEdit(!edit)
    }

    const [edit, setEdit] = useState(false)
    const [editstock, setStock] = useState(stock)
    const [editprice, setPrice] = useState(price)
    const [data, setData] = useState({
        "name": name,
        "stock": editstock,
        "stocktype": stocktype,
        "unitprice": editprice,
        "id":id
    })

    const Inputchange = (e)=>{
        if(e.target.name === 'stock'){
            setStock(e.target.value)
        }
        if (e.target.name === 'price'){
            setPrice(e.target.value)
        }
        setData({
        "name": name,
        "stock": Number(editstock),
        "stocktype": stocktype,
        "unitprice": Number(editprice),
        "id":id
        })
    }

    const LoadData = ()=>{
        dispatch(editProduct({...data,
            "stock":Number(editstock),
            "unitprice" : Number(editprice)
        }))
        flag()
        setEdit(!edit)
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
            {edit ? <input
                name='stock' 
                value={editstock}
                onChange={Inputchange}></input> : 
                <h3>{editstock} {stocktype==='kg' ? 'Kilos':'Unidades'}</h3>}
        </div>
        <div className={styles['Card-Column-inner']}>
            <h3>Tipo de Stock</h3>
            <h3>{stocktype}</h3>
        </div>
        <div className={styles['Card-Column-inner']}>
            <h3>Precio</h3>
            {edit ? <input
                name='price' 
                value={editprice}
                onChange={Inputchange}></input> :
                <h3>${editprice}</h3>}
        </div>
      </div>
      <div className={styles['Edit-container']}>
        <button onClick={editconfig}
        className={styles['Edit-button']}>
            <FaRegEdit size={40} color={'white'}/>
        </button>
      </div>
      {edit ? <button className={styles['Load-button']}
      onClick={LoadData}>Cargar datos</button> : <></>}
    </div>
    );
};



export default Component;