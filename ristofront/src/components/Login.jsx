import React, { useState, useContext } from "react";
import { AuthContext } from '../Auth';
import { auth, provider } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Alert, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'



const Login = () => {
    const { setCurrentUser } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    let navigate = useNavigate();


    const signIn = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        }
    };

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setCurrentUser(result.user);
                navigate('/');
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "40vh" }}>
            <Card className="w-10 mx-auto">
                <Card.Body>
                    <Card.Title className="mb-4">Iniciar sesión</Card.Title>

                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mb-3">
                            Iniciar sesión
                        </Button>

                        <Button variant="danger" className="mb-3 w-100" onClick={signInWithGoogle}>
                            <FontAwesomeIcon icon={faGoogle} className="me-2" />
                            Iniciar sesión con Google
                        </Button>

                        <div className="text-center">
                            <Link to="/registro">¿No tienes una cuenta? Regístrate aquí.</Link>
                        </div>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;
