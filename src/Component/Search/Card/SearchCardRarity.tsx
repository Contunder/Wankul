import React, {useEffect} from "react";
import CardListType from "../../../Type/card.type";
import CollectionListType from "../../../Type/collection.type";
import {getCurrentUser} from "../../../Service/auth.service";
import {addMyCollection, getMyCollection, removeMyCollection} from "../../../Service/collection.service";
import {getCardByRarity} from "../../../Service/search.service";
import Card from "react-bootstrap/Card";


// @ts-ignore
function SearchCardRarity({rarity}) {

    const queryParameters = new URLSearchParams(window.location.search);
    let [cards, setCards] = React.useState<CardListType>();
    let [collections, setCollections] = React.useState<CollectionListType>();
    let pageNumber = queryParameters.get("page");

    useEffect(() => {
        if (pageNumber) {
            handleGetCards().then(r => setCollections);
        } else if (getCurrentUser()) {
            handleGetCollections().then(r => setCards);
        }
        pageNumber = '0';
        handleGetCards().then(r => setCards);

    }, []);

    const handleGetCards = React.useCallback(async () => {
        try {
            setCards(await getCardByRarity(rarity))
        } catch (error) {
            console.error(error);
        }
    }, []);

    const handleGetCollections = React.useCallback(async () => {
        try {
            setCollections(await getMyCollection())
        } catch (error) {
            console.error(error);
        }
    }, []);

    async function addToMyCollection(cardNumber: number) {
        await addMyCollection(cardNumber);
        await handleGetCollections();
    }

    async function removeToMyCollection(cardNumber: number) {
        await removeMyCollection(cardNumber);
        await handleGetCollections();
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title className="mb-4 fs-2">Wankul Deck Saison 1 - Rareté : {rarity}</Card.Title>
                    <Card.Text>
                        <div className="row row-cols-xl-3">
                            {cards && cards.cards?.map((card) => (
                                <div className="img-holder col mb-4">
                                    <img className="w-100 rounded"
                                         src={"../Saison1/Wankul_" + card.cardNumber + ".webp"}
                                         alt={card.name + " " + card.effigy}/>
                                    {getCurrentUser() && collections && collections.collections?.map((collection) => (
                                        <>
                                            <button type="button" className="btn btn-success btn-sm"
                                                    onClick={() => addToMyCollection(card.cardNumber)}
                                                    onClickCapture={() => collection.numberOfCard + 1}>+
                                            </button>
                                            {card.cardNumber == collection.cardNumber && (
                                                <>
                                                    <button type="button" className="btn btn-warning btn-sm"
                                                            onClick={() => removeToMyCollection(card.cardNumber)}
                                                            onClickCapture={() => collection.numberOfCard - 1}>
                                                        <b> - </b></button>
                                                    <button type="button"
                                                            className="btn btn-light btn-sm">{collection.numberOfCard}</button>
                                                </>
                                            )}
                                        </>
                                    ))}
                                    <button type="button"
                                            className="btn btn-secondary btn-sm">{card.cardNumber}</button>
                                </div>
                            ))}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );

}

export default SearchCardRarity;

