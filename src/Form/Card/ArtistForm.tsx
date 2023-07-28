import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";

function ArtistCardForm() {

    const navigate = useNavigate();
    const [enteredArtist, setArtist] = useState('');

    const rarityChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setArtist(event.target.value);
        navigate("?artist="+event.target.value);
        window.location.reload();
    };

    return (
        <Form.Select aria-label="Artiste" className="mt-4" onChange={rarityChangeHandler}>
            <option>Trier Par Artiste</option>
            <option value="Terrain">Terrain</option>
            <option value="Commune">Commune</option>
            <option value="Peu Commune">Peu Commune</option>
            <option value="Rare">Rare</option>
            <option value="Ultra Rare Holo 1">Ultra Rare Holo 1</option>
            <option value="Ultra Rare Holo 2">Ultra Rare Holo 2</option>
            <option value="Legendaire Bronze">Legendaire Bronze</option>
            <option value="Legendaire Argent">Legendaire Argent</option>
            <option value="Légendaire Or">Légendaire Or</option>
        </Form.Select>
    );
}

export default ArtistCardForm;