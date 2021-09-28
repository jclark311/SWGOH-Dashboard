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

import './PlayerProfile.css';

const Aside = () => {
  return (
    <>
      <div className="content-container-aside">
        <div className="panel panel-default panel-profile m-b-sm">
          <div className="character-card panel-heading no-side"></div>
          <div className="panel-body">
            <h5 className="panel-title text-center m-b-sm">Erlkönig</h5>

            <ul className="panel-menu text-center">
              <li className="panel-menu-item">
                User #
                <h5 className="m-y-0">315410</h5>
              </li>
              <li className="panel-menu-item">
                Arena Rank
                <h5 className="m-y-0">457</h5>
              </li>
              <li className="panel-menu-item">
                Level
                <h5 className="m-y-0">85</h5>
              </li>
            </ul>
            <p>Guild <strong className="pull-right"><a href="/g/16891/preogative/">preogative</a></strong></p>
            <p>Ally Code <strong className="pull-right"><span className="btn-copy" style={{"text-decoration-line": "underline", "text-decoration-style": "dotted", "cursor": "pointer"}} data-clipboard-text="388-591-888">388-591-888 <span className="icon icon-copy"></span></span></strong></p>
            <p>Joined <strong className="pull-right">Jan 15, 2019</strong></p>
          </div>
        </div>

        <div className="list-group m-b-sm mobile-nav">
          <a href="/p/388591888/" className="list-group-item active">
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

        <h5>Player Info</h5>
        <div className="panel panel-default panel-profile m-b-sm player-stat-info">
          <div className="panel-body">
            <h5 className="panel-title text-center">Erlkönig</h5>
            <div className="player-stat-info__stats">
              <div className="player-stat-info__stat">
                <span className="player-stat-info__stat-name">Galactic Power</span>
                <span className="player-stat-info__stat-value"><strong>4,975,160</strong></span>
              </div>
              <div className="player-stat-info__stat">
                <span className="player-stat-info__stat-name">Galactic Power (Characters)</span>
                <span className="player-stat-info__stat-value"><strong>2,951,006</strong></span>
              </div>
              <div className="player-stat-info__stat">
                <span className="player-stat-info__stat-name">Galactic Power (Ships)</span>
                <span className="player-stat-info__stat-value"><strong>2,024,154</strong></span>
              </div>
              <div className="player-stat-info__stat">
                <span className="player-stat-info__stat-name">Fleet Arena Battles Won</span>
                <span className="player-stat-info__stat-value"><strong>491</strong></span>
              </div>
              <div className="player-stat-info__stat">
                <span className="player-stat-info__stat-name">Squad Arena Battles Won</span>
                <span className="player-stat-info__stat-value"><strong>1,620</strong></span>
              </div>
              <div className="player-stat-info__stat">
                <span className="player-stat-info__stat-name">Normal Battles Won</span>
                <span className="player-stat-info__stat-value"><strong>95,978</strong></span>
              </div>
              <div className="player-stat-info__stat">
                <span className="player-stat-info__stat-name">Hard Battles Won</span>
                <span className="player-stat-info__stat-value"><strong>44,825</strong></span>
              </div>
              <div className="player-stat-info__stat">
                <span className="player-stat-info__stat-name">Galactic War Battles Won</span>
                <span className="player-stat-info__stat-value"><strong>15,882</strong></span>
              </div>
              <div className="player-stat-info__stat">
                <span className="player-stat-info__stat-name">Guild Raids Won</span>
                <span className="player-stat-info__stat-value"><strong>658</strong></span>
              </div>
              <div className="player-stat-info__stat">
                <span className="player-stat-info__stat-name">Guild Tokens Earned</span>
                <span className="player-stat-info__stat-value"><strong>1,089,955</strong></span>
              </div>
              <div className="player-stat-info__stat">
                <span className="player-stat-info__stat-name">Championship Successful Battle Defends</span>
                <span className="player-stat-info__stat-value"><strong>330</strong></span>
              </div>
              <div className="player-stat-info__stat">
                <span className="player-stat-info__stat-name">Championship Full Rounds Cleared</span>
                <span className="player-stat-info__stat-value"><strong>10</strong></span>
              </div>
              <div className="player-stat-info__stat">
                <span className="player-stat-info__stat-name">Lifetime Championship Score</span>
                <span className="player-stat-info__stat-value"><strong>377,236</strong></span>
              </div>
              <div className="player-stat-info__stat">
                <span className="player-stat-info__stat-name">Championship Undersized Squad Battles Won</span>
                <span className="player-stat-info__stat-value"><strong>5</strong></span>
              </div>
              <div className="player-stat-info__stat">
                <span className="player-stat-info__stat-name">Championship Promotions Earned</span>
                <span className="player-stat-info__stat-value"><strong>37</strong></span>
              </div>
              <div className="player-stat-info__stat">
                <span className="player-stat-info__stat-name">Championship Banners Earned</span>
                <span className="player-stat-info__stat-value"><strong>198,556</strong></span>
              </div>
              <div className="player-stat-info__stat">
                <span className="player-stat-info__stat-name">Championship Best Rank Achieved</span>
                <span className="player-stat-info__stat-value"><strong>88,197,153,465,349</strong></span>
              </div>
              <div className="player-stat-info__stat">
                <span className="player-stat-info__stat-name">Championship Offensive Battles Won</span>
                <span className="player-stat-info__stat-value"><strong>517</strong></span>
              </div>
              <div className="player-stat-info__stat">
                <span className="player-stat-info__stat-name">Championship Territories Defeated</span>
                <span className="player-stat-info__stat-value"><strong>154</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const CharactersGrid = () => {
  return (
    <>
      <div className="content-container-primary character-list">
          <ul className="list-group profile-groups">
              <li className="list-group-item gac-meta-sitemessage text-center">
                  <p>The SWGOH.GG GAC Meta Report is live!</p>
                  <a href="/gac/" className="btn btn-sm btn-default-outline">Check it out!</a>
              </li>
              <li className="list-group-item p-a list-group-header">
                  <div className="header-buttons visible-md visible-lg">
                      <a href="/p/388591888/characters/" className="btn btn-default btn-m-r">
                          <span className="icon icon-users"></span> Characters
                      </a>
                      <a href="/p/388591888/mods/" className="btn btn-default">
                          <span className="icon icon-hair-cross"></span> Mods
                      </a>

                      <div className="sync-button" data-toggle="tooltip" data-placement="top" data-original-title="1 Remaining Refreshes">
                          <form action="/p/388591888/trigger-sync/" method="post">
                              <input type="hidden" name="csrfmiddlewaretoken" value="j1CWc5yJD3X2ws9MKTwSSsCwP0EiiBYH2gz3iimpwjWhFMdf5jjgKM8FVwHRAj5o" />
                              <input type="submit" value="Sync Profile" className="btn btn-success" />
                          </form>
                      </div>
                  </div>
                  <div className="header-text">
                      <h3 className="m-a-0">Erlkönig's Profile</h3>
                      <div className="user-last-updated text-muted">
                          Last updated: <span className="datetime" data-datetime="2021-02-11T23:45:19Z" data-toggle="tooltip" data-placement="top" data-container="body" title="" data-original-title="Feb. 11, 2021, 11:45 p.m. UTC">20 hours ago</span>
                      </div>
                  </div>
              </li>
              <li className="list-group-item profile-group p-0">
                  <div className="profile-group-heading">Stats</div>
              </li>
              <li className="list-group-item profile-group p-0">
                  <div className="profile-group-content">
                      <div className="panel-body text-center p-0">
                          <ul className="panel-menu m-0">
                              <li className="panel-menu-item">
                                  Characters
                                  <h5 className="m-y-0">189</h5>
                              </li>
                              <li className="panel-menu-item">
                                  Zetas
                                  <h5 className="m-y-0"><a href="/p/388591888/zetas/">95</a></h5>
                              </li>
                              <li className="panel-menu-item">
                                  7* Characters
                                  <h5 className="m-y-0">153</h5>
                              </li>
                              <li className="panel-menu-item">
                                  Gear 13
                                  <h5 className="m-y-0">24</h5>
                              </li>
                              <li className="panel-menu-item">
                                  Gear 12
                                  <h5 className="m-y-0">19</h5>
                              </li>
                              <li className="panel-menu-item">
                                  Gear 11
                                  <h5 className="m-y-0">26</h5>
                              </li>
                              <li className="panel-menu-item">
                                  Ships
                                  <h5 className="m-y-0">46</h5>
                              </li>
                              <li className="panel-menu-item">
                                  7* Ships
                                  <h5 className="m-y-0">35</h5>
                              </li>
                          </ul>
                      </div>
                  </div>
              </li>
              <li className="list-group-item profile-group p-0">
                  <div className="profile-group-heading">Arena</div>
              </li>
              <li className="list-group-item profile-group p-0">
                  <div className="profile-group-content">
                      <div className="current-rank">
                          <div className="current-rank-info">
                              <div className="current-rank-value">469</div>
                              <div className="current-rank-title">Current Rank</div>
                          </div>
                          <div className="current-rank-team">
                              <div className="team-listing">
                                  <div className="team-listing-member team-listing-leader">
                                      <div className="player-char-portrait char-portrait-full char-portrait-full-small char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side" data-toggle="tooltip" data-container="body" title="" data-original-title="Darth Revan">
                                          <a href="/p/388591888/characters/darth-revan" className="char-portrait-full-link" rel="nofollow">
                                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/DARTHREVAN/" alt="Darth Revan" />
                                              <div className="char-portrait-full-gear"></div>
                                              <div className="char-portrait-full-level">85</div>
                                          </a>
                                      </div>
                                  </div>
                                  <div className="team-listing-member">
                                      <div className="player-char-portrait char-portrait-full char-portrait-full-micro char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side" data-toggle="tooltip" data-container="body" title="" data-original-title="Darth Vader">
                                          <a href="/p/388591888/characters/darth-vader" className="char-portrait-full-link" rel="nofollow">
                                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/VADER/" alt="Darth Vader" />
                                              <div className="char-portrait-full-gear"></div>
                                              <div className="char-portrait-full-level">85</div>
                                          </a>
                                      </div>
                                  </div>
                                  <div className="team-listing-member">
                                      <div className="player-char-portrait char-portrait-full char-portrait-full-micro char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side" data-toggle="tooltip" data-container="body" title="" data-original-title="Darth Malak">
                                          <a href="/p/388591888/characters/darth-malak" className="char-portrait-full-link" rel="nofollow">
                                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/DARTHMALAK/" alt="Darth Malak" />
                                              <div className="char-portrait-full-gear"></div>
                                              <div className="char-portrait-full-level">85</div>
                                          </a>
                                      </div>
                                  </div>
                                  <div className="team-listing-member">
                                      <div className="player-char-portrait char-portrait-full char-portrait-full-micro char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side" data-toggle="tooltip" data-container="body" title="" data-original-title="HK-47">
                                          <a href="/p/388591888/characters/hk-47" className="char-portrait-full-link" rel="nofollow">
                                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/HK47/" alt="HK-47" />
                                              <div className="char-portrait-full-gear"></div>
                                              <div className="char-portrait-full-level">85</div>
                                          </a>
                                      </div>
                                  </div>
                                  <div className="team-listing-member">
                                      <div className="player-char-portrait char-portrait-full char-portrait-full-micro char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side" data-toggle="tooltip" data-container="body" title="" data-original-title="Bastila Shan (Fallen)">
                                          <a href="/p/388591888/characters/bastila-shan-fallen" className="char-portrait-full-link" rel="nofollow">
                                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/BASTILASHANDARK/" alt="Bastila Shan (Fallen)" />
                                              <div className="char-portrait-full-gear"></div>
                                              <div className="char-portrait-full-level">85</div>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="stat-listing stats-arena">
                          <div className="stat-item">
                              <div className="stat-item-info">
                                  <div className="stat-item-value">408</div>
                                  <div className="stat-item-title">Highest Rank</div>
                              </div>
                              <div className="team-listing">
                                  <div className="team-listing-member team-listing-leader">
                                      <div className="player-char-portrait char-portrait-full char-portrait-full-small char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side" data-toggle="tooltip" data-container="body" title="" data-original-title="Darth Revan">
                                          <a href="/p/388591888/characters/darth-revan" className="char-portrait-full-link" rel="nofollow">
                                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/DARTHREVAN/" alt="Darth Revan" />
                                              <div className="char-portrait-full-gear"></div>
                                              <div className="char-portrait-full-level">85</div>
                                          </a>
                                      </div>
                                  </div>
                                  <div className="team-listing-member">
                                      <div className="player-char-portrait char-portrait-full char-portrait-full-micro char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side" data-toggle="tooltip" data-container="body" title="" data-original-title="Darth Vader">
                                          <a href="/p/388591888/characters/darth-vader" className="char-portrait-full-link" rel="nofollow">
                                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/VADER/" alt="Darth Vader" />
                                              <div className="char-portrait-full-gear"></div>
                                              <div className="char-portrait-full-level">85</div>
                                          </a>
                                      </div>
                                  </div>
                                  <div className="team-listing-member ">
                                      <div className="player-char-portrait char-portrait-full char-portrait-full-micro char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side" data-toggle="tooltip" data-container="body" title="" data-original-title="Darth Malak">
                                          <a href="/p/388591888/characters/darth-malak" className="char-portrait-full-link" rel="nofollow">
                                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/DARTHMALAK/" alt="Darth Malak" />
                                              <div className="char-portrait-full-gear"></div>
                                              <div className="char-portrait-full-level">85</div>
                                          </a>
                                      </div>
                                  </div>
                                  <div className="team-listing-member">
                                      <div className="player-char-portrait char-portrait-full char-portrait-full-micro char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side" data-toggle="tooltip" data-container="body" title="" data-original-title="HK-47">
                                          <a href="/p/388591888/characters/hk-47" className="char-portrait-full-link" rel="nofollow">
                                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/HK47/" alt="HK-47" />
                                              <div className="char-portrait-full-gear"></div>
                                              <div className="char-portrait-full-level">85</div>
                                          </a>
                                      </div>
                                  </div>
                                  <div className="team-listing-member">
                                      <div className="player-char-portrait char-portrait-full char-portrait-full-micro char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side" data-toggle="tooltip" data-container="body" title="" data-original-title="Bastila Shan (Fallen)">
                                          <a href="/p/388591888/characters/bastila-shan-fallen" className="char-portrait-full-link" rel="nofollow">
                                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/BASTILASHANDARK/" alt="Bastila Shan (Fallen)" />
                                              <div className="char-portrait-full-gear"></div>
                                              <div className="char-portrait-full-level">85</div>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="stat-item">
                              <div className="stat-item-info">
                                  <div className="stat-item-value">666</div>
                                  <div className="stat-item-title">Lowest Rank</div>
                              </div>
                              <div className="team-listing">
                                  <div className="team-listing-member  team-listing-leader">
                                      <div className="player-char-portrait char-portrait-full char-portrait-full-small char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side" data-toggle="tooltip" data-container="body" title="" data-original-title="Darth Revan">
                                          <a href="/p/388591888/characters/darth-revan" className="char-portrait-full-link" rel="nofollow">
                                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/DARTHREVAN/" alt="Darth Revan" />
                                              <div className="char-portrait-full-gear"></div>
                                              <div className="char-portrait-full-level">85</div>
                                          </a>
                                      </div>
                                  </div>
                                  <div className="team-listing-member ">
                                      <div className="player-char-portrait char-portrait-full char-portrait-full-micro char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side" data-toggle="tooltip" data-container="body" title="" data-original-title="Darth Vader">
                                          <a href="/p/388591888/characters/darth-vader" className="char-portrait-full-link" rel="nofollow">
                                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/VADER/" alt="Darth Vader" />
                                              <div className="char-portrait-full-gear"></div>
                                              <div className="char-portrait-full-level">85</div>
                                          </a>
                                      </div>
                                  </div>
                                  <div className="team-listing-member ">
                                      <div className="player-char-portrait char-portrait-full char-portrait-full-micro char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side" data-toggle="tooltip" data-container="body" title="" data-original-title="Darth Malak">
                                          <a href="/p/388591888/characters/darth-malak" className="char-portrait-full-link" rel="nofollow">
                                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/DARTHMALAK/" alt="Darth Malak" />
                                              <div className="char-portrait-full-gear"></div>
                                              <div className="char-portrait-full-level">85</div>
                                          </a>
                                      </div>
                                  </div>
                                  <div className="team-listing-member">
                                      <div className="player-char-portrait char-portrait-full char-portrait-full-micro char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side" data-toggle="tooltip" data-container="body" title="" data-original-title="HK-47">
                                          <a href="/p/388591888/characters/hk-47" className="char-portrait-full-link" rel="nofollow">
                                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/HK47/" alt="HK-47" />
                                              <div className="char-portrait-full-gear"></div>
                                              <div className="char-portrait-full-level">85</div>
                                          </a>
                                      </div>
                                  </div>
                                  <div className="team-listing-member">
                                      <div className="player-char-portrait char-portrait-full char-portrait-full-micro char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side" data-toggle="tooltip" data-container="body" title="" data-original-title="Bastila Shan (Fallen)">
                                          <a href="/p/388591888/characters/bastila-shan-fallen" className="char-portrait-full-link" rel="nofollow">
                                              <img className="char-portrait-full-img" src="https://swgoh.gg/game-asset/u/BASTILASHANDARK/" alt="Bastila Shan (Fallen)" />
                                              <div className="char-portrait-full-gear"></div>
                                              <div className="char-portrait-full-level">85</div>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="stat-item">
                              <div className="stat-item-info">
                                  <div className="stat-item-value">505</div>
                                  <div className="stat-item-title">Average Rank</div>
                              </div>
                              <div className="team-listing"></div>
                          </div>
                      </div>
                      <div className="chart chart-arena">
                          <div className="chart-heading">Arena Rank Over Last 30 Days</div>
                          <div className="chart-content">
                              <div id="arena-rank-chart" className="arena-rank-chart" data-highcharts-chart="0">
                                  <div className="highcharts-container" id="highcharts-0" style={{"position": "relative", "overflow": "hidden", "width": "826px", "height": "250px", "text-align": "left", "line-height": "normal", "zIndex": "0", "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}>
                                    <svg version="1.1" style={{"fontFamily": "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif", "fontSize": "12px"}} xmlns="http://www.w3.org/2000/svg" width="826" height="250">
                                      <desc>Created with Highcharts 4.2.3</desc>
                                      <defs>
                                        <clipPath id="highcharts-1">
                                          <rect x="0" y="0" width="826" height="224"></rect>
                                        </clipPath>
                                      </defs>
                                      <rect x="0" y="0" width="826" height="250" fill="#FFFFFF" className=" highcharts-background"></rect>
                                      <path fill="none" d="M 0 0.5 L 826 0.5 826 0.5 0 0.5" zIndex="0"></path>
                                      <path fill="rgba(0, 74, 158, 0.05)" d="M 0 0.5 L 826 0.5 826 0.5 0 0.5" zIndex="0"></path>
                                      <path fill="none" d="M 0 0.5 L 826 0.5 826 0.5 0 0.5" zIndex="0"></path>
                                      <path fill="rgba(0, 74, 158, 0.05)" d="M 0 0.5 L 826 0.5 826 0.5 0 0.5" zIndex="0"></path>
                                      <path fill="none" d="M 0 0.5 L 826 0.5 826 0.5 0 0.5" zIndex="0"></path>
                                      <path fill="rgba(0, 74, 158, 0.05)" d="M 0 0.5 L 826 0.5 826 94.5 0 94.5" zIndex="0"></path>
                                      <text x="10" text-anchor="undefined" zIndex="0" transform="translate(0,0)" style={{"fontSize": "10px"}} y="52" visibility="visible">
                                        <tspan>Rank 201-500</tspan>
                                      </text>
                                      <path fill="none" d="M 0 94.5 L 826 94.5 826 224.5 0 224.5" zIndex="0"></path>
                                      <text x="10" text-anchor="undefined" zIndex="0" transform="translate(0,0)" style={{"fontSize": "10px"}} y="164" visibility="visible">
                                        <tspan>Rank 501-1000</tspan>
                                      </text>
                                        <path fill="rgba(0, 74, 158, 0.05)" d="M 0 224.5 L 826 224.5 826 224.5 0 224.5" zIndex="0"></path>
                                      <path fill="none" d="M 0 224.5 L 826 224.5 826 224.5 0 224.5" zIndex="0"></path>
                                      <path fill="rgba(0, 74, 158, 0.05)" d="M 0 224.5 L 826 224.5 826 224.5 0 224.5" zIndex="0"></path>
                                      <g className="highcharts-grid" zIndex="1"></g>
                                      <g className="highcharts-grid" zIndex="1"></g>
                                      <g className="highcharts-axis" zIndex="2">
                                        <path fill="none" d="M 96.5 224 L 96.5 234" stroke="#C0D0E0" stroke-width="1" opacity="1"></path>
                                        <path fill="none" d="M 266.5 224 L 266.5 234" stroke="#C0D0E0" stroke-width="1" opacity="1"></path>
                                        <path fill="none" d="M 436.5 224 L 436.5 234" stroke="#C0D0E0" stroke-width="1" opacity="1"></path>
                                        <path fill="none" d="M 606.5 224 L 606.5 234" stroke="#C0D0E0" stroke-width="1" opacity="1"></path>
                                        <path fill="none" d="M 801.5 224 L 801.5 234" stroke="#C0D0E0" stroke-width="1" opacity="1"></path>
                                        <path fill="none" d="M 0 224.5 L 826 224.5" stroke="#C0D0E0" stroke-width="1" zIndex="7"></path>
                                      </g>
                                      <g className="highcharts-axis" zIndex="2"></g>
                                      <g className="highcharts-series-group" zIndex="3">
                                      <g className="highcharts-series highcharts-series-0" zIndex="0.1" transform="translate(0,0) scale(1 1)" clip-path="url(#highcharts-1)">
                                      <path fill="none" d="M 780.9754426736112 72.7017543859649 C 780.9754426736112 72.7017543859649 766.4234124738563 72.7017543859649 756.722059007353 73.35672514619883 C 747.00651721378 74.01169590643275 742.1487463169935 83.04987580438383 732.4332045234205 93.00584795321637 C 722.7184757954794 102.96098691549494 717.8611114315088 114.23112899933737 708.1463827035676 123.1345029239766 C 698.4224264848857 132.04633367769992 693.5604483755448 137.5438596491228 683.8364921568628 137.5438596491228 C 674.1230340337692 137.5438596491228 669.2663049722223 94.97076023391813 659.5528468491286 94.97076023391813 C 649.9965994479847 94.97076023391813 645.218475747413 139.50877192982458 635.6622283462691 151.953216374269 C 625.7486314579248 164.39766081871343 620.7918330137528 164.39766081871343 610.8782361254085 164.39766081871343 C 601.2218736776962 164.39766081871343 596.3936924538399 140.53084203738806 586.7373300061275 121.16959064327484 C 577.055149322304 101.75657303154011 572.2140589803923 67.46198830409357 562.5318782965687 67.46198830409357 C 552.7632314738563 67.46198830409357 547.8789080625 78.17685855868092 538.1102612397876 95.62573099415204 C 528.3714543419118 113.02130300312535 523.5020508929739 154.57309941520467 513.763243995098 154.57309941520467 C 504.0640926328976 154.57309941520467 499.2145169517974 154.57309941520467 489.51536558959697 154.57309941520467 C 479.76530905310466 154.57309941520467 474.8902807848584 201.73099415204678 465.14022424836605 201.73099415204678 C 455.48725004275605 201.73099415204678 450.66076293995104 32.748538011695906 441.007788734341 32.748538011695906 C 421.51852647154146 32.748538011695906 411.7738953401416 32.748538011695906 392.2846330773421 36.67836257309941 C 382.57344161791946 40.60818713450292 377.7178458882081 59.60233918128654 368.00665442878545 63.53216374269005 C 358.29350942987475 67.46198830409357 353.4369369304194 63.53216374269005 343.72379193150874 67.46198830409357 C 334.07259445819716 71.39181286549709 329.2469957215414 98.24561403508771 319.59579824822987 98.24561403508771 C 309.79365276157415 98.24561403508771 304.8925800182462 78.59649122807016 295.09043453159046 78.59649122807016 C 285.3792752393791 78.59649122807016 280.52369559327343 78.59649122807016 270.8125363010621 78.59649122807016 C 261.0993994001907 78.59649122807016 256.2428309497549 78.59649122807016 246.52969404888347 78.59649122807016 C 236.84975472235843 78.59649122807016 232.0097850590959 78.59649122807016 222.32984573257082 78.59649122807016 C 212.58352632870373 78.59649122807016 207.71036662677017 78.59649122807016 197.96404722290308 78.59649122807016 C 188.24247182775056 78.59649122807016 183.38168413017428 78.59649122807016 173.6601087350218 78.59649122807016 C 163.94268223529411 78.59649122807016 159.0839689854303 99.55555555555554 149.36654248570264 104.7953216374269 C 139.63872114038674 110.03508771929825 134.77481046772877 110.03508771929825 125.04698912241287 110.03508771929825 C 115.3267504660948 110.03508771929825 110.46663113793575 58.29239766081871 100.74639248161766 58.29239766081871 C 91.04539420411223 58.29239766081871 76.49389678785404 58.29239766081871 76.49389678785404 58.29239766081871" stroke="#7cb5ec" stroke-width="3" zIndex="1" stroke-linejoin="round" stroke-linecap="round">
                                      </path>
                                      <path fill="none" d="M 770.9754426736112 72.7017543859649 L 780.9754426736112 72.7017543859649 C 780.9754426736112 72.7017543859649 766.4234124738563 72.7017543859649 756.722059007353 73.35672514619883 C 747.00651721378 74.01169590643275 742.1487463169935 83.04987580438383 732.4332045234205 93.00584795321637 C 722.7184757954794 102.96098691549494 717.8611114315088 114.23112899933737 708.1463827035676 123.1345029239766 C 698.4224264848857 132.04633367769992 693.5604483755448 137.5438596491228 683.8364921568628 137.5438596491228 C 674.1230340337692 137.5438596491228 669.2663049722223 94.97076023391813 659.5528468491286 94.97076023391813 C 649.9965994479847 94.97076023391813 645.218475747413 139.50877192982458 635.6622283462691 151.953216374269 C 625.7486314579248 164.39766081871343 620.7918330137528 164.39766081871343 610.8782361254085 164.39766081871343 C 601.2218736776962 164.39766081871343 596.3936924538399 140.53084203738806 586.7373300061275 121.16959064327484 C 577.055149322304 101.75657303154011 572.2140589803923 67.46198830409357 562.5318782965687 67.46198830409357 C 552.7632314738563 67.46198830409357 547.8789080625 78.17685855868092 538.1102612397876 95.62573099415204 C 528.3714543419118 113.02130300312535 523.5020508929739 154.57309941520467 513.763243995098 154.57309941520467 C 504.0640926328976 154.57309941520467 499.2145169517974 154.57309941520467 489.51536558959697 154.57309941520467 C 479.76530905310466 154.57309941520467 474.8902807848584 201.73099415204678 465.14022424836605 201.73099415204678 C 455.48725004275605 201.73099415204678 450.66076293995104 32.748538011695906 441.007788734341 32.748538011695906 C 421.51852647154146 32.748538011695906 411.7738953401416 32.748538011695906 392.2846330773421 36.67836257309941 C 382.57344161791946 40.60818713450292 377.7178458882081 59.60233918128654 368.00665442878545 63.53216374269005 C 358.29350942987475 67.46198830409357 353.4369369304194 63.53216374269005 343.72379193150874 67.46198830409357 C 334.07259445819716 71.39181286549709 329.2469957215414 98.24561403508771 319.59579824822987 98.24561403508771 C 309.79365276157415 98.24561403508771 304.8925800182462 78.59649122807016 295.09043453159046 78.59649122807016 C 285.3792752393791 78.59649122807016 280.52369559327343 78.59649122807016 270.8125363010621 78.59649122807016 C 261.0993994001907 78.59649122807016 256.2428309497549 78.59649122807016 246.52969404888347 78.59649122807016 C 236.84975472235843 78.59649122807016 232.0097850590959 78.59649122807016 222.32984573257082 78.59649122807016 C 212.58352632870373 78.59649122807016 207.71036662677017 78.59649122807016 197.96404722290308 78.59649122807016 C 188.24247182775056 78.59649122807016 183.38168413017428 78.59649122807016 173.6601087350218 78.59649122807016 C 163.94268223529411 78.59649122807016 159.0839689854303 99.55555555555554 149.36654248570264 104.7953216374269 C 139.63872114038674 110.03508771929825 134.77481046772877 110.03508771929825 125.04698912241287 110.03508771929825 C 115.3267504660948 110.03508771929825 110.46663113793575 58.29239766081871 100.74639248161766 58.29239766081871 C 91.04539420411223 58.29239766081871 76.49389678785404 58.29239766081871 76.49389678785404 58.29239766081871 L 86.49389678785404 58.29239766081871" stroke-linejoin="round" visibility="visible" stroke="rgba(192,192,192,0.0001)" stroke-width="23" zIndex="2" className="highcharts-tracker">
                                      </path>
                                      </g>
                                      <g className="highcharts-markers highcharts-series-0 highcharts-tracker" zIndex="0.1" transform="translate(0,0) scale(1 1)" clip-path="url(#highcharts-2)" >
                                      <path fill="#7cb5ec" d="M 76 54.29239766081871 C 81.328 54.29239766081871 81.328 62.29239766081871 76 62.29239766081871 C 70.672 62.29239766081871 70.672 54.29239766081871 76 54.29239766081871 Z"></path>
                                      <path fill="#7cb5ec" d="M 100 54.29239766081871 C 105.328 54.29239766081871 105.328 62.29239766081871 100 62.29239766081871 C 94.672 62.29239766081871 94.672 54.29239766081871 100 54.29239766081871 Z"></path>
                                      <path fill="#7cb5ec" d="M 125 106.03508771929825 C 130.328 106.03508771929825 130.328 114.03508771929825 125 114.03508771929825 C 119.672 114.03508771929825 119.672 106.03508771929825 125 106.03508771929825 Z"></path>
                                      <path fill="#7cb5ec" d="M 149 100.7953216374269 C 154.328 100.7953216374269 154.328 108.7953216374269 149 108.7953216374269 C 143.672 108.7953216374269 143.672 100.7953216374269 149 100.7953216374269 Z"></path>
                                      <path fill="#7cb5ec" d="M 173 74.59649122807016 C 178.328 74.59649122807016 178.328 82.59649122807016 173 82.59649122807016 C 167.672 82.59649122807016 167.672 74.59649122807016 173 74.59649122807016 Z"></path>
                                      <path fill="#7cb5ec" d="M 197 74.59649122807016 C 202.328 74.59649122807016 202.328 82.59649122807016 197 82.59649122807016 C 191.672 82.59649122807016 191.672 74.59649122807016 197 74.59649122807016 Z"></path>
                                      <path fill="#7cb5ec" d="M 222 74.59649122807016 C 227.328 74.59649122807016 227.328 82.59649122807016 222 82.59649122807016 C 216.672 82.59649122807016 216.672 74.59649122807016 222 74.59649122807016 Z"></path>
                                      <path fill="#7cb5ec" d="M 246 74.59649122807016 C 251.328 74.59649122807016 251.328 82.59649122807016 246 82.59649122807016 C 240.672 82.59649122807016 240.672 74.59649122807016 246 74.59649122807016 Z"></path>
                                      <path fill="#7cb5ec" d="M 270 74.59649122807016 C 275.328 74.59649122807016 275.328 82.59649122807016 270 82.59649122807016 C 264.672 82.59649122807016 264.672 74.59649122807016 270 74.59649122807016 Z"></path>
                                      <path fill="#7cb5ec" d="M 295 74.59649122807016 C 300.328 74.59649122807016 300.328 82.59649122807016 295 82.59649122807016 C 289.672 82.59649122807016 289.672 74.59649122807016 295 74.59649122807016 Z"></path>
                                      <path fill="#7cb5ec" d="M 319 94.24561403508771 C 324.328 94.24561403508771 324.328 102.24561403508771 319 102.24561403508771 C 313.672 102.24561403508771 313.672 94.24561403508771 319 94.24561403508771 Z"></path>
                                      <path fill="#7cb5ec" d="M 343 63.461988304093566 C 348.328 63.461988304093566 348.328 71.46198830409357 343 71.46198830409357 C 337.672 71.46198830409357 337.672 63.461988304093566 343 63.461988304093566 Z"></path>
                                      <path fill="#7cb5ec" d="M 368 59.53216374269005 C 373.328 59.53216374269005 373.328 67.53216374269005 368 67.53216374269005 C 362.672 67.53216374269005 362.672 59.53216374269005 368 59.53216374269005 Z"></path>
                                      <path fill="#7cb5ec" d="M 392 32.67836257309941 C 397.328 32.67836257309941 397.328 40.67836257309941 392 40.67836257309941 C 386.672 40.67836257309941 386.672 32.67836257309941 392 32.67836257309941 Z"></path>
                                      <path fill="#7cb5ec" d="M 441 28.748538011695906 C 446.328 28.748538011695906 446.328 36.748538011695906 441 36.748538011695906 C 435.672 36.748538011695906 435.672 28.748538011695906 441 28.748538011695906 Z"></path>
                                      <path fill="#7cb5ec" d="M 465 197.73099415204678 C 470.328 197.73099415204678 470.328 205.73099415204678 465 205.73099415204678 C 459.672 205.73099415204678 459.672 197.73099415204678 465 197.73099415204678 Z"></path>
                                      <path fill="#7cb5ec" d="M 489 150.57309941520467 C 494.328 150.57309941520467 494.328 158.57309941520467 489 158.57309941520467 C 483.672 158.57309941520467 483.672 150.57309941520467 489 150.57309941520467 Z"></path>
                                      <path fill="#7cb5ec" d="M 513 150.57309941520467 C 518.328 150.57309941520467 518.328 158.57309941520467 513 158.57309941520467 C 507.672 158.57309941520467 507.672 150.57309941520467 513 150.57309941520467 Z"></path>
                                      <path fill="#7cb5ec" d="M 538 91.62573099415204 C 543.328 91.62573099415204 543.328 99.62573099415204 538 99.62573099415204 C 532.672 99.62573099415204 532.672 91.62573099415204 538 91.62573099415204 Z"></path>
                                      <path fill="#7cb5ec" d="M 562 63.461988304093566 C 567.328 63.461988304093566 567.328 71.46198830409357 562 71.46198830409357 C 556.672 71.46198830409357 556.672 63.461988304093566 562 63.461988304093566 Z"></path>
                                      <path fill="#7cb5ec" d="M 586 117.16959064327484 C 591.328 117.16959064327484 591.328 125.16959064327484 586 125.16959064327484 C 580.672 125.16959064327484 580.672 117.16959064327484 586 117.16959064327484 Z"></path>
                                      <path fill="#7cb5ec" d="M 610 160.39766081871343 C 615.328 160.39766081871343 615.328 168.39766081871343 610 168.39766081871343 C 604.672 168.39766081871343 604.672 160.39766081871343 610 160.39766081871343 Z"></path>
                                      <path fill="#7cb5ec" d="M 635 147.953216374269 C 640.328 147.953216374269 640.328 155.953216374269 635 155.953216374269 C 629.672 155.953216374269 629.672 147.953216374269 635 147.953216374269 Z"></path>
                                      <path fill="#7cb5ec" d="M 659 90.97076023391813 C 664.328 90.97076023391813 664.328 98.97076023391813 659 98.97076023391813 C 653.672 98.97076023391813 653.672 90.97076023391813 659 90.97076023391813 Z"></path>
                                      <path fill="#7cb5ec" d="M 683 133.5438596491228 C 688.328 133.5438596491228 688.328 141.5438596491228 683 141.5438596491228 C 677.672 141.5438596491228 677.672 133.5438596491228 683 133.5438596491228 Z"></path>
                                      <path fill="#7cb5ec" d="M 708 119.1345029239766 C 713.328 119.1345029239766 713.328 127.1345029239766 708 127.1345029239766 C 702.672 127.1345029239766 702.672 119.1345029239766 708 119.1345029239766 Z"></path>
                                      <path fill="#7cb5ec" d="M 732 89.00584795321637 C 737.328 89.00584795321637 737.328 97.00584795321637 732 97.00584795321637 C 726.672 97.00584795321637 726.672 89.00584795321637 732 89.00584795321637 Z"></path>
                                      <path fill="#7cb5ec" d="M 756 69.35672514619883 C 761.328 69.35672514619883 761.328 77.35672514619883 756 77.35672514619883 C 750.672 77.35672514619883 750.672 69.35672514619883 756 69.35672514619883 Z"></path>
                                      <path fill="#7cb5ec" d="M 780 68.7017543859649 C 785.328 68.7017543859649 785.328 76.7017543859649 780 76.7017543859649 C 774.672 76.7017543859649 774.672 68.7017543859649 780 68.7017543859649 Z"></path>
                                      </g>
                                      </g>
                                      <g className="highcharts-axis-labels highcharts-xaxis-labels" zIndex="7">
                                        <text x="97.17646974468956" style={{"color": "#606060", "cursor": "default", "fontSize": "11px", "fill": "#606060", "width": "197px", "textOverflow": "clip"}} text-anchor="middle" transform="translate(0,0)" y="243" opacity="1">
                                          <tspan>Jan 14</tspan>
                                        </text>
                                        <text x="267.2352941176471" style={{"color": "#606060", "cursor": "default", "fontSize": "11px", "fill": "#606060", "width": "197px", "textOverflow": "clip"}} text-anchor="middle" transform="translate(0,0)" y="243" opacity="1">
                                          <tspan>Jan 21</tspan>
                                        </text>
                                        <text x="437.29411764705884" style={{"color": "#606060", "cursor": "default", "fontSize": "11px", "fill": "#606060", "width": "197px", "textOverflow": "clip"}} text-anchor="middle" transform="translate(0,0)" y="243" opacity="1">
                                          <tspan>Jan 28</tspan>
                                        </text>
                                        <text x="607.3529411764706" style={{"color": "#606060", "cursor": "default", "fontSize": "11px", "fill": "#606060", "width": "197px", "textOverflow": "clip"}} text-anchor="middle" transform="translate(0,0)" y="243" opacity="1">
                                          <tspan>Feb 4</tspan>
                                        </text>
                                        <text x="801.7058823529412" style={{"color": "#606060", "cursor": "default", "fontSize": "11px", "fill": "#606060", "width": "197px", "textOverflow": "clip"}} text-anchor="middle" transform="translate(0,0)" y="243" opacity="1">
                                          <tspan>Feb 12</tspan>
                                        </text>
                                        </g>
                                        <g className="highcharts-axis-labels highcharts-yaxis-labels" zIndex="7"></g>
                                        <g className="highcharts-tooltip" zIndex="8" style={{"cursor": "default", "padding": "0", "pointerEvents": "none", "whiteSpace": "nowrap"}} transform="translate(0,-9999)">
                                          <path fill="none" d="M 3.5 0.5 L 7.5 0.5 C 10.5 0.5 10.5 0.5 10.5 3.5 L 10.5 7.5 C 10.5 10.5 10.5 10.5 7.5 10.5 L 3.5 10.5 C 0.5 10.5 0.5 10.5 0.5 7.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" isShadow="true" stroke="black" stroke-opacity="0.049999999999999996" stroke-width="5" transform="translate(1, 1)"></path>
                                          <path fill="none" d="M 3.5 0.5 L 7.5 0.5 C 10.5 0.5 10.5 0.5 10.5 3.5 L 10.5 7.5 C 10.5 10.5 10.5 10.5 7.5 10.5 L 3.5 10.5 C 0.5 10.5 0.5 10.5 0.5 7.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" isShadow="true" stroke="black" stroke-opacity="0.09999999999999999" stroke-width="3" transform="translate(1, 1)"></path>
                                          <path fill="none" d="M 3.5 0.5 L 7.5 0.5 C 10.5 0.5 10.5 0.5 10.5 3.5 L 10.5 7.5 C 10.5 10.5 10.5 10.5 7.5 10.5 L 3.5 10.5 C 0.5 10.5 0.5 10.5 0.5 7.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" isShadow="true" stroke="black" stroke-opacity="0.15" stroke-width="1" transform="translate(1, 1)"></path>
                                          <path fill="rgba(249, 249, 249, .85)" d="M 3.5 0.5 L 7.5 0.5 C 10.5 0.5 10.5 0.5 10.5 3.5 L 10.5 7.5 C 10.5 10.5 10.5 10.5 7.5 10.5 L 3.5 10.5 C 0.5 10.5 0.5 10.5 0.5 7.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5"></path>
                                        </g>
                                      </svg>
                                      <div className="highcharts-tooltip" style={{"position": "absolute", "left": "0px", "top": "-9999px"}}><span style={{"position": "absolute", "fontFamily": "'Lucida Grande', 'Lucida Sans Unicode', Arial, Helvetica, sans-serif", "fontSize": "12px", "whiteSpace": "nowrap", "color": "rgb(51, 51, 51)", "marginLeft": "0px", "marginTop": "0px", "left": "5px", "top": "5px"}} zindex="1"></span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </li>
              <li className="list-group-item profile-group p-0">
                  <div className="profile-group-heading">Fleet Arena</div>
              </li>
              <li className="list-group-item profile-group p-0">
                  <div className="profile-group-content">
                      <div className="current-rank">
                          <div className="current-rank-info">
                              <div className="current-rank-value">76</div>
                              <div className="current-rank-title">Current Rank</div>
                          </div>
                          <div className="current-rank-team">
                              <div className="ship-listing">
                                  <div className="ship-listing__commander">
                                      <div className="player-ship-portrait ship-portrait-full ship-portrait-full-small ship-portrait-full-capital" data-toggle="tooltip" data-container="body" title="" data-original-title="Chimaera">
                                          <a href="/p/388591888/ships/chimaera" className="ship-portrait-full-link" rel="nofollow">
                                              <div className="ship-portrait-full-frame">
                                                  <div className="ship-portrait-full-frame-overlay"></div>
                                                  <div className="ship-portrait-full-frame-image">
                                                      <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/CAPITALCHIMAERA/" alt="Chimaera" />
                                                  </div>
                                                  <div className="ship-portrait-full-frame-level">85</div>
                                              </div>
                                          </a>
                                      </div>
                                  </div>
                                  <div className="ship-listing__ships">
                                      <div className="ship-listing__members">
                                          <div className="ship-listing__ship">
                                              <div className="player-ship-portrait ship-portrait-full ship-portrait-full-xsmall" data-toggle="tooltip" data-container="body" title="" data-original-title="Ahsoka Tano's Jedi Starfighter">
                                                  <a href="/p/388591888/ships/ahsoka-tanos-jedi-starfighter" className="ship-portrait-full-link" rel="nofollow">
                                                      <div className="ship-portrait-full-frame">
                                                          <div className="ship-portrait-full-frame-overlay"></div>
                                                          <div className="ship-portrait-full-frame-image">
                                                              <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/JEDISTARFIGHTERAHSOKATANO/" alt="Ahsoka Tano's Jedi Starfighter" />
                                                          </div>
                                                          <div className="ship-portrait-full-frame-level">85</div>
                                                      </div>
                                                  </a>
                                              </div>
                                          </div>
                                          <div className="ship-listing__ship">
                                              <div className="player-ship-portrait ship-portrait-full ship-portrait-full-xsmall" data-toggle="tooltip" data-container="body" title="" data-original-title="Han's Millennium Falcon">
                                                  <a href="/p/388591888/ships/hans-millennium-falcon" className="ship-portrait-full-link" rel="nofollow">
                                                      <div className="ship-portrait-full-frame">
                                                          <div className="ship-portrait-full-frame-overlay"></div>
                                                          <div className="ship-portrait-full-frame-image">
                                                              <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/MILLENNIUMFALCON/" alt="Han's Millennium Falcon" />
                                                          </div>
                                                          <div className="ship-portrait-full-frame-level">85</div>
                                                      </div>
                                                  </a>
                                              </div>
                                          </div>
                                          <div className="ship-listing__ship">
                                              <div className="player-ship-portrait ship-portrait-full ship-portrait-full-xsmall" data-toggle="tooltip" data-container="body" title="" data-original-title="TIE Advanced x1">
                                                  <a href="/p/388591888/ships/tie-advanced-x1" className="ship-portrait-full-link" rel="nofollow">
                                                      <div className="ship-portrait-full-frame">
                                                          <div className="ship-portrait-full-frame-overlay"></div>
                                                          <div className="ship-portrait-full-frame-image">
                                                              <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/TIEADVANCED/" alt="TIE Advanced x1" />
                                                          </div>
                                                          <div className="ship-portrait-full-frame-level">85</div>
                                                      </div>
                                                  </a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="ship-listing__reinforcements">
                                          <div className="ship-listing__ship">
                                              <div className="player-ship-portrait ship-portrait-full ship-portrait-full-micro" data-toggle="tooltip" data-container="body" title="" data-original-title="Hound's Tooth">
                                                  <a href="/p/388591888/ships/hounds-tooth" className="ship-portrait-full-link" rel="nofollow">
                                                      <div className="ship-portrait-full-frame">
                                                          <div className="ship-portrait-full-frame-overlay"></div>
                                                          <div className="ship-portrait-full-frame-image">
                                                              <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/HOUNDSTOOTH/" alt="Hound's Tooth" />
                                                          </div>
                                                          <div className="ship-portrait-full-frame-level">85</div>
                                                      </div>
                                                  </a>
                                              </div>
                                          </div>
                                          <div className="ship-listing__ship">
                                              <div className="player-ship-portrait ship-portrait-full ship-portrait-full-micro" data-toggle="tooltip" data-container="body" title="" data-original-title="TIE Silencer">
                                                  <a href="/p/388591888/ships/tie-silencer" className="ship-portrait-full-link" rel="nofollow">
                                                      <div className="ship-portrait-full-frame">
                                                          <div className="ship-portrait-full-frame-overlay"></div>
                                                          <div className="ship-portrait-full-frame-image">
                                                              <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/TIESILENCER/" alt="TIE Silencer" />
                                                          </div>
                                                          <div className="ship-portrait-full-frame-level">85</div>
                                                      </div>
                                                  </a>
                                              </div>
                                          </div>
                                          <div className="ship-listing__ship">
                                              <div className="player-ship-portrait ship-portrait-full ship-portrait-full-micro" data-toggle="tooltip" data-container="body" title="" data-original-title="Umbaran Starfighter">
                                                  <a href="/p/388591888/ships/umbaran-starfighter" className="ship-portrait-full-link" rel="nofollow">
                                                      <div className="ship-portrait-full-frame">
                                                          <div className="ship-portrait-full-frame-overlay"></div>
                                                          <div className="ship-portrait-full-frame-image">
                                                              <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/UMBARANSTARFIGHTER/" alt="Umbaran Starfighter" />
                                                          </div>
                                                          <div className="ship-portrait-full-frame-level">85</div>
                                                      </div>
                                                  </a>
                                              </div>
                                          </div>
                                          <div className="ship-listing__ship">
                                              <div className="player-ship-portrait ship-portrait-full ship-portrait-full-micro" data-toggle="tooltip" data-container="body" title="" data-original-title="Anakin's Eta-2 Starfighter">
                                                  <a href="/p/388591888/ships/anakins-eta-2-starfighter" className="ship-portrait-full-link" rel="nofollow">
                                                      <div className="ship-portrait-full-frame">
                                                          <div className="ship-portrait-full-frame-overlay"></div>
                                                          <div className="ship-portrait-full-frame-image">
                                                              <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/JEDISTARFIGHTERANAKIN/" alt="Anakin's Eta-2 Starfighter" />
                                                          </div>
                                                          <div className="ship-portrait-full-frame-level">85</div>
                                                      </div>
                                                  </a>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="stat-listing stats-arena">
                          <div className="stat-item">
                              <div className="stat-item-info">
                                  <div className="stat-item-value">57</div>
                                  <div className="stat-item-title">Highest Rank</div>
                              </div>
                              <div className="stat-item-squad">
                                  <div className="ship-listing">
                                      <div className="ship-listing__commander">
                                          <div className="player-ship-portrait ship-portrait-full ship-portrait-full-small ship-portrait-full-capital" data-toggle="tooltip" data-container="body" title="" data-original-title="Chimaera">
                                              <a href="/p/388591888/ships/chimaera" className="ship-portrait-full-link" rel="nofollow">
                                                  <div className="ship-portrait-full-frame">
                                                      <div className="ship-portrait-full-frame-overlay"></div>
                                                      <div className="ship-portrait-full-frame-image">
                                                          <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/CAPITALCHIMAERA/" alt="Chimaera" />
                                                      </div>
                                                      <div className="ship-portrait-full-frame-level">85</div>
                                                  </div>
                                              </a>
                                          </div>
                                      </div>
                                      <div className="ship-listing__ships">
                                          <div className="ship-listing__members">
                                              <div className="ship-listing__ship">
                                                  <div className="player-ship-portrait ship-portrait-full ship-portrait-full-xsmall" data-toggle="tooltip" data-container="body" title="" data-original-title="Hound's Tooth">
                                                      <a href="/p/388591888/ships/hounds-tooth" className="ship-portrait-full-link" rel="nofollow">
                                                          <div className="ship-portrait-full-frame">
                                                              <div className="ship-portrait-full-frame-overlay"></div>
                                                              <div className="ship-portrait-full-frame-image">
                                                                  <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/HOUNDSTOOTH/" alt="Hound's Tooth" />
                                                              </div>
                                                              <div className="ship-portrait-full-frame-level">85</div>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </div>
                                              <div className="ship-listing__ship">
                                                  <div className="player-ship-portrait ship-portrait-full ship-portrait-full-xsmall" data-toggle="tooltip" data-container="body" title="" data-original-title="Ahsoka Tano's Jedi Starfighter">
                                                      <a href="/p/388591888/ships/ahsoka-tanos-jedi-starfighter" className="ship-portrait-full-link" rel="nofollow">
                                                          <div className="ship-portrait-full-frame">
                                                              <div className="ship-portrait-full-frame-overlay"></div>
                                                              <div className="ship-portrait-full-frame-image">
                                                                  <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/JEDISTARFIGHTERAHSOKATANO/" alt="Ahsoka Tano's Jedi Starfighter" />
                                                              </div>
                                                              <div className="ship-portrait-full-frame-level">85</div>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </div>
                                              <div className="ship-listing__ship">
                                                  <div className="player-ship-portrait ship-portrait-full ship-portrait-full-xsmall" data-toggle="tooltip" data-container="body" title="" data-original-title="Han's Millennium Falcon">
                                                      <a href="/p/388591888/ships/hans-millennium-falcon" className="ship-portrait-full-link" rel="nofollow">
                                                          <div className="ship-portrait-full-frame">
                                                              <div className="ship-portrait-full-frame-overlay"></div>
                                                              <div className="ship-portrait-full-frame-image">
                                                                  <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/MILLENNIUMFALCON/" alt="Han's Millennium Falcon" />
                                                              </div>
                                                              <div className="ship-portrait-full-frame-level">85</div>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="ship-listing__reinforcements">
                                              <div className="ship-listing__ship">
                                                  <div className="player-ship-portrait ship-portrait-full ship-portrait-full-micro" data-toggle="tooltip" data-container="body" title="" data-original-title="TIE Advanced x1">
                                                      <a href="/p/388591888/ships/tie-advanced-x1" className="ship-portrait-full-link" rel="nofollow">
                                                          <div className="ship-portrait-full-frame">
                                                              <div className="ship-portrait-full-frame-overlay"></div>
                                                              <div className="ship-portrait-full-frame-image">
                                                                  <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/TIEADVANCED/" alt="TIE Advanced x1" />
                                                              </div>
                                                              <div className="ship-portrait-full-frame-level">85</div>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </div>
                                              <div className="ship-listing__ship">
                                                  <div className="player-ship-portrait ship-portrait-full ship-portrait-full-micro" data-toggle="tooltip" data-container="body" title="" data-original-title="Umbaran Starfighter">
                                                      <a href="/p/388591888/ships/umbaran-starfighter" className="ship-portrait-full-link" rel="nofollow">
                                                          <div className="ship-portrait-full-frame">
                                                              <div className="ship-portrait-full-frame-overlay"></div>
                                                              <div className="ship-portrait-full-frame-image">
                                                                  <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/UMBARANSTARFIGHTER/" alt="Umbaran Starfighter" />
                                                              </div>
                                                              <div className="ship-portrait-full-frame-level">85</div>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </div>
                                              <div className="ship-listing__ship">
                                                  <div className="player-ship-portrait ship-portrait-full ship-portrait-full-micro" data-toggle="tooltip" data-container="body" title="" data-original-title="Anakin's Eta-2 Starfighter">
                                                      <a href="/p/388591888/ships/anakins-eta-2-starfighter" className="ship-portrait-full-link" rel="nofollow">
                                                          <div className="ship-portrait-full-frame">
                                                              <div className="ship-portrait-full-frame-overlay"></div>
                                                              <div className="ship-portrait-full-frame-image">
                                                                  <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/JEDISTARFIGHTERANAKIN/" alt="Anakin's Eta-2 Starfighter" />
                                                              </div>
                                                              <div className="ship-portrait-full-frame-level">85</div>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </div>
                                              <div className="ship-listing__ship">
                                                  <div className="player-ship-portrait ship-portrait-full ship-portrait-full-micro" data-toggle="tooltip" data-container="body" title="" data-original-title="TIE Silencer">
                                                      <a href="/p/388591888/ships/tie-silencer" className="ship-portrait-full-link" rel="nofollow">
                                                          <div className="ship-portrait-full-frame">
                                                              <div className="ship-portrait-full-frame-overlay"></div>
                                                              <div className="ship-portrait-full-frame-image">
                                                                  <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/TIESILENCER/" alt="TIE Silencer" />
                                                              </div>
                                                              <div className="ship-portrait-full-frame-level">85</div>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="stat-item">
                              <div className="stat-item-info">
                                  <div className="stat-item-value">76</div>
                                  <div className="stat-item-title">Lowest Rank</div>
                              </div>
                              <div className="stat-item-squad">
                                  <div className="ship-listing">
                                      <div className="ship-listing__commander">
                                          <div className="player-ship-portrait ship-portrait-full ship-portrait-full-small ship-portrait-full-capital" data-toggle="tooltip" data-container="body" title="" data-original-title="Chimaera">
                                              <a href="/p/388591888/ships/chimaera" className="ship-portrait-full-link" rel="nofollow">
                                                  <div className="ship-portrait-full-frame">
                                                      <div className="ship-portrait-full-frame-overlay"></div>
                                                      <div className="ship-portrait-full-frame-image">
                                                          <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/CAPITALCHIMAERA/" alt="Chimaera" />
                                                      </div>
                                                      <div className="ship-portrait-full-frame-level">85</div>
                                                  </div>
                                              </a>
                                          </div>
                                      </div>
                                      <div className="ship-listing__ships">
                                          <div className="ship-listing__members">
                                              <div className="ship-listing__ship">
                                                  <div className="player-ship-portrait ship-portrait-full ship-portrait-full-xsmall" data-toggle="tooltip" data-container="body" title="" data-original-title="Ahsoka Tano's Jedi Starfighter">
                                                      <a href="/p/388591888/ships/ahsoka-tanos-jedi-starfighter" className="ship-portrait-full-link" rel="nofollow">
                                                          <div className="ship-portrait-full-frame">
                                                              <div className="ship-portrait-full-frame-overlay"></div>
                                                              <div className="ship-portrait-full-frame-image">
                                                                  <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/JEDISTARFIGHTERAHSOKATANO/" alt="Ahsoka Tano's Jedi Starfighter" />
                                                              </div>
                                                              <div className="ship-portrait-full-frame-level">85</div>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </div>
                                              <div className="ship-listing__ship">
                                                  <div className="player-ship-portrait ship-portrait-full ship-portrait-full-xsmall" data-toggle="tooltip" data-container="body" title="" data-original-title="Han's Millennium Falcon">
                                                      <a href="/p/388591888/ships/hans-millennium-falcon" className="ship-portrait-full-link" rel="nofollow">
                                                          <div className="ship-portrait-full-frame">
                                                              <div className="ship-portrait-full-frame-overlay"></div>
                                                              <div className="ship-portrait-full-frame-image">
                                                                  <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/MILLENNIUMFALCON/" alt="Han's Millennium Falcon" />
                                                              </div>
                                                              <div className="ship-portrait-full-frame-level">85</div>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </div>
                                              <div className="ship-listing__ship">
                                                  <div className="player-ship-portrait ship-portrait-full ship-portrait-full-xsmall" data-toggle="tooltip" data-container="body" title="" data-original-title="TIE Advanced x1">
                                                      <a href="/p/388591888/ships/tie-advanced-x1" className="ship-portrait-full-link" rel="nofollow">
                                                          <div className="ship-portrait-full-frame">
                                                              <div className="ship-portrait-full-frame-overlay"></div>
                                                              <div className="ship-portrait-full-frame-image">
                                                                  <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/TIEADVANCED/" alt="TIE Advanced x1" />
                                                              </div>
                                                              <div className="ship-portrait-full-frame-level">85</div>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="ship-listing__reinforcements">
                                              <div className="ship-listing__ship">
                                                  <div className="player-ship-portrait ship-portrait-full ship-portrait-full-micro" data-toggle="tooltip" data-container="body" title="" data-original-title="Hound's Tooth">
                                                      <a href="/p/388591888/ships/hounds-tooth" className="ship-portrait-full-link" rel="nofollow">
                                                          <div className="ship-portrait-full-frame">
                                                              <div className="ship-portrait-full-frame-overlay"></div>
                                                              <div className="ship-portrait-full-frame-image">
                                                                  <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/HOUNDSTOOTH/" alt="Hound's Tooth" />
                                                              </div>
                                                              <div className="ship-portrait-full-frame-level">85</div>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </div>
                                              <div className="ship-listing__ship">
                                                  <div className="player-ship-portrait ship-portrait-full ship-portrait-full-micro" data-toggle="tooltip" data-container="body" title="" data-original-title="TIE Silencer">
                                                      <a href="/p/388591888/ships/tie-silencer" className="ship-portrait-full-link" rel="nofollow">
                                                          <div className="ship-portrait-full-frame">
                                                              <div className="ship-portrait-full-frame-overlay"></div>
                                                              <div className="ship-portrait-full-frame-image">
                                                                  <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/TIESILENCER/" alt="TIE Silencer" />
                                                              </div>
                                                              <div className="ship-portrait-full-frame-level">85</div>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </div>
                                              <div className="ship-listing__ship">
                                                  <div className="player-ship-portrait ship-portrait-full ship-portrait-full-micro" data-toggle="tooltip" data-container="body" title="" data-original-title="Umbaran Starfighter">
                                                      <a href="/p/388591888/ships/umbaran-starfighter" className="ship-portrait-full-link" rel="nofollow">
                                                          <div className="ship-portrait-full-frame">
                                                              <div className="ship-portrait-full-frame-overlay"></div>
                                                              <div className="ship-portrait-full-frame-image">
                                                                  <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/UMBARANSTARFIGHTER/" alt="Umbaran Starfighter" />
                                                              </div>
                                                              <div className="ship-portrait-full-frame-level">85</div>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </div>
                                              <div className="ship-listing__ship">
                                                  <div className="player-ship-portrait ship-portrait-full ship-portrait-full-micro" data-toggle="tooltip" data-container="body" title="" data-original-title="Anakin's Eta-2 Starfighter">
                                                      <a href="/p/388591888/ships/anakins-eta-2-starfighter" className="ship-portrait-full-link" rel="nofollow">
                                                          <div className="ship-portrait-full-frame">
                                                              <div className="ship-portrait-full-frame-overlay"></div>
                                                              <div className="ship-portrait-full-frame-image">
                                                                  <img className="ship-portrait-full-frame-img" src="https://swgoh.gg/game-asset/u/JEDISTARFIGHTERANAKIN/" alt="Anakin's Eta-2 Starfighter" />
                                                              </div>
                                                              <div className="ship-portrait-full-frame-level">85</div>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="stat-item">
                              <div className="stat-item-info">
                                  <div className="stat-item-value">61</div>
                                  <div className="stat-item-title">Average Rank</div>
                              </div>
                              <div className="stat-item-squad"></div>
                          </div>
                      </div>
                      <div className="chart chart-arena">
                        <div className="chart-heading">Fleet Arena Rank Over Last 30 Days</div>
                          <div className="chart-content">
                            <div id="fleet-arena-rank-chart" className="arena-rank-chart" data-highcharts-chart="1">
                              <div className="highcharts-container" id="highcharts-4" style={{"position": "relative", "overflow": "hidden", "width": "826px", "height": "250px", "textAlign": "left", "lineHeight": "normal", "zIndex": "0"}}>
                                <svg version="1.1" style={{"fontFamily": "'Lucida Grande', 'Lucida Sans Unicode', Arial, Helvetica, sans-serif", "fontSize": "12px"}} xmlns="http://www.w3.org/2000/svg" width="826" height="250">
                                  <desc>Created with Highcharts 4.2.3</desc>
                                  <defs>
                                    <clipPath id="highcharts-5">
                                      <rect x="0" y="0" width="826" height="224"></rect>
                                    </clipPath>
                                  </defs>
                                  <rect x="0" y="0" width="826" height="250" fill="#FFFFFF" className="highcharts-background"></rect>
                                  <path fill="none" d="M 0 0.5 L 826 0.5 826 10.5 0 10.5" zIndex="0"></path>
                                  <text x="10" text-anchor="undefined" zIndex="0" transform="translate(0,0)" style={{"fontSize": "10px"}} y="10" visibility="visible"><tspan>Rank 1-10</tspan></text>
                                  <path fill="rgba(0, 74, 158, 0.05)" d="M 0 10.5 L 826 10.5 826 34.5 0 34.5" zIndex="0"></path>
                                  <text x="10" text-anchor="undefined" zIndex="0" transform="translate(0,0)" style={{"fontSize": "10px"}} y="27" visibility="visible"><tspan>Rank 11-20</tspan></text>
                                  <path fill="none" d="M 0 34.5 L 826 34.5 826 106.5 0 106.5" zIndex="0"></path>
                                  <text x="10" text-anchor="undefined" zIndex="0" transform="translate(0,0)" style={{"fontSize": "10px"}} y="75" visibility="visible"><tspan>Rank 21-50</tspan></text>
                                  <path fill="rgba(0, 74, 158, 0.05)" d="M 0 106.5 L 826 106.5 826 224.5 0 224.5" zIndex="0"></path>
                                  <text x="10" text-anchor="undefined" zIndex="0" transform="translate(0,0)" style={{"fontSize": "10px"}} y="170" visibility="visible"><tspan>Rank 51-100</tspan></text>
                                  <path fill="none" d="M 0 224.5 L 826 224.5 826 224.5 0 224.5" zIndex="0"></path>
                                  <path fill="rgba(0, 74, 158, 0.05)" d="M 0 224.5 L 826 224.5 826 224.5 0 224.5" zIndex="0"></path>
                                  <path fill="none" d="M 0 224.5 L 826 224.5 826 224.5 0 224.5" zIndex="0"></path>
                                  <path fill="rgba(0, 74, 158, 0.05)" d="M 0 224.5 L 826 224.5 826 224.5 0 224.5" zIndex="0"></path>
                                  <path fill="none" d="M 0 224.5 L 826 224.5 826 224.5 0 224.5" zIndex="0"></path>
                                  <path fill="rgba(0, 74, 158, 0.05)" d="M 0 224.5 L 826 224.5 826 224.5 0 224.5" zIndex="0"></path>
                                  <g className="highcharts-grid" zIndex="1"></g>
                                  <g className="highcharts-grid" zIndex="1"></g>
                                  <g className="highcharts-axis" zIndex="2">
                                  <path fill="none" d="M 96.5 224 L 96.5 234" stroke="#C0D0E0" stroke-width="1" opacity="1"></path>
                                  <path fill="none" d="M 266.5 224 L 266.5 234" stroke="#C0D0E0" stroke-width="1" opacity="1"></path>
                                  <path fill="none" d="M 436.5 224 L 436.5 234" stroke="#C0D0E0" stroke-width="1" opacity="1"></path>
                                  <path fill="none" d="M 606.5 224 L 606.5 234" stroke="#C0D0E0" stroke-width="1" opacity="1"></path>
                                  <path fill="none" d="M 801.5 224 L 801.5 234" stroke="#C0D0E0" stroke-width="1" opacity="1"></path>
                                  <path fill="none" d="M 0 224.5 L 826 224.5" stroke="#C0D0E0" stroke-width="1" zIndex="7"></path>
                                  </g>
                                  <g className="highcharts-axis" zIndex="2"></g>
                                  <g className="highcharts-series-group" zIndex="3">
                                    <g className="highcharts-series highcharts-series-0" zIndex="0.1" transform="translate(0,0) scale(1 1)" clip-path="url(#highcharts-5)">
                                      <path fill="none" d="M 781.7116590379902 166.19354838709677 C 781.7116590379902 166.19354838709677 767.142916509804 166.19354838709677 757.4304214910131 166.19354838709677 C 747.7142714447169 166.19354838709677 742.8561964215687 144.0237398937166 733.1400463752724 134.88172043010752 C 723.4012188948802 125.71836354963055 718.5318051546841 120.43010752688173 708.792977674292 120.43010752688173 C 699.0742108366014 120.43010752688173 694.2148274177562 120.43010752688173 684.4960605800654 120.43010752688173 C 674.7925142320262 120.43010752688173 669.9407410580067 120.43010752688173 660.2371947099674 120.43010752688173 C 650.5209035103487 120.43010752688173 645.6627579105392 120.43010752688173 635.9464667109205 120.43010752688173 C 626.2164150306373 120.43010752688173 621.3513891904956 120.43010752688173 611.6213375102125 120.43010752688173 C 601.9181654715414 120.43010752688173 597.0665794522059 120.43010752688173 587.3634074135349 120.43010752688173 C 577.6284494462146 120.43010752688173 572.7609704625545 120.43010752688173 563.0260124952342 120.43010752688173 C 553.3207488005175 120.43010752688173 548.4681169531591 127.65591397849462 538.7628532584423 127.65591397849462 C 529.0505421326254 127.65591397849462 524.1943865697169 127.65591397849462 514.4820754438998 127.65591397849462 C 504.77797033115473 127.65591397849462 499.9259177747822 137.29032258064515 490.2218126620371 137.29032258064515 C 480.48676910294125 137.29032258064515 475.6192473233933 127.65591397849462 465.8842037642974 127.65591397849462 C 456.1606377136439 127.65591397849462 451.29885468831696 127.65591397849462 441.57528863766345 127.65591397849462 C 422.14471027818627 127.65591397849462 412.42942109844773 127.65591397849462 392.9988427389706 127.65591397849462 C 383.2771685927288 127.65591397849462 378.41633151960787 127.65591397849462 368.69465737336606 127.65591397849462 C 358.9730664569717 127.65591397849462 354.11227099877453 131.5097615085778 344.3906800823802 134.88172043010752 C 334.6686042958878 138.2538475300832 329.8075664026416 139.20700726187593 320.0854906161493 144.51612903225808 C 310.4007605121188 149.80485672424152 305.5583954601035 161.3763440860215 295.873665356073 161.3763440860215 C 286.1324670622277 161.3763440860215 281.261867915305 161.3763440860215 271.5206696214597 161.3763440860215 C 261.80408306835517 161.3763440860215 256.9457897918029 138.2498923964984 247.2292032386983 130.06451612903226 C 237.50342631086605 121.87139777284249 232.64053784694988 120.43010752688173 222.91476091911767 120.43010752688173 C 213.19289376960788 120.43010752688173 208.33196019485294 120.43010752688173 198.61009304534315 120.43010752688173 C 188.90412144703163 120.43010752688173 184.0511356478758 120.43010752688173 174.3451640495643 120.43010752688173 C 164.6193811606754 120.43010752688173 159.75648971623096 120.43010752688173 150.03070682734207 120.43010752688173 C 140.32402485103486 120.43010752688173 135.4706838628813 120.43010752688173 125.76400188657409 120.43010752688173 C 116.04176166489654 120.43010752688173 111.18064155405776 120.43010752688173 101.45840133238018 120.43010752688173 C 91.75047653199893 120.43010752688173 77.18858933142702 120.43010752688173 77.18858933142702 120.43010752688173" stroke="#7cb5ec" stroke-width="3" zIndex="1" stroke-linejoin="round" stroke-linecap="round"></path>
                                      <path fill="none" d="M 771.7116590379902 166.19354838709677 L 781.7116590379902 166.19354838709677 C 781.7116590379902 166.19354838709677 767.142916509804 166.19354838709677 757.4304214910131 166.19354838709677 C 747.7142714447169 166.19354838709677 742.8561964215687 144.0237398937166 733.1400463752724 134.88172043010752 C 723.4012188948802 125.71836354963055 718.5318051546841 120.43010752688173 708.792977674292 120.43010752688173 C 699.0742108366014 120.43010752688173 694.2148274177562 120.43010752688173 684.4960605800654 120.43010752688173 C 674.7925142320262 120.43010752688173 669.9407410580067 120.43010752688173 660.2371947099674 120.43010752688173 C 650.5209035103487 120.43010752688173 645.6627579105392 120.43010752688173 635.9464667109205 120.43010752688173 C 626.2164150306373 120.43010752688173 621.3513891904956 120.43010752688173 611.6213375102125 120.43010752688173 C 601.9181654715414 120.43010752688173 597.0665794522059 120.43010752688173 587.3634074135349 120.43010752688173 C 577.6284494462146 120.43010752688173 572.7609704625545 120.43010752688173 563.0260124952342 120.43010752688173 C 553.3207488005175 120.43010752688173 548.4681169531591 127.65591397849462 538.7628532584423 127.65591397849462 C 529.0505421326254 127.65591397849462 524.1943865697169 127.65591397849462 514.4820754438998 127.65591397849462 C 504.77797033115473 127.65591397849462 499.9259177747822 137.29032258064515 490.2218126620371 137.29032258064515 C 480.48676910294125 137.29032258064515 475.6192473233933 127.65591397849462 465.8842037642974 127.65591397849462 C 456.1606377136439 127.65591397849462 451.29885468831696 127.65591397849462 441.57528863766345 127.65591397849462 C 422.14471027818627 127.65591397849462 412.42942109844773 127.65591397849462 392.9988427389706 127.65591397849462 C 383.2771685927288 127.65591397849462 378.41633151960787 127.65591397849462 368.69465737336606 127.65591397849462 C 358.9730664569717 127.65591397849462 354.11227099877453 131.5097615085778 344.3906800823802 134.88172043010752 C 334.6686042958878 138.2538475300832 329.8075664026416 139.20700726187593 320.0854906161493 144.51612903225808 C 310.4007605121188 149.80485672424152 305.5583954601035 161.3763440860215 295.873665356073 161.3763440860215 C 286.1324670622277 161.3763440860215 281.261867915305 161.3763440860215 271.5206696214597 161.3763440860215 C 261.80408306835517 161.3763440860215 256.9457897918029 138.2498923964984 247.2292032386983 130.06451612903226 C 237.50342631086605 121.87139777284249 232.64053784694988 120.43010752688173 222.91476091911767 120.43010752688173 C 213.19289376960788 120.43010752688173 208.33196019485294 120.43010752688173 198.61009304534315 120.43010752688173 C 188.90412144703163 120.43010752688173 184.0511356478758 120.43010752688173 174.3451640495643 120.43010752688173 C 164.6193811606754 120.43010752688173 159.75648971623096 120.43010752688173 150.03070682734207 120.43010752688173 C 140.32402485103486 120.43010752688173 135.4706838628813 120.43010752688173 125.76400188657409 120.43010752688173 C 116.04176166489654 120.43010752688173 111.18064155405776 120.43010752688173 101.45840133238018 120.43010752688173 C 91.75047653199893 120.43010752688173 77.18858933142702 120.43010752688173 77.18858933142702 120.43010752688173 L 87.18858933142702 120.43010752688173" stroke-linejoin="round" visibility="visible" stroke="rgba(192,192,192,0.0001)" stroke-width="23" zIndex="2" className=" highcharts-tracker"></path>
                                    </g>
                                    <g className="highcharts-markers highcharts-series-0 highcharts-tracker" zIndex="0.1" transform="translate(0,0) scale(1 1)" clip-path="url(#highcharts-6)">
                                      <path fill="#7cb5ec" d="M 77 116.43010752688173 C 82.328 116.43010752688173 82.328 124.43010752688173 77 124.43010752688173 C 71.672 124.43010752688173 71.672 116.43010752688173 77 116.43010752688173 Z"></path>
                                      <path fill="#7cb5ec" d="M 101 116.43010752688173 C 106.328 116.43010752688173 106.328 124.43010752688173 101 124.43010752688173 C 95.672 124.43010752688173 95.672 116.43010752688173 101 116.43010752688173 Z"></path>
                                      <path fill="#7cb5ec" d="M 125 116.43010752688173 C 130.328 116.43010752688173 130.328 124.43010752688173 125 124.43010752688173 C 119.672 124.43010752688173 119.672 116.43010752688173 125 116.43010752688173 Z"></path>
                                      <path fill="#7cb5ec" d="M 150 116.43010752688173 C 155.328 116.43010752688173 155.328 124.43010752688173 150 124.43010752688173 C 144.672 124.43010752688173 144.672 116.43010752688173 150 116.43010752688173 Z"></path>
                                      <path fill="#7cb5ec" d="M 174 116.43010752688173 C 179.328 116.43010752688173 179.328 124.43010752688173 174 124.43010752688173 C 168.672 124.43010752688173 168.672 116.43010752688173 174 116.43010752688173 Z"></path>
                                      <path fill="#7cb5ec" d="M 198 116.43010752688173 C 203.328 116.43010752688173 203.328 124.43010752688173 198 124.43010752688173 C 192.672 124.43010752688173 192.672 116.43010752688173 198 116.43010752688173 Z"></path>
                                      <path fill="#7cb5ec" d="M 222 116.43010752688173 C 227.328 116.43010752688173 227.328 124.43010752688173 222 124.43010752688173 C 216.672 124.43010752688173 216.672 116.43010752688173 222 116.43010752688173 Z"></path>
                                      <path fill="#7cb5ec" d="M 247 126.06451612903226 C 252.328 126.06451612903226 252.328 134.06451612903226 247 134.06451612903226 C 241.672 134.06451612903226 241.672 126.06451612903226 247 126.06451612903226 Z"></path>
                                      <path fill="#7cb5ec" d="M 271 157.3763440860215 C 276.328 157.3763440860215 276.328 165.3763440860215 271 165.3763440860215 C 265.672 165.3763440860215 265.672 157.3763440860215 271 157.3763440860215 Z"></path>
                                      <path fill="#7cb5ec" d="M 295 157.3763440860215 C 300.328 157.3763440860215 300.328 165.3763440860215 295 165.3763440860215 C 289.672 165.3763440860215 289.672 157.3763440860215 295 157.3763440860215 Z"></path>
                                      <path fill="#7cb5ec" d="M 320 140.51612903225808 C 325.328 140.51612903225808 325.328 148.51612903225808 320 148.51612903225808 C 314.672 148.51612903225808 314.672 140.51612903225808 320 140.51612903225808 Z"></path>
                                      <path fill="#7cb5ec" d="M 344 130.88172043010752 C 349.328 130.88172043010752 349.328 138.88172043010752 344 138.88172043010752 C 338.672 138.88172043010752 338.672 130.88172043010752 344 130.88172043010752 Z"></path>
                                      <path fill="#7cb5ec" d="M 368 123.65591397849462 C 373.328 123.65591397849462 373.328 131.65591397849462 368 131.65591397849462 C 362.672 131.65591397849462 362.672 123.65591397849462 368 123.65591397849462 Z"></path>
                                      <path fill="#7cb5ec" d="M 392 123.65591397849462 C 397.328 123.65591397849462 397.328 131.65591397849462 392 131.65591397849462 C 386.672 131.65591397849462 386.672 123.65591397849462 392 123.65591397849462 Z"></path>
                                      <path fill="#7cb5ec" d="M 441 123.65591397849462 C 446.328 123.65591397849462 446.328 131.65591397849462 441 131.65591397849462 C 435.672 131.65591397849462 435.672 123.65591397849462 441 123.65591397849462 Z"></path>
                                      <path fill="#7cb5ec" d="M 465 123.65591397849462 C 470.328 123.65591397849462 470.328 131.65591397849462 465 131.65591397849462 C 459.672 131.65591397849462 459.672 123.65591397849462 465 123.65591397849462 Z"></path>
                                      <path fill="#7cb5ec" d="M 490 133.29032258064515 C 495.328 133.29032258064515 495.328 141.29032258064515 490 141.29032258064515 C 484.672 141.29032258064515 484.672 133.29032258064515 490 133.29032258064515 Z"></path>
                                      <path fill="#7cb5ec" d="M 514 123.65591397849462 C 519.328 123.65591397849462 519.328 131.65591397849462 514 131.65591397849462 C 508.672 131.65591397849462 508.672 123.65591397849462 514 123.65591397849462 Z"></path>
                                      <path fill="#7cb5ec" d="M 538 123.65591397849462 C 543.328 123.65591397849462 543.328 131.65591397849462 538 131.65591397849462 C 532.672 131.65591397849462 532.672 123.65591397849462 538 123.65591397849462 Z"></path>
                                      <path fill="#7cb5ec" d="M 563 116.43010752688173 C 568.328 116.43010752688173 568.328 124.43010752688173 563 124.43010752688173 C 557.672 124.43010752688173 557.672 116.43010752688173 563 116.43010752688173 Z"></path>
                                      <path fill="#7cb5ec" d="M 587 116.43010752688173 C 592.328 116.43010752688173 592.328 124.43010752688173 587 124.43010752688173 C 581.672 124.43010752688173 581.672 116.43010752688173 587 116.43010752688173 Z"></path>
                                      <path fill="#7cb5ec" d="M 611 116.43010752688173 C 616.328 116.43010752688173 616.328 124.43010752688173 611 124.43010752688173 C 605.672 124.43010752688173 605.672 116.43010752688173 611 116.43010752688173 Z"></path>
                                      <path fill="#7cb5ec" d="M 635 116.43010752688173 C 640.328 116.43010752688173 640.328 124.43010752688173 635 124.43010752688173 C 629.672 124.43010752688173 629.672 116.43010752688173 635 116.43010752688173 Z"></path>
                                      <path fill="#7cb5ec" d="M 660 116.43010752688173 C 665.328 116.43010752688173 665.328 124.43010752688173 660 124.43010752688173 C 654.672 124.43010752688173 654.672 116.43010752688173 660 116.43010752688173 Z"></path>
                                      <path fill="#7cb5ec" d="M 684 116.43010752688173 C 689.328 116.43010752688173 689.328 124.43010752688173 684 124.43010752688173 C 678.672 124.43010752688173 678.672 116.43010752688173 684 116.43010752688173 Z"></path>
                                      <path fill="#7cb5ec" d="M 708 116.43010752688173 C 713.328 116.43010752688173 713.328 124.43010752688173 708 124.43010752688173 C 702.672 124.43010752688173 702.672 116.43010752688173 708 116.43010752688173 Z"></path>
                                      <path fill="#7cb5ec" d="M 733 130.88172043010752 C 738.328 130.88172043010752 738.328 138.88172043010752 733 138.88172043010752 C 727.672 138.88172043010752 727.672 130.88172043010752 733 130.88172043010752 Z"></path>
                                      <path fill="#7cb5ec" d="M 757 162.19354838709677 C 762.328 162.19354838709677 762.328 170.19354838709677 757 170.19354838709677 C 751.672 170.19354838709677 751.672 162.19354838709677 757 162.19354838709677 Z"></path>
                                      <path fill="#7cb5ec" d="M 781 162.19354838709677 C 786.328 162.19354838709677 786.328 170.19354838709677 781 170.19354838709677 C 775.672 170.19354838709677 775.672 162.19354838709677 781 162.19354838709677 Z"></path>
                                    </g>
                                  </g>
                                  <g className="highcharts-axis-labels highcharts-xaxis-labels" zIndex="7">
                                    <text x="97.1764705882353" style={{"color": "#606060", "cursor": "default", "fontSize": "11px", "fill": "#606060", "width": "197px", "textOverflow": "clip"}} text-anchor="middle" transform="translate(0,0)" y="243" opacity="1"><tspan>Jan 14</tspan></text>
                                    <text x="267.2352941176471" style={{"color": "#606060", "cursor": "default", "fontSize": "11px", "fill": "#606060", "width": "197px", "textOverflow": "clip"}} text-anchor="middle" transform="translate(0,0)" y="243" opacity="1"><tspan>Jan 21</tspan></text>
                                    <text x="437.29411764705884" style={{"color": "#606060", "cursor": "default", "fontSize": "11px", "fill": "#606060", "width": "197px", "textOverflow": "clip"}} text-anchor="middle" transform="translate(0,0)" y="243" opacity="1"><tspan>Jan 28</tspan></text>
                                    <text x="607.3529411764706" style={{"color": "#606060", "cursor": "default", "fontSize": "11px", "fill": "#606060", "width": "197px", "textOverflow": "clip"}} text-anchor="middle" transform="translate(0,0)" y="243" opacity="1"><tspan>Feb 4</tspan></text>
                                    <text x="801.7058823529412" style={{"color": "#606060", "cursor": "default", "fontSize": "11px", "fill": "#606060", "width": "197px", "textOverflow": "clip"}} text-anchor="middle" transform="translate(0,0)" y="243" opacity="1"><tspan>Feb 12</tspan></text>
                                  </g>
                                  <g className="highcharts-axis-labels highcharts-yaxis-labels" zIndex="7"></g>
                                  <g className="highcharts-tooltip" zIndex="8" style={{"cursor": "default", "padding": "0", "pointerEvents": "none", "whiteSpace": "nowrap"}} transform="translate(0,-9999)">
                                    <path fill="none" d="M 3.5 0.5 L 7.5 0.5 C 10.5 0.5 10.5 0.5 10.5 3.5 L 10.5 7.5 C 10.5 10.5 10.5 10.5 7.5 10.5 L 3.5 10.5 C 0.5 10.5 0.5 10.5 0.5 7.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" isShadow="true" stroke="black" stroke-opacity="0.049999999999999996" stroke-width="5" transform="translate(1, 1)"></path>
                                    <path fill="none" d="M 3.5 0.5 L 7.5 0.5 C 10.5 0.5 10.5 0.5 10.5 3.5 L 10.5 7.5 C 10.5 10.5 10.5 10.5 7.5 10.5 L 3.5 10.5 C 0.5 10.5 0.5 10.5 0.5 7.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" isShadow="true" stroke="black" stroke-opacity="0.09999999999999999" stroke-width="3" transform="translate(1, 1)"></path>
                                    <path fill="none" d="M 3.5 0.5 L 7.5 0.5 C 10.5 0.5 10.5 0.5 10.5 3.5 L 10.5 7.5 C 10.5 10.5 10.5 10.5 7.5 10.5 L 3.5 10.5 C 0.5 10.5 0.5 10.5 0.5 7.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" isShadow="true" stroke="black" stroke-opacity="0.15" stroke-width="1" transform="translate(1, 1)"></path>
                                    <path fill="rgba(249, 249, 249, .85)" d="M 3.5 0.5 L 7.5 0.5 C 10.5 0.5 10.5 0.5 10.5 3.5 L 10.5 7.5 C 10.5 10.5 10.5 10.5 7.5 10.5 L 3.5 10.5 C 0.5 10.5 0.5 10.5 0.5 7.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5"></path>
                                  </g>
                                  </svg>
                                      <div className="highcharts-tooltip" style={{"position": "absolute", "left": "0px", "top": "-9999px"}}>
                                        <span style={{"position": "absolute", "fontFamily": "'Lucida Grande', 'Lucida Sans Unicode', Arial, Helvetica, sans-serif", "fontSize": "12px", "whiteSpace": "nowrap", "color": "rgb(51, 51, 51)", "marginLeft": "0px", "marginTop": "0px", "left": "5px", "top": "5px"}} zindex="1"></span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
    </>
  );
}

const PlayerProfile = ({ }) => {
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
            <div className="content-container">
              <Aside />
              <CharactersGrid />
            </div>
          </div>
        </Row>
      </Container>

    </>
  );


}

export default withRouter(PlayerProfile);
