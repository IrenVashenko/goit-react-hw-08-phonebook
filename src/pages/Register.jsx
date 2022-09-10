import { useState } from "react"
import { useDispatch } from "react-redux";
import { authOperations } from '../redux/auth';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
}
from 'mdb-react-ui-kit';

export default function Register() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

      const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
  };

    return(
        <MDBContainer fluid>

        <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>

         <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-200px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
                <MDBCardBody className='p-5 text-center' >
                    <h2 className="fw-bold mb-5">Sign up now</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" className="mb-3-input" placeholder="Your name" name="name" value={name}onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" className="mb-3-input" placeholder="Enter email" name="email" value={email} onChange={handleChange}/>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleChange}/>
                        </Form.Group>
                        <Button className='w-100 mb-4' variant="primary" type="submit">Sing in</Button>
                    </Form>
                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    )
}