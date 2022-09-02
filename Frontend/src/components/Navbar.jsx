import React, { useContext } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

export default function Navbar() {
    const { user } = useContext(AuthContext);

    const logout = () => {
        window.open("http://localhost:4000/api/auth/logout", "_self");
    };

    return (
        <nav className='navbar'>
            <div className="navContainer">
                <Link to='/'>
                    <div className='logoContainer'>
                        <img src="./images/logo_white.png" alt="" />
                    </div>
                </Link>
                <h1>Gestion de Residuos</h1>
                <div className='linksContainer'>
                    {user ? (
                        <>
                            <Link to='/admin' style={{ textDecoration: "none", color: "white", marginRight: "1rem" }}>
                                <span className='navItem'>Dashboard</span>
                            </Link>
                            <span className='navItem' onClick={logout}>Logout</span>
                        </>
                    ) : (
                        <Link to='/login' style={{ textDecoration: "none", color: "white" }}>
                            <span className='navItem'>Login</span>
                        </Link>)}
                </div>
            </div>
        </nav>
    )
}
