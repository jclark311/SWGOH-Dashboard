import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './TabPanel.css';

import TabRows from '../TabRows/TabRows';

const TabPanel = ({ panelId, name, timestamp, version, runtime, server, description, message, success, vitals : serviceItemData }) => {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="psummary" title="Player Overview">
        <h2>PLAYER SUMMARY</h2>
        {serviceItemData.map((serviceData, index) => (
  				<TabRows key={index} {...serviceData} />
  			))}
        <Row>
          <div className="col-xs-12" style={{position: 'sticky;', position: '-webkit-sticky;', position: '-moz-sticky;', position: '-ms-sticky;', position: '-o-sticky;', top:'25px;', zIndex: '2;'}}>
            <h3>LEGENDARY CHARACTERS <small>Requirements - 7 Star - Gear 12 - Level 85</small></h3>
          </div>
          <div className="col-xs-12"></div>
          <div className="col-md-6 tablestart notmainteam">
            <h4><small></small></h4>
            <table className="table table-striped table-bordered">
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
                <tr className="GRANDADMIRALTHRAWN">
                  <td className="toonnamecolumn">Grand Admiral Thrawn</td>
                  <td style={{padding: "0px;"}} className="success">
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
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="EMPERORPALPATINE">
                  <td className="toonnamecolumn">Emperor Palpatine</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success leaderskill_EMPERORPALPATINE">Emperor of the Galactic Empire</td>
                        </tr>
                        <tr>
                          <td className="success uniqueskill_EMPERORPALPATINE01">Crackling Doom</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="success">12</td>
                  <td className="success">85</td>
                  <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                </tr>
                <tr className="R2D2_LEGENDARY">
                  <td className="toonnamecolumn">R2-D2</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success uniqueskill_R2D2_LEGENDARY01">Combat Analysis</td>
                        </tr>
                        <tr>
                          <td className="success uniqueskill_R2D2_LEGENDARY02">Number Crunch</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="success">12</td>
                  <td className="success">85</td>
                  <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                </tr>
                <tr className="BB8">
                  <td className="toonnamecolumn">BB-8</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success uniqueskill_BB801">Roll with the Punches</td>
                        </tr>
                        <tr>
                          <td className="success uniqueskill_BB802">Self-Preservation Protocol</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">10</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="COMMANDERLUKESKYWALKER">
                  <td className="toonnamecolumn">Commander Luke Skywalker</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success leaderskill_COMMANDERLUKESKYWALKER">Rebel Maneuvers</td>
                        </tr>
                        <tr>
                          <td className="success uniqueskill_COMMANDERLUKESKYWALKER01">Learn Control</td>
                        </tr>
                        <tr>
                          <td className="success uniqueskill_COMMANDERLUKESKYWALKER02">It Binds All Things</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="success">12</td>
                  <td className="success">85</td>
                  <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                </tr>
                <tr className="REYJEDITRAINING">
                  <td className="toonnamecolumn">Rey (Jedi Training)</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success leaderskill_REYJEDITRAINING">Inspirational Presence</td>
                        </tr>
                        <tr>
                          <td className="success uniqueskill_REYJEDITRAINING01">Virtuous Protector</td>
                        </tr>
                        <tr>
                          <td className="success uniqueskill_REYJEDITRAINING02">Insight</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="success">13</td>
                  <td className="success">85</td>
                  <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                </tr>
                <tr className="GRANDMASTERYODA">
                  <td className="toonnamecolumn">Grand Master Yoda</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger leaderskill_GRANDMASTERYODA">Grand Master's Guidance</td>
                        </tr>
                        <tr>
                          <td className="success specialskill_GRANDMASTERYODA03">Battle Meditation</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="success">12</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="CHEWBACCALEGENDARY">
                  <td className="toonnamecolumn">Chewbacca</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success uniqueskill_CHEWBACCALEGENDARY01">Loyal Friend</td>
                        </tr>
                        <tr>
                          <td className="success uniqueskill_CHEWBACCALEGENDARY02">Raging Wookiee</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="success">12</td>
                  <td className="success">85</td>
                  <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                </tr>
                <tr className="C3POLEGENDARY">
                  <td className="toonnamecolumn">C-3PO</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success specialskill_C3POLEGENDARY01">Oh My Goodness!</td>
                        </tr>
                        <tr>
                          <td className="success uniqueskill_C3POLEGENDARY02">Wait for Me!</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="success">13</td>
                  <td className="success">85</td>
                  <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                </tr>
                <tr className="JEDIKNIGHTREVAN">
                  <td className="toonnamecolumn">Jedi Knight Revan</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success leaderskill_JEDIKNIGHTREVAN">General</td>
                        </tr>
                        <tr>
                          <td className="success specialskill_JEDIKNIGHTREVAN02">Direct Focus</td>
                        </tr>
                        <tr>
                          <td className="success uniqueskill_JEDIKNIGHTREVAN02">Hero</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="success">12</td>
                  <td className="success">85</td>
                  <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                </tr>
                <tr className="DARTHREVAN">
                  <td className="toonnamecolumn">Darth Revan</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success leaderskill_DARTHREVAN">Lord of the Sith</td>
                        </tr>
                        <tr>
                          <td className="success uniqueskill_DARTHREVAN01">Conqueror</td>
                        </tr>
                        <tr>
                          <td className="success uniqueskill_DARTHREVAN02">Villain</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="success">13</td>
                  <td className="success">85</td>
                  <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                </tr>
                <tr className="DARTHMALAK">
                  <td className="toonnamecolumn">Darth Malak</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_DARTHMALAK01">Gnawing Terror</td>
                        </tr>
                        <tr>
                          <td className="danger uniqueskill_DARTHMALAK02">Jaws of Life</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="danger rarity">6</td>
                  <td className="danger">11</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="PADMEAMIDALA">
                  <td className="toonnamecolumn">Padmé Amidala</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success leaderskill_PADMEAMIDALA">Unwavering Courage</td>
                        </tr>
                        <tr>
                          <td className="success uniqueskill_PADMEAMIDALA01">Always a Choice</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="success">13</td>
                  <td className="success">85</td>
                  <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Row>
        <Row><a name="undefined"></a>
          <div id="undefined"></div>
          <div className="col-xs-12" style={{position: 'sticky;', position: '-webkit-sticky;', position: '-moz-sticky;', position: '-ms-sticky;', position: '-o-sticky;', top:'25px;', zIndex: '2;'}}>
            <h3>LSTB CHARACTERS<br /><small>Requirements - 7 Star - Gear 12 - Level 85</small></h3>
          </div>
          <div className="col-xs-12"></div>
          <div className="col-md-6 tablestart notmainteam notready">
            <h4>ROGUE ONE<small></small></h4>
            <table className="table table-striped table-bordered">
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
                <tr className="JYNERSO">
                  <td className="toonnamecolumn">Jyn Erso</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger leaderskill_JYNERSO">Into the Fray</td>
                        </tr>
                        <tr>
                          <td className="danger uniqueskill_JYNERSO01">Fierce Determination</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="danger rarity">5</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="BAZEMALBUS">
                  <td className="toonnamecolumn">Baze Malbus</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="danger rarity">5</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="CHIRRUTIMWE">
                  <td className="toonnamecolumn">Chirrut Îmwe</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="BISTAN">
                  <td className="toonnamecolumn">Bistan</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">5</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="BODHIROOK">
                  <td className="toonnamecolumn">Bodhi Rook</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_BODHIROOK01">Double Duty</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">7</td>
                  <td className="danger">65</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="CASSIANANDOR">
                  <td className="toonnamecolumn">Cassian Andor</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_CASSIANANDOR01">Groundwork</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="K2SO">
                  <td className="toonnamecolumn">K-2SO</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_K2SO02">Reprogrammed Imperial Droid</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="PAO">
                  <td className="toonnamecolumn">Pao</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_PAO01">For Pipada</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">6</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="SCARIFREBEL">
                  <td className="toonnamecolumn">Scarif Rebel Pathfinder</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="danger rarity">6</td>
                  <td className="danger">7</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 tablestart notmainteam notready">
            <h4>PHOENIX<small></small></h4>
            <table className="table table-striped table-bordered">
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
                <tr className="HERASYNDULLAS3">
                  <td className="toonnamecolumn">Hera Syndulla</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger specialskill_HERASYNDULLAS301">Play to Strengths</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">9</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="CHOPPERS3">
                  <td className="toonnamecolumn">Chopper</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="EZRABRIDGERS3">
                  <td className="toonnamecolumn">Ezra Bridger</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success specialskill_EZRABRIDGERS301">Flourish</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">11</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="ZEBS3">
                  <td className="toonnamecolumn">Garazeb "Zeb" Orrelios</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger specialskill_ZEBS301">Staggering Sweep</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="KANANJARRUSS3">
                  <td className="toonnamecolumn">Kanan Jarrus</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger specialskill_KANANJARRUSS302">Total Defense</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="SABINEWRENS3">
                  <td className="toonnamecolumn">Sabine Wren</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger specialskill_SABINEWRENS302">Demolish</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">10</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 tablestart notmainteam notready">
            <h4>UNIQUE UNITS<small></small></h4>
            <table className="table table-striped table-bordered">
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
                <tr className="HOTHHAN">
                  <td className="toonnamecolumn">Captain Han Solo</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_HOTHHAN01">Nick of Time</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="danger rarity">4</td>
                  <td className="danger">6</td>
                  <td className="danger">50</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="HOTHLEIA">
                  <td className="toonnamecolumn">Rebel Officer Leia Organa</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_HOTHLEIA01">Dauntless</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="danger rarity">6</td>
                  <td className="danger">5</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="HOTHREBELSCOUT">
                  <td className="toonnamecolumn">Hoth Rebel Scout</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="HOTHREBELSOLDIER">
                  <td className="toonnamecolumn">Hoth Rebel Soldier</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="danger rarity">6</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Row>
        <Row><a name="undefined"></a>
          <div id="undefined"></div>
          <div className="col-xs-12" style={{position: 'sticky;', position: '-webkit-sticky;', position: '-moz-sticky;', position: '-ms-sticky;', position: '-o-sticky;', top:'25px;', zIndex: '2;'}}>
            <h3>DSTB CHARACTERS<br /><small>Requirements - 7 Star - Gear 12 - Level 85</small></h3>
          </div>
          <div className="col-xs-12"></div>
          <div className="col-md-6 tablestart notmainteam notready">
            <h4>BOUNTY HUNTERS<small></small></h4>
            <table className="table table-striped table-bordered">
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
                <tr className="BOSSK">
                  <td className="toonnamecolumn">Bossk</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success leaderskill_BOSSK">On The Hunt</td>
                        </tr>
                        <tr>
                          <td className="success uniqueskill_BOSSK01">Trandoshan Rage</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="success">12</td>
                  <td className="success">85</td>
                  <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                </tr>
                <tr className="BOBAFETT">
                  <td className="toonnamecolumn">Boba Fett</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success uniqueskill_BOBAFETT01">Bounty Hunter's Resolve</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="success">12</td>
                  <td className="success">85</td>
                  <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                </tr>
                <tr className="GREEDO">
                  <td className="toonnamecolumn">Greedo</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger specialskill_GREEDO02">Threaten</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="CADBANE">
                  <td className="toonnamecolumn">Cad Bane</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="DENGAR">
                  <td className="toonnamecolumn">Dengar</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success uniqueskill_DENGAR01">Grizzled Veteran</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">11</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="IG88">
                  <td className="toonnamecolumn">IG-88</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_IG8801">Adaptive Aim Algorithm</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">11</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="ZAMWESELL">
                  <td className="toonnamecolumn">Zam Wesell</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_ZAMWESELL01">Shapeshifter</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="danger rarity">5</td>
                  <td className="danger">6</td>
                  <td className="danger">50</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="JANGOFETT">
                  <td className="toonnamecolumn">Jango Fett</td>
                  <td style={{padding: '0px'}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger leaderskill_JANGOFETT">Anything to Get Ahead</td>
                        </tr>
                        <tr>
                          <td className="danger uniqueskill_JANGOFETT01">Notorious Reputation</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">11</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="AURRA_SING">
                  <td className="toonnamecolumn">Aurra Sing</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger specialskill_AURRA_SING02">Snipers Expertise</td>
                        </tr>
                        <tr>
                          <td className="danger leaderskill_AURRA_SING">Game Plan</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="danger rarity">4</td>
                  <td className="danger">6</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="EMBO">
                  <td className="toonnamecolumn">Embo</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger leaderskill_EMBO">The Quiet Assassin</td>
                        </tr>
                        <tr>
                          <td className="danger uniqueskill_EMBO01">Way of the Kyuzo</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">9</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 tablestart notmainteam notready">
            <h4>IMPERIAL TROOPERS<small></small></h4>
            <table className="table table-striped table-bordered">
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
                <tr className="VEERS">
                  <td className="toonnamecolumn">General Veers</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_VEERS01">Aggressive Tactician</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="COLONELSTARCK">
                  <td className="toonnamecolumn">Colonel Starck</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_COLONELSTARCK01">Imperial Intelligence</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">7</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="DEATHTROOPER">
                  <td className="toonnamecolumn">Death Trooper</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_DEATHTROOPER01">Krennic's Guard</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="danger rarity">5</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="MAGMATROOPER">
                  <td className="toonnamecolumn">Magmatrooper</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">7</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="SHORETROOPER">
                  <td className="toonnamecolumn">Shoretrooper</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="danger rarity">5</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="SNOWTROOPER">
                  <td className="toonnamecolumn">Snowtrooper</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="STORMTROOPER">
                  <td className="toonnamecolumn">Stormtrooper</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_STORMTROOPER01">Wall of Stormtroopers</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="RANGETROOPER">
                  <td className="toonnamecolumn">Range Trooper</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="danger rarity">5</td>
                  <td className="danger">6</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 tablestart notmainteam notready">
            <h4>UNIQUE UNITS<small></small></h4>
            <table className="table table-striped table-bordered">
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
                <tr className="VADER">
                  <td className="toonnamecolumn">Darth Vader</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success leaderskill_VADER">Inspiring Through Fear</td>
                        </tr>
                        <tr>
                          <td className="success uniqueskill_VADER01">No Escape</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="success">12</td>
                  <td className="success">85</td>
                  <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                </tr>
                <tr className="IMPERIALPROBEDROID">
                  <td className="toonnamecolumn">Imperial Probe Droid</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_IMPERIALPROBEDROID01">Imperial Logistics</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="danger rarity">5</td>
                  <td className="danger">7</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Row>
        <Row><a name="undefined"></a>
          <div id="undefined"></div>
          <div className="col-xs-12" style={{position: "sticky;", position: '-webkit-sticky;', position: '-moz-sticky;', position: '-ms-sticky;', position: '-o-sticky;', top: '25px;', zIndex: '2;'}}>
            <h3>USEFUL TW CHARACTERS<br /><small>Requirements - 7 Star - Gear 12 - Level 85</small></h3>
          </div>
          <div className="col-xs-12"></div>
          <div className="col-md-6 tablestart notmainteam notready">
            <h4>MASS DAZE<small></small></h4>
            <table className="table table-striped table-bordered">
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
                <tr className="AMILYNHOLDO">
                  <td className="toonnamecolumn">Amilyn Holdo</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_AMILYNHOLDO01">Quiet Confidence</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="MAUL">
                  <td className="toonnamecolumn">Darth Maul</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger leaderskill_MAUL">Dancing Shadows</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">9</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="ENFYSNEST">
                  <td className="toonnamecolumn">Enfys Nest</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_ENFYSNEST01">Fighting Instinct</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="danger rarity">4</td>
                  <td className="danger">7</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="LOGRAY">
                  <td className="toonnamecolumn">Logray</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_LOGRAY01">Shaman's Insight</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">10</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 tablestart notmainteam notready">
            <h4>TANKS<small></small></h4>
            <table className="table table-striped table-bordered">
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
                <tr className="SHORETROOPER">
                  <td className="toonnamecolumn">Shoretrooper</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="danger rarity">5</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="DARTHSION">
                  <td className="toonnamecolumn">Darth Sion</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success uniqueskill_DARTHSION01">Lord of Pain</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">10</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="SITHTROOPER">
                  <td className="toonnamecolumn">Sith Empire Trooper</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="danger rarity">6</td>
                  <td className="danger">7</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 tablestart notmainteam notready">
            <h4>HEALER<small></small></h4>
            <table className="table table-striped table-bordered">
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
                <tr className="BARRISSOFFEE">
                  <td className="toonnamecolumn">Barriss Offee</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_BARRISSOFFEE01">Swift Recovery</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="VISASMARR">
                  <td className="toonnamecolumn">Visas Marr</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_VISASMARR01">Returned to the Light</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 tablestart notmainteam notready">
            <h4>OTHERS<small></small></h4>
            <table className="table table-striped table-bordered">
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
                <tr className="FINN">
                  <td className="toonnamecolumn">Finn</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success leaderskill_FINN">Balanced Tactics</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">11</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Row>
        <Row><a name="undefined"></a>
          <div id="undefined"></div>
          <div className="col-xs-12" style={{position: 'sticky;', position: '-webkit-sticky;', position: '-moz-sticky;', position: '-ms-sticky;', position: '-o-sticky;', top:'25px;', zIndex: '2;'}}>
            <h3>OTHER CHARACTERS<br /><small>Requirements - 7 Star - Gear 12 - Level 85</small></h3>
          </div>
          <div className="col-xs-12"></div>
          <div className="col-md-6 tablestart notmainteam notready">
            <h4>NIGHTSISTERS<small></small></h4>
            <table className="table table-striped table-bordered">
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
                <tr className="MOTHERTALZIN">
                  <td className="toonnamecolumn">Mother Talzin</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success uniqueskill_MOTHERTALZIN01">Plaguebearer</td>
                        </tr>
                        <tr>
                          <td className="success leaderskill_MOTHERTALZIN">The Great Mother</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="success">12</td>
                  <td className="success">85</td>
                  <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                </tr>
                <tr className="ASAJVENTRESS">
                  <td className="toonnamecolumn">Asajj Ventress</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success leaderskill_ASAJVENTRESS">Nightsister Swiftness</td>
                        </tr>
                        <tr>
                          <td className="success uniqueskill_ASAJVENTRESS01">Rampage</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="success">12</td>
                  <td className="success">85</td>
                  <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                </tr>
                <tr className="NIGHTSISTERSPIRIT">
                  <td className="toonnamecolumn">Nightsister Spirit</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="NIGHTSISTERZOMBIE">
                  <td className="toonnamecolumn">Nightsister Zombie</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">11</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="DAKA">
                  <td className="toonnamecolumn">Old Daka</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success uniqueskill_DAKA01">Serve Again</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">10</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="TALIA">
                  <td className="toonnamecolumn">Talia</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">10</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="NIGHTSISTERACOLYTE">
                  <td className="toonnamecolumn">Nightsister Acolyte</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="danger rarity">3</td>
                  <td className="danger">3</td>
                  <td className="danger">50</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="NIGHTSISTERINITIATE">
                  <td className="toonnamecolumn">Nightsister Initiate</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_NIGHTSISTERINITIATE01">Nightsister Retaliation</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 tablestart notmainteam notready">
            <h4>FIRST ORDER<small></small></h4>
            <table className="table table-striped table-bordered">
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
                <tr className="KYLORENUNMASKED">
                  <td className="toonnamecolumn">Kylo Ren (Unmasked)</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger leaderskill_KYLORENUNMASKED">Merciless Pursuit</td>
                        </tr>
                        <tr>
                          <td className="danger uniqueskill_KYLORENUNMASKED01">Scarred</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="KYLOREN">
                  <td className="toonnamecolumn">Kylo Ren</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success specialskill_KYLOREN02">Outrage</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="success">12</td>
                  <td className="success">85</td>
                  <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                </tr>
                <tr className="FIRSTORDERTROOPER">
                  <td className="toonnamecolumn">First Order Stormtrooper</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_FIRSTORDERTROOPER01">Return Fire</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="FIRSTORDERTIEPILOT">
                  <td className="toonnamecolumn">First Order TIE Pilot</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger uniqueskill_FIRSTORDERTIEPILOT01">Keen Eye</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="FIRSTORDEREXECUTIONER">
                  <td className="toonnamecolumn">First Order Executioner</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">9</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="FIRSTORDEROFFICERMALE">
                  <td className="toonnamecolumn">First Order Officer</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="FIRSTORDERSPECIALFORCESPILOT">
                  <td className="toonnamecolumn">First Order SF TIE Pilot</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="danger rarity">5</td>
                  <td className="danger">6</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="PHASMA">
                  <td className="toonnamecolumn">Captain Phasma</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger leaderskill_PHASMA">Fire at Will</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 tablestart notmainteam notready">
            <h4>UNIQUE UNITS<small></small></h4>
            <table className="table table-striped table-bordered">
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
                <tr className="WAMPA">
                  <td className="toonnamecolumn">Wampa</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger specialskill_WAMPA02">Furious Foe</td>
                        </tr>
                        <tr>
                          <td className="danger uniqueskill_WAMPA02">Cornered Beast</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">9</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="HERMITYODA">
                  <td className="toonnamecolumn">Hermit Yoda</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success specialskill_HERMITYODA02">Strength Flows From the Force</td>
                        </tr>
                        <tr>
                          <td className="success uniqueskill_HERMITYODA02">Do or Do Not</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="danger">11</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
                <tr className="GENERALKENOBI">
                  <td className="toonnamecolumn">General Kenobi</td>
                  <td style={{padding: "0px;"}} className="default">
                    <table className="table"></table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="success">12</td>
                  <td className="success">85</td>
                  <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                </tr>
                <tr className="HANSOLO">
                  <td className="toonnamecolumn">Han Solo</td>
                  <td style={{padding: "0px;"}} className="success">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="success uniqueskill_HANSOLO01">Shoots First</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="success rarity">7</td>
                  <td className="success">12</td>
                  <td className="success">85</td>
                  <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                </tr>
                <tr className="DARTHTRAYA">
                  <td className="toonnamecolumn">Darth Traya</td>
                  <td style={{padding: "0px;"}} className="danger">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="danger leaderskill_DARTHTRAYA">Compassion is Weakness</td>
                        </tr>
                        <tr>
                          <td className="danger uniqueskill_DARTHTRAYA01">Lord of Betrayal</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="danger rarity">5</td>
                  <td className="danger">8</td>
                  <td className="success">85</td>
                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Row>
        <div><Button variant="primary" id="clearlocal">Clear localStorage</Button></div>
      </Tab>
      <Tab eventKey="events" title="Events">



         <h2>SWGOH EVENTS</h2>
         <div className="row">
            <a name="padme"></a>
            <div id="padme"></div>
            <div className="col-xs-12" style={{position: 'sticky;', position: '-webkit-sticky;', position: '-moz-sticky;', position: '-ms-sticky;', position: '-o-sticky;', top: '25px;', zIndex:'2;'}}>
               <h3>AGGRESSIVE NEGOTIATIONS<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
            </div>
            <div className="col-xs-12"></div>
            <div className="col-md-6 tablestart notmainteam">
               <h4><small><a href="https://swgohevents.com/panic-farm/padme" target="blank">Panic Farming Calculator</a></small></h4>
               <table className="table table-striped table-bordered">
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
                     <tr className="ASAJVENTRESS">
                        <td className="toonnamecolumn">Asajj Ventress</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="GRIEVOUS">
                        <td className="toonnamecolumn">General Grievous</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">13</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="COUNTDOOKU">
                        <td className="toonnamecolumn">Count Dooku</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="NUTEGUNRAY">
                        <td className="toonnamecolumn">Nute Gunray</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="B2SUPERBATTLEDROID">
                        <td className="toonnamecolumn">B2 Super Battle Droid</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">13</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="MAGNAGUARD">
                        <td className="toonnamecolumn">IG-100 MagnaGuard</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="DROIDEKA">
                        <td className="toonnamecolumn">Droideka</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="B1BATTLEDROIDV2">
                        <td className="toonnamecolumn">B1 Battle Droid</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="danger rarity">6</td>
                        <td className="success">9</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="POGGLETHELESSER">
                        <td className="toonnamecolumn">Poggle the Lesser</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="SUNFAC">
                        <td className="toonnamecolumn">Sun Fac</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="GEONOSIANSPY">
                        <td className="toonnamecolumn">Geonosian Spy</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="GEONOSIANSOLDIER">
                        <td className="toonnamecolumn">Geonosian Soldier</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <div className="row">
            <a name="malak"></a>
            <div id="malak"></div>
            <div className="col-xs-12" style={{position: 'sticky;', position: '-webkit-sticky;', position: '-moz-sticky;', position: '-ms-sticky;', position: '-o-sticky;', top: '25px;', zIndex:'2;'}}>
               <h3>STAR FORGE SHOWDOWN<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
            </div>
            <div className="col-xs-12"></div>
            <div className="col-md-6 tablestart notmainteam">
               <h4> - <small>You will need DR, JKR, and 4 of the 5 under each leader. Both squads will need 17,500 power per character.</small></h4>
               <table className="table table-striped table-bordered">
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
                        <td className="toonnamecolumn">Jedi Knight Revan</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="BASTILASHAN">
                        <td className="toonnamecolumn">Bastila Shan</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="JOLEEBINDO">
                        <td className="toonnamecolumn">Jolee Bindo</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="T3_M4">
                        <td className="toonnamecolumn">T3-M4</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="MISSIONVAO">
                        <td className="toonnamecolumn">Mission Vao</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="ZAALBAR">
                        <td className="toonnamecolumn">Zaalbar</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="DARTHREVAN">
                        <td className="toonnamecolumn">Darth Revan</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">13</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="CARTHONASI">
                        <td className="toonnamecolumn">Carth Onasi</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="HK47">
                        <td className="toonnamecolumn">HK-47</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">13</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="JUHANI">
                        <td className="toonnamecolumn">Juhani</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="CANDEROUSORDO">
                        <td className="toonnamecolumn">Canderous Ordo</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="BASTILASHANDARK">
                        <td className="toonnamecolumn">Bastila Shan (Fallen)</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">13</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <div className="row">
            <a name="darth-revan"></a>
            <div id="darth-revan"></div>
            <div className="col-xs-12" style={{position: 'sticky;', position: '-webkit-sticky;', position: '-moz-sticky;', position: '-ms-sticky;', position: '-o-sticky;', top: '25px;', zIndex:'2;'}}>
               <h3>SCOURGE OF THE OLD REPUBLIC<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
            </div>
            <div className="col-xs-12"></div>
            <div className="col-md-6 tablestart notmainteam">
               <h4><small><a href="https://swgohevents.com/panic-farm/darth-revan" target="blank">Panic Farming Calculator</a></small></h4>
               <table className="table table-striped table-bordered">
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
                     <tr className="CARTHONASI">
                        <td className="toonnamecolumn">Carth Onasi</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="HK47">
                        <td className="toonnamecolumn">HK-47</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">13</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="JUHANI">
                        <td className="toonnamecolumn">Juhani</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="CANDEROUSORDO">
                        <td className="toonnamecolumn">Canderous Ordo</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="BASTILASHANDARK">
                        <td className="toonnamecolumn">Bastila Shan (Fallen)</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">13</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <div className="row">
            <a name="ot-falcon"></a>
            <div id="ot-falcon"></div>
            <div className="col-xs-12" style={{position: 'sticky;', position: '-webkit-sticky;', position: '-moz-sticky;', position: '-ms-sticky;', position: '-o-sticky;', top: '25px;', zIndex:'2;'}}>
               <h3>HAN'S MILLENIUM FALCON<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
            </div>
            <div className="col-xs-12"></div>
            <div className="col-md-6 tablestart notmainteam notready">
               <h4><small><a href="https://swgohevents.com/panic-farm/ot-falcon" target="blank">Panic Farming Calculator</a></small></h4>
               <table className="table table-striped table-bordered">
                  <thead>
                     <tr>
                        <th width="30%">Name</th>
                        <th className="hidden"></th>
                        <th width="8%">⭐</th>
                        <th className="hidden"></th>
                        <th width="8%">L</th>
                        <th width="8%">Ready?</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr className="SLAVE1">
                        <td className="toonnamecolumn">Slave I</td>
                        <td className="hidden">true</td>
                        <td className="success rarity">7</td>
                        <td className="hidden">true</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="IG2000">
                        <td className="toonnamecolumn">IG-2000</td>
                        <td className="hidden">true</td>
                        <td className="danger rarity">6</td>
                        <td className="hidden">true</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="HOUNDSTOOTH">
                        <td className="toonnamecolumn">Hound's Tooth</td>
                        <td className="hidden">true</td>
                        <td className="success rarity">7</td>
                        <td className="hidden">true</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="XANADUBLOOD">
                        <td className="toonnamecolumn">Xanadu Blood</td>
                        <td className="hidden">true</td>
                        <td className="success rarity">7</td>
                        <td className="hidden">true</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <div className="row">
            <a name="c3po"></a>
            <div id="c3po"></div>
            <div className="col-xs-12" style={{position: 'sticky;', position: '-webkit-sticky;', position: '-moz-sticky;', position: '-ms-sticky;', position: '-o-sticky;', top: '25px;', zIndex:'2;'}}>
               <h3>CONTACT PROTOCOL<br /><small>Requirements - 7 Star - Gear 10 - Level 85</small></h3>
            </div>
            <div className="col-xs-12"></div>
            <div className="col-md-6 tablestart notmainteam">
               <h4><small><a href="https://swgohevents.com/panic-farm/c-3p0" target="blank">Panic Farming Calculator</a></small></h4>
               <table className="table table-striped table-bordered">
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
                     <tr className="CHIEFCHIRPA">
                        <td className="toonnamecolumn">Chief Chirpa</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="WICKET">
                        <td className="toonnamecolumn">Wicket</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="LOGRAY">
                        <td className="toonnamecolumn">Logray</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">10</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="PAPLOO">
                        <td className="toonnamecolumn">Paploo</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="EWOKELDER">
                        <td className="toonnamecolumn">Ewok Elder</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">10</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="EWOKSCOUT">
                        <td className="toonnamecolumn">Ewok Scout</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="TEEBO">
                        <td className="toonnamecolumn">Teebo</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">9</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <div className="row">
            <a name="revan"></a>
            <div id="revan"></div>
            <div className="col-xs-12" style={{position: 'sticky;', position: '-webkit-sticky;', position: '-moz-sticky;', position: '-ms-sticky;', position: '-o-sticky;', top: '25px;', zIndex:'2;'}}>
               <h3>LEGEND OF THE OLD REPUBLIC<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
            </div>
            <div className="col-xs-12"></div>
            <div className="col-md-6 tablestart notmainteam">
               <h4> - <small>Bastila's zeta not strictly needed.<br /><a href="https://swgohevents.com/panic-farm/jkr" target="blank">Panic Farming Calculator</a></small></h4>
               <table className="table table-striped table-bordered">
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
                     <tr className="BASTILASHAN">
                        <td className="toonnamecolumn">Bastila Shan</td>
                        <td style={{padding: "0px;"}} className="success">
                           <table className="table">
                              <tbody>
                                 <tr>
                                    <td className="success leaderskill_BASTILASHAN">Initiative</td>
                                 </tr>
                              </tbody>
                           </table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="JOLEEBINDO">
                        <td className="toonnamecolumn">Jolee Bindo</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="T3_M4">
                        <td className="toonnamecolumn">T3-M4</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="MISSIONVAO">
                        <td className="toonnamecolumn">Mission Vao</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="ZAALBAR">
                        <td className="toonnamecolumn">Zaalbar</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <div className="row">
            <a name="chewbacca"></a>
            <div id="chewbacca"></div>
            <div className="col-xs-12" style={{position: 'sticky;', position: '-webkit-sticky;', position: '-moz-sticky;', position: '-ms-sticky;', position: '-o-sticky;', top: '25px;', zIndex:'2;'}}>
               <h3>ONE FAMOUS WOOKIEE<br /><small>Requirements - 7 Star - Gear 11 - Level 85</small></h3>
            </div>
            <div className="col-xs-12"></div>
            <div className="col-md-6 tablestart notmainteam">
               <h4> - <small>zBossk and Dengar make this event easier.<br /><a href="https://swgohevents.com/panic-farm/chewbacca" target="blank">Panic Farming Calculator</a></small></h4>
               <table className="table table-striped table-bordered">
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
                     <tr className="BOBAFETT">
                        <td className="toonnamecolumn">Boba Fett</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="BOSSK">
                        <td className="toonnamecolumn">Bossk</td>
                        <td style={{padding: "0px;"}} className="success">
                           <table className="table">
                              <tbody>
                                 <tr>
                                    <td className="success leaderskill_BOSSK">On The Hunt</td>
                                 </tr>
                              </tbody>
                           </table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="CADBANE">
                        <td className="toonnamecolumn">Cad Bane</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="IG88">
                        <td className="toonnamecolumn">IG-88</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="ZAMWESELL">
                        <td className="toonnamecolumn">Zam Wesell</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="danger rarity">5</td>
                        <td className="danger">6</td>
                        <td className="danger">50</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="GREEDO">
                        <td className="toonnamecolumn">Greedo</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="DENGAR">
                        <td className="toonnamecolumn">Dengar</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="JANGOFETT">
                        <td className="toonnamecolumn">Jango Fett</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="AURRA_SING">
                        <td className="toonnamecolumn">Aurra Sing</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="danger rarity">4</td>
                        <td className="danger">6</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="EMBO">
                        <td className="toonnamecolumn">Embo</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">9</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <div className="row">
            <a name="jtr"></a>
            <div id="jtr"></div>
            <div className="col-xs-12" style={{position: 'sticky;', position: '-webkit-sticky;', position: '-moz-sticky;', position: '-ms-sticky;', position: '-o-sticky;', top: '25px;', zIndex:'2;'}}>
               <h3>REY'S HERO'S JOURNEY<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
            </div>
            <div className="col-xs-12"></div>
            <div className="col-md-6 tablestart notmainteam">
               <h4> - <small>Finn's Zeta recommended.<br /><a href="https://swgohevents.com/panic-farm/jtr" target="blank">Panic Farming Calculator</a></small></h4>
               <table className="table table-striped table-bordered">
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
                     <tr className="FINN">
                        <td className="toonnamecolumn">Finn</td>
                        <td style={{padding: "0px;"}} className="success">
                           <table className="table">
                              <tbody>
                                 <tr>
                                    <td className="success leaderskill_FINN">Balanced Tactics</td>
                                 </tr>
                              </tbody>
                           </table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="REY">
                        <td className="toonnamecolumn">Rey (Scavenger)</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="BB8">
                        <td className="toonnamecolumn">BB-8</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">10</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="SMUGGLERHAN">
                        <td className="toonnamecolumn">Veteran Smuggler Han Solo</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="SMUGGLERCHEWBACCA">
                        <td className="toonnamecolumn">Veteran Smuggler Chewbacca</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <div className="row">
            <a name="cls"></a>
            <div id="cls"></div>
            <div className="col-xs-12" style={{position: 'sticky;', position: '-webkit-sticky;', position: '-moz-sticky;', position: '-ms-sticky;', position: '-o-sticky;', top: '25px;', zIndex:'2;'}}>
               <h3>LUKE SKYWALKER HERO'S JOURNEY<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
            </div>
            <div className="col-xs-12"></div>
            <div className="col-md-6 tablestart notmainteam">
               <h4><small></small></h4>
               <table className="table table-striped table-bordered">
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
                     <tr className="LUKESKYWALKER">
                        <td className="toonnamecolumn">Luke Skywalker (Farmboy)</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="PRINCESSLEIA">
                        <td className="toonnamecolumn">Princess Leia</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="R2D2_LEGENDARY">
                        <td className="toonnamecolumn">R2-D2</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="STORMTROOPERHAN">
                        <td className="toonnamecolumn">Stormtrooper Han</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">9</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="OLDBENKENOBI">
                        <td className="toonnamecolumn">Obi-Wan Kenobi (Old Ben)</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <div className="row">
            <a name="r2d2"></a>
            <div id="r2d2"></div>
            <div className="col-xs-12" style={{position: 'sticky;', position: '-webkit-sticky;', position: '-moz-sticky;', position: '-ms-sticky;', position: '-o-sticky;', top: '25px;', zIndex:'2;'}}>
               <h3>DARING DROID<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
            </div>
            <div className="col-xs-12"></div>
            <div className="col-md-6 tablestart notmainteam">
               <h4><small></small></h4>
               <table className="table table-striped table-bordered">
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
                     <tr className="VADER">
                        <td className="toonnamecolumn">Darth Vader</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="DEATHTROOPER">
                        <td className="toonnamecolumn">Death Trooper</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="danger rarity">5</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="DIRECTORKRENNIC">
                        <td className="toonnamecolumn">Director Krennic</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="danger rarity">6</td>
                        <td className="danger">7</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="EMPERORPALPATINE">
                        <td className="toonnamecolumn">Emperor Palpatine</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="GARSAXON">
                        <td className="toonnamecolumn">Gar Saxon</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="danger rarity">5</td>
                        <td className="danger">5</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="VEERS">
                        <td className="toonnamecolumn">General Veers</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="COLONELSTARCK">
                        <td className="toonnamecolumn">Colonel Starck</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="danger">7</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="GRANDADMIRALTHRAWN">
                        <td className="toonnamecolumn">Grand Admiral Thrawn</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="GRANDMOFFTARKIN">
                        <td className="toonnamecolumn">Grand Moff Tarkin</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">10</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="IMPERIALPROBEDROID">
                        <td className="toonnamecolumn">Imperial Probe Droid</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="danger rarity">5</td>
                        <td className="danger">7</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="IMPERIALSUPERCOMMANDO">
                        <td className="toonnamecolumn">Imperial Super Commando</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="danger rarity">4</td>
                        <td className="danger">6</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="MAGMATROOPER">
                        <td className="toonnamecolumn">Magmatrooper</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="danger">7</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="ROYALGUARD">
                        <td className="toonnamecolumn">Royal Guard</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="danger">7</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="SHORETROOPER">
                        <td className="toonnamecolumn">Shoretrooper</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="danger rarity">5</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="SNOWTROOPER">
                        <td className="toonnamecolumn">Snowtrooper</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="STORMTROOPER">
                        <td className="toonnamecolumn">Stormtrooper</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="TIEFIGHTERPILOT">
                        <td className="toonnamecolumn">TIE Fighter Pilot</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <div className="row">
            <a name="bb8"></a>
            <div id="bb8"></div>
            <div className="col-xs-12" style={{position: 'sticky;', position: '-webkit-sticky;', position: '-moz-sticky;', position: '-ms-sticky;', position: '-o-sticky;', top: '25px;', zIndex:'2;'}}>
               <h3>PIECES &amp; PLANS<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
            </div>
            <div className="col-xs-12"></div>
            <div className="col-md-6 tablestart notmainteam">
               <h4> - <small>Kylo's Zeta recommended</small></h4>
               <table className="table table-striped table-bordered">
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
                     <tr className="PHASMA">
                        <td className="toonnamecolumn">Captain Phasma</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="FIRSTORDEROFFICERMALE">
                        <td className="toonnamecolumn">First Order Officer</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="FIRSTORDERTROOPER">
                        <td className="toonnamecolumn">First Order Stormtrooper</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="FIRSTORDERTIEPILOT">
                        <td className="toonnamecolumn">First Order TIE Pilot</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="KYLOREN">
                        <td className="toonnamecolumn">Kylo Ren</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="FIRSTORDEREXECUTIONER">
                        <td className="toonnamecolumn">First Order Executioner</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">9</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="KYLORENUNMASKED">
                        <td className="toonnamecolumn">Kylo Ren (Unmasked)</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="FIRSTORDERSPECIALFORCESPILOT">
                        <td className="toonnamecolumn">First Order SF TIE Pilot</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="danger rarity">5</td>
                        <td className="danger">6</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <div className="row">
            <a name="yoda"></a>
            <div id="yoda"></div>
            <div className="col-xs-12" style={{position: 'sticky;', position: '-webkit-sticky;', position: '-moz-sticky;', position: '-ms-sticky;', position: '-o-sticky;', top: '25px;', zIndex:'2;'}}>
               <h3>GRANDMASTER'S TRAINING<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
            </div>
            <div className="col-xs-12"></div>
            <div className="col-md-6 tablestart notmainteam">
               <h4><small></small></h4>
               <table className="table table-striped table-bordered">
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
                     <tr className="AAYLASECURA">
                        <td className="toonnamecolumn">Aayla Secura</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="danger rarity">4</td>
                        <td className="danger">6</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="AHSOKATANO">
                        <td className="toonnamecolumn">Ahsoka Tano</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">13</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="BARRISSOFFEE">
                        <td className="toonnamecolumn">Barriss Offee</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="EETHKOTH">
                        <td className="toonnamecolumn">Eeth Koth</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="danger rarity">4</td>
                        <td className="danger">1</td>
                        <td className="danger">1</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="EZRABRIDGERS3">
                        <td className="toonnamecolumn">Ezra Bridger</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="GENERALKENOBI">
                        <td className="toonnamecolumn">General Kenobi</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="HERMITYODA">
                        <td className="toonnamecolumn">Hermit Yoda</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="IMAGUNDI">
                        <td className="toonnamecolumn">Ima-Gun Di</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="danger">7</td>
                        <td className="danger">60</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="JEDIKNIGHTCONSULAR">
                        <td className="toonnamecolumn">Jedi Consular</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">10</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="ANAKINKNIGHT">
                        <td className="toonnamecolumn">Jedi Knight Anakin</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="JEDIKNIGHTGUARDIAN">
                        <td className="toonnamecolumn">Jedi Knight Guardian</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="danger">7</td>
                        <td className="danger">68</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="KANANJARRUSS3">
                        <td className="toonnamecolumn">Kanan Jarrus</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="KITFISTO">
                        <td className="toonnamecolumn">Kit Fisto</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="danger rarity">4</td>
                        <td className="danger">6</td>
                        <td className="danger">60</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="LUMINARAUNDULI">
                        <td className="toonnamecolumn">Luminara Unduli</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="MACEWINDU">
                        <td className="toonnamecolumn">Mace Windu</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="OLDBENKENOBI">
                        <td className="toonnamecolumn">Obi-Wan Kenobi (Old Ben)</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="PLOKOON">
                        <td className="toonnamecolumn">Plo Koon</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">9</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="QUIGONJINN">
                        <td className="toonnamecolumn">Qui-Gon Jinn</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <div className="row">
            <a name="palpatine"></a>
            <div id="palpatine"></div>
            <div className="col-xs-12" style={{position: 'sticky;', position: '-webkit-sticky;', position: '-moz-sticky;', position: '-ms-sticky;', position: '-o-sticky;', top: '25px;', zIndex:'2;'}}>
               <h3>EMPEROR'S DEMISE<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
            </div>
            <div className="col-xs-12"></div>
            <div className="col-md-6 tablestart notmainteam">
               <h4><small></small></h4>
               <table className="table table-striped table-bordered">
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
                     <tr className="ADMIRALACKBAR">
                        <td className="toonnamecolumn">Admiral Ackbar</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">9</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="FULCRUMAHSOKA">
                        <td className="toonnamecolumn">Ahsoka Tano (Fulcrum)</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="danger">7</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="BAZEMALBUS">
                        <td className="toonnamecolumn">Baze Malbus</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="danger rarity">5</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="BIGGSDARKLIGHTER">
                        <td className="toonnamecolumn">Biggs Darklighter</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="BISTAN">
                        <td className="toonnamecolumn">Bistan</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="danger">5</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="BODHIROOK">
                        <td className="toonnamecolumn">Bodhi Rook</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="danger">7</td>
                        <td className="danger">65</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="HOTHHAN">
                        <td className="toonnamecolumn">Captain Han Solo</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="danger rarity">4</td>
                        <td className="danger">6</td>
                        <td className="danger">50</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="CASSIANANDOR">
                        <td className="toonnamecolumn">Cassian Andor</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="CHIRRUTIMWE">
                        <td className="toonnamecolumn">Chirrut Îmwe</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="CHOPPERS3">
                        <td className="toonnamecolumn">Chopper</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="COMMANDERLUKESKYWALKER">
                        <td className="toonnamecolumn">Commander Luke Skywalker</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="EZRABRIDGERS3">
                        <td className="toonnamecolumn">Ezra Bridger</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="ZEBS3">
                        <td className="toonnamecolumn">Garazeb "Zeb" Orrelios</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="HANSOLO">
                        <td className="toonnamecolumn">Han Solo</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="HERASYNDULLAS3">
                        <td className="toonnamecolumn">Hera Syndulla</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">9</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="HOTHREBELSCOUT">
                        <td className="toonnamecolumn">Hoth Rebel Scout</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="HOTHREBELSOLDIER">
                        <td className="toonnamecolumn">Hoth Rebel Soldier</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="danger rarity">6</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="JYNERSO">
                        <td className="toonnamecolumn">Jyn Erso</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="danger rarity">5</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="K2SO">
                        <td className="toonnamecolumn">K-2SO</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="KANANJARRUSS3">
                        <td className="toonnamecolumn">Kanan Jarrus</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="ADMINISTRATORLANDO">
                        <td className="toonnamecolumn">Lando Calrissian</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="LOBOT">
                        <td className="toonnamecolumn">Lobot</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="danger rarity">4</td>
                        <td className="danger">1</td>
                        <td className="danger">1</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="LUKESKYWALKER">
                        <td className="toonnamecolumn">Luke Skywalker (Farmboy)</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="OLDBENKENOBI">
                        <td className="toonnamecolumn">Obi-Wan Kenobi (Old Ben)</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="PAO">
                        <td className="toonnamecolumn">Pao</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="danger">6</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="PRINCESSLEIA">
                        <td className="toonnamecolumn">Princess Leia</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="R2D2_LEGENDARY">
                        <td className="toonnamecolumn">R2-D2</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">12</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="HOTHLEIA">
                        <td className="toonnamecolumn">Rebel Officer Leia Organa</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="danger rarity">6</td>
                        <td className="danger">5</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="SABINEWRENS3">
                        <td className="toonnamecolumn">Sabine Wren</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">10</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="SCARIFREBEL">
                        <td className="toonnamecolumn">Scarif Rebel Pathfinder</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="danger rarity">6</td>
                        <td className="danger">7</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="STORMTROOPERHAN">
                        <td className="toonnamecolumn">Stormtrooper Han</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">9</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="WEDGEANTILLES">
                        <td className="toonnamecolumn">Wedge Antilles</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <div className="row">
            <a name="thrawn"></a>
            <div id="thrawn"></div>
            <div className="col-xs-12" style={{position: 'sticky;', position: '-webkit-sticky;', position: '-moz-sticky;', position: '-ms-sticky;', position: '-o-sticky;', top: '25px;', zIndex:'2;'}}>
               <h3>ARTIST OF WAR<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
            </div>
            <div className="col-xs-12"></div>
            <div className="col-md-6 tablestart notmainteam">
               <h4> - <small>Sabine not recommended. All purple mats and omegas on Ezra recommended<br /><a href="https://swgohevents.com/panic-farm/thrawn" target="blank">Panic Farming Calculator</a></small></h4>
               <table className="table table-striped table-bordered">
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
                     <tr className="CHOPPERS3">
                        <td className="toonnamecolumn">Chopper</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="EZRABRIDGERS3">
                        <td className="toonnamecolumn">Ezra Bridger</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">11</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="ZEBS3">
                        <td className="toonnamecolumn">Garazeb "Zeb" Orrelios</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="HERASYNDULLAS3">
                        <td className="toonnamecolumn">Hera Syndulla</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">9</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="KANANJARRUSS3">
                        <td className="toonnamecolumn">Kanan Jarrus</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">8</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="SABINEWRENS3">
                        <td className="toonnamecolumn">Sabine Wren</td>
                        <td style={{padding: "0px;"}} className="default">
                           <table className="table"></table>
                        </td>
                        <td className="success rarity">7</td>
                        <td className="success">10</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <div className="row">
            <a name="chimaera"></a>
            <div id="chimaera"></div>
            <div className="col-xs-12" style={{position: 'sticky;', position: '-webkit-sticky;', position: '-moz-sticky;', position: '-ms-sticky;', position: '-o-sticky;', top: '25px;', zIndex:'2;'}}>
               <h3>IMPERIAL CHIMAERA<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
            </div>
            <div className="col-xs-12"></div>
            <div className="col-md-6 tablestart notmainteam">
               <h4> - <small>Two ships must be Ghost and Phantom II. 3 ships + Home One required</small></h4>
               <table className="table table-striped table-bordered">
                  <thead>
                     <tr>
                        <th width="30%">Name</th>
                        <th className="hidden"></th>
                        <th width="8%">⭐</th>
                        <th className="hidden"></th>
                        <th width="8%">L</th>
                        <th width="8%">Ready?</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr className="CAPITALMONCALAMARICRUISER">
                        <td className="toonnamecolumn">Home One</td>
                        <td className="hidden">true</td>
                        <td className="success rarity">7</td>
                        <td className="hidden">true</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="GHOST">
                        <td className="toonnamecolumn">Ghost</td>
                        <td className="hidden">true</td>
                        <td className="success rarity">7</td>
                        <td className="hidden">true</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="PHANTOM2">
                        <td className="toonnamecolumn">Phantom II</td>
                        <td className="hidden">true</td>
                        <td className="success rarity">7</td>
                        <td className="hidden">true</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="XWINGRED3">
                        <td className="toonnamecolumn">Biggs Darklighter's X-wing</td>
                        <td className="hidden">true</td>
                        <td className="success rarity">7</td>
                        <td className="hidden">true</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="XWINGRED2">
                        <td className="toonnamecolumn">Wedge Antilles's X-wing</td>
                        <td className="hidden">true</td>
                        <td className="success rarity">7</td>
                        <td className="hidden">true</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                     <tr className="UWINGSCARIF">
                        <td className="toonnamecolumn">Bistan's U-wing</td>
                        <td className="hidden">true</td>
                        <td className="danger rarity">6</td>
                        <td className="hidden">true</td>
                        <td className="success">85</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                     </tr>
                     <tr className="UWINGROGUEONE">
                        <td className="toonnamecolumn">Cassian's U-wing</td>
                        <td className="hidden">true</td>
                        <td className="success rarity">7</td>
                        <td className="hidden">true</td>
                        <td className="success">85</td>
                        <td className="completeunit success"><span className="glyphicon glyphicon-ok"></span></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <div>
          <Button type="button" id="clearlocal" className="btn btn-primary">Clear localStorage</Button>
        </div>



      </Tab>
      <Tab eventKey="rancor" title="Heroic Rancor"></Tab>
      <Tab eventKey="aat" title="Normal Tank"></Tab>
      <Tab eventKey="haat" title="Heroic Tank"></Tab>
      <Tab eventKey="sith" title="Sith Raid"></Tab>
      {/**<div eventKey="psummary" title="PlayerOverview" id="twdefense"></div>*/}
      <Tab eventKey="lstb" title="Hoth LSTB"></Tab>
      <Tab eventKey="dstb" title="Hoth DSTB"></Tab>
      <Tab eventKey="geonosistbds" title="Geonosis DSTB"></Tab>
      <Tab eventKey="geonosistbls" title="Geonosis LSTB"></Tab>
      {/**<div role="tabpanel" className="tab-pane fade" id="gsummary"></div>*/}
    </Tabs>
  );

}

/**
 * Validation on passed-in props.
 * @type {Object}
 */
TabPanel.propTypes = {
	name: PropTypes.string.isRequired,
	timestamp: PropTypes.string.isRequired,
	version: PropTypes.string.isRequired,
	runtime: PropTypes.string.isRequired,
	server: PropTypes.string,
	description: PropTypes.string.isRequired,
	message: PropTypes.string,
	success: PropTypes.bool.isRequired,
	vitals: PropTypes.array.isRequired,
};

export default TabPanel;
