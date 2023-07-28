import React from "react";
import CollectionType from "../../Type/collection.type";
import {getCurrentUser} from "../../Service/auth.service";
import {addMyCollection, getMyCollection, removeMyCollection} from "../../Service/collection.service";
import CollectionListType from "../../Type/collection.type";

function CardView(cardNumber: number, collections: CollectionType) {

    let [collectionsList, setcollections] = React.useState<CollectionListType>(collections);

    function addToMyCollection(cardNumber: number){
        const response = addMyCollection(cardNumber);
        handleGetCollections().then(r => collectionsList);
    }

    function removeToMyCollection(cardNumber: number){
        const response = removeMyCollection(cardNumber);
        handleGetCollections().then(() => collectionsList);
    }

    const handleGetCollections = React.useCallback(async () => {
        try {
            setcollections(await getMyCollection())
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <>
            {getCurrentUser() && collectionsList && collectionsList.collections?.map((collection) => (
                <>
                    <button type="button" className="btn btn-success btn-sm"
                            onClick={() => addToMyCollection(cardNumber)}>+
                    </button>
                    {cardNumber == collection.cardNumber && (
                        <>
                            <button type="button" className="btn btn-warning btn-sm"
                                    onClick={() => removeToMyCollection(cardNumber)}><b> - </b></button>
                            <button type="button" className="btn btn-light btn-sm">{collection.numberOfCard}</button>
                        </>
                    )}
                </>
            ))}
        </>

    );
}

export default CardView;