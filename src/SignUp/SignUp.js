import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import logo from '../../src/images/logo2.png'


const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { createUser } = useAuth();

    const handleEmailInput = e => {

        setEmail(e.target.value);
    }

    const handlePassInput = e => {

        setPassword(e.target.value)
    }

    const handleSignUp = () => {

        createUser(email, password)
    }

    return (
        <Container className='p-5'>
            <div className="d-flex justify-content-center">
            <div className="login-page-logo w-25 my-3">
                <img className='img-fluid' src={logo} alt="" />
            </div>
            </div>
            <form className='p-5'>
                <h5 className='text-primary text-center'>Please Enter information</h5>
                <input onBlur={handleEmailInput} type="email" className='form-control my-3' placeholder='Enter email' required />
                <input onBlur={handlePassInput} type="password" className='form-control my-3' placeholder='Enter password' required />
                <Button onClick={handleSignUp} variant='info'>Sign Up</Button>
                <p>Already have an account? <Link to='/login'>Log in</Link></p>
            </form>
        </Container>
    );
};

export default SignUp;