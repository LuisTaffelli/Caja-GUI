import React, {useState, useEffect} from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import {api} from './api';
import Navbar from './Components/NavBar/NavBar.jsx'
import Home from './Components/Home/home.jsx'

const App = () => {
    const [successText, setSuccessText] = useState(null);

    useEffect(() => {
        api.get('/')
            .then(({data}) => setSuccessText(data.data))
            .catch(err => console.error(err));
    },[]);

    return (
        <div>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Home />} />
            </Routes>
            <h2>Aplicación empezada</h2>
            <p>Haga click <Link to='/'>Aqui</Link></p>
        </div>
    );
};

export default App;
