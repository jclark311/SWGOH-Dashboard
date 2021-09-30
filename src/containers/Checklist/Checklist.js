import React, { useState, useEffect } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { ImCross, ImCheckmark } from 'react-icons/im';
import Jumbotron from 'react-bootstrap/Jumbotron';
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

import './Checklist.css';

const BreadCrumb = () => {
  return (
    <>
      <ol className="breadcrumb">
        <li><a href="/p/388591888/">Erlkönig</a></li>
        <li className="active">Events Checklist</li>
      </ol>
    </>
  );
}

const Checklist = ({ }) => {
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
                          <div className="checklist-container">

                            <li className="media list-group-item">
                              <h4>Aggressive Negotiations - Padme<span className="check">✔</span></h4>
                              <p className="description">Requires: Gear 10, Level 85, 5*</p>
                              <p>Recommended: Gear 12, Level 85, 7*</p>
                              <div className="row">
                                <div className="col-md-7">
                                  <div className="btn-group pull-left">
                                    <a className="btn btn-default " data-toggle="collapse">
                                      <span className="icon"></span>
                                      <span className="hidden-xs">Recommended</span>
                                    </a>
                                    <a className="btn btn-default active" data-toggle="collapse">
                                      <span className="icon"></span>
                                      <span>Required</span>
                                    </a>
                                  </div>
                                </div>
                                <div className="pull-right total-display">Passing Units: <span>12 / 5</span></div>
                              </div>
                            </li>

                            <li className="media list-group-item">
                              <div className="row">
                                <Table className="ReactTable checklist-container__table -striped -highlight">
                                  <thead className="rt-thead -header" style={{"min-width": "500px"}}>
                                    <tr className="rt-tr" role="row">
                                        <th className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer" style={{"flex": "100 0 auto", "width": "100px"}}>
                                          Name
                                        </th>
                                        <th className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer" style={{"flex": "100 0 auto", "width": "100px"}}>Rarity</th>
                                        <th className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer" style={{"flex": "100 0 auto", "width": "100px"}}>
                                          Gear Level
                                        </th>
                                        <th className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                                          Level
                                        </th>
                                        <th className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                                          Ready
                                        </th>
                                    </tr>
                                  </thead>
                                  <tbody className="rt-tbody" style={{"min-width": "500px"}}>
                                    <tr className="rt-tr -odd" role="row">
                                        <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Asajj Ventress</td>
                                        <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                          7
                                        </td>
                                        <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                          13
                                        </td>
                                        <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                          85
                                        </td>
                                        <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                          Yes
                                        </td>
                                    </tr>
                                    <tr className="rt-tr -even" role="row">
                                        <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>B1 Battle Droid</td>
                                        <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                          7
                                        </td>
                                        <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                          13
                                        </td>
                                        <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                          85
                                        </td>
                                        <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                          Yes
                                        </td>
                                    </tr>
                                    <tr className="rt-tr -odd" role="row">
                                        <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>B2 Super Battle Droid</td>
                                        <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                          7
                                        </td>
                                        <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                          13
                                        </td>
                                        <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                          85
                                        </td>
                                        <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                          Yes
                                        </td>
                                    </tr>
                                    <tr className="rt-tr -even" role="row">
                                        <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Count Dooku</td>
                                        <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                          7
                                        </td>
                                        <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                          11
                                        </td>
                                        <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                          85
                                        </td>
                                        <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                          Yes
                                        </td>
                                    </tr>
                                    <tr className="rt-tr -odd" role="row">
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Droideka</td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        7
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        13
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        85
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        Yes
                                      </td>
                                    </tr>
                                    <tr className="rt-tr -even" role="row">
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>General Grievous</td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        7
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        13
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        85
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        Yes
                                      </td>
                                    </tr>
                                    <tr className="rt-tr -odd" role="row">
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Geonosian Soldier</td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        7
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        11
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        85
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        Yes
                                      </td>
                                    </tr>
                                    <tr className="rt-tr -even" role="row">
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Geonosian Spy</td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        7
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        11
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        85
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        Yes
                                      </td>
                                    </tr>
                                    <tr className="rt-tr -odd" role="row">
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>IG-100 MagnaGuard</td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        7
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        13
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        85
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        Yes
                                      </td>
                                    </tr>
                                    <tr className="rt-tr -even" role="row">
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Nute Gunray</td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        7
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        11
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        85
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        Yes
                                      </td>
                                    </tr>
                                    <tr className="rt-tr -odd" role="row">
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Poggle the Lesser</td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        7
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        11
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        85
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        Yes
                                      </td>
                                    </tr>
                                    <tr className="rt-tr -even" role="row">
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Sun Fac</td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        7
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        8
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        85
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        No
                                      </td>
                                    </tr>
                                    <tr className="rt-tr -odd" role="row">
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Geonosian Brood Alpha</td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        7
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        9
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        85
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        No
                                      </td>
                                    </tr>
                                    <tr className="rt-tr -even" role="row">
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Jango Fett</td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        7
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        11
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        85
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        Yes
                                      </td>
                                    </tr>
                                    <tr className="rt-tr -odd" role="row">
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Wat Tambor</td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        N/A
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        N/A
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                        N/A
                                      </td>
                                      <td className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                      No
                                      </td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </div>
                            </li>

                          </div>



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
      </Container>
    </>
  );


}

export default withRouter(Checklist);
