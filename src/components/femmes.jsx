import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carte from './carte';
import jsonData from '../service/data.json'

const Femmes = () => {
    const isFemmesOrMixte = (item) => {
        if (item.category === 'f' || item.category === 'mixe') {
            return true
        }
        return false
    }
    const catalogueFemmes = jsonData.filter(isFemmesOrMixte)

    return (
        <div>
            <Container>
                <Row>
                    {catalogueFemmes.map((item, index) => (
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

export default Femmes