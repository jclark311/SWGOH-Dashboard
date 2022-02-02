import React, {useState, useEffect} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import './Header.css'

const playerPortraits = localStorage.getItem('playerPortraits');

const Header = ({ onClick, playerName, galacticPower, guildName, hasError }) => {
  useEffect(() => {
    playerPortraits && console.log(`typeof playerPortraits: ${typeof JSON.parse(playerPortraits).selected}`)
  }, [])

  return (
    <div id="header">
      <Row>
        <Col xs={12} md={12} lg={12}>
          <h1> SWGOH Dashboard </h1>
          <p>
            Data dashboard that lists data pulled from SWGOH Help API.
          </p>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12} lg={12}>
          {
            playerPortraits
            ? <div>
                <h2>{playerName}</h2>
                <p>{JSON.parse(playerPortraits).selected}</p>
                <p>{guildName}</p>
              </div> : null
          }
        </Col>
      </Row>
    </div>
  );
}

export default Header;
