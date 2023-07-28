import React, {useEffect} from "react";
import {addMyCollection, getMyCollection, removeMyCollection} from "../../Service/collection.service";
import CollectionListType from "../../Type/collection.type";
import {getCurrentUser} from "../../Service/auth.service";

let Collection: React.FC = () => {

    const queryParameters = new URLSearchParams(window.location.search);
    let [collections, setCollections] = React.useState<CollectionListType>();
    let pageNumber = queryParameters.get("page");

    useEffect(() => {
        if (pageNumber) {
            handleGetCollections().then(r => setCollections);
        }
        pageNumber = '0';
        handleGetCollections().then(r => setCollections);

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
            <div className="row row-cols-xl-3">
                {getCurrentUser() && collections && collections.collections?.map((collection) => (
                    <>
                    <div className="img-holder col mb-4">
                        <img className="w-100 rounded" src={"Saison1/Wankul_" + collection.cardNumber + ".webp"}
                             alt={collection.name + " " + collection.effigy}/>

                        <button type="button" className="btn btn-success btn-sm"
                                onClick={() => addToMyCollection(collection.cardNumber)}
                                onClickCapture={() => collection.numberOfCard + 1}>+
                        </button>


                        <button type="button" className="btn btn-warning btn-sm"
                                onClick={() => removeToMyCollection(collection.cardNumber)}
                                onClickCapture={() => collection.numberOfCard - 1}><b> - </b></button>
                        <button type="button" className="btn btn-light btn-sm">{collection.numberOfCard}</button>
                    </div>
                    </>
                ))}
            </div>
        </>
    );

}

export default Collection;