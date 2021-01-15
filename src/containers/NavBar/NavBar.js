import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

/** Nav tabs - THIS LIST SHOULD CONTAIN ALL THE PRIMARY KEYS FROM squads.json - Auto-activate Sith tab */
const NavBar = ({  }) => {
  const [open, setOpen] = useState(false);

  return (
    <Nav justify variant="tabs" defaultActiveKey="psummary">
      <Nav.Item>
        <Nav.Link href="#psummary" onClick={setOpen(!open)} eventKey="psummary">Player Overview</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#events" onClick={setOpen(!open)} eventKey="events">Events</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#rancor" onClick={setOpen(!open)} aria-controls="rancor" eventKey="rancor">Heroic Rancor</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#aat" onClick={setOpen(!open)} aria-controls="aat" eventKey="aat">Normal Tank</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#haat" onClick={setOpen(!open)} aria-controls="haat" eventKey="haat">Heroic Tank</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#sith" onClick={setOpen(!open)} aria-controls="sith" eventKey="sith">Sith raid</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#twdefense" onClick={setOpen(!open)} eventKey="twdefense">Player Overview</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#lstb" onClick={setOpen(!open)} aria-controls="lstb" eventKey="lstb">Hoth LSTB</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#dtsb" onClick={setOpen(!open)} aria-controls="dtsb" eventKey="dstb">Hoth DSTB</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#geonosistbds" onClick={setOpen(!open)} aria-controls="geonosistbds" eventKey="geonosistbds">Geonosis DSTB</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#geonosistbls" onClick={setOpen(!open)} aria-controls="geonosistbls" eventKey="geonosistbls">Geonosis LSTB</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#gsummary" onClick={setOpen(!open)} eventKey="gsummary">Guild Overview</Nav.Link>
      </Nav.Item>
    </Nav>
  )

}

export default NavBar;
