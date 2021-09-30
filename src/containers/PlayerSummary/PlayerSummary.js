import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

import Header from '../../containers/Header/Header.js';
import NavBar from '../../containers/NavBar/NavBar.js';

const PlayerSummary = () => {

  const squadsList = localStorage.getItem('squadsList');
  const squadsJSON = JSON.parse(squadsList);
  const eventPhases = []

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
        <Row>
          <Col>
            {
              eventPhases.map((phase, index) => (

                phase.map(p => (
                  <>
                    <Row>
                      <Col>
                        <h2>{p.name}</h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                          <div style={{"position":"-o-sticky","top":"25px","zIndex":"2"}}>
                            <h3>phase.name<br /><small>Requirements - phase.squads.level Star - Gear phase.squads.gear - Level squad.psummary.level</small></h3>
                          </div>

                          <div className="tablestart notmainteam">
                            <h4> - <small>You will need DR, JKR, and 4 of the 5 under each leader. Both squads will need 17,500 power per character.</small></h4>
                            <p><a href={phase.squads.map(s => s.panic)}>panic farm</a></p>
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
                                <tr className="JEDIKNIGHTREVAN">
                                  <td className="toonnamecolumn">toon</td>
                                  <td style={{"padding":"0px"}} className="default">
                                    <table className="table" />
                                  </td>
                                  <td className="success rarity">7</td>
                                  <td className="success">12</td>
                                  <td className="success">85</td>
                                  <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
                                </tr>
                                <tr className="BASTILASHAN">
                                  <td className="toonnamecolumn">Bastila Shan</td>
                                  <td style={{"padding":"0px"}} className="default">
                                    <table className="table" />
                                  </td>
                                  <td className="success rarity">7</td>
                                  <td className="success">11</td>
                                  <td className="success">85</td>
                                  <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
                                </tr>
                                <tr className="JOLEEBINDO">
                                  <td className="toonnamecolumn">Jolee Bindo</td>
                                  <td style={{"padding":"0px"}} className="default">
                                    <table className="table" />
                                  </td>
                                  <td className="success rarity">7</td>
                                  <td className="success">12</td>
                                  <td className="success">85</td>
                                  <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
                                </tr>
                                <tr className="T3_M4">
                                  <td className="toonnamecolumn">T3-M4</td>
                                  <td style={{"padding":"0px"}} className="default">
                                    <table className="table" />
                                  </td>
                                  <td className="success rarity">7</td>
                                  <td className="success">8</td>
                                  <td className="success">85</td>
                                  <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
                                </tr>
                                <tr className="MISSIONVAO">
                                  <td className="toonnamecolumn">Mission Vao</td>
                                  <td style={{"padding":"0px"}} className="default">
                                    <table className="table" />
                                  </td>
                                  <td className="success rarity">7</td>
                                  <td className="success">12</td>
                                  <td className="success">85</td>
                                  <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
                                </tr>
                                <tr className="ZAALBAR">
                                  <td className="toonnamecolumn">Zaalbar</td>
                                  <td style={{"padding":"0px"}} className="default">
                                    <table className="table" />
                                  </td>
                                  <td className="success rarity">7</td>
                                  <td className="success">12</td>
                                  <td className="success">85</td>
                                  <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
                                </tr>
                                <tr className="DARTHREVAN">
                                  <td className="toonnamecolumn">Darth Revan</td>
                                  <td style={{"padding":"0px"}} className="default">
                                    <table className="table" />
                                  </td>
                                  <td className="success rarity">7</td>
                                  <td className="success">13</td>
                                  <td className="success">85</td>
                                  <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
                                </tr>
                                <tr className="CARTHONASI">
                                  <td className="toonnamecolumn">Carth Onasi</td>
                                  <td style={{"padding":"0px"}} className="default">
                                    <table className="table" />
                                  </td>
                                  <td className="success rarity">7</td>
                                  <td className="success">11</td>
                                  <td className="success">85</td>
                                  <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
                                </tr>
                                <tr className="HK47">
                                  <td className="toonnamecolumn">HK-47</td>
                                  <td style={{"padding":"0px"}} className="default">
                                    <table className="table" />
                                  </td>
                                  <td className="success rarity">7</td>
                                  <td className="success">13</td>
                                  <td className="success">85</td>
                                  <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
                                </tr>
                                <tr className="JUHANI">
                                  <td className="toonnamecolumn">Juhani</td>
                                  <td style={{"padding":"0px"}} className="default">
                                    <table className="table" />
                                  </td>
                                  <td className="success rarity">7</td>
                                  <td className="success">12</td>
                                  <td className="success">85</td>
                                  <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
                                </tr>
                                <tr className="CANDEROUSORDO">
                                  <td className="toonnamecolumn">Canderous Ordo</td>
                                  <td style={{"padding":"0px"}} className="default">
                                    <table className="table" />
                                  </td>
                                  <td className="success rarity">7</td>
                                  <td className="success">11</td>
                                  <td className="success">85</td>
                                  <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
                                </tr>
                                <tr className="BASTILASHANDARK">
                                  <td className="toonnamecolumn">Bastila Shan (Fallen)</td>
                                  <td style={{"padding":"0px"}} className="default">
                                    <table className="table" />
                                  </td>
                                  <td className="success rarity">7</td>
                                  <td className="success">13</td>
                                  <td className="success">85</td>
                                  <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>

                      </Col>
                    </Row>
                  </>
                ))


              ))
            }
          </Col>
        </Row>

        <Row>
          <Col>
            {
              squadsJSON.map((unit) => (
                <>
                  <div className="col-xs-12">
                    <h2>{unit.psummary.name}</h2>
                  </div>

                  {unit.psummary.phase.map((p) => (
                    p.squads.map(s => (
                      <>
                        <div className="col-xs-12" style={{"position":"-o-sticky","top":"25px","zIndex":"2"}}>
                          <h3>{p.name}<br /><small>Requirements - {unit.psummary.rarity} Star - Gear {unit.psummary.gear} - Level {unit.psummary.level}</small></h3>
                        </div>

                        <div className="col tablestart notmainteam">
                          <Table responsive className="table table-striped table-bordered">
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
                              {p.squads.map((squad) => (
                                <tr className="GRANDADMIRALTHRAWN">
                                  {squad.team.map((toon) => (
                                    <td className="toonnamecolumn">{toon.split(":", 1)}</td>
                                  ))}

                                  <td style={{"padding":"0px"}} className="success">
                                    <table className="table">
                                      <tbody>
                                        <tr>
                                          <td className="danger leaderskill_GRANDADMIRALTHRAWN">Legendary Strategist</td>
                                        </tr>
                                        <tr>
                                          <td className="success uniqueskill_GRANDADMIRALTHRAWN01">Ebb and Flow</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td className="success rarity">7</td>
                                  <td className="success">12</td>
                                  <td className="success">85</td>
                                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </div>
                      </>
                    ))

                  ))}
                </>
              ))
            }
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(PlayerSummary);
