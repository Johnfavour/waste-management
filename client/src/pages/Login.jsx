import React, { useRef, useContext } from 'react';
import './login.css';
import { AuthContext } from '../context/AuthContext';
import { loginCall } from '../apiCalls';

export default function Login() {
    const username = useRef();
    const password = useRef();
    const { isFetching, error, dispatch } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        loginCall({
            username: username.current.value,
            password: password.current.value
        }, dispatch)
    };

    return (
        <div>
            <div className='container'>
                <form action="" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <label>Usuario</label>
                    <input
                        type="text"
                        required
                        ref={username}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        required
                        ref={password}
                    />
                    <button
                        className='mainBtn'
                        type='submit'
                        disabled={isFetching}
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    )
}
