import React, { useRef, useState } from 'react'
import {Form, Card, Button, Alert} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import {auth} from "../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

function SignUp() {

    let usernameRef = useRef();
    let passwordRef = useRef();
    let confirmPasswordRef = useRef();
    let navigate = useNavigate();
    let [error, setError] = useState("");

    async function submitHandler(e) {
        e.preventDefault();
        const email = usernameRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if(password !== confirmPassword) {
            return setError("Password Did Not Match");
        }
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                console.log(userCredentials);
                navigate("/welcome")
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    return (
        <div className='container' style={{ maxWidth: "500px"}}>
            <h1 className='text-center mb-4'>SignUp</h1>
            <Card>
                <Card.Body>
                    {error ? <Alert variant="danger">{error}</Alert> : ""}
                    <Form onSubmit={submitHandler}>
                        <Form.Group id='username'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type='email' ref={usernameRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required />
                        </Form.Group>    
                        <Form.Group id='conf-password'> 
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='password' ref={confirmPasswordRef} required />
                        </Form.Group>
                        <Button type='submit' className='w-100 text-center mt-3'>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-4'>
                <p>Already Have an Account? <NavLink to="/login"> Log In </NavLink></p>
            </div>
        </div>
    )
}

export default SignUp
