import React from 'react';
import './Banner.css'
import Container from 'react-bootstrap/esm/Container';
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const Banner = () => {
    return (
        <div className='banner-img'>
            <div className="banner-overlay p-5">
                <Container>
                    <div className="banner-text p-5 text-center">
                        <h1 className='d-none d-md-block'>Best food waiting for your tummy. Order now.</h1>
                        <InputGroup className="mt-5 form-container mx-auto">
                            <FormControl
                                placeholder="Search your food"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                id='search-form'
                            />
                            <Button variant="danger" id="button-addon2">
                                Search
                            </Button>
                        </InputGroup>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Banner;