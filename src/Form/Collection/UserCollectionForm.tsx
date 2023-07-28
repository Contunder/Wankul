import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UserCollectionForm = () => {

    const navigate = useNavigate();
    const [enteredUser, setUser] = useState('');

    const submitHandler = () => {
        navigate("/Search/Collection?user=" + enteredUser);
    };

    const userChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setUser(event.target.value);
    };

    return (
        <div className="mb-3">
            <Form onSubmit={submitHandler}>
                    <Form.Group controlId="form.id">
                        <Form.Label>Utilisateur :</Form.Label>
                        <Form.Control type="text" value={enteredUser} onChange={userChangeHandler}
                                      placeholder="Pseudo"
                                      required/>
                    </Form.Group>
                </Form>
        </div>
    );
}
export default UserCollectionForm;
