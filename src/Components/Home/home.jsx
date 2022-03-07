import React from 'react';
import Styles from './home.module.css'
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProducts, productSale } from '../../Redux/actions/index.js';
import Selector from '../Selector/Selector.jsx';
import Card from './Card.jsx';
import {AiOutlineClose} from 'react-icons/ai'
import { GiArchiveRegister } from "react-icons/gi";



const Component = () => {


    const [SaleSum, setSaleSum] = useState([])
    const [TotalSum, setTotalSum] = useState(0)
    const [cards, setCards] = useState(null)
    const dispatch = useDispatch()
    let DataRetrieve = useSelector((state)=>state.products.data)
    const [Data, setData] = useState(DataRetrieve)
    
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
    }, [dispatch, DataRetrieve, setData])

    useEffect(()=>{
        TotalSale(SaleSum)
        return
    },[TotalSum, SaleSum])


    const onClick = (name)=>{
        setCards(cards.filter((info)=> info.name !== name))
        setSaleSum(SaleSum.filter((info)=> info.product !== name))
    }

    const saleArray = (info)=>{
        setCards(info)    
    }

    const TotalSale = (Arr)=>{
        let Total = 0
        Arr.forEach((info)=>{
            Total += info.price
        })
        setTotalSum(Total)
        return;
    }

    const saleComplete = async ()=>{
        await SaleSum.forEach((info)=>{
            dispatch(productSale(info))
        })
        setCards(null)
        setSaleSum([])
        return
    }


    const Sale = (name, quantity, price, type, id, stock)=>{
        var auxboolean = false
        var auxIndex = 0
        SaleSum.forEach((info, index)=>{
            if (info.product.toLowerCase() === name.toLowerCase()){
                auxboolean = true
                auxIndex = index
            }
        })
        if(type === 'unit'){
            if(auxboolean){
                let sum = quantity*price
                let provArr = SaleSum
                provArr[auxIndex] = {'product':name, 'price':sum, 'id': id, 'stock': stock-quantity}
                setSaleSum(provArr)
                TotalSale(SaleSum)
                return;
            }
            let sum = quantity*price
            let sale = {'product':name, 'price':sum, 'id': id, 'stock': stock-quantity}
            setSaleSum([...SaleSum, sale])
            TotalSale(SaleSum)
        }
        if(type === 'kg'){
            if(auxboolean){
                let sum = price*quantity/1000
                let provArr = SaleSum
                provArr[auxIndex] = {'product':name, 'price':sum, 'id': id, 'stock': (stock)-(quantity/1000)}
                setSaleSum(provArr)
                TotalSale(SaleSum)
                return;
            }
            let sum = price*quantity/1000
            let sale = {'product':name, 'price':sum, 'id': id, 'stock': (stock)-(quantity/1000)}
            setSaleSum([...SaleSum, sale])
            TotalSale(SaleSum)
        }
    }

    return (
        <div>
            {Data ? <Selector data={Data} value={cards} change={saleArray}/> : <></>}
            <div className={Styles['Box']}>
        	   <div className={Styles['Left-Box']}>
                {cards ? cards.map((info)=>
                    <Card name={info.name} 
                    stock={info.stock} 
                    stocktype={info.stocktype} 
                    price={info.unitprice}
                    key={info.id}
                    sale={Sale}
                    id={info.id}/>
                ) : null}
                </div>
                <div className={Styles['Right-Box']}>
                    {SaleSum.length !== 0 ? SaleSum.map((info)=>
                        <div className={Styles['Sale-info']} key={info.product}>
                        <h2
                        >{info.product}:  ${info.price}</h2>
                        <AiOutlineClose key={info.product + 'icon'} name={info.product}
                        onClick={()=>onClick(info.product)} size={20} color="white"/>
                        </div>) : null}
                    <div className={Styles['Total-sale']}>
                        <GiArchiveRegister color='white' size={60}/>
                        <h2>Total: ${TotalSum}</h2>
                        {cards ? <button onClick={saleComplete}>Terminar Compra</button> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Component;
