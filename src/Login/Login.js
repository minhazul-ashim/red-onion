import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';


const Login = () => {

    const { googleSignIn, githubSignIn, facebookSignIn } = useAuth();

    return (
        <div className="login p-5">
            <h2 className='text-center text-primary'>Enter login info</h2>
            <Container className=''>
                <form className='mx-auto w-75'>
                    <input className='form-control' type="email" placeholder='Enter your email' />
                    <br />
                    <input className='form-control' type="email" placeholder='Enter your password' />
                    <br />
                    <input type="submit" value="Submit" className='btn btn-success' />
                </form>
                <div className="d-flex justify-content-center align-items-center">
                    <Button onClick={googleSignIn} className='mx-1' variant='danger'>
                        <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                    </Button>
                    <Button onClick={facebookSignIn} className='mx-1' variant='primary'>
                        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </Button>
                    <Button onClick={githubSignIn} className='mx-1' variant='secondary'>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </Button>
                </div>
                <p className='text-center mt-3'>New here? <Link to='/signup'>Register</Link> </p>
            </Container>
        </div>
    );
};

export default Login;