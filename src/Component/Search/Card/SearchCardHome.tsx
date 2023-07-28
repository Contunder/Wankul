import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import LeftCard from "../../LeftCard";
import SearchCardRarity from "./SearchCardRarity";
import WankulHeader from "../../WankulHeader";

function SearchCardHome() {

    const queryParameters = new URLSearchParams(window.location.search);
    let rarity = queryParameters.get("rarity");

    return (
        <>
            <WankulHeader/>
            <Container className="w-100">
                <Row>
                    <Col xxl={3}><LeftCard/></Col>
                    {rarity && (
                        <Col xxl={9}>
                            <SearchCardRarity rarity={rarity}/>
                        </Col>
                    )}

                </Row>
            </Container>
        </>
    );
}

export default SearchCardHome;