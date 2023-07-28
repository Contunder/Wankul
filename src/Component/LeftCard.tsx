import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import RarityCardForm from "../Form/Card/RarityCardForm";
import EffigyCardForm from "../Form/Card/EffigyForm";
import ArtistCardForm from "../Form/Card/ArtistForm";

function LeftCard() {
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
                    <RarityCardForm />
                    <ArtistCardForm />
                    <EffigyCardForm />
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default LeftCard;