import React, { useRef, useContext } from 'react';
import './login.css'; // Assuming you're using the same styling for register as for login
import { AuthContext } from '../context/AuthContext';
import { registerCall } from '../apiCalls'; // Import the new register call function
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
    const username = useRef();
    const email = useRef(); // New reference for email
    const password = useRef();
    const { isFetching, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate(); // To redirect the user after registration

    const handleSubmit = (e) => {
        e.preventDefault();
        registerCall({
            username: username.current.value,
            email: email.current.value, // Include email in the registration data
            password: password.current.value
        }, dispatch).then(() => {
            navigate('/login'); // Redirect to login page after successful registration
        }).catch((err) => {
            console.error('Registration failed:', err);
        });
    };

    return (
        <div>
            <div className='container'>
                <form action="" onSubmit={handleSubmit}>
                    <h2>Signup</h2>
                    <label>Username</label>
                    <input
                        type="text"
                        required
                        ref={username}
                    />
                    <label>Email</label> {/* New email input */}
                    <input
                        type="email"
                        required
                        ref={email}
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
                        Signup
                    </button>
                  <p className='new'>Already have an account? <Link to="/login">Login</Link></p>

                </form>
                
            </div>
        </div>
    );
}
