import React from 'react';
import {Link} from 'react-router-dom';
import Style from './NavBar.module.css'

const Component = () => {
    return (
        <div className={Style['Nav-container']}>
            <div>
                <button>
                    <Link to='/'>Caja</Link>
                </button>
            </div>
        	<div>
                <button>
                    <Link to='/products'>Productos</Link>
                </button>
            </div>
            <div>
                <button>
                <Link to='/stock'>Stock</Link>
                </button>
            </div>
            <div>
                <button>
                    <Link to='/calculator'>Comparación proveedores </Link>
                </button>
            </div>
        </div>
    );
};



export default Component;
