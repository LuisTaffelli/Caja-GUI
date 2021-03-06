import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import { useDispatch} from "react-redux";
import {api} from './api';
import {getProducts} from './Redux/actions/index.js'
import Navbar from './Components/NavBar/NavBar.jsx';
import Home from './Components/Home/home.jsx';
import Provider from './Components/Sales/provider.jsx';
import Stock from './Components/Stock/Stock.jsx';
import NewProduct from './Components/Products/NewProduct.jsx'
import Styles from './app.css'


const App = () => {
    const [successText, setSuccessText] = useState(null);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
        api.get('/')
            .then(({data}) => setSuccessText(data.data))
            .catch(err => console.error(err));
    },[dispatch]);

    return (
        <div className='App'>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/products' element={<NewProduct />}/>
                <Route path='/stock' element={<Stock />}/>
                <Route path='/calculator' element={<Provider />}/>
            </Routes>
        </div>
    );
};

export default App;
