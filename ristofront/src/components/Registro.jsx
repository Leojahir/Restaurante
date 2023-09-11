import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'



export const Registro = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "40vh" }}>
            <Card className="w-25">
                <Card.Body>
                <Card.Title className="mb-4">Registro</Card.Title>

                    <Form onSubmit={register}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingrese su Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mb-3">
                            Sign In
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Registro;