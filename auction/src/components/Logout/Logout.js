import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './Logout.css';

function Logout() {
    const [message, setMessage] = useState('');

    const handleLogout = () => {
        // Clear the JWT token and other user-related data
        localStorage.removeItem('token');
        setMessage('Logout successful');
        
        // Redirect to the login page or homepage
        window.location.href = '/login';
    };

    return (
        <div id="abc">
            <div className='containerr'>
                <h1>Logout</h1>

                <Button variant="primary" onClick={handleLogout}>
                    Logout
                </Button>

                <div className='register-link'>
                    <p>Don't have an account? <a href='/registration'>Register</a></p>
                </div>

                {message && <div className="mt-3">{message}</div>}
            </div>
        </div>
    );
}

export default Logout;



