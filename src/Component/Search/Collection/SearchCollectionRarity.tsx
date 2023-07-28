// @ts-ignore

import React, {useEffect} from "react";
import CardListType from "../../../Type/card.type";
import CollectionListType from "../../../Type/collection.type";
import {getCurrentUser} from "../../../Service/auth.service";
import {addMyCollection, getMyCollection, removeMyCollection} from "../../../Service/collection.service";
import {getCollectionByRarity} from "../../../Service/search.service";
import Card from "react-bootstrap/Card";

// @ts-ignore
function SearchCollectionRarity({rarity}) {

    const queryParameters = new URLSearchParams(window.location.search);
    let [cards, setCards] = React.useState<CardListType>();
    let [collections, setCollections] = React.useState<CollectionListType>();
    let pageNumber = queryParameters.get("page");

    useEffect(() => {
        if (pageNumber) {
            handleGetCollections().then(r => setCollections);
        } else if (getCurrentUser()) {
            handleGetCollections().then(r => setCards);
        }
        pageNumber = '0';
        handleGetCollections().then(r => setCards);

    }, []);

    const handleGetCollections = React.useCallback(async () => {
        try {
            setCollections(await getCollectionByRarity(rarity))
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
                    <Card.Title className="mb-4 fs-2">Ma Collection Saison 1 - Rareté : {rarity}</Card.Title>
                    <Card.Text>
                        <div className="row row-cols-xl-3">
                            {getCurrentUser() && collections && collections.collections?.map((collection) => (
                                <>
                                    <div className="img-holder col mb-4">
                                        <img className="w-100 rounded" src={"../Saison1/Wankul_" + collection.cardNumber + ".webp"}
                                             alt={collection.name + " " + collection.effigy}/>

                                        <button type="button" className="btn btn-success btn-sm"
                                                onClick={() => addToMyCollection(collection.cardNumber)}
                                                onClickCapture={() => collection.numberOfCard + 1}>+
                                        </button>


                                        <button type="button" className="btn btn-warning btn-sm"
                                                onClick={() => removeToMyCollection(collection.cardNumber)}
                                                onClickCapture={() => collection.numberOfCard - 1}><b> - </b></button>
                                        <button type="button" className="btn btn-light btn-sm">{collection.numberOfCard}</button>
                                        <button type="button" className="btn btn-secondary btn-sm">{collection.cardNumber}</button>
                                    </div>
                                </>
                            ))}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );

}

export default SearchCollectionRarity;

