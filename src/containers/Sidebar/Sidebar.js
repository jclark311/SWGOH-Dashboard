import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const stats = localStorage.getItem('playerStats');
const playerPortraits = localStorage.getItem('playerPortraits');

const Sidebar = ({ accessToken, gameVersion, onClick, playerName, galacticPower, guildName, hasError }) => {
  useEffect(() => {
    playerPortraits && console.log(`typeof playerPortraits: ${typeof JSON.parse(playerPortraits).selected}`)
  }, [])

  return (
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <aside>
            <p>Version: {gameVersion}</p>
            <p>Guild: {guildName}</p>
            {
              stats && JSON.parse(stats).map((stat, index) => (
                <p key={index}>{stat.nameKey} {stat.value}</p>
              ))
            }
            <br />
            {
              playerPortraits
              ? <div>
                  <h3>Player Portrait:</h3>
                  <p>{JSON.parse(playerPortraits).selected}</p>
                </div> : null
            }

          </aside>
        </Col>
      </Row>
    </Container>
  );
}

export default Sidebar;
