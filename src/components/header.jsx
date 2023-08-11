import React from 'react'
import { Nav } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Nav variant="underline" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/accueil">Accueil</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/hommes">Hommes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/femmes">Femmes</Nav.Link>
        </Nav.Item>
        </Nav>
        <Outlet/>
    </div>

  )
}

export default Header