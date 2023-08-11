import React from 'react'
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

const Carte = (props) => {
  return (
    <Col xs={4} key={props.index}>
        <Card className='accueil-card'>
            <Card.Img 
                className='accueil-card-img'
                variant="top" 
                src={props.item.picture[0].pic1} 
            />
            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>
                <Card.Text>{props.item.category}</Card.Text>
                <Button variant="primary">Voir</Button>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default Carte