import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import LeftCard from "../LeftCard";
import WankulHeader from "../WankulHeader";
import SearchCardView from "./SearchCardView";

function SearchCardHome() {
    return (
        <>
            <WankulHeader/>
            <Container className="w-100">
                <Row>
                    <Col xxl={3}><LeftCard/></Col>
                    <Col xxl={9}><SearchCardView/></Col>
                </Row>
            </Container>
        </>
    );
}

export default SearchCardHome;