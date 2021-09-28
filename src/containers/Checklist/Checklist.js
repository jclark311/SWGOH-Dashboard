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

const Aside = () => {
  return (
    <>
      <div className="content-container-aside">
        <div className="panel panel-default panel-profile m-b-sm hidden-xs">
          <div className="character-card panel-heading no-side"></div>
          <div className="panel-body">
            <h5 className="panel-title text-center m-b-sm">
              Erlkönig
            </h5>
            <ul className="panel-menu text-center">
              <li className="panel-menu-item">
                User #
                <h5 className="m-y-0">315410</h5>
              </li>
              <li className="panel-menu-item">
                Arena Rank
                <h5 className="m-y-0">470</h5>
              </li>
              <li className="panel-menu-item">
                Level
                <h5 className="m-y-0">85</h5>
              </li>
            </ul>
            <p>Guild <strong className="pull-right"><a href="/g/16891/preogative/">preogative</a></strong></p>
            <p>Ally Code <strong className="pull-right"><span className="btn-copy" style={{"text-decoration-line": "underline", "text-decoration-style": "dotted", "cursor": "pointer"}} data-clipboard-text="388-591-888">388-591-888 <span
                    className="icon icon-copy"></span></span></strong></p>
            <p>Joined <strong className="pull-right">Jan 15, 2019</strong></p>
          </div>
        </div>

        <div className="list-group m-b-sm mobile-nav hidden-xs">
          <a href="/p/388591888/" className="list-group-item">
            <span className="icon icon-chevron-thin-right pull-right"></span>
            <span className="icon icon-man"></span> Profile
          </a>
          <a href="/p/388591888/characters/" className="list-group-item">
            <span className="icon icon-chevron-thin-right pull-right"></span>
            <span className="icon icon-users"></span> Characters
          </a>
          <a href="/p/388591888/squads/" className="list-group-item">
            <span className="icon icon-chevron-thin-right pull-right"></span>
            <span className="icon icon-grid"></span> Squads
          </a>
          <a href="/p/388591888/gac-history/" className="list-group-item">
            <span className="icon icon-chevron-thin-right pull-right"></span>
            <span className="icon icon-flow-tree"></span> GAC History
          </a>
          <a href="/p/388591888/ships/" className="list-group-item">
            <span className="icon icon-chevron-thin-right pull-right"></span>
            <span className="icon icon-paper-plane"></span> Ships
          </a>
          <a href="/p/388591888/mods/" className="list-group-item">
            <span className="icon icon-chevron-thin-right pull-right"></span>
            <span className="icon icon-hair-cross"></span> Mods
          </a>
          <a href="/p/388591888/zetas/" className="list-group-item">
            <span className="icon icon-chevron-thin-right pull-right"></span>
            <span className="icon icon-star-outlined"></span> Zetas
          </a>
          <a href="/p/388591888/gear-needed/" className="list-group-item">
            <span className="icon icon-chevron-thin-right pull-right"></span>
            <span className="icon icon-laptop"></span> Gear Needed
          </a>
          <a href="/p/388591888/gl-gear-needed/" className="list-group-item">
            <span className="icon icon-chevron-thin-right pull-right"></span>
            <span className="icon icon-laptop"></span> Galactic Legends Gear Needed
          </a>
          <a href="/p/388591888/checklist/events/" className="list-group-item active">
            <span className="icon icon-chevron-thin-right pull-right"></span>
            <span className="icon icon-laptop"></span> Checklist
          </a>
          <a href="/settings/" className="settings-btn hide list-group-item">
            <span className="icon icon-chevron-thin-right pull-right"></span>
            <span className="icon icon-cog"></span> Settings
          </a>
        </div>
        <div className="list-group m-b-sm visible-xs-block">
          <a href="javascript:;" className="list-group-item mobile-nav-handler">
            <span className="icon icon-chevron-thin-down pull-right"></span>
            Player Navigation
          </a>
        </div>
      </div>
    </>
  )
}

const CharacterList = () => {
  return (
    <>
      <div className="content-container-primary character-list">
        <ul className="list-group media-list media-list-stream m-t-0">
          <li className="list-group-item p-a">
            <h3 className="m-a-0">Erlkönig's Checklist</h3>
          </li>

          <div className="checklist-app" data-player-id="388591888">
            <div>
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
              <div className="checklist-container">
                <li className="media list-group-item">
                  <h4>Clash on Kamino - General Skywalker<p className="check">✔</p>
                  </h4>
                  <div className="row">
                    <p className="description">Requires: Gear 12, Level 85, 7*, 40000 Power<br />Recommended: Gear 12, Level 85, 7*, 40000 Power</p>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="btn-group pull-left"><a className="btn btn-default " data-toggle="collapse"><span className="icon"></span><span className="hidden-xs">Recommended</span></a><a className="btn btn-default  active" data-toggle="collapse"><span
                            className="icon"></span> Required</a></div>

                    </div>
                    <div className="pull-right total-display">Passing Units: <span>16 / 15</span></div>
                  </div>
                </li>
                <li className="media list-group-item">
                  <div className="row">
                    <div className="ReactTable checklist-container__table -striped -highlight">
                      <div className="rt-table" role="grid">
                        <div className="rt-thead -header" style={{"min-width": "600px"}}>
                          <div className="rt-tr" role="row">
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Name</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Rarity</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Gear Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Power</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Ready

                            </div>
                          </div>
                        </div>
                        <div className="rt-tbody" style={{"min-width": "600px"}}>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Anakin's Eta-2 Starfighter</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">1</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">58278</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Negotiator</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">5</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">1</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">53911</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Endurance</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">1</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">43936</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Ahsoka Tano's Jedi Starfighter</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">1</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">65298</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Clone Sergeant's ARC-170</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">1</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">41232</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Jedi Consular's Starfighter</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">1</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">41174</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Plo Koon's Jedi Starfighter</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">1</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">40085</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Rex's ARC-170</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">1</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">57752</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Umbaran Starfighter</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">1</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">58818</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Ahsoka Tano</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">25773</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>C-3PO</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">30469</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>General Kenobi</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">26433</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Padmé Amidala</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">30513</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Shaak Ti</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">26818</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Asajj Ventress</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">25027</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>B1 Battle Droid</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">25887</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>B2 Super Battle Droid</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">23746</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Droideka</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">23751</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>IG-100 MagnaGuard</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">22899</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-loading">
                        <div className="-loading-inner">Loading...</div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <div className="checklist-container">
                <li className="media list-group-item">
                  <h4>Pieces and Plans - BB8<p className="check">✔</p>
                  </h4>
                  <div className="row">
                    <p className="description">Requires: Gear 7, Level 80, 5*<br />Recommended: Gear 9, Level 85, 7*</p>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="btn-group pull-left"><a className="btn btn-default " data-toggle="collapse"><span className="icon"></span><span className="hidden-xs">Recommended</span></a><a className="btn btn-default  active" data-toggle="collapse"><span
                            className="icon"></span> Required</a></div>
                      <div className="btn-group guild-progress-container">
                        <div className="patreon-signup-link"><a href="https://www.patreon.com/bePatron?u=17201370"><img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" className="patreon-signup-image" alt="Become a Patreon" /></a>
                        </div> to Check your Guild's Progress
                      </div>
                    </div>
                    <div className="pull-right total-display">Passing Units: <span>8 / 5</span></div>
                  </div>
                </li>
                <li className="media list-group-item">
                  <div className="row">
                    <div className="ReactTable checklist-container__table -striped -highlight">
                      <div className="rt-table" role="grid">
                        <div className="rt-thead -header" style={{"min-width": "500px"}}>
                          <div className="rt-tr" role="row">
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Name</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Rarity</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Gear Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Ready

                            </div>
                          </div>
                        </div>
                        <div className="rt-tbody" style={{"min-width": "500px"}}>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Captain Phasma</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>First Order Executioner</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">9</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>First Order Officer</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>First Order SF TIE Pilot</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>First Order Stormtrooper</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>First Order TIE Pilot</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">10</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Kylo Ren</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Kylo Ren (Unmasked)</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-loading">
                        <div className="-loading-inner">Loading...</div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <div className="checklist-container">
                <li className="media list-group-item">
                  <h4>One Famous Wookie - Chewbacca<p className="check">✔</p>
                  </h4>
                  <div className="row">
                    <p className="description">Requires: Gear 11, Level 85, 5*<br />Recommended: Gear 12, Level 85, 7*</p>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="btn-group pull-left"><a className="btn btn-default " data-toggle="collapse"><span className="icon"></span><span className="hidden-xs">Recommended</span></a><a className="btn btn-default  active" data-toggle="collapse"><span
                            className="icon"></span> Required</a></div>
                      <div className="btn-group guild-progress-container">
                        <div className="patreon-signup-link"><a href="https://www.patreon.com/bePatron?u=17201370"><img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" className="patreon-signup-image" alt="Become a Patreon" /></a>
                        </div> to Check your Guild's Progress
                      </div>
                    </div>
                    <div className="pull-right total-display">Passing Units: <span>5 / 5</span></div>
                  </div>
                </li>
                <li className="media list-group-item">
                  <div className="row">
                    <div className="ReactTable checklist-container__table -striped -highlight">
                      <div className="rt-table" role="grid">
                        <div className="rt-thead -header" style={{"min-width": "500px"}}>
                          <div className="rt-tr" role="row">
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Name</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Rarity</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Gear Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Ready

                            </div>
                          </div>
                        </div>
                        <div className="rt-tbody" style={{"min-width": "500px"}}>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Aurra Sing</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">4</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">6</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Boba Fett</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Bossk</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Cad Bane</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                8
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Dengar</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Embo</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                9
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Greedo</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                8
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>IG-88</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Jango Fett</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Zam Wesell</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">6</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">6</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">50</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-loading">
                        <div className="-loading-inner">Loading...</div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <div className="checklist-container">
                <li className="media list-group-item">
                  <h4>Emporers Demise - Emporer Palpatine<p className="check">✔</p>
                  </h4>
                  <div className="row">
                    <p className="description">Requires: Gear 7, Level 70, 5*<br />Recommended: Gear 9, Level 80, 7*</p>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="btn-group pull-left"><a className="btn btn-default " data-toggle="collapse"><span className="icon"></span><span className="hidden-xs">Recommended</span></a><a className="btn btn-default  active" data-toggle="collapse"><span
                            className="icon"></span> Required</a></div>
                      <div className="btn-group guild-progress-container">
                        <div className="patreon-signup-link"><a href="https://www.patreon.com/bePatron?u=17201370"><img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" className="patreon-signup-image" alt="Become a Patreon" /></a>
                        </div> to Check your Guild's Progress
                      </div>
                    </div>
                    <div className="pull-right total-display">Passing Units: <span>31 / 5</span></div>
                  </div>
                </li>
                <li className="media list-group-item">
                  <div className="row">
                    <div className="ReactTable checklist-container__table -striped -highlight">
                      <div className="rt-table" role="grid">
                        <div className="rt-thead -header" style={{"min-width": "500px"}}>
                          <div className="rt-tr" role="row">
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Name</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Rarity</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Gear Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Ready

                            </div>
                          </div>
                        </div>
                        <div className="rt-tbody" style={{"min-width": "500px"}}>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Admiral Ackbar</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">9</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Ahsoka Tano (Fulcrum)</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Baze Malbus</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">5</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Biggs Darklighter</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Bistan</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">5</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Bodhi Rook</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">65</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>C-3PO</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Captain Han Solo</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Cassian Andor</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Chewbacca</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Chirrut Îmwe</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Chopper</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Commander Luke Skywalker</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Ezra Bridger</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Garazeb "Zeb" Orrelios</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Han Solo</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Hera Syndulla</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">9</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Hoth Rebel Scout</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Hoth Rebel Soldier</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Jyn Erso</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>K-2SO</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Kanan Jarrus</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Lando Calrissian</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Lobot</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">4</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">1</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">1</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Luke Skywalker (Farmboy)</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Obi-Wan Kenobi (Old Ben)</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Pao</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Princess Leia</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>R2-D2</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Rebel Officer Leia Organa</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Sabine Wren</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">10</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Scarif Rebel Pathfinder</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">6</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Stormtrooper Han</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">9</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Wedge Antilles</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-loading">
                        <div className="-loading-inner">Loading...</div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <div className="checklist-container">
                <li className="media list-group-item">
                  <h4>Reys Hero Training - Jedi Training Rey<p className="check">✔</p>
                  </h4>
                  <div className="row">
                    <p className="description">Requires: Gear 7, Level 75, 7*<br />Recommended: Gear 9, Level 85, 7*</p>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="btn-group pull-left"><a className="btn btn-default " data-toggle="collapse"><span className="icon"></span><span className="hidden-xs">Recommended</span></a><a className="btn btn-default  active" data-toggle="collapse"><span
                            className="icon"></span> Required</a></div>
                      <div className="btn-group guild-progress-container">
                        <div className="patreon-signup-link"><a href="https://www.patreon.com/bePatron?u=17201370"><img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" className="patreon-signup-image" alt="Become a Patreon" /></a>
                        </div> to Check your Guild's Progress
                      </div>
                    </div>
                    <div className="pull-right total-display">Passing Units: <span>5 / 5</span></div>
                  </div>
                </li>
                <li className="media list-group-item">
                  <div className="row">
                    <div className="ReactTable checklist-container__table -striped -highlight">
                      <div className="rt-table" role="grid">
                        <div className="rt-thead -header" style={{"min-width": "500px"}}>
                          <div className="rt-tr" role="row">
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Name</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Rarity</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Gear Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Ready

                            </div>
                          </div>
                        </div>
                        <div className="rt-tbody" style={{"min-width": "500px"}}>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Finn</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Rey (Scavenger)</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>BB-8</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">10</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Veteran Smuggler Chewbacca</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Veteran Smuggler Han Solo</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-loading">
                        <div className="-loading-inner">Loading...</div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <div className="checklist-container">
                <li className="media list-group-item">
                  <h4>Luke Skywalker Hero Training - Commander Luke Skywalker<p className="check">✔</p>
                  </h4>
                  <div className="row">
                    <p className="description">Requires: Gear 7, Level 75, 7*<br />Recommended: Gear 9, Level 85, 7*</p>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="btn-group pull-left"><a className="btn btn-default " data-toggle="collapse"><span className="icon"></span><span className="hidden-xs">Recommended</span></a><a className="btn btn-default  active" data-toggle="collapse"><span
                            className="icon"></span> Required</a></div>
                      <div className="btn-group guild-progress-container">
                        <div className="patreon-signup-link"><a href="https://www.patreon.com/bePatron?u=17201370"><img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" className="patreon-signup-image" alt="Become a Patreon" /></a>
                        </div> to Check your Guild's Progress
                      </div>
                    </div>
                    <div className="pull-right total-display">Passing Units: <span>5 / 5</span></div>
                  </div>
                </li>
                <li className="media list-group-item">
                  <div className="row">
                    <div className="ReactTable checklist-container__table -striped -highlight">
                      <div className="rt-table" role="grid">
                        <div className="rt-thead -header" style={{"min-width": "500px"}}>
                          <div className="rt-tr" role="row">
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Name</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Rarity</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Gear Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Ready

                            </div>
                          </div>
                        </div>
                        <div className="rt-tbody" style={{"min-width": "500px"}}>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Luke Skywalker (Farmboy)</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Princess Leia</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>R2-D2</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Stormtrooper Han</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">9</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Obi-Wan Kenobi (Old Ben)</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-loading">
                        <div className="-loading-inner">Loading...</div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <div className="checklist-container">
                <li className="media list-group-item">
                  <h4>Daring Droid - R2D2<p className="check">✔</p>
                  </h4>
                  <div className="row">
                    <p className="description">Requires: Gear 8, Level 80, 5*<br />Recommended: Gear 9, Level 85, 7*</p>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="btn-group pull-left"><a className="btn btn-default " data-toggle="collapse"><span className="icon"></span><span className="hidden-xs">Recommended</span></a><a className="btn btn-default  active" data-toggle="collapse"><span
                            className="icon"></span> Required</a></div>
                      <div className="btn-group guild-progress-container">
                        <div className="patreon-signup-link"><a href="https://www.patreon.com/bePatron?u=17201370"><img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" className="patreon-signup-image" alt="Become a Patreon" /></a>
                        </div> to Check your Guild's Progress
                      </div>
                    </div>
                    <div className="pull-right total-display">Passing Units: <span>11 / 5</span></div>
                  </div>
                </li>
                <li className="media list-group-item">
                  <div className="row">
                    <div className="ReactTable checklist-container__table -striped -highlight">
                      <div className="rt-table" role="grid">
                        <div className="rt-thead -header" style={{"min-width": "500px"}}>
                          <div className="rt-tr" role="row">
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Name</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Rarity</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Gear Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Ready

                            </div>
                          </div>
                        </div>
                        <div className="rt-tbody" style={{"min-width": "500px"}}>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Colonel Starck</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">7</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Darth Vader</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Death Trooper</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">5</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Director Krennic</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">6</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">7</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Emperor Palpatine</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Gar Saxon</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">6</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">7</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>General Veers</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Grand Admiral Thrawn</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Grand Moff Tarkin</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">10</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Imperial Probe Droid</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">6</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">7</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Imperial Super Commando</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">5</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Magmatrooper</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">7</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Range Trooper</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">6</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">6</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Royal Guard</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">7</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Shoretrooper</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">6</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Snowtrooper</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Stormtrooper</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>TIE Fighter Pilot</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-loading">
                        <div className="-loading-inner">Loading...</div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <div className="checklist-container">
                <li className="media list-group-item">
                  <h4>Legend of the old Republic - Jedi Knight Revan<p className="check">✔</p>
                  </h4>
                  <div className="row">
                    <p className="description">Requires: Gear 7, Level 80, 7*<br />Recommended: Gear 10, Level 85, 7*</p>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="btn-group pull-left"><a className="btn btn-default " data-toggle="collapse"><span className="icon"></span><span className="hidden-xs">Recommended</span></a><a className="btn btn-default  active" data-toggle="collapse"><span
                            className="icon"></span> Required</a></div>
                      <div className="btn-group guild-progress-container">
                        <div className="patreon-signup-link"><a href="https://www.patreon.com/bePatron?u=17201370"><img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" className="patreon-signup-image" alt="Become a Patreon" /></a>
                        </div> to Check your Guild's Progress
                      </div>
                    </div>
                    <div className="pull-right total-display">Passing Units: <span>5 / 5</span></div>
                  </div>
                </li>
                <li className="media list-group-item">
                  <div className="row">
                    <div className="ReactTable checklist-container__table -striped -highlight">
                      <div className="rt-table" role="grid">
                        <div className="rt-thead -header" style={{"min-width": "500px"}}>
                          <div className="rt-tr" role="row">
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Name</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Rarity</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Gear Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Ready

                            </div>
                          </div>
                        </div>
                        <div className="rt-tbody" style={{"min-width": "500px"}}>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Bastila Shan</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Jolee Bindo</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>T3-M4</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Mission Vao</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Zaalbar</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-loading">
                        <div className="-loading-inner">Loading...</div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <div className="checklist-container">
                <li className="media list-group-item">
                  <h4>Star Forge Showdown - Darth Malak<p className="check">✔</p>
                  </h4>
                  <div className="row">
                    <p className="description">Requires: Gear 9, Level 80, 7*, 17500 Power<br />Recommended: Gear 12, Level 85, 7*, 17500 Power</p>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="btn-group pull-left"><a className="btn btn-default " data-toggle="collapse"><span className="icon"></span><span className="hidden-xs">Recommended</span></a><a className="btn btn-default  active" data-toggle="collapse"><span
                            className="icon"></span> Required</a></div>
                      <div className="btn-group guild-progress-container">
                        <div className="patreon-signup-link"><a href="https://www.patreon.com/bePatron?u=17201370"><img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" className="patreon-signup-image" alt="Become a Patreon" /></a>
                        </div> to Check your Guild's Progress
                      </div>
                    </div>
                    <div className="pull-right total-display">Passing Units: <span>10 / 5</span></div>
                  </div>
                </li>
                <li className="media list-group-item">
                  <div className="row">
                    <div className="ReactTable checklist-container__table -striped -highlight">
                      <div className="rt-table" role="grid">
                        <div className="rt-thead -header" style={{"min-width": "600px"}}>
                          <div className="rt-tr" role="row">
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Name</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Rarity</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Gear Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Power</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Ready

                            </div>
                          </div>
                        </div>
                        <div className="rt-tbody" style={{"min-width": "600px"}}>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Carth Onasi</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">18987</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>HK-47</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">27603</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Juhani</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">17583</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Canderous Ordo</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">16837</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Bastila Shan (Fallen)</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">25452</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Bastila Shan</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">20721</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Jolee Bindo</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">20560</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>T3-M4</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                8
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">13792</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Mission Vao</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">20199</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Zaalbar</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">20008</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Darth Revan</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">35308</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Jedi Knight Revan</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">26664</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-loading">
                        <div className="-loading-inner">Loading...</div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <div className="checklist-container">
                <li className="media list-group-item">
                  <h4>Contact Protocol - C3P0<p className="check">✔</p>
                  </h4>
                  <div className="row">
                    <p className="description">Requires: Gear 9, Level 80, 5*<br />Recommended: Gear 11, Level 85, 7*</p>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="btn-group pull-left"><a className="btn btn-default " data-toggle="collapse"><span className="icon"></span><span className="hidden-xs">Recommended</span></a><a className="btn btn-default  active" data-toggle="collapse"><span
                            className="icon"></span> Required</a></div>
                      <div className="btn-group guild-progress-container">
                        <div className="patreon-signup-link"><a href="https://www.patreon.com/bePatron?u=17201370"><img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" className="patreon-signup-image" alt="Become a Patreon" /></a>
                        </div> to Check your Guild's Progress
                      </div>
                    </div>
                    <div className="pull-right total-display">Passing Units: <span>6 / 5</span></div>
                  </div>
                </li>
                <li className="media list-group-item">
                  <div className="row">
                    <div className="ReactTable checklist-container__table -striped -highlight">
                      <div className="rt-table" role="grid">
                        <div className="rt-thead -header" style={{"min-width": "500px"}}>
                          <div className="rt-tr" role="row">
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Name</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Rarity</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Gear Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Ready

                            </div>
                          </div>
                        </div>
                        <div className="rt-tbody" style={{"min-width": "500px"}}>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Chief Chirpa</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Ewok Elder</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">10</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Ewok Scout</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                8
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Logray</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">10</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Paploo</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Teebo</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">9</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Wicket</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-loading">
                        <div className="-loading-inner">Loading...</div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <div className="checklist-container">
                <li className="media list-group-item">
                  <h4>Grand Masters Training - Grand Master Yoda<p className="check">✔</p>
                  </h4>
                  <div className="row">
                    <p className="description">Requires: Gear 8, Level 75, 5*<br />Recommended: Gear 9, Level 80, 7*</p>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="btn-group pull-left"><a className="btn btn-default " data-toggle="collapse"><span className="icon"></span><span className="hidden-xs">Recommended</span></a><a className="btn btn-default  active" data-toggle="collapse"><span
                            className="icon"></span> Required</a></div>
                      <div className="btn-group guild-progress-container">
                        <div className="patreon-signup-link"><a href="https://www.patreon.com/bePatron?u=17201370"><img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" className="patreon-signup-image" alt="Become a Patreon" /></a>
                        </div> to Check your Guild's Progress
                      </div>
                    </div>
                    <div className="pull-right total-display">Passing Units: <span>19 / 5</span></div>
                  </div>
                </li>
                <li className="media list-group-item">
                  <div className="row">
                    <div className="ReactTable checklist-container__table -striped -highlight">
                      <div className="rt-table" role="grid">
                        <div className="rt-thead -header" style={{"min-width": "500px"}}>
                          <div className="rt-tr" role="row">
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Name</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Rarity</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Gear Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Ready

                            </div>
                          </div>
                        </div>
                        <div className="rt-tbody" style={{"min-width": "500px"}}>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Aayla Secura</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">5</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">6</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Ahsoka Tano</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Barriss Offee</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Bastila Shan</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Eeth Koth</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">5</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">1</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">1</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Ezra Bridger</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>General Kenobi</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Grand Master Yoda</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Hermit Yoda</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Ima-Gun Di</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">7</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">60</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Jedi Consular</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">10</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Jedi Knight Anakin</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Jedi Knight Guardian</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">7</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">68</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Jedi Knight Revan</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Jolee Bindo</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Juhani</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Kanan Jarrus</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Kit Fisto</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">5</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">6</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content"><span className="squad-template__unit-cell-data">60</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                              No
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Luminara Unduli</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Mace Windu</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Obi-Wan Kenobi (Old Ben)</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Plo Koon</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">9</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Qui-Gon Jinn</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Shaak Ti</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-loading">
                        <div className="-loading-inner">Loading...</div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <div className="checklist-container">
                <li className="media list-group-item">
                  <h4>Scourge of the Old Republic - Darth Revan<p className="check">✔</p>
                  </h4>
                  <div className="row">
                    <p className="description">Requires: Gear 9, Level 80, 7*<br />Recommended: Gear 10, Level 85, 7*</p>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="btn-group pull-left"><a className="btn btn-default " data-toggle="collapse"><span className="icon"></span><span className="hidden-xs">Recommended</span></a><a className="btn btn-default  active" data-toggle="collapse"><span
                            className="icon"></span> Required</a></div>
                      <div className="btn-group guild-progress-container">
                        <div className="patreon-signup-link"><a href="https://www.patreon.com/bePatron?u=17201370"><img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" className="patreon-signup-image" alt="Become a Patreon" /></a>
                        </div> to Check your Guild's Progress
                      </div>
                    </div>
                    <div className="pull-right total-display">Passing Units: <span>5 / 5</span></div>
                  </div>
                </li>
                <li className="media list-group-item">
                  <div className="row">
                    <div className="ReactTable checklist-container__table -striped -highlight">
                      <div className="rt-table" role="grid">
                        <div className="rt-thead -header" style={{"min-width": "500px"}}>
                          <div className="rt-tr" role="row">
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Name</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Rarity</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Gear Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Ready

                            </div>
                          </div>
                        </div>
                        <div className="rt-tbody" style={{"min-width": "500px"}}>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Carth Onasi</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>HK-47</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Juhani</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">12</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Canderous Ordo</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Bastila Shan (Fallen)</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                13
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-loading">
                        <div className="-loading-inner">Loading...</div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <div className="checklist-container">
                <li className="media list-group-item">
                  <h4>Artist of War - General Thrawn<p className="check">✔</p>
                  </h4>
                  <div className="row">
                    <p className="description">Requires: Gear 7, Level 80, 5*<br />Recommended: Gear 9, Level 85, 7*</p>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="btn-group pull-left"><a className="btn btn-default " data-toggle="collapse"><span className="icon"></span><span className="hidden-xs">Recommended</span></a><a className="btn btn-default  active" data-toggle="collapse"><span
                            className="icon"></span> Required</a></div>
                      <div className="btn-group guild-progress-container">
                        <div className="patreon-signup-link"><a href="https://www.patreon.com/bePatron?u=17201370"><img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" className="patreon-signup-image" alt="Become a Patreon" /></a>
                        </div> to Check your Guild's Progress
                      </div>
                    </div>
                    <div className="pull-right total-display">Passing Units: <span>6 / 5</span></div>
                  </div>
                </li>
                <li className="media list-group-item">
                  <div className="row">
                    <div className="ReactTable checklist-container__table -striped -highlight">
                      <div className="rt-table" role="grid">
                        <div className="rt-thead -header" style={{"min-width": "500px"}}>
                          <div className="rt-tr" role="row">
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Name</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              <div className="rt-resizable-header-content">Rarity</div>

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Gear Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Level

                            </div>
                            <div className="rt-th ReactTable__cell--bottom ReactTable__cell--center rt-resizable-header -cursor-pointer"  style={{"flex": "100 0 auto", "width": "100px"}}>
                              Ready

                            </div>
                          </div>
                        </div>
                        <div className="rt-tbody" style={{"min-width": "500px"}}>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Chopper</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Ezra Bridger</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                11
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Garazeb "Zeb" Orrelios</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Hera Syndulla</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">9</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -odd" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Kanan Jarrus</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">8</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                          <div className="rt-tr-group" role="rowgroup">
                            <div className="rt-tr -even" role="row">
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>Sabine Wren</div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                7
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                <div className="checklist-container__unit-cell-content checklist-container__unit-cell-content--passes-filter"><span className="squad-template__unit-cell-data">10</span></div>
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                85
                              </div>
                              <div className="rt-td checklist-container__unit-cell ReactTable__cell--center" role="gridcell" style={{"flex": "100 0 auto", "width": "100px"}}>
                                Yes
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-loading">
                        <div className="-loading-inner">Loading...</div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}

const ChecklistContainer = () => {
  return (
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
    </>
  );
}

const Checklist = ({ }) => {
  const squadsList = localStorage.getItem('squadsList');
  const squadsJSON = JSON.parse(squadsList);
  const playerRoster = localStorage.getItem('playerRoster');
  const rosterJSON = JSON.parse(playerRoster);

    var guildTokenRefreshTime = 1613064798516;
    var remainingTokens = 1;
    var remainingGuildTokens = 0;
    var tokenRefreshTime = 1613064798521;
    var hasGuildPermission = false;
    var hasToolsAccess = false;
    var isPremium = false;

  const eventPhases = []
  var phaseObject;
  var squadsObject;

  useEffect(() => {
    const playerData = localStorage.getItem('playerData')
    //console.log(`playerData: ${playerData}`)
    squadsJSON.map((squad, index) => {
      //console.log(`squadsJSON map: ${JSON.stringify(squad.events.phase, undefined, 2)}`)
      eventPhases.push(squad.events.phase)
      phaseObject = squad.events.phase
    })

    rosterJSON.map((r) => {
      console.log(`r: ${r}`)
    })

    // eventPhases.map((phase, index) => (
    //   console.log(`eventPhases map: ${JSON.stringify(phase, undefined, 2)} - index: ${index}`)
    // ))

    rosterJSON.forEach(unit => console.log(`unit: ${JSON.stringify(unit.defId)}`))
    // const filteredRoster = rosterJSON.filter(unit => unit.length < 5)
    // console.log(`filteredRoster: ${filteredRoster}`)
    //phaseObject.forEach(phase => phase.squads.map(team => team.team.map(t => console.log(`phaseObject forEach: ${JSON.stringify(t)}`))))
  });

  return (
    <>
      <Container id="content">

        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>
        <Row>
          <div className="container p-t-md">
            <BreadCrumb />
            <div className="content-container">
              <Aside />
              <CharacterList />
            </div>
          </div>
        </Row>
        <Row>
          <Col>
            <Button type="button" id="clearlocal" variant="primary">Clear localStorage</Button>
          </Col>
        </Row>
      </Container>

    </>
  );


}

export default withRouter(Checklist);
