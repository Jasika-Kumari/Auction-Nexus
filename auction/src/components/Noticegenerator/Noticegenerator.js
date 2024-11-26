import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Noticegenerator.css';
import { animated, Spring } from 'react-spring';
import axios from 'axios';

function Noticegenerator() {
    const [role, setRole] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        password: '',
        confirmPassword: '',
        address: '',
        aadhaar: '',
        employeeId: '',
        department: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        try {
            console.log('Submitting data:', formData, role);  // Debugging log
            const response = await axios.post('http://localhost:5000/api/v1/register', { ...formData, role });
            console.log('Response data:', response.data);  // Debugging log
            setMessage("Registration successful");
        } catch (error) {
            console.error('Error response:', error.response);  // Detailed error logging
            if (error.response && error.response.data) {
                setMessage("Registration failed: " + error.response.data.message);
            } else {
                setMessage("Registration failed: An unexpected error occurred");
            }
        }
    };

    return (
        <div id="abc">
            <div className='containerr'>
                <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                    {props => (
                        <animated.div style={props}>
                            <h1>Register</h1>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicFirstName">
                                    <div className='inputBox'>
                                        <Form.Control 
                                            className='input' 
                                            type="text" 
                                            placeholder="Enter first name"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                        <i className="fa-solid fa-user"></i>
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicLastName">
                                    <div className='inputBox'>
                                        <Form.Control 
                                            className='input' 
                                            type="text" 
                                            placeholder="Enter last name"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                        <i className="fa-solid fa-user"></i>
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <div className='inputBox'>
                                        <Form.Control 
                                            className='input' 
                                            type="email" 
                                            placeholder="Enter email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPhone">
                                    <div className='inputBox'>
                                        <Form.Control 
                                            className='input' 
                                            type="text" 
                                            placeholder="Enter phone number"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCity">
                                    <div className='inputBox'>
                                        <Form.Control 
                                            className='input' 
                                            type="text" 
                                            placeholder="Enter city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                        />
                                        <i className="fa-solid fa-city"></i>
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <div className='inputBox'>
                                        <Form.Control 
                                            className='input' 
                                            type="password" 
                                            placeholder="Enter password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        <i className="fa-solid fa-lock"></i>
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                    <div className='inputBox'>
                                        <Form.Control 
                                            className='input' 
                                            type="password" 
                                            placeholder="Confirm password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                        />
                                        <i className="fa-solid fa-lock"></i>
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Select role</Form.Label>
                                    <Form.Check 
                                        type="radio" 
                                        label="User" 
                                        name="role" 
                                        onChange={() => setRole('User')}
                                    />
                                    <Form.Check 
                                        type="radio" 
                                        label="Employee" 
                                        name="role" 
                                        onChange={() => setRole('Employee')}
                                    />
                                </Form.Group>

                                {role === 'User' && (
                                    <>
                                        <Form.Group className="mb-3" controlId="formBasicAddress">
                                            <div className='inputBox'>
                                                <Form.Control 
                                                    className='input' 
                                                    type="text" 
                                                    placeholder="Enter address"
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                />
                                                <i className="fa-solid fa-location-dot"></i>
                                            </div>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicAadhaar">
                                            <div className='inputBox'>
                                                <Form.Control 
                                                    className='input' 
                                                    type="text" 
                                                    placeholder="Enter Aadhaar number"
                                                    name="aadhaar"
                                                    value={formData.aadhaar}
                                                    onChange={handleChange}
                                                />
                                                <i className="fa-solid fa-id-card"></i>
                                            </div>
                                        </Form.Group>
                                    </>
                                )}

                                {role === 'Employee' && (
                                    <>
                                        <Form.Group className="mb-3" controlId="formBasicEmployeeId">
                                            <div className='inputBox'>
                                                <Form.Control 
                                                    className='input' 
                                                    type="text" 
                                                    placeholder="Enter employee ID"
                                                    name="employeeId"
                                                    value={formData.employeeId}
                                                    onChange={handleChange}
                                                />
                                                <i className="fa-solid fa-id-card-alt"></i>
                                            </div>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicDepartment">
                                            <div className='inputBox'>
                                                <Form.Control 
                                                    className='input' 
                                                    type="text" 
                                                    placeholder="Enter department"
                                                    name="department"
                                                    value={formData.department}
                                                    onChange={handleChange}
                                                />
                                                <i className="fa-solid fa-building"></i>
                                            </div>
                                        </Form.Group>
                                    </>
                                )}

                                <Button variant="primary" type="submit" className='submit'>
                                    Register
                                </Button>
                            </Form>
                            {message && <p>{message}</p>}
                        </animated.div>
                    )}
                </Spring>
            </div>
        </div>
    );
}

export default Noticegenerator;



