import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import jsonData from '../service/data.json'
import Carte from './carte';

import { useDispatch, useSelector } from 'react-redux';

// ACTIONS
import * as ACTIONS from '../redux/reducers/articles'

import data from '../service/data.json'

const Accueil = () => {

    const dispatch = useDispatch()
    const articles = useSelector(state => state.baskets.data)
    console.log(articles)

    useEffect(() => {
        dispatch(ACTIONS.FETCH_START())
        dispatch(ACTIONS.FETCH_SUCCESS(data))
    },[])

    return (
        <div>
            <Container>
                <Row>
                    {articles && articles.map((item, index) => (
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