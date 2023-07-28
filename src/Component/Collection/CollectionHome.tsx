import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import WankulHeader from "../WankulHeader";
import LeftCollection from "./LeftCollection";
import RightCollection from "./RightCollection";

function CollectionHome() {

    return (
        <>
            <WankulHeader/>
            <Container className="w-100">
                <Row>
                    <Col xxl={3}><LeftCollection /></Col>
                    <Col xxl={9}><RightCollection /></Col>
                </Row>
            </Container>
        </>
    );

}

export default CollectionHome;