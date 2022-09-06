import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
                <h1>Breaking News</h1>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
  );
};

export default Header;