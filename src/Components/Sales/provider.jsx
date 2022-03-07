import React from 'react';
import {useState, useEffect} from 'react';
import Styles from "./provider.module.css"

const Component = () => {


    const [best, setBest] = useState(null)
	const [providers, setProviders] = useState([])
	const [data, setData] = useState({
    	name: '',
    	stock: '',
    	unitprice: '',
    })

    const Inputchange = (e)=>{
    	setData(
    		{...data, [e.target.name] : e.target.value}
    		)
    }


    const handleSubmit = (e)=>{
    	e.preventDefault()
    	setProviders([...providers, data])
    	setData({
    	name: '',
    	stock: '',
    	unitprice: '',
    	})
    }

    useEffect(()=>{
    	let bestSale = null
    	if(providers.length === 0){
    		return
    	}else{
    		providers.forEach((el, index)=>{
    			if(index === 0){
    			    bestSale = {'name':el.name, 'price':el.unitprice/el.stock}
    			} 
    			if (bestSale.price > el.unitprice/el.stock){
    				bestSale = {'name':el.name, 'price':el.unitprice/el.stock}
    			}
    		})
    		setBest(bestSale)
    		return;
    	}
    },[providers, data])




    return (
        <div className={Styles['Form-Background']}>
        	<form onSubmit={handleSubmit} className={Styles['Form']}>
        		<div className={Styles['Inner-form']}>
        			<label><h3>Proveedor:</h3></label>
        			<input type='text' 
        			name='name'
        			value={data.name}
        			onChange={Inputchange}></input>
        		</div>
        		<div className={Styles['Inner-form']}>
        			<label><h3>Cantidad:</h3></label>
        			<input type='number' 
        			name='stock'
        			value={data.stock}
        			onChange={Inputchange}></input>
        		</div>
        		<div className={Styles['Inner-form']}>
        			<label><h3>Precio:</h3></label>
        			<input type='number' 
        			name='unitprice'
        			value={data.unitprice}
        			onChange={Inputchange}></input>
        		</div>
        		<input type='submit'></input>
        	</form>
        	<div className={Styles['Box']}>
	        	<div className={Styles['providers']}>
	        		{providers.length !== 0 ? providers.map((el)=>{
	        			return <div key={el.stock+el.name}>
	        				<h4>Nombre : {el.name}</h4>
	        				<h4>Cantidad : {el.stock}</h4>
	        				<h4>${el.unitprice}</h4>
	        			</div>
	        		}) : null}
        	</div>
        	{best ? <div className={Styles['providers']} key={best.name+best.price}>
        			<h4>Nombre: {best.name}</h4>
        			<h4>Precio por producto: ${best.price}</h4>
        		</div> : null}
        	</div>
        </div>
    );
};

export default Component;
