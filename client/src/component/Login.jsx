import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', formData);
            console.log('Login successful', response.data);
            // Assuming JWT token is received in response.data.token
            localStorage.setItem('token', response.data.token);
            navigate('/');
        } catch (error) {
            console.error('Error logging in', error);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Heading>LOGIN</Heading>
                <Input
                    type="email"
                    name="email"
                    placeholder="E-mail address"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <SubmitButton type="submit">SUBMIT</SubmitButton>
            </Form>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url('/path-to-background.jpg') no-repeat center center/cover;
`;

const Form = styled.form`
    background-color: rgba(128, 0, 128, 0.8);
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Heading = styled.h2`
    color: #fff;
    margin-bottom: 20px;
    font-size: 24px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
`;

const SubmitButton = styled.button`
    background-color: #fff;
    color: rgba(128, 0, 128, 0.8);
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
`;

export default Login;
