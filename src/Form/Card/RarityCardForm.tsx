import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {getAllCardByRarity} from "../../Service/card.service";
import CardListType from "../../Type/card.type";

const RarityCardForm = () => {

    const navigate = useNavigate();
    let [cards, setCards] = React.useState<CardListType>();
    const [enteredRarity, setRarity] = useState('');

    const rarityChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        
        setRarity(event.target.value);
        handleGetCardsByRarity();
        navigate("/?rarity="+event.target.value);
    };

    const handleGetCardsByRarity = React.useCallback(async () => {
        try {
            setCards(await getAllCardByRarity(enteredRarity))
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
                <Form>
                    <Form.Select aria-label="Rarety" className="mt-4" value={enteredRarity} onChange={rarityChangeHandler}>
                        <option>Trier Par Rareté</option>
                        <option value="Terrain">Terrain</option>
                        <option value="Commune">Commune</option>
                        <option value="Peu Commune">Peu Commune</option>
                        <option value="Rare">Rare</option>
                        <option value="Ultra Rare Holo 1">Ultra Rare Holo 1</option>
                        <option value="Ultra Rare Holo 2">Ultra Rare Holo 2</option>
                        <option value="Legendaire Bronze">Legendaire Bronze</option>
                        <option value="Legendaire Argent">Legendaire Argent</option>
                        <option value="Legendaire Or">Légendaire Or</option>
                    </Form.Select>
                </Form>
    );
}
export default RarityCardForm;
