// @ts-ignore

import React, {useEffect} from "react";
import CardListType from "../../../Type/card.type";
import CollectionListType from "../../../Type/collection.type";
import {getCurrentUser} from "../../../Service/auth.service";
import {addMyCollection, getMyCollection, removeMyCollection} from "../../../Service/collection.service";
import {getCollectionByRarity, getCollectionByUser} from "../../../Service/search.service";
import Card from "react-bootstrap/Card";

// @ts-ignore
function SearchCollectionUser({user}) {

    const queryParameters = new URLSearchParams(window.location.search);
    let [collections, setCollections] = React.useState<CollectionListType>();
    let pageNumber = queryParameters.get("page");

    useEffect(() => {
        if (pageNumber) {
            handleGetCollections().then(r => setCollections);
        } else if (getCurrentUser()) {
            handleGetCollections().then(r => setCollections);
        }
        pageNumber = '0';
        handleGetCollections().then(r => setCollections);

    }, []);

    const handleGetCollections = React.useCallback(async () => {
        try {
            setCollections(await getCollectionByUser(user))
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title className="mb-4 fs-2">Collection de {user} Saison 1</Card.Title>
                    <Card.Text>
                        <div className="row row-cols-xl-5">
                            {getCurrentUser() && collections && collections.collections?.map((collection) => (
                                <>
                                    <div className="img-holder col mb-4">
                                        <img className="w-100 rounded" src={"../Saison1/Wankul_" + collection.cardNumber + ".webp"}
                                             alt={collection.name + " " + collection.effigy}/>
                                        <button type="button" className="btn btn-light btn-sm search">{collection.numberOfCard}</button>
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

export default SearchCollectionUser;

