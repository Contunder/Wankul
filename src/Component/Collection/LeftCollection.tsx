import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import RaretyCardForm from "../../Form/Card/RarityCardForm";
import ArtistCardForm from "../../Form/Card/ArtistForm";
import EffigyCardForm from "../../Form/Card/EffigyForm";

function LeftCollection() {
    return (
        <Card>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Recherche</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>Trier les cartes</Card.Title>
                <Card.Text>
                    <RaretyCardForm />
                    <ArtistCardForm />
                    <EffigyCardForm />
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default LeftCollection;