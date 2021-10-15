import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'


const Login = () => {

    return (
        <div className="login p-5">
            <h2 className='text-center text-primary'>Enter login info</h2>
            <Container className=''>
                <form className='mx-auto w-75'>
                    <input className='form-control' type="email" placeholder='Enter your email' />
                    <br />
                    <input className='form-control' type="email" placeholder='Enter your email' />
                    <br />
                    <input type="submit" value="Submit" className='btn btn-success' />
                </form>
                <div className="d-flex justify-content-center align-items-center">
                    <Button className='mx-1' variant='danger'>
                        <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                    </Button>
                    <Button className='mx-1' variant='primary'>
                        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </Button>
                    <Button className='mx-1' variant='secondary'>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default Login;