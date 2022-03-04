import React from 'react';
import {useState, useEffect} from 'react';



const Component = () => {

    const [cards, setCards] = useState(1)
    const [products, setProducts] = useState({
        name:'',
        stock:'',
        quantity:'',
        price:'',
    })

    return (
        <div>
        	<h2>
        		Potato
        	</h2>
        </div>
    );
};



export default Component;
