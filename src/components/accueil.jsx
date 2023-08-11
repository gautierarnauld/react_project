import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import jsonData from '../service/data.json'
import Carte from './carte';

const Accueil = () => {

    return (
        <div>
            <Container>
                <Row>
                    {jsonData.map((item, index) => (
                        <Carte
                            index = {index}
                            item = {item}
                        />
                    ))}
                </Row>
            </Container>
        </div >
  )
}

export default Accueil