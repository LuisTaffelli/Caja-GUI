import React, {useState} from 'react';
import Styles from './NewProduct.module.css'
import axios from 'axios';

const Component = ({toggle}) => {
    
    const [data, setData] = useState({
    	name: '',
    	stock: '',
    	stocktype: '',
    	unitprice: '',
    })

    const Inputchange = (e)=>{
    	setData(
    		{...data, [e.target.name] : e.target.value}
    		)
    	console.log(data)
    }
  	
    const handleSubmit = (e)=>{
    	e.preventDefault()
    	axios.post(`http://localhost:9001/products`, data).then((msg)=>{
    		console.log(msg)
        	setData({
    		name: '',
    		stock: '',
    		stocktype: '',
    		unitprice: '',
    		})		
    	})
    	.catch((e)=>{console.log(e,'error') })
    }


    return (
        <div className={Styles['Form-Background']}>
        	<form onSubmit={handleSubmit} className={Styles['Form']}>
        		<div className={Styles['Inner-form']}>
        			<label><h3>Nombre del Producto:</h3></label>
        			<input type='text' 
        			name='name'
        			value={data.name}
        			onChange={Inputchange}></input>
        		</div>
        		<div className={Styles['Inner-form']}>
        			<label><h3>Stock:</h3></label>
        			<input type='number' 
        			name='stock'
        			value={data.stock}
        			onChange={Inputchange}></input>
        		</div>
        		<div className={Styles['Inner-form']}>
        			<label><h3>Tipo de Stock:</h3></label>
        			<select onChange={Inputchange} name='stocktype'>
        				<option value='' label='Elegir'></option>
        				<option value='kg' label='Por Kilo'></option>
        				<option value='unit' label='Por Unidad'></option>
        			</select>
        		</div>
        		<div className={Styles['Inner-form']}>
        			<label><h3>Precio Unitario:</h3></label>
        			<input type='number' 
        			name='unitprice'
        			value={data.unitprice}
        			onChange={Inputchange}></input>
        		</div>
        		<input type='submit'></input>
        	</form>
        </div>
    )
};



export default Component;
