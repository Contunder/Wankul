import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import CardListSaison1 from "../../Component/Card/Saison1";

function EffigyCardForm() {

    const navigate = useNavigate();
    const [enteredEffigy, setEffigy] = useState('');

    const effigyChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEffigy(event.target.value);
        navigate("?effigy="+event.target.value);
    };

    return (
        <Form.Select aria-label="Effigie" className="mt-4" onChange={effigyChangeHandler}>
            <option>Trier Par Effigie</option>
            <option value="Terracid">Terracid</option>
            <option value="Laink">Laink</option>
            <option value="Guest">Guest</option>
            <option value="Random">Random</option>
        </Form.Select>
    );
}

export default EffigyCardForm;