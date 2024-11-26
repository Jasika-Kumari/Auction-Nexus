import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './Login.css';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/v1/login', { email, password });
            const { token, role } = response.data;

            // Store the JWT token in local storage
            localStorage.setItem('token', token);

            setMessage('Login successful');

            // Redirect to the appropriate dashboard based on role
            if (role === 'Employee') {
                navigate('/admindashboard'); 
            }// Redirect to the Admin Dashboard page
            else
             {
               navigate('/userdashboard'); // Redirect to the User Dashboard page
            }
            
        } catch (error) {
            if (error.response && error.response.data) {
                setMessage('Login failed: ' + error.response.data.message);
            } else {
                setMessage('Login failed: An unexpected error occurred');
            }
        }
    };

    return (
        <div id="abc">
            <div className='containerr'>
                <h1>Login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '100%' }}>
                        <div className='inputBox' style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                            <Form.Control
                                className='input'
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <i className="fa-solid fa-user" style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', fontSize: '10px' }}></i>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" style={{ width: '100%' }}>
                        <div className='inputBox' style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                            <Form.Control
                                className='input'
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <i className="fa-solid fa-lock" style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', fontSize: '10px' }}></i>
                        </div>
                    </Form.Group>

                    <div className='remember-forgot'>
                        <label><input type='checkbox' />Remember me</label>
                        <a href='/'>Forgot password?</a>
                    </div>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>

                    <div className='register-link'>
                        <p>Don't have an account? <a href='/registration'>Register</a></p>
                    </div>

                    {message && <div className="mt-3">{message}</div>}
                </Form>
            </div>
        </div>
    );
}

export default Login;


