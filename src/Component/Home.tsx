import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import WankulHeader from "./WankulHeader";

function Home() {
    return (
        <>
            <WankulHeader/>
            <Container className="w-100">
                <Row>
                    <Col xxl={3}><LeftCard/></Col>
                    <Col xxl={9}><RightCard/></Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;