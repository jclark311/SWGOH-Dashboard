import React, { useState, useEffect } from 'react';
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

const Events = ({ legendaryChars, onClick, playerName, galacticPower, guildName, hasError }) => {
  return (
    <div role="tabpanel" className="tab-pane fade active in" id="events">
      <h2>SWGOH EVENTS</h2>
      <div className="row"><a name="padme" />
        <div id="padme" />
        <div className="col-xs-12" style={{"position":"-o-sticky","top":"25px","z-index":"2"}}>
          <h3>AGGRESSIVE NEGOTIATIONS<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
        </div>
        <div className="col-xs-12" />
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
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">13</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="GRIEVOUS">
                <td className="toonnamecolumn">General Grievous</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">13</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="COUNTDOOKU">
                <td className="toonnamecolumn">Count Dooku</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">11</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="NUTEGUNRAY">
                <td className="toonnamecolumn">Nute Gunray</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">11</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="B2SUPERBATTLEDROID">
                <td className="toonnamecolumn">B2 Super Battle Droid</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">13</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="MAGNAGUARD">
                <td className="toonnamecolumn">IG-100 MagnaGuard</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">13</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="DROIDEKA">
                <td className="toonnamecolumn">Droideka</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">13</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="B1BATTLEDROIDV2">
                <td className="toonnamecolumn">B1 Battle Droid</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">13</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="POGGLETHELESSER">
                <td className="toonnamecolumn">Poggle the Lesser</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">11</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="SUNFAC">
                <td className="toonnamecolumn">Sun Fac</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="GEONOSIANSPY">
                <td className="toonnamecolumn">Geonosian Spy</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">10</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="GEONOSIANSOLDIER">
                <td className="toonnamecolumn">Geonosian Soldier</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">11</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row"><a name="malak" />
        <div id="malak" />
        <div className="col-xs-12" style={{"position":"-o-sticky","top":"25px","z-index":"2"}}>
          <h3>STAR FORGE SHOWDOWN<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
        </div>
        <div className="col-xs-12" />
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
          </table>
        </div>
      </div>
      <div className="row"><a name="darth-revan" />
        <div id="darth-revan" />
        <div className="col-xs-12" style={{"position":"-o-sticky","top":"25px","z-index":"2"}}>
          <h3>SCOURGE OF THE OLD REPUBLIC<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
        </div>
        <div className="col-xs-12" />
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
          </table>
        </div>
      </div>
      <div className="row"><a name="ot-falcon" />
        <div id="ot-falcon" />
        <div className="col-xs-12" style={{"position":"-o-sticky","top":"25px","z-index":"2"}}>
          <h3>HAN'S MILLENIUM FALCON<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
        </div>
        <div className="col-xs-12" />
        <div className="col-md-6 tablestart notmainteam notready">
          <h4><small><a href="https://swgohevents.com/panic-farm/ot-falcon" target="blank">Panic Farming Calculator</a></small></h4>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th width="30%">Name</th>
                <th className="hidden" />
                <th width="8%">⭐</th>
                <th className="hidden" />
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
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="IG2000">
                <td className="toonnamecolumn">IG-2000</td>
                <td className="hidden">true</td>
                <td className="success rarity">7</td>
                <td className="hidden">true</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="HOUNDSTOOTH">
                <td className="toonnamecolumn">Hound's Tooth</td>
                <td className="hidden">true</td>
                <td className="success rarity">7</td>
                <td className="hidden">true</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="XANADUBLOOD">
                <td className="toonnamecolumn">Xanadu Blood</td>
                <td className="hidden">true</td>
                <td className="success rarity">7</td>
                <td className="hidden">true</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row"><a name="c3po" />
        <div id="c3po" />
        <div className="col-xs-12" style={{"position":"-o-sticky","top":"25px","z-index":"2"}}>
          <h3>CONTACT PROTOCOL<br /><small>Requirements - 7 Star - Gear 10 - Level 85</small></h3>
        </div>
        <div className="col-xs-12" />
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
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">11</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="WICKET">
                <td className="toonnamecolumn">Wicket</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">11</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="LOGRAY">
                <td className="toonnamecolumn">Logray</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">10</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="PAPLOO">
                <td className="toonnamecolumn">Paploo</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">11</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="EWOKELDER">
                <td className="toonnamecolumn">Ewok Elder</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">10</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="EWOKSCOUT">
                <td className="toonnamecolumn">Ewok Scout</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="TEEBO">
                <td className="toonnamecolumn">Teebo</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">9</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row"><a name="revan" />
        <div id="revan" />
        <div className="col-xs-12" style={{"position":"-o-sticky","top":"25px","z-index":"2"}}>
          <h3>LEGEND OF THE OLD REPUBLIC<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
        </div>
        <div className="col-xs-12" />
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
                <td style={{"padding":"0px"}} className="success">
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
            </tbody>
          </table>
        </div>
      </div>
      <div className="row"><a name="chewbacca" />
        <div id="chewbacca" />
        <div className="col-xs-12" style={{"position":"-o-sticky","top":"25px","z-index":"2"}}>
          <h3>ONE FAMOUS WOOKIEE<br /><small>Requirements - 7 Star - Gear 11 - Level 85</small></h3>
        </div>
        <div className="col-xs-12" />
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
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">12</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="BOSSK">
                <td className="toonnamecolumn">Bossk</td>
                <td style={{"padding":"0px"}} className="success">
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
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="CADBANE">
                <td className="toonnamecolumn">Cad Bane</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="IG88">
                <td className="toonnamecolumn">IG-88</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">11</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="ZAMWESELL">
                <td className="toonnamecolumn">Zam Wesell</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="danger rarity">5</td>
                <td className="danger">6</td>
                <td className="danger">50</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="GREEDO">
                <td className="toonnamecolumn">Greedo</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="DENGAR">
                <td className="toonnamecolumn">Dengar</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">11</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="JANGOFETT">
                <td className="toonnamecolumn">Jango Fett</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">11</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="AURRA_SING">
                <td className="toonnamecolumn">Aurra Sing</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="danger rarity">4</td>
                <td className="danger">6</td>
                <td className="success">85</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="EMBO">
                <td className="toonnamecolumn">Embo</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">9</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row"><a name="jtr" />
        <div id="jtr" />
        <div className="col-xs-12" style={{"position":"-o-sticky","top":"25px","z-index":"2"}}>
          <h3>REY'S HERO'S JOURNEY<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
        </div>
        <div className="col-xs-12" />
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
                <td style={{"padding":"0px"}} className="success">
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
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="REY">
                <td className="toonnamecolumn">Rey (Scavenger)</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">11</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="BB8">
                <td className="toonnamecolumn">BB-8</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">10</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="SMUGGLERHAN">
                <td className="toonnamecolumn">Veteran Smuggler Han Solo</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="SMUGGLERCHEWBACCA">
                <td className="toonnamecolumn">Veteran Smuggler Chewbacca</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row"><a name="cls" />
        <div id="cls" />
        <div className="col-xs-12" style={{"position":"-o-sticky","top":"25px","z-index":"2"}}>
          <h3>LUKE SKYWALKER HERO'S JOURNEY<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
        </div>
        <div className="col-xs-12" />
        <div className="col-md-6 tablestart notmainteam">
          <h4><small /></h4>
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
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="PRINCESSLEIA">
                <td className="toonnamecolumn">Princess Leia</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="R2D2_LEGENDARY">
                <td className="toonnamecolumn">R2-D2</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">12</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="STORMTROOPERHAN">
                <td className="toonnamecolumn">Stormtrooper Han</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">9</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="OLDBENKENOBI">
                <td className="toonnamecolumn">Obi-Wan Kenobi (Old Ben)</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">12</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row"><a name="r2d2" />
        <div id="r2d2" />
        <div className="col-xs-12" style={{"position":"-o-sticky","top":"25px","z-index":"2"}}>
          <h3>DARING DROID<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
        </div>
        <div className="col-xs-12" />
        <div className="col-md-6 tablestart notmainteam">
          <h4><small /></h4>
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
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">12</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="DEATHTROOPER">
                <td className="toonnamecolumn">Death Trooper</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="danger rarity">5</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="DIRECTORKRENNIC">
                <td className="toonnamecolumn">Director Krennic</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="danger rarity">6</td>
                <td className="danger">7</td>
                <td className="success">85</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="EMPERORPALPATINE">
                <td className="toonnamecolumn">Emperor Palpatine</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">12</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="GARSAXON">
                <td className="toonnamecolumn">Gar Saxon</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="danger rarity">5</td>
                <td className="danger">5</td>
                <td className="success">85</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="VEERS">
                <td className="toonnamecolumn">General Veers</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="COLONELSTARCK">
                <td className="toonnamecolumn">Colonel Starck</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="danger">7</td>
                <td className="success">85</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="GRANDADMIRALTHRAWN">
                <td className="toonnamecolumn">Grand Admiral Thrawn</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">12</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="GRANDMOFFTARKIN">
                <td className="toonnamecolumn">Grand Moff Tarkin</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">10</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="IMPERIALPROBEDROID">
                <td className="toonnamecolumn">Imperial Probe Droid</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="danger rarity">5</td>
                <td className="danger">7</td>
                <td className="success">85</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="IMPERIALSUPERCOMMANDO">
                <td className="toonnamecolumn">Imperial Super Commando</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="danger rarity">4</td>
                <td className="danger">6</td>
                <td className="success">85</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="MAGMATROOPER">
                <td className="toonnamecolumn">Magmatrooper</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="danger">7</td>
                <td className="success">85</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="ROYALGUARD">
                <td className="toonnamecolumn">Royal Guard</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="danger">7</td>
                <td className="success">85</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="SHORETROOPER">
                <td className="toonnamecolumn">Shoretrooper</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="danger rarity">5</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="SNOWTROOPER">
                <td className="toonnamecolumn">Snowtrooper</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="STORMTROOPER">
                <td className="toonnamecolumn">Stormtrooper</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="TIEFIGHTERPILOT">
                <td className="toonnamecolumn">TIE Fighter Pilot</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row"><a name="bb8" />
        <div id="bb8" />
        <div className="col-xs-12" style={{"position":"-o-sticky","top":"25px","z-index":"2"}}>
          <h3>PIECES &amp; PLANS<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
        </div>
        <div className="col-xs-12" />
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
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="FIRSTORDEROFFICERMALE">
                <td className="toonnamecolumn">First Order Officer</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="FIRSTORDERTROOPER">
                <td className="toonnamecolumn">First Order Stormtrooper</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="FIRSTORDERTIEPILOT">
                <td className="toonnamecolumn">First Order TIE Pilot</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="KYLOREN">
                <td className="toonnamecolumn">Kylo Ren</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">12</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="FIRSTORDEREXECUTIONER">
                <td className="toonnamecolumn">First Order Executioner</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">9</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="KYLORENUNMASKED">
                <td className="toonnamecolumn">Kylo Ren (Unmasked)</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">12</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="FIRSTORDERSPECIALFORCESPILOT">
                <td className="toonnamecolumn">First Order SF TIE Pilot</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="danger">7</td>
                <td className="success">85</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row"><a name="yoda" />
        <div id="yoda" />
        <div className="col-xs-12" style={{"position":"-o-sticky","top":"25px","z-index":"2"}}>
          <h3>GRANDMASTER'S TRAINING<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
        </div>
        <div className="col-xs-12" />
        <div className="col-md-6 tablestart notmainteam">
          <h4><small /></h4>
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
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="danger rarity">5</td>
                <td className="danger">6</td>
                <td className="success">85</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="AHSOKATANO">
                <td className="toonnamecolumn">Ahsoka Tano</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">13</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="BARRISSOFFEE">
                <td className="toonnamecolumn">Barriss Offee</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="EETHKOTH">
                <td className="toonnamecolumn">Eeth Koth</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="danger rarity">4</td>
                <td className="danger">1</td>
                <td className="danger">1</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="EZRABRIDGERS3">
                <td className="toonnamecolumn">Ezra Bridger</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">11</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="GENERALKENOBI">
                <td className="toonnamecolumn">General Kenobi</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">13</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="HERMITYODA">
                <td className="toonnamecolumn">Hermit Yoda</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">13</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="IMAGUNDI">
                <td className="toonnamecolumn">Ima-Gun Di</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="danger">7</td>
                <td className="danger">60</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="JEDIKNIGHTCONSULAR">
                <td className="toonnamecolumn">Jedi Consular</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">10</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="ANAKINKNIGHT">
                <td className="toonnamecolumn">Jedi Knight Anakin</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">13</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="JEDIKNIGHTGUARDIAN">
                <td className="toonnamecolumn">Jedi Knight Guardian</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="danger">7</td>
                <td className="danger">68</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="KANANJARRUSS3">
                <td className="toonnamecolumn">Kanan Jarrus</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="KITFISTO">
                <td className="toonnamecolumn">Kit Fisto</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="danger rarity">5</td>
                <td className="danger">6</td>
                <td className="danger">60</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="LUMINARAUNDULI">
                <td className="toonnamecolumn">Luminara Unduli</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">11</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="MACEWINDU">
                <td className="toonnamecolumn">Mace Windu</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">11</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="OLDBENKENOBI">
                <td className="toonnamecolumn">Obi-Wan Kenobi (Old Ben)</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">12</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="PLOKOON">
                <td className="toonnamecolumn">Plo Koon</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">9</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="QUIGONJINN">
                <td className="toonnamecolumn">Qui-Gon Jinn</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row"><a name="palpatine" />
        <div id="palpatine" />
        <div className="col-xs-12" style={{"position":"-o-sticky","top":"25px","z-index":"2"}}>
          <h3>EMPEROR'S DEMISE<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
        </div>
        <div className="col-xs-12" />
        <div className="col-md-6 tablestart notmainteam">
          <h4><small /></h4>
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
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">9</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="FULCRUMAHSOKA">
                <td className="toonnamecolumn">Ahsoka Tano (Fulcrum)</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="danger">7</td>
                <td className="success">85</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="BAZEMALBUS">
                <td className="toonnamecolumn">Baze Malbus</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="danger rarity">5</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="BIGGSDARKLIGHTER">
                <td className="toonnamecolumn">Biggs Darklighter</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="BISTAN">
                <td className="toonnamecolumn">Bistan</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="danger">5</td>
                <td className="success">85</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="BODHIROOK">
                <td className="toonnamecolumn">Bodhi Rook</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="danger">7</td>
                <td className="danger">65</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="HOTHHAN">
                <td className="toonnamecolumn">Captain Han Solo</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="danger rarity">4</td>
                <td className="danger">7</td>
                <td className="success">85</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="CASSIANANDOR">
                <td className="toonnamecolumn">Cassian Andor</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="CHIRRUTIMWE">
                <td className="toonnamecolumn">Chirrut Îmwe</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="CHOPPERS3">
                <td className="toonnamecolumn">Chopper</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="COMMANDERLUKESKYWALKER">
                <td className="toonnamecolumn">Commander Luke Skywalker</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">13</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="EZRABRIDGERS3">
                <td className="toonnamecolumn">Ezra Bridger</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">11</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="ZEBS3">
                <td className="toonnamecolumn">Garazeb "Zeb" Orrelios</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="HANSOLO">
                <td className="toonnamecolumn">Han Solo</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">13</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="HERASYNDULLAS3">
                <td className="toonnamecolumn">Hera Syndulla</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">9</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="HOTHREBELSCOUT">
                <td className="toonnamecolumn">Hoth Rebel Scout</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="HOTHREBELSOLDIER">
                <td className="toonnamecolumn">Hoth Rebel Soldier</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="JYNERSO">
                <td className="toonnamecolumn">Jyn Erso</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="K2SO">
                <td className="toonnamecolumn">K-2SO</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="KANANJARRUSS3">
                <td className="toonnamecolumn">Kanan Jarrus</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="ADMINISTRATORLANDO">
                <td className="toonnamecolumn">Lando Calrissian</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">11</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="LOBOT">
                <td className="toonnamecolumn">Lobot</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="danger rarity">4</td>
                <td className="danger">1</td>
                <td className="danger">1</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="LUKESKYWALKER">
                <td className="toonnamecolumn">Luke Skywalker (Farmboy)</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="OLDBENKENOBI">
                <td className="toonnamecolumn">Obi-Wan Kenobi (Old Ben)</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">12</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="PAO">
                <td className="toonnamecolumn">Pao</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="PRINCESSLEIA">
                <td className="toonnamecolumn">Princess Leia</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="R2D2_LEGENDARY">
                <td className="toonnamecolumn">R2-D2</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">12</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="HOTHLEIA">
                <td className="toonnamecolumn">Rebel Officer Leia Organa</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="SABINEWRENS3">
                <td className="toonnamecolumn">Sabine Wren</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">10</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="SCARIFREBEL">
                <td className="toonnamecolumn">Scarif Rebel Pathfinder</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="danger rarity">6</td>
                <td className="danger">7</td>
                <td className="success">85</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="STORMTROOPERHAN">
                <td className="toonnamecolumn">Stormtrooper Han</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">9</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="WEDGEANTILLES">
                <td className="toonnamecolumn">Wedge Antilles</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row"><a name="thrawn" />
        <div id="thrawn" />
        <div className="col-xs-12" style={{"position":"-o-sticky","top":"25px","z-index":"2"}}>
          <h3>ARTIST OF WAR<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
        </div>
        <div className="col-xs-12" />
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
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="EZRABRIDGERS3">
                <td className="toonnamecolumn">Ezra Bridger</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">11</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="ZEBS3">
                <td className="toonnamecolumn">Garazeb "Zeb" Orrelios</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="HERASYNDULLAS3">
                <td className="toonnamecolumn">Hera Syndulla</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">9</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="KANANJARRUSS3">
                <td className="toonnamecolumn">Kanan Jarrus</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">8</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="SABINEWRENS3">
                <td className="toonnamecolumn">Sabine Wren</td>
                <td style={{"padding":"0px"}} className="default">
                  <table className="table" />
                </td>
                <td className="success rarity">7</td>
                <td className="success">10</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row"><a name="chimaera" />
        <div id="chimaera" />
        <div className="col-xs-12" style={{"position":"-o-sticky","top":"25px","z-index":"2"}}>
          <h3>IMPERIAL CHIMAERA<br /><small>Requirements - 7 Star - Gear 8 - Level 80</small></h3>
        </div>
        <div className="col-xs-12" />
        <div className="col-md-6 tablestart notmainteam">
          <h4> - <small>Two ships must be Ghost and Phantom II. 3 ships + Home One required</small></h4>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th width="30%">Name</th>
                <th className="hidden" />
                <th width="8%">⭐</th>
                <th className="hidden" />
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
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="GHOST">
                <td className="toonnamecolumn">Ghost</td>
                <td className="hidden">true</td>
                <td className="success rarity">7</td>
                <td className="hidden">true</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="PHANTOM2">
                <td className="toonnamecolumn">Phantom II</td>
                <td className="hidden">true</td>
                <td className="success rarity">7</td>
                <td className="hidden">true</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="XWINGRED3">
                <td className="toonnamecolumn">Biggs Darklighter's X-wing</td>
                <td className="hidden">true</td>
                <td className="success rarity">7</td>
                <td className="hidden">true</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="XWINGRED2">
                <td className="toonnamecolumn">Wedge Antilles's X-wing</td>
                <td className="hidden">true</td>
                <td className="success rarity">7</td>
                <td className="hidden">true</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
              <tr className="UWINGSCARIF">
                <td className="toonnamecolumn">Bistan's U-wing</td>
                <td className="hidden">true</td>
                <td className="danger rarity">6</td>
                <td className="hidden">true</td>
                <td className="success">85</td>
                <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
              </tr>
              <tr className="UWINGROGUEONE">
                <td className="toonnamecolumn">Cassian's U-wing</td>
                <td className="hidden">true</td>
                <td className="success rarity">7</td>
                <td className="hidden">true</td>
                <td className="success">85</td>
                <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div><button type="button" id="clearlocal" className="btn btn-primary">Clear localStorage</button></div>
    </div>
  );

}

export default Events;
