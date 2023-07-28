import Card from 'react-bootstrap/Card';
import Collection from "./Collection";


function RightCollection() {
    return (
        <Card>
            <Card.Body>
                <Card.Title className="mb-4 fs-2">Ma Collection Saison 1</Card.Title>
                <Card.Text>
                    <Collection />
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default RightCollection;