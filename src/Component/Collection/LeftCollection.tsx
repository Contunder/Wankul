import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import RarityCollectionForm from "../../Form/Collection/RarityCollectionForm";

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
                    <RarityCollectionForm />
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default LeftCollection;