import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Header from '../../containers/Header/Header.js';
import NavBar from '../../containers/NavBar/NavBar.js';

import './PlayerProfile.css';

const PlayerProfile = () => {
  const playerArena = localStorage.getItem('playerArena')
  const playerArenaJSON = JSON.parse(playerArena)
  const charRank = playerArenaJSON.char.rank
  const charSquad = playerArenaJSON.char.squad
  const shipRank = playerArenaJSON.ship.rank
  const shipSquad = playerArenaJSON.ship.squad

  return (
    <>
      <Container id="content" className="playerProfile">
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>
        <Row id="player-grid">
          <Col>
            <section>
              <h4>Arena</h4>
              <div>
                <p>Rank: {charRank}</p>
                {
                  charSquad.map(char => (
                    <>
                      <div key={char.id}>
                        {char.defId}
                      </div>
                    </>
                  ))
                }
              </div>
            </section>
          </Col>
        </Row>
        <Row id="ship-grid">
          <Col>
            <section>
              <h4>Ship Arena</h4>
              <div>
                <p>Rank: {shipRank}</p>
                {
                  shipSquad.map(ship => (
                    <>
                      <div key={ship.id}>
                        {ship.defId}
                      </div>
                    </>
                  ))
                }
              </div>
            </section>
          </Col>
        </Row>

      </Container>
    </>
  );

}

export default PlayerProfile;
