import React, {useState} from 'react';
import {Form, Button, Container, Alert, Modal, Card} from 'react-bootstrap';
import {login} from "../../Service/auth.service";


const LoginForm = () => {

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const [enteredEmail, setEmail] = useState('');
    const [enteredPassword, setPassword] = useState('');


    const emailChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(event.target.value);
    };

    const passwordChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
    };


    const submitHandler = () => {
        login(enteredEmail, enteredPassword).then(
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setLoading(false);
                setMessage(resMessage);
            },
            () => {
                setShow(false);
                window.location.reload();
            }
        );
    };

    return (
        <div className="modal show" style={{display: 'block', position: 'initial'}}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Connection</Modal.Title>
                </Modal.Header>
                <Form onSubmit={submitHandler}>
                    <Modal.Body>
                        <Form.Group controlId="form.id">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={enteredEmail} onChange={emailChangeHandler}
                                          placeholder="Email"
                                          required/>
                        </Form.Group>
                        <Form.Group controlId="form.Name">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" value={enteredPassword} onChange={passwordChangeHandler}
                                          placeholder="Mot de passe" required/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="login" type="submit" disabled={loading}>
                            Se Connecter
                        </Button>
                        {message && (
                            <div className="mt-4">
                                <div className="bg-red-100 border border-red-400 text-red-700">
                                    {message}
                                </div>
                            </div>
                        )}
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}
export default LoginForm;