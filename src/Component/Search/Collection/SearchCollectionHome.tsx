import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import SearchCollectionRarity from "./SearchCollectionRarity";
import LeftCollection from "../../Collection/LeftCollection";
import WankulHeader from "../../WankulHeader";
import SearchCollectionUser from "./SearchCollectionUser";

function SearchCollectionHome() {

    const queryParameters = new URLSearchParams(window.location.search);
    let user = queryParameters.get("user");
    let rarity = queryParameters.get("rarity");

    return (
        <>
            <WankulHeader/>
            <Container className="w-100">
                <Row>
                    {user && (

                            <SearchCollectionUser user={user}/>

                    )}
                    {rarity && (
                        <>
                            <Col xxl={3}><LeftCollection/></Col>
                            <Col xxl={9}><SearchCollectionRarity rarity={rarity}/></Col>
                        </>
                    )}

                </Row>
            </Container>
        </>
    );
}

export default SearchCollectionHome;