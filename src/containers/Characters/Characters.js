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

import './Characters.css';

const BreadCrumb = () => {
  return (
    <>
      <ol className="breadcrumb">
        <li><a href="/p/388591888/">Erlkönig</a></li>
        <li className="active">Characters</li>
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
                          <h5 className="m-y-0">469</h5>
                      </li>
                      <li className="panel-menu-item">
                          Level
                          <h5 className="m-y-0">85</h5>
                      </li>
                  </ul>
                  <p>Guild <strong className="pull-right"><a href="/g/16891/preogative/">preogative</a></strong></p>
                  <p>Ally Code <strong className="pull-right"><span className="btn-copy" style="text-decoration-line: underline; text-decoration-style: dotted; cursor: pointer;" data-clipboard-text="388-591-888">388-591-888 <span className="icon icon-copy"></span></span></strong></p>
                  <p>Joined <strong className="pull-right">Jan 15, 2019</strong></p>
              </div>
        </div>

        <div className="list-group m-b-sm mobile-nav hidden-xs">
              <a href="/p/388591888/" className="list-group-item">
                  <span className="icon icon-chevron-thin-right pull-right"></span>
                  <span className="icon icon-man"></span> Profile
              </a>
              <a href="/p/388591888/characters/" className="list-group-item active">
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
              <a href="/p/388591888/checklist/events/" className="list-group-item">
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
                  <span className="icon icon-chevron-thin-down pull-right"></span> Player Navigation
              </a>
        </div>
      </div>
    </>
  )
}

const CharactersGrid = () => {
  return (
    <>
      <div className="content-container-primary character-list">
        <ul className="list-group media-list media-list-stream m-t-0">
          <li className="list-group-item p-a">
            <span className="header-buttons">
              <button data-toggle="modal" data-target="#sortModal" type="button" className="btn btn-default">
                Sort (Power)
                <span className="icon icon-align-top"></span>
              </button>
              <button data-toggle="modal" data-target="#filterModal" type="button" className="btn btn-default">
                Filters <span className="icon icon-colours"></span>
              </button>
            </span>
            <span className="header-text">
              <h3 className="m-a-0">Erlkönig's Characters (189)</h3>
              <div className="user-last-updated text-muted">
                Last updated: <span className="datetime" data-datetime="2021-02-11T23:45:19Z" data-toggle="tooltip" data-placement="top" data-container="body" title="" data-original-title="Feb. 11, 2021, 11:45 p.m. UTC">16 hours ago</span>
              </div>
            </span>
          </li>

          <li className="media list-group-item p-a collection-char-list">
            <div className="row">
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                <div className="collection-char collection-char-dark-side">
                  <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side">
                      <a href="/p/388591888/characters/darth-revan" className="char-portrait-full-link" rel="nofollow">
                        <img className="char-portrait-full-img initial loading" src="https://swgoh.gghttps://swgoh.gg/game-asset/u/DARTHREVAN/" alt="Darth Revan" height="80" width="80" data-was-processed="true" />
                        <div className="char-portrait-full-gear"></div>
                        <div className="star star1"></div>
                        <div className="star star2"></div>
                        <div className="star star3"></div>
                        <div className="star star4"></div>
                        <div className="star star5"></div>
                        <div className="star star6"></div>
                        <div className="star star7"></div>
                        <div className="char-portrait-full-zeta">3</div>
                        <div className="char-portrait-full-relic">7</div>
                        <div className="char-portrait-full-level">85</div>
                      </a>
                  </div>
                  <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 35,308 / 37,585">
                      <div className="collection-char-gp-progress">
                          <div className="collection-char-gp-progress-bar" style={{"width": "93.9417%"}}></div>
                      </div>
                      <div className="collection-char-gp-label">
                          <span className="collection-char-gp-label-value">93</span>
                          <span className="collection-char-gp-label-percent">%</span>
                      </div>
                  </div>
                  <div className="collection-char-name">
                      <a className="collection-char-name-link" href="/p/388591888/characters/darth-revan" rel="nofollow">
Darth Revan
</a>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/general-grievous" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/GRIEVOUS/" alt="General Grievous" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">2</div>
                              <div className="char-portrait-full-relic">7</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 32,283 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "93.29%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">93</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/general-grievous" rel="nofollow">
General Grievous
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/commander-luke-skywalker" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/COMMANDERLUKESKYWALKER/" alt="Commander Luke Skywalker" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">3</div>
                              <div className="char-portrait-full-relic">5</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 31,959 / 37,585">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "85.0313%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">85</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/commander-luke-skywalker" rel="nofollow">
Commander Luke Skywalker
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/padme-amidala" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/PADMEAMIDALA/" alt="Padmé Amidala" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">2</div>
                              <div className="char-portrait-full-relic">6</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 30,513 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "88.1751%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">88</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/padme-amidala" rel="nofollow">
Padmé Amidala
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/c-3po" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/C3POLEGENDARY/" alt="C-3PO" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">2</div>
                              <div className="char-portrait-full-relic">5</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 30,469 / 36,174">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "84.229%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">84</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/c-3po" rel="nofollow">
C-3PO
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/darth-vader" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/VADER/" alt="Darth Vader" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">3</div>
                              <div className="char-portrait-full-relic">3</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 29,860 / 37,585">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "79.4466%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">79</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/darth-vader" rel="nofollow">
Darth Vader
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/rey-jedi-training" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/REYJEDITRAINING/" alt="Rey (Jedi Training)" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">3</div>
                              <div className="char-portrait-full-relic">2</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 28,933 / 37,585">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "76.9802%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">76</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/rey-jedi-training" rel="nofollow">
Rey (Jedi Training)
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/wampa" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/WAMPA/" alt="Wampa" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">2</div>
                              <div className="char-portrait-full-relic">4</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 27,760 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "80.2196%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">80</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/wampa" rel="nofollow">
Wampa
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/darth-malak" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/DARTHMALAK/" alt="Darth Malak" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">2</div>
                              <div className="char-portrait-full-relic">4</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 27,625 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "79.8295%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">79</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/darth-malak" rel="nofollow">
Darth Malak
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/hk-47" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/HK47/" alt="HK-47" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">2</div>
                              <div className="char-portrait-full-relic">3</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 27,603 / 35,389">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "77.9988%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">77</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/hk-47" rel="nofollow">
HK-47
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/chewbacca" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/CHEWBACCALEGENDARY/" alt="Chewbacca" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">2</div>
                              <div className="char-portrait-full-relic">3</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 26,863 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "77.6275%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">77</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/chewbacca" rel="nofollow">
Chewbacca
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/hermit-yoda" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/HERMITYODA/" alt="Hermit Yoda" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">2</div>
                              <div className="char-portrait-full-relic">3</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 26,863 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "77.6275%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">77</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/hermit-yoda" rel="nofollow">
Hermit Yoda
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/shaak-ti" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/SHAAKTI/" alt="Shaak Ti" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">2</div>

                              <div className="char-portrait-full-relic">3</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 26,818 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "77.4975%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">77</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/shaak-ti" rel="nofollow">
Shaak Ti
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t12 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/jedi-knight-revan" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/JEDIKNIGHTREVAN/" alt="Jedi Knight Revan" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">3</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 26,664 / 37,585">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "70.9432%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">70</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/jedi-knight-revan" rel="nofollow">
Jedi Knight Revan
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/general-kenobi" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/GENERALKENOBI/" alt="General Kenobi" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-relic">5</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 26,433 / 32,199">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "82.0926%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">82</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/general-kenobi" rel="nofollow">
General Kenobi
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/b1-battle-droid" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/B1BATTLEDROIDV2/" alt="B1 Battle Droid" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-relic">5</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 25,887 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "81.8587%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">81</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/b1-battle-droid" rel="nofollow">
B1 Battle Droid
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/general-skywalker" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/GENERALSKYWALKER/" alt="General Skywalker" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-zeta">4</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 25,812 / 39,781">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "64.8852%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">64</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/general-skywalker" rel="nofollow">
General Skywalker
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/ahsoka-tano" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/AHSOKATANO/" alt="Ahsoka Tano" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-relic">5</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 25,773 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "81.4982%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">81</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/ahsoka-tano" rel="nofollow">
Ahsoka Tano
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/bastila-shan-fallen" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/BASTILASHANDARK/" alt="Bastila Shan (Fallen)" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-relic">3</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 25,452 / 33,193">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "76.6788%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">76</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/bastila-shan-fallen" rel="nofollow">
Bastila Shan (Fallen)
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/asajj-ventress" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/ASAJVENTRESS/" alt="Asajj Ventress" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">2</div>
                              <div className="char-portrait-full-relic">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 25,027 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "72.3219%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">72</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/asajj-ventress" rel="nofollow">
Asajj Ventress
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/droideka" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/DROIDEKA/" alt="Droideka" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-relic">3</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 23,751 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "75.1044%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">75</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/droideka" rel="nofollow">
Droideka
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/b2-super-battle-droid" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/B2SUPERBATTLEDROID/" alt="B2 Super Battle Droid" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-relic">3</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 23,746 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "75.0885%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">75</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/b2-super-battle-droid" rel="nofollow">
B2 Super Battle Droid
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t12 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/bossk" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/BOSSK/" alt="Bossk" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">2</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 23,587 / 35,389">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "66.6507%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">66</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/bossk" rel="nofollow">
Bossk
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t12 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/emperor-palpatine" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img initial loading" src="https://swgoh.gg/game-asset/u/EMPERORPALPATINE/" alt="Emperor Palpatine" height="80" width="80" data-was-processed="true" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">2</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 23,319 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "67.3862%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">67</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/emperor-palpatine" rel="nofollow">
Emperor Palpatine
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/jango-fett" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/JANGOFETT/" alt="Jango Fett" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">2</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 23,274 / 35,389">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "65.7662%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">65</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/jango-fett" rel="nofollow">
Jango Fett
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t12 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/mother-talzin" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/MOTHERTALZIN/" alt="Mother Talzin" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">2</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 23,104 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "66.7649%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">66</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/mother-talzin" rel="nofollow">
Mother Talzin
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t12 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/r2-d2" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/R2D2_LEGENDARY/" alt="R2-D2" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">2</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 23,059 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "66.6349%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">66</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/r2-d2" rel="nofollow">
R2-D2
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t12 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/kylo-ren-unmasked" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/KYLORENUNMASKED/" alt="Kylo Ren (Unmasked)" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">2</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 23,038 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "66.5742%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">66</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/kylo-ren-unmasked" rel="nofollow">
Kylo Ren (Unmasked)
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/ig-100-magnaguard" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/MAGNAGUARD/" alt="IG-100 MagnaGuard" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-relic">2</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 22,899 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "72.4102%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">72</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/ig-100-magnaguard" rel="nofollow">
IG-100 MagnaGuard
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t12 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/ct-5555-fives" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/CT5555/" alt="CT-5555 &quot;Fives&quot;" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">2</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 22,893 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "66.1552%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">66</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/ct-5555-fives" rel="nofollow">
CT-5555 "Fives"
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t12 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/darth-nihilus" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/DARTHNIHILUS/" alt="Darth Nihilus" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">2</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 22,828 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "65.9673%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">65</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/darth-nihilus" rel="nofollow">
Darth Nihilus
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/jedi-knight-anakin" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/ANAKINKNIGHT/" alt="Jedi Knight Anakin" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-relic">2</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 22,675 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "71.7019%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">71</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/jedi-knight-anakin" rel="nofollow">
Jedi Knight Anakin
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/ct-7567-rex" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/CT7567/" alt="CT-7567 &quot;Rex&quot;" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-relic">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 22,419 / 32,409">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "69.1752%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">69</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/ct-7567-rex" rel="nofollow">
CT-7567 "Rex"
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t12 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/boba-fett" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/BOBAFETT/" alt="Boba Fett" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 21,789 / 33,193">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "65.6434%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">65</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/boba-fett" rel="nofollow">
Boba Fett
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/han-solo" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/HANSOLO/" alt="Han Solo" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-relic">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 21,772 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "68.8464%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">68</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/han-solo" rel="nofollow">
Han Solo
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t12 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/grand-master-yoda" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/GRANDMASTERYODA/" alt="Grand Master Yoda" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 21,307 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "61.572%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">61</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/grand-master-yoda" rel="nofollow">
Grand Master Yoda
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t10 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/bb-8" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/BB8/" alt="BB-8" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>

                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">2</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 21,184 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "61.2166%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">61</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/bb-8" rel="nofollow">
BB-8
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t9 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/geonosian-brood-alpha" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/GEONOSIANBROODALPHA/" alt="Geonosian Brood Alpha" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">2</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 21,033 / 35,389">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "59.4337%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">59</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/geonosian-brood-alpha" rel="nofollow">
Geonosian Brood Alpha
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/dengar" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/DENGAR/" alt="Dengar" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 20,743 / 33,193">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "62.4921%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">62</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/dengar" rel="nofollow">
Dengar
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/bastila-shan" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/BASTILASHAN/" alt="Bastila Shan" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 20,721 / 33,193">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "62.4258%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">62</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/bastila-shan" rel="nofollow">
Bastila Shan
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t12 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/jolee-bindo" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/JOLEEBINDO/" alt="Jolee Bindo" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 20,560 / 32,409">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "63.4392%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">63</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/jolee-bindo" rel="nofollow">
Jolee Bindo
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t12 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/grand-admiral-thrawn" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/GRANDADMIRALTHRAWN/" alt="Grand Admiral Thrawn" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 20,283 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "58.6129%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">58</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/grand-admiral-thrawn" rel="nofollow">
Grand Admiral Thrawn
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t12 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/kylo-ren" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/KYLOREN/" alt="Kylo Ren" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 20,242 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "64.0083%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">64</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/kylo-ren" rel="nofollow">
Kylo Ren
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t12 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/mission-vao" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/MISSIONVAO/" alt="Mission Vao" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 20,199 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "63.8724%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">63</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/mission-vao" rel="nofollow">
Mission Vao
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t12 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/zaalbar" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/ZAALBAR/" alt="Zaalbar" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 20,008 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "63.2684%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">63</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/zaalbar" rel="nofollow">
Zaalbar
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/nute-gunray" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/NUTEGUNRAY/" alt="Nute Gunray" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 20,002 / 32,409">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "61.7174%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">61</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/nute-gunray" rel="nofollow">
Nute Gunray
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/general-hux" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/GENERALHUX/" alt="General Hux" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 19,944 / 32,409">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "61.5385%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">61</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/general-hux" rel="nofollow">
General Hux
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t12 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/old-daka" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/DAKA/" alt="Old Daka" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 19,894 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "62.9079%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">62</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/old-daka" rel="nofollow">
Old Daka
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/wicket" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/WICKET/" alt="Wicket" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 19,419 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "61.4059%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">61</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/wicket" rel="nofollow">
Wicket
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/finn" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/FINN/" alt="Finn" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 19,383 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "61.2921%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">61</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/finn" rel="nofollow">
Finn
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/ct-21-0408-echo" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/CT210408/" alt="CT-21-0408 &quot;Echo&quot;" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 19,359 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "61.2162%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">61</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/ct-21-0408-echo" rel="nofollow">
CT-21-0408 "Echo"
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/chief-chirpa" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/CHIEFCHIRPA/" alt="Chief Chirpa" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 18,999 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "60.0778%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">60</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/chief-chirpa" rel="nofollow">
Chief Chirpa
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t10 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/darth-sion" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/DARTHSION/" alt="Darth Sion" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 18,990 / 32,409">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "58.5948%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">58</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/darth-sion" rel="nofollow">
Darth Sion
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/carth-onasi" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/CARTHONASI/" alt="Carth Onasi" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 18,987 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "60.0398%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">60</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/carth-onasi" rel="nofollow">
Carth Onasi
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/paploo" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/PAPLOO/" alt="Paploo" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 18,940 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "59.8912%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">59</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/paploo" rel="nofollow">
Paploo
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/luminara-unduli" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/LUMINARAUNDULI/" alt="Luminara Unduli" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 18,930 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "59.8596%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">59</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/luminara-unduli" rel="nofollow">
Luminara Unduli
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/ezra-bridger" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/EZRABRIDGERS3/" alt="Ezra Bridger" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 18,801 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "59.4517%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">59</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/ezra-bridger" rel="nofollow">
Ezra Bridger
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t12 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/obi-wan-kenobi-old-ben" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/OLDBENKENOBI/" alt="Obi-Wan Kenobi (Old Ben)" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 18,225 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "52.6658%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">52</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/obi-wan-kenobi-old-ben" rel="nofollow">
Obi-Wan Kenobi (Old Ben)
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t12 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/lando-calrissian" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/ADMINISTRATORLANDO/" alt="Lando Calrissian" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 18,187 / 29,008">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "62.6965%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">62</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/lando-calrissian" rel="nofollow">
Lando Calrissian
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t12 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/juhani" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/JUHANI/" alt="Juhani" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 17,583 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "55.6002%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">55</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/juhani" rel="nofollow">
Juhani
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/ig-88" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/IG88/" alt="IG-88" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 17,515 / 32,409">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "54.0436%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">54</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/ig-88" rel="nofollow">
IG-88
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/count-dooku" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/COUNTDOOKU/" alt="Count Dooku" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 17,424 / 32,409">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "53.7628%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">53</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/count-dooku" rel="nofollow">
Count Dooku
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t9 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/resistance-hero-poe" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/EPIXPOE/" alt="Resistance Hero Poe" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 17,313 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "54.7464%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">54</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/resistance-hero-poe" rel="nofollow">
Resistance Hero Poe
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t9 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/resistance-hero-finn" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/EPIXFINN/" alt="Resistance Hero Finn" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>

                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 17,289 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "54.6705%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">54</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/resistance-hero-finn" rel="nofollow">
Resistance Hero Finn
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/nightsister-zombie" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/NIGHTSISTERZOMBIE/" alt="Nightsister Zombie" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 17,185 / 29,428">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "58.3968%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">58</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/nightsister-zombie" rel="nofollow">
Nightsister Zombie
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/darth-traya" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/DARTHTRAYA/" alt="Darth Traya" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 17,011 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "49.1576%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">49</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/darth-traya" rel="nofollow">
Darth Traya
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t9 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/stormtrooper-han" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/STORMTROOPERHAN/" alt="Stormtrooper Han" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 16,989 / 31,414">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "54.081%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">54</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/stormtrooper-han" rel="nofollow">
Stormtrooper Han
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/mace-windu" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/MACEWINDU/" alt="Mace Windu" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 16,906 / 29,218">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "57.8616%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">57</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/mace-windu" rel="nofollow">
Mace Windu
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/rebel-officer-leia-organa" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/HOTHLEIA/" alt="Rebel Officer Leia Organa" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 16,882 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "53.3835%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">53</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/rebel-officer-leia-organa" rel="nofollow">
Rebel Officer Leia Organa
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/canderous-ordo" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/CANDEROUSORDO/" alt="Canderous Ordo" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 16,837 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "53.2412%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">53</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/canderous-ordo" rel="nofollow">
Canderous Ordo
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/poggle-the-lesser" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/POGGLETHELESSER/" alt="Poggle the Lesser" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 16,825 / 29,428">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "57.1734%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">57</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/poggle-the-lesser" rel="nofollow">
Poggle the Lesser
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/geonosian-spy" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/GEONOSIANSPY/" alt="Geonosian Spy" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 16,653 / 29,428">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "56.589%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">56</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/geonosian-spy" rel="nofollow">
Geonosian Spy
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/cc-2224-cody" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/CC2224/" alt="CC-2224 &quot;Cody&quot;" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>

                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 16,639 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "52.6151%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">52</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/cc-2224-cody" rel="nofollow">
CC-2224 "Cody"
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/sith-trooper" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/FOSITHTROOPER/" alt="Sith Trooper" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-zeta">1</div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 16,504 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "52.1882%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">52</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/sith-trooper" rel="nofollow">
Sith Trooper
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/geonosian-soldier" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/GEONOSIANSOLDIER/" alt="Geonosian Soldier" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 16,462 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "57.471%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">57</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/geonosian-soldier" rel="nofollow">
Geonosian Soldier
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/enfys-nest" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/ENFYSNEST/" alt="Enfys Nest" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 16,405 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "51.8752%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">51</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/enfys-nest" rel="nofollow">
Enfys Nest
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t10 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/grand-moff-tarkin" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/GRANDMOFFTARKIN/" alt="Grand Moff Tarkin" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 16,312 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "47.1377%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">47</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/grand-moff-tarkin" rel="nofollow">
Grand Moff Tarkin
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t11 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/rey-scavenger" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/REY/" alt="Rey (Scavenger)" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 16,288 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "51.5052%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">51</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/rey-scavenger" rel="nofollow">
Rey (Scavenger)
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t10 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/logray" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/LOGRAY/" alt="Logray" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 15,798 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "49.9557%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">49</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/logray" rel="nofollow">
Logray
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t10 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/sabine-wren" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/SABINEWRENS3/" alt="Sabine Wren" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 15,577 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "49.2569%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">49</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/sabine-wren" rel="nofollow">
Sabine Wren
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t10 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/talia" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/TALIA/" alt="Talia" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 15,537 / 29,218">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "53.1761%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">53</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/talia" rel="nofollow">
Talia
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t9 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/embo" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/EMBO/" alt="Embo" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 15,277 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "44.1468%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">44</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/embo" rel="nofollow">
Embo
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t10 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/clone-sergeant-phase-i" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/CLONESERGEANTPHASEI/" alt="Clone Sergeant - Phase I" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 15,249 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "53.2363%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">53</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/clone-sergeant-phase-i" rel="nofollow">
Clone Sergeant - Phase I
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t10 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/ewok-elder" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/EWOKELDER/" alt="Ewok Elder" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 15,223 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "53.1455%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">53</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/ewok-elder" rel="nofollow">
Ewok Elder
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t10 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/jedi-consular" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/JEDIKNIGHTCONSULAR/" alt="Jedi Consular" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 15,223 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "53.1455%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">53</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/jedi-consular" rel="nofollow">
Jedi Consular
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/greedo" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/GREEDO/" alt="Greedo" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 15,222 / 32,983">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "46.151%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">46</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/greedo" rel="nofollow">
Greedo
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t10 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/first-order-tie-pilot" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/FIRSTORDERTIEPILOT/" alt="First Order TIE Pilot" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 14,907 / 30,840">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "48.3366%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">48</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/first-order-tie-pilot" rel="nofollow">
First Order TIE Pilot
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t9 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/hera-syndulla" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/HERASYNDULLAS3/" alt="Hera Syndulla" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 14,862 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "46.996%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">46</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/hera-syndulla" rel="nofollow">
Hera Syndulla
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t9 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/plo-koon" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/PLOKOON/" alt="Plo Koon" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 14,793 / 29,218">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "50.6297%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">50</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/plo-koon" rel="nofollow">
Plo Koon
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t9 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/darth-maul" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/MAUL/" alt="Darth Maul" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 14,697 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "46.4742%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">46</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/darth-maul" rel="nofollow">
Darth Maul
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/cad-bane" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/CADBANE/" alt="Cad Bane" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 14,677 / 30,213">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "48.5784%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">48</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/cad-bane" rel="nofollow">
Cad Bane
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/the-mandalorian" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/THEMANDALORIAN/" alt="The Mandalorian" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 14,499 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "41.8986%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">41</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/the-mandalorian" rel="nofollow">
The Mandalorian
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t9 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/admiral-ackbar" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/ADMIRALACKBAR/" alt="Admiral Ackbar" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 14,487 / 29,218">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "49.5824%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">49</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/admiral-ackbar" rel="nofollow">
Admiral Ackbar
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/chirrut-imwe" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/CHIRRUTIMWE/" alt="Chirrut Îmwe" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>

                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 14,458 / 29,793">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "48.5282%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">48</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/chirrut-imwe" rel="nofollow">
Chirrut Îmwe
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t9 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/teebo" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/TEEBO/" alt="Teebo" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 14,398 / 29,428">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "48.9262%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">48</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/teebo" rel="nofollow">
Teebo
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/barriss-offee" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/BARRISSOFFEE/" alt="Barriss Offee" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 14,145 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "44.7287%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">44</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/barriss-offee" rel="nofollow">
Barriss Offee
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/captain-phasma" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/PHASMA/" alt="Captain Phasma" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 14,121 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "44.6528%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">44</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/captain-phasma" rel="nofollow">
Captain Phasma
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t9 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/first-order-executioner" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/FIRSTORDEREXECUTIONER/" alt="First Order Executioner" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 14,098 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "49.218%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">49</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/first-order-executioner" rel="nofollow">
First Order Executioner
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/sun-fac" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/SUNFAC/" alt="Sun Fac" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 14,002 / 29,428">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "47.5805%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">47</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/sun-fac" rel="nofollow">
Sun Fac
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/amilyn-holdo" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/AMILYNHOLDO/" alt="Amilyn Holdo" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,983 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "44.2164%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">44</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/amilyn-holdo" rel="nofollow">
Amilyn Holdo
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/captain-han-solo" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/HOTHHAN/" alt="Captain Han Solo" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,959 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "44.1405%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">44</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/captain-han-solo" rel="nofollow">
Captain Han Solo
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/chopper" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/CHOPPERS3/" alt="Chopper" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,935 / 29,428">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "47.3529%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">47</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/chopper" rel="nofollow">
Chopper
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/general-veers" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/VEERS/" alt="General Veers" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,893 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "43.9318%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">43</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/general-veers" rel="nofollow">
General Veers
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/princess-leia" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/PRINCESSLEIA/" alt="Princess Leia" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,848 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "43.7895%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">43</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/princess-leia" rel="nofollow">
Princess Leia
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/garazeb-zeb-orrelios" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/ZEBS3/" alt="Garazeb &quot;Zeb&quot; Orrelios" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,839 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "43.7611%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">43</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/garazeb-zeb-orrelios" rel="nofollow">
Garazeb "Zeb" Orrelios
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/poe-dameron" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/POE/" alt="Poe Dameron" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,839 / 29,218">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "47.3646%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">47</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/poe-dameron" rel="nofollow">
Poe Dameron
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/darth-sidious" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/DARTHSIDIOUS/" alt="Darth Sidious" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,824 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "43.7136%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">43</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/darth-sidious" rel="nofollow">
Darth Sidious
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/t3-m4" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/T3_M4/" alt="T3-M4" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,815 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "39.922%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">39</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/t3-m4" rel="nofollow">
T3-M4
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/wedge-antilles" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/WEDGEANTILLES/" alt="Wedge Antilles" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,794 / 29,218">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "47.2106%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">47</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/wedge-antilles" rel="nofollow">
Wedge Antilles
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/kanan-jarrus" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/KANANJARRUSS3/" alt="Kanan Jarrus" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,770 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "43.5429%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">43</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/kanan-jarrus" rel="nofollow">
Kanan Jarrus
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/young-han-solo" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/YOUNGHAN/" alt="Young Han Solo" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,770 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "43.5429%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">43</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/young-han-solo" rel="nofollow">
Young Han Solo
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/clone-wars-chewbacca" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/CLONEWARSCHEWBACCA/" alt="Clone Wars Chewbacca" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,740 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "43.448%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">43</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/clone-wars-chewbacca" rel="nofollow">
Clone Wars Chewbacca
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/nightsister-initiate" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/NIGHTSISTERINITIATE/" alt="Nightsister Initiate" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,740 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "43.448%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">43</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/nightsister-initiate" rel="nofollow">
Nightsister Initiate
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/veteran-smuggler-chewbacca" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/SMUGGLERCHEWBACCA/" alt="Veteran Smuggler Chewbacca" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,594 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "42.9863%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">42</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/veteran-smuggler-chewbacca" rel="nofollow">
Veteran Smuggler Chewbacca
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/visas-marr" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/VISASMARR/" alt="Visas Marr" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,474 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "42.6069%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">42</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/visas-marr" rel="nofollow">
Visas Marr
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/jyn-erso" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/JYNERSO/" alt="Jyn Erso" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,473 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "38.9337%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">38</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/jyn-erso" rel="nofollow">
Jyn Erso
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/first-order-officer" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/FIRSTORDEROFFICERMALE/" alt="First Order Officer" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,335 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "46.5543%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">46</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/first-order-officer" rel="nofollow">
First Order Officer
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/first-order-stormtrooper" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/FIRSTORDERTROOPER/" alt="First Order Stormtrooper" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,221 / 30,840">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "42.8696%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">42</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/first-order-stormtrooper" rel="nofollow">
First Order Stormtrooper
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/sith-empire-trooper" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/SITHTROOPER/" alt="Sith Empire Trooper" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,207 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "46.1074%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">46</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/sith-empire-trooper" rel="nofollow">
Sith Empire Trooper
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/cassian-andor" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/CASSIANANDOR/" alt="Cassian Andor" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,110 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "41.4559%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">41</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/cassian-andor" rel="nofollow">
Cassian Andor
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/biggs-darklighter" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/BIGGSDARKLIGHTER/" alt="Biggs Darklighter" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,083 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "45.6745%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">45</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/biggs-darklighter" rel="nofollow">
Biggs Darklighter
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/chief-nebit" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/CHIEFNEBIT/" alt="Chief Nebit" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 13,035 / 29,218">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "44.6129%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">44</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/chief-nebit" rel="nofollow">
Chief Nebit
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/resistance-trooper" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/RESISTANCETROOPER/" alt="Resistance Trooper" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 12,978 / 28,434">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "45.6425%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">45</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/resistance-trooper" rel="nofollow">
Resistance Trooper
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/ahsoka-tano-fulcrum" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/FULCRUMAHSOKA/" alt="Ahsoka Tano (Fulcrum)" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 12,927 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "40.8772%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">40</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/ahsoka-tano-fulcrum" rel="nofollow">
Ahsoka Tano (Fulcrum)
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/qui-gon-jinn" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/QUIGONJINN/" alt="Qui-Gon Jinn" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 12,915 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "40.8392%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">40</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/qui-gon-jinn" rel="nofollow">
Qui-Gon Jinn
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/veteran-smuggler-han-solo" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/SMUGGLERHAN/" alt="Veteran Smuggler Han Solo" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 12,879 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "40.7254%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">40</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/veteran-smuggler-han-solo" rel="nofollow">
Veteran Smuggler Han Solo
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/k-2so" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/K2SO/" alt="K-2SO" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 12,877 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "40.7191%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">40</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/k-2so" rel="nofollow">
K-2SO
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/snowtrooper" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/SNOWTROOPER/" alt="Snowtrooper" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 12,843 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "44.8366%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">44</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/snowtrooper" rel="nofollow">
Snowtrooper
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/stormtrooper" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/STORMTROOPER/" alt="Stormtrooper" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 12,826 / 30,840">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "41.5888%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">41</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/stormtrooper" rel="nofollow">
Stormtrooper
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/tie-fighter-pilot" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/TIEFIGHTERPILOT/" alt="TIE Fighter Pilot" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 12,642 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "44.1349%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">44</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/tie-fighter-pilot" rel="nofollow">
TIE Fighter Pilot
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/resistance-pilot" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/RESISTANCEPILOT/" alt="Resistance Pilot" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 12,547 / 28,434">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "44.1267%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">44</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/resistance-pilot" rel="nofollow">
Resistance Pilot
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/pao" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/PAO/" alt="Pao" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 12,475 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "39.4479%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">39</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/pao" rel="nofollow">
Pao
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/hoth-rebel-soldier" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/HOTHREBELSOLDIER/" alt="Hoth Rebel Soldier" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 12,390 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "43.2551%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">43</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/hoth-rebel-soldier" rel="nofollow">
Hoth Rebel Soldier
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/luke-skywalker-farmboy" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/LUKESKYWALKER/" alt="Luke Skywalker (Farmboy)" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 12,376 / 33,820">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "36.5937%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">36</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/luke-skywalker-farmboy" rel="nofollow">
Luke Skywalker (Farmboy)
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/nightsister-spirit" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/NIGHTSISTERSPIRIT/" alt="Nightsister Spirit" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 12,372 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "43.1923%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">43</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/nightsister-spirit" rel="nofollow">
Nightsister Spirit
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/young-lando-calrissian" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/YOUNGLANDO/" alt="Young Lando Calrissian" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 12,331 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "38.9925%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">38</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/young-lando-calrissian" rel="nofollow">
Young Lando Calrissian
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/mon-mothma" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/MONMOTHMA/" alt="Mon Mothma" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 12,214 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "35.2955%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">35</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/mon-mothma" rel="nofollow">
Mon Mothma
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t6 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/savage-opress" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/SAVAGEOPRESS/" alt="Savage Opress" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 12,033 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "38.0502%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">38</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/savage-opress" rel="nofollow">
Savage Opress
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/royal-guard" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/ROYALGUARD/" alt="Royal Guard" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 12,016 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "41.9494%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">41</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/royal-guard" rel="nofollow">
Royal Guard
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/first-order-sf-tie-pilot" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/FIRSTORDERSPECIALFORCESPILOT/" alt="First Order SF TIE Pilot" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 11,991 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "41.8622%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">41</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/first-order-sf-tie-pilot" rel="nofollow">
First Order SF TIE Pilot
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/sith-assassin" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/SITHASSASSIN/" alt="Sith Assassin" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 11,976 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "41.8098%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">41</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/sith-assassin" rel="nofollow">
Sith Assassin
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/colonel-starck" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/COLONELSTARCK/" alt="Colonel Starck" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 11,869 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "37.5316%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">37</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/colonel-starck" rel="nofollow">
Colonel Starck
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/dathcha" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/DATHCHA/" alt="Dathcha" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 11,835 / 29,218">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "40.5059%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">40</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/dathcha" rel="nofollow">
Dathcha
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/greef-karga" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/GREEFKARGA/" alt="Greef Karga" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 11,767 / 35,389">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "33.2504%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">33</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/greef-karga" rel="nofollow">
Greef Karga
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/ewok-scout" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/EWOKSCOUT/" alt="Ewok Scout" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 11,653 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "40.6822%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">40</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/ewok-scout" rel="nofollow">
Ewok Scout
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/hoth-rebel-scout" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/HOTHREBELSCOUT/" alt="Hoth Rebel Scout" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 11,607 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "40.5216%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">40</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/hoth-rebel-scout" rel="nofollow">
Hoth Rebel Scout
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/magmatrooper" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/MAGMATROOPER/" alt="Magmatrooper" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 11,430 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "39.9036%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">39</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/magmatrooper" rel="nofollow">
Magmatrooper
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/jawa" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/JAWA/" alt="Jawa" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 11,406 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "39.8199%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">39</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/jawa" rel="nofollow">
Jawa
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/jawa-scavenger" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/JAWASCAVENGER/" alt="Jawa Scavenger" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">80</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 11,403 / 29,218">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "39.0273%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">39</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/jawa-scavenger" rel="nofollow">
Jawa Scavenger
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/gar-saxon" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/GARSAXON/" alt="Gar Saxon" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 11,383 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "35.9948%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">35</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/gar-saxon" rel="nofollow">
Gar Saxon
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t5 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/bistan" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/BISTAN/" alt="Bistan" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 11,298 / 29,218">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "38.6679%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">38</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/bistan" rel="nofollow">
Bistan
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/baze-malbus" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/BAZEMALBUS/" alt="Baze Malbus" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 10,473 / 29,793">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "35.1526%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">35</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/baze-malbus" rel="nofollow">
Baze Malbus
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/shoretrooper" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/SHORETROOPER/" alt="Shoretrooper" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 10,350 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "36.1332%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">36</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/shoretrooper" rel="nofollow">
Shoretrooper
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/kuiil" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/KUIIL/" alt="Kuiil" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5 star-inactive"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 10,266 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "32.4627%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">32</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/kuiil" rel="nofollow">
Kuiil
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/threepio-chewie" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/C3POCHEWBACCA/" alt="Threepio &amp; Chewie" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 10,201 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "32.2571%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">32</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/threepio-chewie" rel="nofollow">
Threepio &amp; Chewie
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/cara-dune" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/CARADUNE/" alt="Cara Dune" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 10,153 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "32.1054%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">32</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/cara-dune" rel="nofollow">
Cara Dune
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/imperial-super-commando" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/IMPERIALSUPERCOMMANDO/" alt="Imperial Super Commando" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 10,144 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "35.414%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">35</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/imperial-super-commando" rel="nofollow">
Imperial Super Commando
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/imperial-probe-droid" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/IMPERIALPROBEDROID/" alt="Imperial Probe Droid" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 9,940 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "31.4318%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">31</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/imperial-probe-droid" rel="nofollow">
Imperial Probe Droid
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/director-krennic" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/DIRECTORKRENNIC/" alt="Director Krennic" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 9,928 / 32,199">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "30.8333%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">30</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/director-krennic" rel="nofollow">
Director Krennic
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/ig-11" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/IG11/" alt="IG-11" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5 star-inactive"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 9,714 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "30.7172%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">30</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/ig-11" rel="nofollow">
IG-11
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/scarif-rebel-pathfinder" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/SCARIFREBEL/" alt="Scarif Rebel Pathfinder" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 9,705 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "33.8814%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">33</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/scarif-rebel-pathfinder" rel="nofollow">
Scarif Rebel Pathfinder
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t6 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/range-trooper" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/RANGETROOPER/" alt="Range Trooper" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 9,294 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "32.4466%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">32</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/range-trooper" rel="nofollow">
Range Trooper
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t6 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/qira" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/QIRA/" alt="Qi'ra" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>

                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 9,052 / 32,409">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "27.9305%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">27</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/qira" rel="nofollow">
Qi'ra
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t6 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/aurra-sing" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/AURRA_SING/" alt="Aurra Sing" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5 star-inactive"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 8,920 / 35,389">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "25.2056%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">25</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/aurra-sing" rel="nofollow">
Aurra Sing
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t8 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/death-trooper" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/DEATHTROOPER/" alt="Death Trooper" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 8,826 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "27.9092%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">27</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/death-trooper" rel="nofollow">
Death Trooper
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/ig-86-sentinel-droid" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/IG86SENTINELDROID/" alt="IG-86 Sentinel Droid" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">70</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 8,607 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "30.0482%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">30</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/ig-86-sentinel-droid" rel="nofollow">
IG-86 Sentinel Droid
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/arc-trooper" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/ARCTROOPER501ST/" alt="ARC Trooper" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5 star-inactive"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 8,418 / 30,840">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "27.2957%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">27</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/arc-trooper" rel="nofollow">
ARC Trooper
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/jedi-knight-guardian" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/JEDIKNIGHTGUARDIAN/" alt="Jedi Knight Guardian" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">68</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 8,406 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "29.3465%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">29</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/jedi-knight-guardian" rel="nofollow">
Jedi Knight Guardian
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/ima-gun-di" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/IMAGUNDI/" alt="Ima-Gun Di" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">60</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 8,286 / 29,218">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "28.3592%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">28</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/ima-gun-di" rel="nofollow">
Ima-Gun Di
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/bodhi-rook" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/BODHIROOK/" alt="Bodhi Rook" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">65</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 8,140 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "25.7399%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">25</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/bodhi-rook" rel="nofollow">
Bodhi Rook
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/mob-enforcer" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/HUMANTHUG/" alt="Mob Enforcer" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">60</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 7,878 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "27.5031%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">27</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/mob-enforcer" rel="nofollow">
Mob Enforcer
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t4 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/rose-tico" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/ROSETICO/" alt="Rose Tico" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 7,846 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "24.8103%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">24</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/rose-tico" rel="nofollow">
Rose Tico
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/jawa-engineer" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/JAWAENGINEER/" alt="Jawa Engineer" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">75</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 7,726 / 29,218">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "26.4426%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">26</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/jawa-engineer" rel="nofollow">
Jawa Engineer
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t6 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/vandor-chewbacca" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/YOUNGCHEWBACCA/" alt="Vandor Chewbacca" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4 star-inactive"></div>
                              <div className="star star5 star-inactive"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 7,656 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "24.2095%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">24</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/vandor-chewbacca" rel="nofollow">
Vandor Chewbacca
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t4 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/sith-marauder" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/SITHMARAUDER/" alt="Sith Marauder" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 7,543 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "26.3336%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">26</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/sith-marauder" rel="nofollow">
Sith Marauder
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t6 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/aayla-secura" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/AAYLASECURA/" alt="Aayla Secura" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 7,371 / 29,218">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "25.2276%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">25</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/aayla-secura" rel="nofollow">
Aayla Secura
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t7 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/l3-37" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/L3_37/" alt="L3-37" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>

                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5 star-inactive"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">85</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 7,036 / 31,624">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "22.2489%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">22</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/l3-37" rel="nofollow">
L3-37
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t5 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/tusken-raider" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/TUSKENRAIDER/" alt="Tusken Raider" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7"></div>
                              <div className="char-portrait-full-level">46</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 6,388 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "22.3014%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">22</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/tusken-raider" rel="nofollow">
Tusken Raider
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t6 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/kit-fisto" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/KITFISTO/" alt="Kit Fisto" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">60</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 5,206 / 29,218">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "17.8178%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">17</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/kit-fisto" rel="nofollow">
Kit Fisto
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t6 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/admiral-piett" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/ADMIRALPIETT/" alt="Admiral Piett" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4 star-inactive"></div>
                              <div className="star star5 star-inactive"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">50</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 4,978 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "14.3852%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">14</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/admiral-piett" rel="nofollow">
Admiral Piett
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t6 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/zam-wesell" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/ZAMWESELL/" alt="Zam Wesell" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">50</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 4,885 / 33,193">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "14.717%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">14</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/zam-wesell" rel="nofollow">
Zam Wesell
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t2 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/ugnaught" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/UGNAUGHT/" alt="Ugnaught" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">30</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 1,923 / 28,434">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "6.76303%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">6</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/ugnaught" rel="nofollow">
Ugnaught
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t3 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/nightsister-acolyte" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/NIGHTSISTERACOLYTE/" alt="Nightsister Acolyte" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4 star-inactive"></div>
                              <div className="star star5 star-inactive"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">50</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 1,767 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "6.16883%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">6</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/nightsister-acolyte" rel="nofollow">
Nightsister Acolyte
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t1 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/tusken-shaman" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/TUSKENSHAMAN/" alt="Tusken Shaman" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">1</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 1,531 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "5.34492%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">5</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/tusken-shaman" rel="nofollow">
Tusken Shaman
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t1 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/eeth-koth" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/EETHKOTH/" alt="Eeth Koth" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">1</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 1,521 / 29,218">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "5.2057%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">5</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/eeth-koth" rel="nofollow">
Eeth Koth
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t1 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/lobot" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/LOBOT/" alt="Lobot" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4"></div>
                              <div className="star star5 star-inactive"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">1</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 1,014 / 29,218">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "3.47046%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">3</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/lobot" rel="nofollow">
Lobot
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-dark-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t1 char-portrait-full-alignment-dark-side">
                          <a href="/p/388591888/characters/moff-gideon" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/MOFFGIDEONS1/" alt="Moff Gideon" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4 star-inactive"></div>
                              <div className="star star5 star-inactive"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">1</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 676 / 34,605">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "1.95347%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">1</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/moff-gideon" rel="nofollow">
Moff Gideon
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t1 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/the-armorer" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/ARMORER/" alt="The Armorer" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2"></div>
                              <div className="star star3"></div>
                              <div className="star star4 star-inactive"></div>
                              <div className="star star5 star-inactive"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">1</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 676 / 32,409">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "2.08584%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">2</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/the-armorer" rel="nofollow">
The Armorer
</a>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <div className="collection-char collection-char-light-side">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t1 char-portrait-full-alignment-light-side">
                          <a href="/p/388591888/characters/coruscant-underworld-police" className="char-portrait-full-link" rel="nofollow">
                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/CORUSCANTUNDERWORLDPOLICE/" alt="Coruscant Underworld Police" height="80" width="80" />
                              <div className="char-portrait-full-gear"></div>
                              <div className="star star1"></div>
                              <div className="star star2 star-inactive"></div>
                              <div className="star star3 star-inactive"></div>
                              <div className="star star4 star-inactive"></div>
                              <div className="star star5 star-inactive"></div>
                              <div className="star star6 star-inactive"></div>
                              <div className="star star7 star-inactive"></div>
                              <div className="char-portrait-full-level">1</div>
                          </a>
                      </div>
                      <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title="Power 301 / 28,644">
                          <div className="collection-char-gp-progress">
                              <div className="collection-char-gp-progress-bar" style={{"width": "1.05083%"}}></div>
                          </div>
                          <div className="collection-char-gp-label">
                              <span className="collection-char-gp-label-value">1</span>
                              <span className="collection-char-gp-label-percent">%</span>
                          </div>
                      </div>
                      <div className="collection-char-name">
                          <a className="collection-char-name-link" href="/p/388591888/characters/coruscant-underworld-police" rel="nofollow">
Coruscant Underworld Police
</a>
                      </div>
                  </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

const SortModal = () => {
  return (
    <>
      <div id="sortModal" className="modal">
          <div className="modal-dialog modal-md">
              <div className="modal-content">
                  <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                      <h4 className="modal-title">Sort</h4>
                  </div>
                  <div className="modal-body p-a-0 categories">
                      <div className="modal-body-scroller">
                          <div className="media-list media-list-users list-group">
                              <a href="/p/388591888/characters/?sort=power&amp;sort_direction=desc" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>By Power (Default)</strong>
                                          <div className="media-body-secondary">
                                              Sort by a Character's Power.
                                          </div>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?sort=name&amp;sort_direction=asc" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>By Name</strong>
                                          <div className="media-body-secondary">
                                              Sort by a Character's Name.
                                          </div>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?sort=power_diff&amp;sort_direction=desc" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>By Max Power Difference</strong>
                                          <div className="media-body-secondary">
                                              Sort by a Character's difference between current power and Max power.
                                          </div>
                                      </div>
                                  </div>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="modal-footer">
                      <a href="/p/388591888/characters/?sort_direction=asc" type="button" className="btn btn-default pull-left">
  Toggle <span className="icon icon-align-vertical-middle"></span>
  </a>
                      <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

const FilterModal = () => {
  return (
    <>
      <div id="filterModal" className="modal">
          <div className="modal-dialog modal-md">
              <div className="modal-content">
                  <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                      <h4 className="modal-title">Filters</h4>
                      <a href="javascript:;" className="cat-button btn btn-sm btn-primary-outline active">Categories</a>
                      <a href="javascript:;" className="align-button btn btn-sm btn-primary-outline">Alignments</a>
                      <a href="javascript:;" className="ab-button btn btn-sm btn-primary-outline">Ability Classes</a>
                      <a href="javascript:;" className="location-button btn btn-sm btn-primary-outline">Farm Locations</a>
                  </div>
                  <div className="modal-body p-a-0 categories">
                      <div className="modal-body-scroller">
                          <div className="media-list media-list-users list-group">
                              <a href="/p/388591888/characters/?f=501st" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>501st</strong> <i>Affiliation</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Attacker" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Attacker</strong> <i>Role</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Bounty+Hunters" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Bounty Hunters</strong> <i>Profession</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Clone+Trooper" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Clone Trooper</strong> <i>Profession</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Droid" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Droid</strong> <i>Species</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Empire" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Empire</strong> <i>Affiliation</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Ewok" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Ewok</strong> <i>Species</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=First+Order" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>First Order</strong> <i>Affiliation</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Fleet+Commander" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Fleet Commander</strong> <i>None</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Galactic+Legend" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Galactic Legend</strong> <i>None</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Galactic+Republic" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Galactic Republic</strong> <i>Affiliation</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Geonosian" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Geonosian</strong> <i>Species</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Healer" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Healer</strong> <i>Role</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Imperial+Trooper" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Imperial Trooper</strong> <i>Affiliation</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Jawa" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Jawa</strong> <i>Species</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Jedi" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Jedi</strong> <i>Profession</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Leader" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Leader</strong> <i>Role</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Mandalorian" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Mandalorian</strong> <i>Affiliation</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Nightsister" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Nightsister</strong> <i>Affiliation</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Old+Republic" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Old Republic</strong> <i>Affiliation</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Phoenix" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Phoenix</strong> <i>Affiliation</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Rebel" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Rebel</strong> <i>Affiliation</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Rebel+Fighter" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Rebel Fighter</strong> <i>Affiliation</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Resistance" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Resistance</strong> <i>Affiliation</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Rogue+One" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Rogue One</strong> <i>Affiliation</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Scoundrel" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Scoundrel</strong> <i>Profession</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Separatist" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Separatist</strong> <i>Affiliation</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Sith" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Sith</strong> <i>Profession</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Sith+Empire" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Sith Empire</strong> <i>Affiliation</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Smuggler" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Smuggler</strong> <i>Profession</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Support" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Support</strong> <i>Role</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Tank" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Tank</strong> <i>Role</i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Tusken" className="list-group-item ">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Tusken</strong> <i>Species</i>
                                      </div>
                                  </div>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="modal-body p-a-0 alignments hide">
                      <div className="modal-body-scroller">
                          <div className="media-list media-list-users list-group">
                              <a href="/p/388591888/characters/?f=Light+Side" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Light Side</strong>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Dark+Side" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Dark Side</strong>
                                      </div>
                                  </div>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="modal-body p-a-0 abilities hide">
                      <div className="modal-body-scroller">
                          <div className="media-list media-list-users list-group">
                              <a href="/p/388591888/characters/?f=Ability+Block" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Ability Block</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Advantage" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Advantage</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Anti-Droid" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Anti-Droid</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=AoE" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>AoE</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Assist" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Assist</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Bonus+Attack" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Bonus Attack</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Buff+Immunity" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Buff Immunity</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Counter" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Counter</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Daze" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Daze</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Defense+Down" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Defense Down</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Defense+Up" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Defense Up</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Dispel" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Dispel</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Dispel+-+All+Enemies" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Dispel - All Enemies</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=DoT" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>DoT</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Evasion+Down" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Evasion Down</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Evasion+Up" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Evasion Up</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Expose" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Expose</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Foresight" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Foresight</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Gain+Turn+Meter" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Gain Turn Meter</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Heal" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Heal</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Healing+Immunity" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Healing Immunity</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Leader%3A++Critical" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Leader: +Critical</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Leader%3A++Defense" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Leader: +Defense</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Leader%3A++Evasion" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Leader: +Evasion</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Leader%3A++Max+Health" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Leader: +Max Health</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Leader%3A++Speed" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Leader: +Speed</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Leader%3A++Tenacity" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Leader: +Tenacity</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Leader%3A+Assist" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Leader: Assist</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Leader%3A+Foresight" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Leader: Foresight</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Leader%3A+Healing" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Leader: Healing</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Offense+Down" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Offense Down</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Offense+Up" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Offense Up</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Potency+Up" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Potency Up</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Reduce+Cooldowns" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Reduce Cooldowns</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Remove+Turn+Meter" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Remove Turn Meter</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Reset+Cooldown" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Reset Cooldown</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Revive" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Revive</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Speed+Down" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Speed Down</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Speed+Up" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Speed Up</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Stealth" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Stealth</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Stun" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Stun</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Target+Lock" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Target Lock</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Taunt" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Taunt</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Tenacity+Down" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Tenacity Down</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Tenacity+Up" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Tenacity Up</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?f=Thermal+Detonator" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Thermal Detonator</strong> <i></i>
                                      </div>
                                  </div>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="modal-body p-a-0 location hide">
                      <div className="modal-body-scroller">
                          <div className="media-list media-list-users list-group">
                              <a href="/p/388591888/characters/?l=guild-events-shipments" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Guild Event Store</strong>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?l=dark-side-node" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Dark Side Node</strong>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?l=squad-arena-shipments" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Squad Arena Shipments</strong>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?l=cantina-node" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Cantina</strong>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?l=guild-shipments" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Guild Shipments</strong>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?l=fleet-node" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Fleet Node</strong>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?l=fleet-arena-shipments" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Fleet Arena Shipments</strong>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?l=light-side-node" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Light Side Node</strong>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?l=galactic-war-shipments" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Galactic War Shipments</strong>
                                      </div>
                                  </div>
                              </a>
                              <a href="/p/388591888/characters/?l=cantina-battle-shipments" className="list-group-item">
                                  <div className="media">
                                      <div className="media-body">
                                          <strong>Cantina Battle Shipments</strong>
                                      </div>
                                  </div>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

const Characters = ({ }) => {
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

              <CharactersGrid />

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

export default withRouter(Characters);
