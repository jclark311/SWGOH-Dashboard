import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ImCross, ImCheckmark } from 'react-icons/im';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import Table from 'react-bootstrap/Table';

import Header from '../../containers/Header/Header.js';
import Overlay from '../../containers/Overlay/Overlay.js';
import NavBar from '../../containers/NavBar/NavBar.js';

const Events = () => {
  const squadsList = localStorage.getItem('squadsList');
  const squadsJSON = JSON.parse(squadsList);
  const playerRoster = localStorage.getItem('playerRoster');
  const rosterJSON = JSON.parse(playerRoster);

  return (
    <>
      <Container id="content">
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
          {
            squadsJSON.map((squad, index) => (
              <>
                <Row>
                  <Col>
                    <h2>{squad.events.name}</h2>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    {
                      squad.events.phase.map((phase, i) => (
                        phase.squads.map((s, sIndex) => (
                          <>
                            <div style={{"position":"sticky","top":"25px","zIndex":"2"}}>
                              <h3 style={{"backgroundColor": "#333", "color": "#FFF", "padding": "15px"}}>{phase.name}<br /><small style={{"color": "#777"}}>Requirements - 7 Star - Gear {s.gear ? s.gear : 8} - Level {s.level ? s.level : 80}</small></h3>
                            </div>

                            <div key={sIndex} className="tablestart notmainteam">
                                {s.note && <h4> - <small>{s.note}</small></h4>}
                                <p><a href={s.panic}>panic farm</a></p>
                                <Table className="table table-striped table-bordered">
                                  <thead>
                                    <tr>
                                      <th width="30%">Name</th>
                                      <th width="28%">Zetas</th>
                                      <th width="8%">⭐</th>
                                      <th width="8%">G</th>
                                      <th width="8%">L</th>
                                      <th width="8%">Ready?</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                      s.team.map((toon, tIndex) => (
                                        rosterJSON.map((r) => (
                                          r.defId === toon ?

                                            <tr key={tIndex} className={toon}>
                                              <td className="toonnamecolumn">{r.nameKey}</td>
                                              <td style={{"padding":"0px"}} className="default">
                                                <table>
                                                    {
                                                      r.skills.map((skill) => (
                                                          skill.isZeta === true ? <tr><td>{skill.nameKey}</td></tr> : ''
                                                      ))
                                                    }
                                                </table>
                                              </td>
                                              <td className={`rarity ${r.rarity === 7 ? 'success' : 'danger'}`} >{r.rarity}</td>
                                              <td className={r.gear >= s.gear || r.gear >= 8 ? 'success' : 'danger'}>{r.gear}</td>
                                              <td className={r.level >= s.level || r.level >= 80 ? "success" : 'danger'}>{r.level}</td>
                                              <td className={
                                                `completeunit
                                                ${r.rarity === 7 &&
                                                  r.gear >= s.gear || r.gear >= 8 &&
                                                  r.level >= s.level || r.level >= 80 ?
                                                  'success' :
                                                  'danger'}
                                                  `
                                                }>
                                                  {r.rarity === 7 && r.gear >= s.gear && r.level >= s.level ?
                                                    <ImCheckmark /> :
                                                    <ImCross />
                                                  }
                                              </td>
                                            </tr> : ''
                                        ))
                                      ))
                                    }
                                  </tbody>
                                </Table>
                            </div>
                          </>
                        ))
                      ))
                    }
                  </Col>
                </Row>
              </>
            ))
          }
        <Row>
          <Col>
            <Button type="button" id="clearlocal" variant="primary">Clear localStorage</Button>
          </Col>
        </Row>
      </Container>
    </>
  );


}

export default Events;
