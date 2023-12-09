import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';

function Login() {

    let navigate = useNavigate();
    const [error, setError] = useState();
    const emailRef = useRef();
    const passwordRef = useRef();

    function submitHandler(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((credentials) => {
                console.log(credentials);
                navigate("/");
            })
            .catch((error) => {
                setError(error.message)
            });
    }


    return (
        <div className='container' style={{maxWidth: "500px"}}>
            <Card>
                <Card.Body>
                <Card.Header>
                    {error ? <Alert variant="danger">{error}</Alert> : ""}
                </Card.Header>
                <Form onSubmit={submitHandler}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required />
                        </Form.Group>
                        <Button type="submit" className='mt-4 w-100'> Log In </Button>
                </Form> 
                <Card.Footer className='text-center'>
                        Don't Have Account? <NavLink to="/signup"> Sign Up</NavLink>
                </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login
