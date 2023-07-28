import Card from 'react-bootstrap/Card';
import Saison1 from "./Card/Saison1";

function RightCard() {
    return (
        <Card>
            <Card.Body>
                <Card.Title className="mb-4 fs-2">Wankul Deck Saison 1</Card.Title>
                <Card.Text>
                    <Saison1 />
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default RightCard;