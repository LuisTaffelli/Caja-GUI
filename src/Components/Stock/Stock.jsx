import React from 'react';
import {useState, useEffect} from 'react';
import Card from '../Cards/StockCard.jsx'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../Redux/actions/index.js';
import Styles from './Stock.module.css'



const Component = () => {
    const dispatch = useDispatch()
    let DataRetrieve = useSelector((state)=>state.products.data)
    const [reload, setReload] = useState(false)
    const [flag, setFlag] = useState(false)

    useEffect(()=>{
        dispatch(getProducts())
        setData(DataRetrieve)
        return;
    },[flag, dispatch])

    useEffect(()=>{
        if(DataRetrieve === undefined){
            dispatch(getProducts())
            return
            }
        if(DataRetrieve !== undefined){
            setData(DataRetrieve)
            return
        }

        return
    }, [dispatch, DataRetrieve, reload, setData])

    const Reload = ()=>{
        setReload(!reload)
    }

    const Searchbar = (Word)=>{
        let auxdata = DataRetrieve.filter((info)=>info.name.toLowerCase().includes(Word.toLowerCase()))
        setData(auxdata)
    }

    const retrieve = ()=>{
        setFlag(!flag)
    }

    const [Data, setData] = useState(DataRetrieve)
    const [input, setInput] = useState('')

    return (
        <div>
            <div className={Styles['CustomInput']}>
                <input type='text' placeholder='Buscar...' 
                onChange={e => {
                e.preventDefault()
                setInput(e.target.value)
                Searchbar(e.target.value)
                }}
                value={input}
                />
            </div>
            <div className={Styles['Inner-Container']}>
                {Data ? Data.map((info)=>
                    <Card name={info.name} 
                    stock={info.stock} 
                    stocktype={info.stocktype} 
                    price={info.unitprice}
                    key={info.id}
                    flag={retrieve}
                    id={info.id}/>
                ) : <button onClick={Reload}>Cargar Stock</button>}
            </div>
        </div>
    );
};



export default Component;