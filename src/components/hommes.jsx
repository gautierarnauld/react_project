import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carte from './carte';
import jsonData from '../service/data.json'

const Hommes = () => {

    const isHommesOrMixte = (item) => {
        if (item.category === 'h' || item.category === 'mixe') {
            return true
        }
        return false
    }
    const catalogueHommes = jsonData.filter(isHommesOrMixte)

    return (
        <div>
            <Container>
                <Row>
                    {catalogueHommes.map((item, index) => (
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

export default Hommes