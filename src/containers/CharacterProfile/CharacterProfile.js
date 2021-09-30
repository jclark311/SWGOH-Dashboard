import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, withRouter, useHistory, useLocation, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import Header from '../../containers/Header/Header.js';
import Overlay from '../../containers/Overlay/Overlay.js';
import NavBar from '../../containers/NavBar/NavBar.js';

import './CharacterProfile.css';



const BreadCrumb = ({playerName, characterName}) => {
  return (
    <>
      <ol className="breadcrumb">
        <li><a href="/">{playerName}</a></li>
        <li><a href="/characters/">Characters</a></li>
        <li className="active">{characterName}</li>
      </ol>
    </>
  );
}

const Aside = ({charId, charNameKey, charLevel, charZetas, charRelic}) => {
  return (
    <>
      <div className="content-container-aside">
          <div className="panel panel-default panel-profile m-b-sm">
              <div className="character-card panel-heading dark-side"></div>
              <div className="panel-body text-center">
                  <div className="pc-portrait">
                      <div className="player-char-portrait char-portrait-full char-portrait-full-large char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side">
                          <a href={`"/character-profile/${charId}"`} className="char-portrait-full-link" rel="nofollow">
                            <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/DARTHREVAN/" alt={`${charNameKey}`} />
                            <div className="char-portrait-full-gear"></div>
                            <div className="star star1"></div>
                            <div className="star star2"></div>
                            <div className="star star3"></div>
                            <div className="star star4"></div>
                            <div className="star star5"></div>
                            <div className="star star6"></div>
                            <div className="star star7"></div>
                            <div className="char-portrait-full-level">{charLevel}</div>
                            <div className="char-portrait-full-zeta">{charZetas}</div>
                            <div className="char-portrait-full-relic">{charRelic}</div>
                          </a>
                      </div>
                  </div>
                  <h1 className="panel-title">
                    <a className="pc-char-overview-name" href={`"/character-profile/${charId}"`}>
                      {charNameKey}
                    </a>
                  </h1>
                  <div className="pc-char-overview">
                      <div className="pc-char-overview-tags">
                        <span className="char-tag char-alignment char-alignment-dark-side">
                          <a href="/p/388591888/characters/?f=Dark Side">Dark Side</a>
                        </span>
                        <span className="char-tag char-role">
                          <a href="/p/388591888/characters/?f=Leader">Leader</a>
                        </span>
                      </div>
                      <div className="pc-char-overview-categories">
                        <span className="char-category"><a href="/p/388591888/characters/?f=Attacker">Attacker</a></span>,
                        <span className="char-category"><a href="/p/388591888/characters/?f=Leader">Leader</a></span>,
                        <span className="char-category"><a href="/p/388591888/characters/?f=Sith">Sith</a></span>,
                        <span className="char-category"><a href="/p/388591888/characters/?f=Sith Empire">Sith Empire</a></span>
                      </div>
                  </div>
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
              <a href="/p/388591888/checklist/events/" className="list-group-item">
                  <span className="icon icon-chevron-thin-right pull-right"></span>
                  <span className="icon icon-laptop"></span> Checklist
              </a>
              <a href="/settings/" className="settings-btn list-group-item">
                  <span className="icon icon-chevron-thin-right pull-right"></span>
                  <span className="icon icon-cog"></span> Settings
              </a>
          </div>
          <div className="list-group m-b-sm visible-xs-block">
              <a href="javascript:;" className="list-group-item mobile-nav-handler">
                  <span className="icon icon-chevron-thin-down pull-right"></span> Player Navigation
              </a>
          </div>
          <ul className="list-group media-list media-list-stream m-b-sm">
              <li className="media list-group-item">
                  <h5>Relic</h5>
                  <div className="text-center">
                      <div title="Lightsaber" className="relic-portrait relic-portrait--size- relic-portrait--alignment-dark-side">
                          <div className="relic-portrait__backdrop">
                              <img className="relic-portrait__img" src="https://swgoh.gg/static/img/assets/tex.relic_swd_sithrevan.png" alt="" />
                              <div className="relic-portrait__tier">{charRelic}</div>
                          </div>
                          <div className="relic-portrait__name">Lightsaber</div>
                      </div>
                  </div>
              </li>
          </ul>
          <div className="panel panel-default m-b-sm">
              <div className="panel-body">
                  <h5 className="m-t-0">Ability Classes</h5>
                  <a href="/p/388591888/characters/?f=Ability Block" className="btn btn-sm btn-default-outline">Ability Block</a>
                  <a href="/p/388591888/characters/?f=AoE" className="btn btn-sm btn-default-outline">AoE</a>
                  <a href="/p/388591888/characters/?f=Assist" className="btn btn-sm btn-default-outline">Assist</a>
                  <a href="/p/388591888/characters/?f=Bonus Attack" className="btn btn-sm btn-default-outline">Bonus Attack</a>
                  <a href="/p/388591888/characters/?f=Buff Immunity" className="btn btn-sm btn-default-outline">Buff Immunity</a>
                  <a href="/p/388591888/characters/?f=Dispel" className="btn btn-sm btn-default-outline">Dispel</a>
                  <a href="/p/388591888/characters/?f=Foresight" className="btn btn-sm btn-default-outline">Foresight</a>
                  <a href="/p/388591888/characters/?f=Gain Turn Meter" className="btn btn-sm btn-default-outline">Gain Turn Meter</a>
                  <a href="/p/388591888/characters/?f=Leader: +Critical" className="btn btn-sm btn-default-outline">Leader: +Critical</a>
                  <a href="/p/388591888/characters/?f=Leader: +Speed" className="btn btn-sm btn-default-outline">Leader: +Speed</a>
                  <a href="/p/388591888/characters/?f=Reduce Cooldowns" className="btn btn-sm btn-default-outline">Reduce Cooldowns</a>
                  <a href="/p/388591888/characters/?f=Stun" className="btn btn-sm btn-default-outline">Stun</a>
              </div>
          </div>
      </div>
    </>
  )
}

const SidebarRight = () => {
  return (
    <>
      <div className="content-container-primary-aside">
          <ul className="list-group media-list media-list-stream">
              <li className="media list-group-item p-sm">
                  <div className="media-body">
                      <div className="media-heading"><span className="pc-stat-value">35308</span>
                          <h5>Power</h5>
                      </div>
                  </div>
              </li>
              <li className="media list-group-item p-sm">
                  <div className="media-body">
                      <div className="media-heading">
                          <h5>Primary Attributes</h5>
                      </div>
                      <div className="media-body">
                          <div className="unit-stat-group-stat">
                            <span className="unit-stat-group-stat-label">Strength</span>
                            <span className="unit-stat-group-stat-value">2206</span>
                          </div>
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Agility</span>
                            <span className="unit-stat-group-stat-value">1767</span>
                          </div>
                          <div className="unit-stat-group-stat unit-stat-group-stat-primary">
                            <span className="unit-stat-group-stat-label">Tactics</span>
                            <span className="unit-stat-group-stat-value">2778</span>
                          </div>
                          <div className="unit-stat-group-stat">
                            <span className="unit-stat-group-stat-label">Strength Growth (STR)</span>
                            <span className="unit-stat-group-stat-value">18.4</span>
                          </div>
                          <div className="unit-stat-group-stat">
                            <span className="unit-stat-group-stat-label">Agility Growth (AGI)</span>
                            <span className="unit-stat-group-stat-value">18.4</span>
                          </div>
                          <div className="unit-stat-group-stat unit-stat-group-stat-primary">
                            <span className="unit-stat-group-stat-label">Tactics Growth (TAC)</span>
                            <span className="unit-stat-group-stat-value">20.3</span>
                          </div>
                          <div className="unit-stat-group-stat">
                            <span className="unit-stat-group-stat-label">Mastery</span>
                            <span className="unit-stat-group-stat-value">45</span>
                          </div>
                      </div>
                  </div>
              </li>
              <li className="media list-group-item p-sm">
                  <div className="media-body">
                      <div className="media-heading">
                          <h5>General</h5>
                      </div>
                      <div className="media-body">
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Health</span>
                            <span className="unit-stat-group-stat-value">
                              66807<span className="unit-stat-group-stat-equipment">(9749)</span>
                            </span>
                          </div>
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Protection</span>
                            <span className="unit-stat-group-stat-value">
                              46587<span className="unit-stat-group-stat-equipment">(11753)</span>
                            </span>
                          </div>
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Speed</span>
                            <span className="unit-stat-group-stat-value">
                              260<span className="unit-stat-group-stat-equipment">(86)</span>
                            </span>
                          </div>
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Critical Damage</span>
                            <span className="unit-stat-group-stat-value">150%</span>
                          </div>
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Potency</span>
                            <span className="unit-stat-group-stat-value">42%</span>
                          </div>
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Tenacity</span>
                            <span className="unit-stat-group-stat-value">
                              68.33%<span className="unit-stat-group-stat-equipment">(10.33%)</span>
                            </span>
                          </div>
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Health Steal</span>
                            <span className="unit-stat-group-stat-value">20%</span>
                          </div>
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Defense Penetration</span>
                            <span className="unit-stat-group-stat-value">0%</span>
                          </div>
                      </div>
                  </div>
              </li>
              <li className="media list-group-item p-sm">
                  <div className="media-body">
                      <div className="media-heading">
                          <h5>Physical Offense</h5>
                      </div>
                      <div className="media-body">
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Physical Damage</span>
                            <span className="unit-stat-group-stat-value">
                              7511<span className="unit-stat-group-stat-equipment">(2285)</span>
                            </span>
                          </div>
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Physical Critical Chance</span>
                            <span className="unit-stat-group-stat-value">
                              62.82%<span className="unit-stat-group-stat-equipment">(9.9%)</span>
                            </span>
                          </div>
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Armor Penetration</span>
                            <span className="unit-stat-group-stat-value">10</span>
                          </div>
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Physical Accuracy</span>
                            <span className="unit-stat-group-stat-value">13.5%</span>
                          </div>
                      </div>
                  </div>
              </li>
              <li className="media list-group-item p-sm">
                  <div className="media-body">
                      <div className="media-heading">
                          <h5>Physical Survivability</h5>
                      </div>
                      <div className="media-body">
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Armor</span>
                            <span className="unit-stat-group-stat-value">
                              61.65%<span className="unit-stat-group-stat-equipment">(9.1%)</span>
                            </span>
                          </div>
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Dodge Chance</span>
                            <span className="unit-stat-group-stat-value">2%</span>
                          </div>
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Physical Critical Avoidance</span>
                            <span className="unit-stat-group-stat-value">0%</span>
                          </div>
                      </div>
                  </div>
              </li>
              <li className="media list-group-item p-sm">
                  <div className="media-body">
                      <div className="media-heading">
                          <h5>Special Offense</h5>
                      </div>
                      <div className="media-body">
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Special Damage</span>
                            <span className="unit-stat-group-stat-value">
                              12538<span className="unit-stat-group-stat-equipment">(3782)</span>
                            </span>
                          </div>
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Special Critical Chance</span>
                            <span className="unit-stat-group-stat-value">
                              41.53%<span className="unit-stat-group-stat-equipment">(9.9%)</span>
                            </span>
                          </div>
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Resistance Penetration</span>
                            <span className="unit-stat-group-stat-value">202</span>
                          </div>
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Special Accuracy</span>
                            <span className="unit-stat-group-stat-value">13.5%</span>
                          </div>
                      </div>
                  </div>
              </li>
              <li className="media list-group-item p-sm">
                  <div className="media-body">
                      <div className="media-heading">
                          <h5>Special Survivability</h5>
                      </div>
                      <div className="media-body">
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Resistance</span>
                            <span className="unit-stat-group-stat-value">
                              51.5%<span className="unit-stat-group-stat-equipment">(9.91%)</span>
                            </span>
                          </div>
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Deflection Chance</span>
                            <span className="unit-stat-group-stat-value">2%</span>
                          </div>
                          <div className="unit-stat-group-stat ">
                            <span className="unit-stat-group-stat-label">Special Critical Avoidance</span>
                            <span className="unit-stat-group-stat-value">0%</span>
                          </div>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
    </>
  )
}

const CharactersGrid = ({roster}) => {
  let { id } = useParams();
  return (
    roster.map(unit => (
      unit.id === id && (
        console.log(unit),
        <>
          <div className="content-container-primary">
              <ul className="list-group media-list media-list-stream m-b-sm">
                  <li className="media list-group-item">
                      <h4>Galactic Power Breakdown</h4>
                      <div className="unit-gp-stats">
                          <div className="unit-gp-stats-header">
                              <div className="unit-gp-stats-header-cell"></div>
                              <div className="unit-gp-stats-header-cell"></div>
                              <div className="unit-gp-stats-header-cell"></div>
                              <div className="unit-gp-stats-header-cell">
                                  cur / max
                              </div>
                              <div className="unit-gp-stats-header-cell">
                                  diff
                              </div>
                          </div>
                          <div className="unit-gp-stat ">
                              <div className="unit-gp-stat-label unit-gp-stat-cell">Overall</div>
                              <div className="unit-gp-stat-cell">
                                  <div className="unit-gp-progress">
                                      <div className="unit-gp-progress-bar" style={{"width": "93.9417%"}}></div>
                                  </div>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"><span className="unit-gp-stat-percent"><span className="unit-gp-stat-percent-value">
                                93
                              </span><span className="unit-gp-stat-percent-symbol">%</span></span>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"><span className="unit-gp-stat-amount"><span className="unit-gp-stat-amount-value unit-gp-stat-amount-current">35,308</span><span className="unit-gp-stat-amount-sep">/</span><span className="unit-gp-stat-amount-value unit-gp-stat-amount-max">37,585</span></span>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"><span className="unit-gp-stat-diff">2,277</span></div>
                          </div>
                          <div className="unit-gp-stat unit-gp-stat-complete">
                              <div className="unit-gp-stat-label unit-gp-stat-cell">Level</div>
                              <div className="unit-gp-stat-cell">
                                  <div className="unit-gp-progress">
                                      <div className="unit-gp-progress-bar" style={{"width": " 100%"}}></div>
                                  </div>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"><span className="unit-gp-stat-percent"><span className="unit-gp-stat-percent-value">
                                100
                              </span><span className="unit-gp-stat-percent-symbol">%</span></span>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"><span className="unit-gp-stat-amount"><span className="unit-gp-stat-amount-value unit-gp-stat-amount-current">1,976</span><span className="unit-gp-stat-amount-sep">/</span><span className="unit-gp-stat-amount-value unit-gp-stat-amount-max">1,976</span></span>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"></div>
                          </div>
                          <div className="unit-gp-stat unit-gp-stat-complete">
                              <div className="unit-gp-stat-label unit-gp-stat-cell">Stars</div>
                              <div className="unit-gp-stat-cell">
                                  <div className="unit-gp-progress">
                                      <div className="unit-gp-progress-bar" style={{"width": " 100%"}}></div>
                                  </div>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"><span className="unit-gp-stat-percent"><span className="unit-gp-stat-percent-value">
                                100
                              </span><span className="unit-gp-stat-percent-symbol">%</span></span>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"><span className="unit-gp-stat-amount"><span className="unit-gp-stat-amount-value unit-gp-stat-amount-current">4,655</span><span className="unit-gp-stat-amount-sep">/</span><span className="unit-gp-stat-amount-value unit-gp-stat-amount-max">4,655</span></span>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"></div>
                          </div>
                          <div className="unit-gp-stat unit-gp-stat-complete">
                              <div className="unit-gp-stat-label unit-gp-stat-cell">Ability Levels</div>
                              <div className="unit-gp-stat-cell">
                                  <div className="unit-gp-progress">
                                      <div className="unit-gp-progress-bar" style={{"width": " 100%"}}></div>
                                  </div>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"><span className="unit-gp-stat-percent"><span className="unit-gp-stat-percent-value">
                                100
                              </span><span className="unit-gp-stat-percent-symbol">%</span></span>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"><span className="unit-gp-stat-amount"><span className="unit-gp-stat-amount-value unit-gp-stat-amount-current">11,295</span><span className="unit-gp-stat-amount-sep">/</span><span className="unit-gp-stat-amount-value unit-gp-stat-amount-max">11,295</span></span>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"></div>
                          </div>
                          <div className="unit-gp-stat unit-gp-stat-complete">
                              <div className="unit-gp-stat-label unit-gp-stat-cell">Gear Pieces</div>
                              <div className="unit-gp-stat-cell">
                                  <div className="unit-gp-progress">
                                      <div className="unit-gp-progress-bar" style={{"width": " 100%"}}></div>
                                  </div>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"><span className="unit-gp-stat-percent"><span className="unit-gp-stat-percent-value">
                                100
                              </span><span className="unit-gp-stat-percent-symbol">%</span></span>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"><span className="unit-gp-stat-amount"><span className="unit-gp-stat-amount-value unit-gp-stat-amount-current">7,515</span><span className="unit-gp-stat-amount-sep">/</span><span className="unit-gp-stat-amount-value unit-gp-stat-amount-max">7,515</span></span>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"></div>
                          </div>
                          <div className="unit-gp-stat unit-gp-stat-complete">
                              <div className="unit-gp-stat-label unit-gp-stat-cell">Mods</div>
                              <div className="unit-gp-stat-cell">
                                  <div className="unit-gp-progress">
                                      <div className="unit-gp-progress-bar" style={{"width": " 100%"}}></div>
                                  </div>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"><span className="unit-gp-stat-percent"><span className="unit-gp-stat-percent-value">
                                100
                              </span><span className="unit-gp-stat-percent-symbol">%</span></span>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"><span className="unit-gp-stat-amount"><span className="unit-gp-stat-amount-value unit-gp-stat-amount-current">1,899</span><span className="unit-gp-stat-amount-sep">/</span><span className="unit-gp-stat-amount-value unit-gp-stat-amount-max">1,899</span></span>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"></div>
                          </div>
                          <div className="unit-gp-stat ">
                              <div className="unit-gp-stat-label unit-gp-stat-cell">Relic Modifier</div>
                              <div className="unit-gp-stat-cell">
                                  <div className="unit-gp-progress">
                                      <div className="unit-gp-progress-bar" style={{"width": " 77.7778%"}}></div>
                                  </div>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"><span className="unit-gp-stat-percent"><span className="unit-gp-stat-percent-value">
                                77
                              </span><span className="unit-gp-stat-percent-symbol">%</span></span>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"><span className="unit-gp-stat-amount"><span className="unit-gp-stat-amount-value unit-gp-stat-amount-current">2,678</span><span className="unit-gp-stat-amount-sep">/</span><span className="unit-gp-stat-amount-value unit-gp-stat-amount-max">3,443</span></span>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"><span className="unit-gp-stat-diff">765</span></div>
                          </div>
                          <div className="unit-gp-stat ">
                              <div className="unit-gp-stat-label unit-gp-stat-cell">Relic Tier</div>
                              <div className="unit-gp-stat-cell">
                                  <div className="unit-gp-progress">
                                      <div className="unit-gp-progress-bar" style={{"width": " 77.7778%"}}></div>
                                  </div>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"><span className="unit-gp-stat-percent"><span className="unit-gp-stat-percent-value">
                                77
                              </span><span className="unit-gp-stat-percent-symbol">%</span></span>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"><span className="unit-gp-stat-amount"><span className="unit-gp-stat-amount-value unit-gp-stat-amount-current">5,292</span><span className="unit-gp-stat-amount-sep">/</span><span className="unit-gp-stat-amount-value unit-gp-stat-amount-max">6,804</span></span>
                              </div>
                              <div className="unit-gp-stat-numbers unit-gp-stat-cell"><span className="unit-gp-stat-diff">1,512</span></div>
                          </div>
                      </div>
                  </li>
              </ul>
              <ul className="list-group media-list media-list-stream m-b-sm">
                  <li className="media list-group-item">
                      <h4>Stat Mods</h4>
                      <div className="pc-row pc-intro pc-intro-dark-side">
                          <div className="pc-statmods">

                            <div className="collection-char-sets">
                                <div className="collection-char-sets-values">
                                    <div className="collection-char-set collection-char-set2 collection-char-set-max" data-toggle="tooltip" data-title="Set Bonus: 15% Offense" data-container="body" data-original-title="" title=""></div>
                                    <div className="collection-char-set collection-char-set5 collection-char-set-max" data-toggle="tooltip" data-title="Set Bonus: 8% Critical Chance" data-container="body" data-original-title="" title=""></div>
                                </div>
                            </div>
                            <div className="pc-statmod-list">
                                <div className="pc-statmod-list-sets">
                                    <div className="pc-statmod-list-set pc-statmod-list-set-1 pc-statmod-list-set-1-max"></div>
                                    <div className="pc-statmod-list-line pc-statmod-list-line-1 pc-statmod-list-line-1-max"></div>
                                    <div className="pc-statmod-list-line pc-statmod-list-line-2 pc-statmod-list-line-2-max"></div>
                                    <div className="pc-statmod-list-line pc-statmod-list-line-3 pc-statmod-list-line-3-max"></div>
                                    <div className="pc-statmod-list-line pc-statmod-list-line-5 pc-statmod-list-line-5-max"></div>
                                    <div className="pc-statmod-list-set pc-statmod-list-set-2 pc-statmod-list-set-2-max"></div>
                                    <div className="pc-statmod-list-line pc-statmod-list-line-4 pc-statmod-list-line-4-max"></div>
                                    <div className="pc-statmod-list-line pc-statmod-list-line-6 pc-statmod-list-line-6-max"></div>
                                </div>
                                {unit.mods.map(mod => (
                                  <>
                                    <div className={`"statmod pc-statmod statmod-small pc-statmod-slot${mod.slot} statmod-t${mod.tier} statmod--max-level"`}>
                                        <div className="statmod-summary">
                                            <div className="statmod-preview"><span className="statmod-pips"><span className="statmod-pip"></span><span className="statmod-pip"></span><span className="statmod-pip"></span><span className="statmod-pip"></span><span className="statmod-pip"></span><span className="statmod-pip"></span></span>
                                                <div className={`"
                                                  statmod-base
                                                  statmod-base--size-small
                                                  statmod-base--tier-${mod.tier}
                                                  statmod-base--slot-${mod.slot}
                                                  statmod-base--set-${mod.set}
                                                "`}>
                                                    <div className="
                                                      statmod-base-inner
                                                      statmod-base-inner--shapekey-6-1-1
                                                      statmod-base-inner--iconkey-2-1
                                                    ">
                                                        <div className="statmod-base-icon"></div>
                                                        <div className="statmod-base-shape"></div>
                                                    </div>
                                                </div><span className="statmod-level">15-E</span></div>
                                        </div>
                                        <div className="statmod-full" data-classes="statmod statmod-t1 statmod--max-level">
                                            <div className="statmod-title">Mk VI-E Offense Transmitter</div>
                                            <div className="statmod-preview"><span className="statmod-pips"><span className="statmod-pip"></span><span className="statmod-pip"></span><span className="statmod-pip"></span><span className="statmod-pip"></span><span className="statmod-pip"></span><span className="statmod-pip"></span></span>
                                                <div className={`"
                                                  statmod-base
                                                  statmod-base--tier-${mod.tier}
                                                  statmod-base--slot-${mod.slot}
                                                  statmod-base--set-${mod.set}
                                                "`}>
                                                    <div className="
                                                      statmod-base-inner
                                                      statmod-base-inner--shapekey-6-1-1
                                                      statmod-base-inner--iconkey-2-1
                                                    ">
                                                        <div className="statmod-base-icon"></div>
                                                        <div className="statmod-base-shape"></div>
                                                    </div>
                                                </div><span className="statmod-level">{mod.level}-E</span></div>
                                            <div className="statmod-details">
                                                <div className="statmod-stats statmod-stats-1">
                                                    <div className="statmod-stats-heading">Primary Stats</div>
                                                    <div className="statmod-stat"><span className="statmod-stat-value">+{mod.primaryStat.value}%</span><span className="statmod-stat-label">Offense</span></div>
                                                </div>
                                                <div className="statmod-stats statmod-stats-2">
                                                    <div className="statmod-stats-heading">Secondary Stats</div>
                                                    {
                                                      mod.secondaryStat.map(stat => (
                                                        <>
                                                          <div className="statmod-stat "><span className="statmod-stat-value">+{stat.value}%</span><span className="statmod-stat-label">Health</span><span className="statmod-stat-roll"> ({stat.roll})</span></div>
                                                        </>
                                                      ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  </>
                                ))
                                }

                            </div>

                          </div>
                      </div>
                  </li>
              </ul>
              <ul className="list-group media-list media-list-stream m-b-sm">
                  <li className="media list-group-item">
                      <h4>Skills</h4>
                      <div className="pc-skills">
                          <div className="pc-skills-list">
                            {
                              unit.skills.map(skill => (
                                <>
                                  <div className="pc-skills-list-item">
                                    <div className="pc-skill  pc-skill--maxed">
                                        <a className="pc-skill-link" href="/characters/darth-revan/#lacerate">
                                            <div className="pc-skill-levels" data-toggle="tooltip" data-container="body" data-title="Level 8 of 8 (MAXED)" data-original-title="" title="">
                                              <span className="pc-skill-levels-pip pc-skill-levels-pip-active"></span>
                                              <span className="pc-skill-levels-pip pc-skill-levels-pip-active"></span>
                                              <span className="pc-skill-levels-pip pc-skill-levels-pip-active"></span>
                                              <span className="pc-skill-levels-pip pc-skill-levels-pip-active"></span>
                                              <span className="pc-skill-levels-pip pc-skill-levels-pip-active"></span>
                                              <span className="pc-skill-levels-pip pc-skill-levels-pip-active"></span>
                                              <span className="pc-skill-levels-pip pc-skill-levels-pip-active"></span>
                                              <span className="pc-skill-levels-pip pc-skill-levels-pip-max pc-skill-levels-pip-active"></span>
                                            </div>
                                            <div className="pc-skill-ability">
                                              <span className="char-ability">
                                                <img className="char-ability-img" src="https://swgoh.gg/game-asset/a/basicskill_DARTHREVAN/" alt={skill.nameKey} title={skill.nameKey} />
                                              </span>
                                            </div>
                                            <div className="pc-skill-name">{skill.nameKey}</div>
                                            <div className="pc-skill__material">
                                              <img className="pc-skill__material-img" src="https://swgoh.gg/static/img/assets/tex.skill_pentagon_gold.png" data-toggle="tooltip" data-placement="top" title="" data-original-title="Omega" />
                                            </div>
                                        </a>
                                    </div>
                                  </div>
                                </>
                              ))
                            }
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
        </>
      )
    ))

  );
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

const CharacterProfile = (props) => {
  let { id } = useParams();
  const playerRoster = localStorage.getItem('playerRoster');
  const rosterJSON = JSON.parse(playerRoster);
  const playerName = localStorage.getItem('playerName');
  const playerNameJSON = JSON.parse(playerName);

  console.warn(props)

  return (
    <>
      <Container id="content">
        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>
        <Row>
          {
            rosterJSON.map(unit => (
              unit.id === id && (
                <>
                  <div className="container p-t-md">
                    <BreadCrumb
                      playerName={playerNameJSON}
                      characterName={unit.nameKey}
                    />
                    <div className="content-container">
                      <Aside
                        charId={unit.id}
                        charNameKey={unit.nameKey}
                        charLevel={unit.level}
                        charZetas={unit.skills.filter(s => s.isZeta === true).length}
                        charRelic={Object.values(unit.relic) - 2}
                      />
                      <CharactersGrid roster={rosterJSON} />
                      <SidebarRight />
                    </div>
                  </div>
                </>
              )
            ))

          }

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

export default withRouter(CharacterProfile);
