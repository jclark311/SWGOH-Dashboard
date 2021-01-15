import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Header = ({ accessToken, gameVersion, onClick, playerName, galacticPower, guildName, hasError }) => {

  return (
    <Jumbotron>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <h1> Erlkonig's SWGOH Dashboard </h1>
            <p>
              Data dashboard that lists data pulled from SWGOH Help API.
            </p>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12} lg={12}>
            <p>Version: {gameVersion}</p>
            <br />

            <div>
              <span>Has error: {JSON.stringify(hasError)}</span>
              <div>
                <Button onClick={onClick}>Get Player Profile</Button>
              </div>
            </div>
          </Col>
        </Row>

    </Jumbotron>
  );
}

export default Header;
