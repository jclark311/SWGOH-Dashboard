import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

import Header from '../../containers/Header/Header.js';
import Overlay from '../../containers/Overlay/Overlay.js';
import NavBar from '../../containers/NavBar/NavBar.js';
import DataTable from '../../containers/Table/Table.js';

const allycode = 388591888;
const playerUrl  = '/swgoh/players';
const statsUrl = 'https://crinolo-swgoh.glitch.me/baseStats/api/';
const charStatsApi = 'https://crinolo-swgoh.glitch.me/statCalc/api/characters';
const shipStatsApi = 'https://crinolo-swgoh.glitch.me/statCalc/api/ships';

// let results = document.getElementById('results');
// let json = document.getElementById('json');
// results.classList.add('hidden');
// json.classList.add('hidden');

let language = 'ENG_US'; //DEFAULT TO ENGLISH
let squads = null;
let units = null;
let zetas = null;
let player = null;
let roster = null;
let abilitylist = null;
let skillList = null;
let playerRequest = null;
let skillRequest = null;
let abilityRequest = null;
let unitRequest = null;
let latestVersion = null;
let lastupdated = null;
let languagechanged = false;
let version = 1; //Increment this whenever all localStorage of every user needs cleared because of changes to this code.
let tabFromURL = null;

// Extract values of a property from an array of objects
const pluck = (objs, property) => objs.map(obj => obj[property]);

// Example
pluck([
    { name: 'John', age: 20 },
    { name: 'Smith', age: 25 },
    { name: 'Peter', age: 30 },
], 'name');         // ['John', 'Smith', 'Peter']

const LegendaryToons = ({ name, zetas, stars, gear, level, ready }) => {
  return (
    <div className="row"><a name="undefined" />
      <div id="undefined" />
      <div className="col-xs-12" style={{"position":"-o-sticky","top":"25px","z-index":"2"}}>
        <h3>LEGENDARY CHARACTERS<br /><small>Requirements - 7 Star - Gear 12 - Level 85</small></h3>
      </div>
      <div className="col-xs-12" />
      <div className="col-md-6 tablestart notmainteam">
        <h4><small /></h4>
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
            <tr className="GRANDADMIRALTHRAWN">
              <td className="toonnamecolumn">{name}</td>
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

          </tbody>
        </Table>
        <table responsive className="table table-striped table-bordered">
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
            <tr className="EMPERORPALPATINE">
              <td className="toonnamecolumn">Emperor Palpatine</td>
              <td style={{"padding":"0px"}} className="success">
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
              <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
            </tr>
            <tr className="R2D2_LEGENDARY">
              <td className="toonnamecolumn">R2-D2</td>
              <td style={{"padding":"0px"}} className="success">
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
              <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
            </tr>
            <tr className="BB8">
              <td className="toonnamecolumn">BB-8</td>
              <td style={{"padding":"0px"}} className="success">
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
              <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
            </tr>
            <tr className="COMMANDERLUKESKYWALKER">
              <td className="toonnamecolumn">Commander Luke Skywalker</td>
              <td style={{"padding":"0px"}} className="success">
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
              <td className="success">13</td>
              <td className="success">85</td>
              <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
            </tr>
            <tr className="REYJEDITRAINING">
              <td className="toonnamecolumn">Rey (Jedi Training)</td>
              <td style={{"padding":"0px"}} className="success">
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
              <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
            </tr>
            <tr className="GRANDMASTERYODA">
              <td className="toonnamecolumn">Grand Master Yoda</td>
              <td style={{"padding":"0px"}} className="success">
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
              <td className="completeunit danger"><span className="glyphicon glyphicon-remove" /></td>
            </tr>
            <tr className="CHEWBACCALEGENDARY">
              <td className="toonnamecolumn">Chewbacca</td>
              <td style={{"padding":"0px"}} className="success">
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
              <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
            </tr>
            <tr className="C3POLEGENDARY">
              <td className="toonnamecolumn">C-3PO</td>
              <td style={{"padding":"0px"}} className="success">
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
              <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
            </tr>
            <tr className="JEDIKNIGHTREVAN">
              <td className="toonnamecolumn">Jedi Knight Revan</td>
              <td style={{"padding":"0px"}} className="success">
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
              <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
            </tr>
            <tr className="DARTHREVAN">
              <td className="toonnamecolumn">Darth Revan</td>
              <td style={{"padding":"0px"}} className="success">
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
              <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
            </tr>
            <tr className="DARTHMALAK">
              <td className="toonnamecolumn">Darth Malak</td>
              <td style={{"padding":"0px"}} className="success">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="success uniqueskill_DARTHMALAK01">Gnawing Terror</td>
                    </tr>
                    <tr>
                      <td className="success uniqueskill_DARTHMALAK02">Jaws of Life</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="success rarity">7</td>
              <td className="success">13</td>
              <td className="success">85</td>
              <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
            </tr>
            <tr className="PADMEAMIDALA">
              <td className="toonnamecolumn">Padmé Amidala</td>
              <td style={{"padding":"0px"}} className="success">
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
              <td className="completeunit success"><span className="glyphicon glyphicon-ok" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      latestVersion: null,
      errors: null,
      playerName: '',
      galacticPower: 0,
      guildName: '',
      playerStats: [],
      playerRoster: [],
      playerPortraits: [],
      playerArena: {},
      playerGrandArena: [],
      playerTitles: null,
      unitsList: [],
      unitEquipment: [],
      unitCrew: [],
      unitMods: [],
      unitRelic: null,
      unitXP: 0,
      skillsList: [],
      abilityList: [],
      gearList: [],
      language: '',
      playerData: [],
      playerLastUpdated: null,
      allyCode: 388591888,
      apiUsername: 'joncclark11',
      apiPassword: 'Cl0ckwork',
      tokenType: null,
      accessToken: null,
      expiresIn: null,
      isLoaded: true,
      squadsList: [],
      legendaries: [],
    }
    this.login = this.login.bind(this);
    this.fetchPlayer = this.fetchPlayer.bind(this);
    this.getPlayerProfile = this.getPlayerProfile.bind(this);
    this.displayRoster = this.displayRoster.bind(this);
  }

  componentDidMount() {
    const { accessToken } = this.state;
    if ( accessToken === null ) { this.login() }

    this.getGameVersion()
    //this.mainLoad()
  }

  async getGameVersion() {
    try {
  		return await this.fetchAPI( '/version', `allycode=${allycode}`, 'ENG_US' )
        .then(res => this.setState({latestVersion: res.game}) )
        .then(() => console.log('getGameVersion complete'));
  	} catch(e) {
  		throw e;
  	}

  }

  getUrlVars() {
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }

  mainLoad() {
    const { allyCode } = this.state;
    tabFromURL = this.getUrlVars()["tab"];
    if (tabFromURL) {
      tabFromURL = tabFromURL.split("#")[0];
    }

      this.checkStorage();
      let $activeTab = document.querySelector('#results>.tab-content>.tab-pane.active');
      let activeTab = $activeTab.getAttribute('id');

      //Clear current tab data
      $activeTab.innerHTML('');

      if (allyCode){
        console.log(`hello there! Ally Code: ${allyCode}`);
        // document.querySelector('#loadingGif').modal('show');
        this.postPlayer(allyCode);
      } else {
        this.clickPlayer();
      }
  }

  clickPlayer() {
    const { allyCode } = this.state;
      let getPlayer = document.getElementById('getPlayer');
      getPlayer.addEventListener('click', function(event) {
          event.preventDefault();

          if (localStorage.getItem('language')) {
              if (language !== localStorage.getItem('language')) {
                  this.clearStorage();
                  localStorage.setItem('language', language);
                  languagechanged = true;
                  console.log("Language was changed, fetching new data...");
              }
          } else {
              console.log('No previous language detected');
              localStorage.setItem('language', language);
          }
          //document.querySelector('#loadingGif').modal('show');
          this.postPlayer();
      });
  }

  postPlayer() {
    const { accessToken, allyCode } = this.state;
      if (!this.checkPlayer(allyCode) || languagechanged || !player) {
          roster = null;
          let $activeTab = document.querySelector('#results>.tab-content>.tab-pane.active');
          let activeTab = $activeTab.attr('id');

          //Clear current tab data
          $activeTab.innerHTML('');

          fetch(`https://api.swgoh.help`, {
             method: "POST",
             headers: {
               'Authorization': `Bearer ${accessToken}`,
               'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
             },
             body: `${allyCode}&lang=ENG_US`
           })
            .then((resp) => resp.json())
            .then(function(data, msg) {
              player = msg;
              console.log(data);
              //document.querySelector('#loadingGif').modal('hide');
              this.handlePlayer();
            }).catch(function(err) {
                console.log('Fetch Error :-S', err);
            });

      } else {
          //$('#loadingGif').modal('hide');
          player = localStorage.getItem('player');
          player = JSON.parse(player);
          this.loadPlayer();
      }
  }

  handlePlayer() {
    localStorage.setItem('player', JSON.stringify(player));
    this.loadPlayer();
  }

  loadPlayer() {

      if (player) {
        console.log(player);

          let alert = null;

          if (player.error){
            alert = player.error;
            localStorage.removeItem('player');
          }

          player = player[0];
          this.setHeader();

          document.getElementById('togglemains').addEventListener('click', function() {
              document.querySelector('.notmainteam').toggle();
          });

          document.getElementById('togglecomplete').addEventListener('click', function() {
              document.querySelector('.notready').toggle();
          });

          document.getElementById('results').removeClass('hidden');
          this.drawRosterProgress(alert);
      }

      //Calculate roster progress on tab selection
      document.querySelector('a[data-toggle="tab"]').on('shown.bs.tab', function() {
          document.querySelector('#results').removeClass('hidden');
          this.drawRosterProgress();
      });
  }

  setHeader() {
      player.stats.sort( (a, b) => { return a.index - b.index } );
      document.getElementById('playerName').innerHTML('<tr><td><h2>' + player.name + '<small> ' + player.stats[0].value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' GP</small></h2>' + '</td><td></td></tr>' + '<tr><td style="font-size:18px;">' + player.guildName + '</td></tr>' + '<!--<tr><td><button type="button" id="togglemains" class="btn btn-primary">Toggle Mains</button></td></tr>-->');
  }

  async getDataFiles() {
      try {
          //Convert roster
          if (!roster) {
              await this.convertRoster();
          }
          //Fetch squads json from data
          if (!squads) {
              squads = await fetch('./data/squads.json?=' + Date.now());
              squads = await squads.json();
          }
          //Fetch units json from API data
          if (!units) {
              console.log('units not defined');
              let project = {
                  nameKey: 1,
                  baseId: 1
              };
              var unitRequest = fetch(``, {
                  method: "POST",
                  headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                  },
                  body: `dump=unitsList&lang=ENG_US&project=${project}&baseId=rarity&match=7&version=${latestVersion}`
              });
              unitRequest.then((msg) => {
                  units = msg;
                  console.log('local units filled');
                  localStorage.setItem('units', JSON.stringify(msg));
                  localStorage.setItem('lastupdated', Date.now());
              });
              unitRequest.catch((e) => {
                  alert("unitRequest failed: " + e);
              });
          }
          //Fetch abilitylist json from API data
          if (!abilitylist) {
              console.log('abilitylist not defined');
              let project = {
                  nameKey: 1,
                  id: 1
              };
              var abilityRequest = fetch(``, {
                  method: "POST",
                  headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                  },
                  body: {
                      dump: 'abilityList',
                      lang: language,
                      project: project,
                      version: latestVersion
                  }
              });
              abilityRequest.then((msg) => {
                  abilitylist = msg;
                  console.log('local abilitylist filled');
                  localStorage.setItem('abilitylist', JSON.stringify(msg));
              });
              abilityRequest.catch((jqXHR, textStatus) => {
                  alert("abilityRequest failed: " + textStatus);
              });
          }

          //Fetch skillList json from API data
          if (!skillList) {
              console.log('skillList not defined');
              let project = {
                  abilityReference: 1,
                  id: 1
              };
              var skillRequest = fetch(``, {
                  method: "POST",
                  headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                  },
                  body: {
                      dump: 'skillList',
                      lang: language,
                      project: project,
                      baseId: 'isZeta',
                      match: 1,
                      version: latestVersion
                  }
              });
              skillRequest.then((msg) => {
                  skillList = msg;
                  console.log('local skilllist filled');
                  localStorage.setItem('skillList', JSON.stringify(msg));
              });
              skillRequest.catch((jqXHR, textStatus) => {
                  alert("skillRequest failed: " + textStatus);
              });
              //drawTab(skillRequest);
          }
          this.drawTab(skillRequest, abilityRequest, unitRequest);

      } catch (e) {
          console.error(e);
      }
  }

  async convertRoster() {
      try {

          roster = {};
          for (let unit of player.roster) {
              let uz = unit.skills.filter(x => x.isZeta && x.tier === 8);

              let zs = [];
              for (let z of uz) {
                  zs.push(z.id);
              }
              roster[unit.defId] = [];
              roster[unit.defId].push({
                  "gear_level": unit.gear,
                  "power": Math.floor(unit.gp),
                  "level": unit.level,
                  "combat_type": (
                      unit.type === 'char'
                      ? 1
                      : 2),
                  "rarity": unit.rarity,
                  "player": player.name,
                  "zetas": zs
              });

          }

      } catch (e) {
          console.error(e);
      }
  }

  async drawRosterProgress(alert) {
      try {
          if (alert) {
              document.querySelector('#results').html('<p class="alert alert-danger">' + alert + '</p>');
              return;
          }
          //Prepare support files
          await this.getDataFiles();
      } catch (e) {
          console.error(e);
      }
  }

  clearStorage() {
    //Clear all localStorage except allycode
    console.log("suck it JS" + localStorage.getItem('lastupdated') + "<" + latestVersion);
      localStorage.removeItem('abilitylist');
      localStorage.removeItem('lastupdated');
      localStorage.removeItem('player');
      localStorage.removeItem('skillList');
      localStorage.removeItem('units');
      abilitylist = null;
      lastupdated = null;
      player = null;
      skillList = null;
      units = null;

      console.log("Storage Cleared!");
  }

  calculateRosterProgress(unit, requirements) {

      try {
          let tdCls = '';
          let pass = true;
          let uid = unit.split(":")[0];
          let squadHTML = '<tr class="' + uid + '">';

          //Name
          var pUnit = units.filter(n => n.baseId === uid);

          squadHTML += '<td class="toonnamecolumn">' + pUnit[0].nameKey + '</td>';

          if (!roster[uid] || roster[uid].length === 0) {
              //Locked
              squadHTML += '<td class="warning" colspan="5">Locked</td>';
              pass = false;
          } else {

              //Zetas
              let zetaFail = '';
              if (requirements.ships) {
                  squadHTML += '<td class="hidden">' + requirements.ships + '</th>';
              } else {
                  tdCls = 'success';

                  let zs = unit.split(':').slice(1);
                  for (let z of zs) {
                      if (!roster[uid][0].zetas.includes(z.charAt(0))) {
                          tdCls = 'danger';
                      }
                  }

                  let zetauid = unit.split(":").slice(1);

                  function include(arr, obj) {
                      for (var i = 0; i < arr.length; i++) {
                          if (arr[i] == obj)
                              return true;
                          }
                      }

                  for (const poop of zetauid) {
                      if (!include(roster[uid][0].zetas, poop)) {
                          pass = false;
                      }

                  }

                  let zetanames = '';

                  //Fetch the plain names of the zetas
                  if (zetauid.length > 0) {
                      let zetaFail = 'success';
                      for (let uuid of zetauid) {
                          var pSkill = skillList.filter(n => n.id === uuid);
                          if (!pSkill[0]) {
                              console.log(uuid);
                          }
                          var pName = abilitylist.filter(y => y.id === pSkill[0].abilityReference);
                          // console.log("line 394: ", pSkill);
                          // console.log("line 395: ", pName);

                          for (const zetamatches of roster[uid][0].zetas) {
                              if (zetamatches == uuid) {
                                  tdCls = 'success';
                                  break;
                              } else {
                                  tdCls = 'danger';
                              }
                          }

                          zetanames += '<tr><td class="' + tdCls + ' ' + uuid + '">' + pName[0].nameKey + '</td></tr>';

                      }
                  }
                  if (!zetanames) {
                      tdCls = "default";
                  }
                  squadHTML += '<td style="padding:0px;" class="' + tdCls + '"><table class="table">' + zetanames + '</table></td>';
              }

              //Rarity
              tdCls = 'success';
              if (roster[uid][0].rarity < requirements.rarity) {
                  pass = false;
                  tdCls = 'danger';
              }
              squadHTML += '<td class="' + tdCls + ' rarity">' + roster[uid][0].rarity + '</td>';

              //Gear
              if (requirements.ships) {
                  squadHTML += '<td class="hidden">' + requirements.ships + '</th>';
              } else {
                  tdCls = 'success';
                  if (roster[uid][0].gear_level < requirements.gear_level) {
                      pass = false;
                      tdCls = 'danger';
                  }
                  squadHTML += '<td class="' + tdCls + '">' + roster[uid][0].gear_level + '</td>';
              }

              //Level
              tdCls = 'success';
              if (roster[uid][0].level < requirements.level) {
                  pass = false;
                  tdCls = 'danger';
              }
              squadHTML += '<td class="' + tdCls + '">' + roster[uid][0].level + '</td>';

              //Ready
              squadHTML += '<td class="completeunit ' + (
                  pass
                  ? 'success'
                  : 'danger') + '">' + (
                  pass
                  ? '<span class="glyphicon glyphicon-ok"></span>'
                  : '<span class="glyphicon glyphicon-remove"></span>') + '</td>';
          }
          squadHTML += '</tr>';
          return squadHTML;

      } catch (e) {
          console.error(e);
      }

  }

  drawTab(skillRequest, abilityRequest, unitRequest, playerRequest) {

          document.querySelector('#loadingGif').modal('hide');

          if (tabFromURL){
            document.querySelector('[href="#' + tabFromURL + '"]').tab('show');
            tabFromURL = null;
          }


          var $activeTab = document.querySelector('#results>.tab-content>.tab-pane.active');
          var activeTab = $activeTab.attr('id');

          //Clear current tab data
          $activeTab.html('');


          //Ensure we have squads and it contains the active tab
          if (squads && squads[activeTab]) {

              //Start with event title
              $activeTab.append('<h2>' + squads[activeTab].name + '</h2>');

              //Loop through each event phase
              for (let phase of squads[activeTab].phase) {

                  var phaseHTML = '<div class="row">';

                  //Add phase name
                  phaseHTML += '<a name="' + phase.anchor + '"></a><div id="' + phase.anchor + '"></div><div class="col-xs-12" style="position: sticky; position: -webkit-sticky; position: -moz-sticky; position: -ms-sticky; position: -o-sticky; top:' + document.getElementsByClassName('navbar-header')[0].clientHeight/2 + 'px; z-index: 2;"><h3>' + phase.name + '<br><small>Requirements - ' + squads[activeTab].rarity + ' Star - Gear ' + squads[activeTab].gear + ' - Level ' + squads[activeTab].level + '</small></h3></div>';
                  phaseHTML += '<div class="col-xs-12">';
                  phaseHTML += '</div>';

                  //Loop through each squad applicable to phase

                  for (let squad of phase.squads) {
                    if (squad.gear){
                      let replace = 'Gear ';
                      phaseHTML = phaseHTML.replace(phaseHTML.substr(phaseHTML.lastIndexOf(replace) + replace.length, 1), squad.gear);
                    }

                    if (squad.level){
                      let replace = 'Level ';
                      phaseHTML = phaseHTML.replace(phaseHTML.substr(phaseHTML.lastIndexOf(replace) + replace.length, 2), squad.level);
                    }

                      //Contain within columns
                      var squadHTML = squad.main
                          ? '<div class="col-md-6 tablestart">'
                          : '<div class="col-md-6 tablestart notmainteam">';

                      //Add squad name and notes
                      squadHTML += '<h4>' + squad.name;
                      squadHTML += squad.note.length > 0
                          ? ' - <small>' + squad.note + ''
                          : '<small>';
                      if (squad.panic){
                        if (squad.note) {
                          squadHTML += '<br/>';
                        }
                        squadHTML += '<a href=' + squad.panic + ' target="blank">Panic Farming Calculator</a>'
                      } else {
                        squadHTML += '';
                      }
                      squadHTML += squad.url.length > 0
                          ? ' - <a href=' + squad.url + ' target="blank">Link</a></small></h4>'
                          : '</small></h4>';

                      //Begin preparing table
                      squadHTML += '<table class="table table-striped table-bordered">';

                      squadHTML += '<thead><tr>';
                      squadHTML += '<th width="30%">Name</th>';
                      squadHTML += squad.ships
                          ? '<th class="hidden"></th>'
                          : '<th width="28%">Zetas</th>';
                      squadHTML += '<th width="8%">⭐</th>';
                      squadHTML += squad.ships
                          ? '<th class="hidden"></th>'
                          : '<th width="8%">G</th>';
                      squadHTML += '<th width="8%">L</th>';
                      squadHTML += '<th width="8%">Ready?</th>';
                      squadHTML += '</tr></thead>';

                      //Loop through each unit in squad and calculate display
                      for (let unit of squad.team) {
                          squadHTML += this.calculateRosterProgress(unit, {
                              ships: (squad.ships || false),
                              rarity: squads[activeTab].rarity,
                              gear_level: squads[activeTab].gear,
                              level: squads[activeTab].level
                          });
                      }

                      squadHTML += '</tbody>';
                      squadHTML += '</table>';
                      phaseHTML += squadHTML + '</div>';

                  }

                  $activeTab.append(phaseHTML);

              }

          }
          $activeTab.append('<div><tr><td><button type="button" id="clearlocal" class="btn btn-primary">Clear localStorage</button></td></tr></div>');
          //drawCheckboxes();
          this.calculateTeamReadiness();
          if (window.location.hash && allycode) {
              var target = window.location.hash;
              window.scrollTop(document.querySelector(target).offsetTop);
          }
          document.querySelector('#clearlocal').addEventListener('click', function() {
              localStorage.clear();
          });

  }

  checkStorage() {

      localStorage.getItem('units')
          ? units = JSON.parse(localStorage.getItem('units'))
          : units = null;
      localStorage.getItem('abilitylist')
          ? abilitylist = JSON.parse(localStorage.getItem('abilitylist'))
          : abilitylist = null;
      localStorage.getItem('skillList')
          ? skillList = JSON.parse(localStorage.getItem('skillList'))
          : skillList = null;
      localStorage.getItem('player')
          ? player = JSON.parse(localStorage.getItem('player'))
          : player = null;

      //Clear everything but allyCode from localStorage if the data is out of date
      if (localStorage.getItem('lastupdated')) {
          if (this.checkIfExpired(localStorage.getItem('lastupdated'), latestVersion)) {
            console.log(localStorage.getItem('lastupdated') + "<" + latestVersion);
              this.clearStorage();
              console.log("localStorage is outdated.  Clearing...");
          }
      }

      if (!localStorage.getItem('version')) {
          this.clearStorage();
          console.log("version is not set.");
          localStorage.setItem('version', version);
      } else {
          if (localStorage.getItem('version') != version) {
            console.log("version is too old.");
            this.clearStorage();
            localStorage.setItem('version', version);
          }
      }
  }

  checkPlayer() {
      //Clear the player profile from localStorage every 12 hours
      if (localStorage.getItem('playerlastupdated')) {
          if (Date.now() - localStorage.getItem('playerlastupdated') > 12 * 60 * 60 * 1000) {
              localStorage.removeItem('player');
              localStorage.setItem('playerlastupdated', Date.now());
              player = null;
              console.log("Player Storage Cleared!");
              return false;
          }
      } else {
          console.log('First time user');
          this.clearStorage();
          localStorage.setItem('playerlastupdated', Date.now());
          player = null;
          return false;
      }

      if (localStorage.getItem('allyCode')) {
          if (localStorage.getItem('allyCode') != allycode) {
              console.log("Allycode is different, resetting...");
              localStorage.setItem('allyCode', allycode);
              player = null;
              if (localStorage.getItem('player')) {
                  localStorage.removeItem('player');
              }
              return false;
          }
      }

      console.log("4");
      return true;
  }

  checkIfExpired(a, b) {
      if (a < b)
          return true;
      else
          return false;
      }

  //HACK: Should really be worked into the drawing routine, this is a quick hack to test out committing to Git, etc.
  drawCheckboxes() {
      //skip tabs that shouldn't have checkboxes.
      if (document.querySelector('section#results li.active')[0].textContent === 'Events')
          return;
      if (document.querySelector('section#results li.active')[0].textContent === 'Player Overview')
          return;

      //The purpose of this mod is to make creating teams for the Sith raid easier.
      //This mod can be activated easily.
      //First load the character sheet in your browser.
      //Second, bring up the debugger and select the console tab (F12 in Chrome.)
      //Third paste this post into the console window.
      //It should work on all browsers, but I've only tested in Chrome.
      //It doesn't persist any data, you'll need to write down the team names if you want to remember them.

      //This code adds checkboxes to each Team
      //The scale is to make the checkboxes larger for touch, and the margin makes it further from the text, most important for the header since some of them have links.
      //This could be extended to toggle ALL the characters under it or diabled if there are any unchecked. I left that as an exercise for the reader ;)
      document.querySelector('<input />', {
          type: 'checkbox',
          class: 'squadcheckbox',
          style: 'transform:scale(1.6);margin-right:20px'
      }).prependTo(document.querySelector('h4'));
      document.querySelector('h4 input.squadcheckbox').click(function() {
          ((this.parent()[0].nextSibling).find('input:checkbox.tooncheckbox')).trigger('click');
      });
      document.querySelector('table tbody').find('tr').each(function() {
          var current = document.querySelector(this).find('td:first');
          if (current.attr('class') === 'toonnamecolumn') {
              document.querySelector('<input />', {
                  type: 'checkbox',
                  class: 'tooncheckbox',
                  style: 'transform:scale(1.6);margin-right:10px'
              }).prependTo(this.find('td:first'));
          }
      });

      //This code adds linked checkboxes to every character. Clicking a character will toggle ALL instances of that character.
      //This makes it much easier to find out which teams use characters that aren't used yet.
      document.querySelector('table tbody tr input:checkbox.tooncheckbox').off('click');
      document.querySelector('table tbody tr').each(function() {
          var row = this;
          this.find('input:checkbox.tooncheckbox').click(function() {
              document.querySelector('[class^="' + row.attr('class').replace(/:.*/, "") + '"]').each(function() {
                  if (row !== this) {
                      if (row.attr('class').substr(0, 3) === 'REY' && this.attr('class').substr(0, 3) === 'REY') {
                          if ((row.attr('class').substr(0, 4) === 'REYJ' && this.attr('class').substr(0, 4) === 'REYJ') || (row.attr('class').substr(0, 4) !== 'REYJ' && this.attr('class').substr(0, 4) !== 'REYJ'))
                              this.find('input:checkbox.tooncheckbox').prop("checked", !this.find('input:checkbox.tooncheckbox').prop("checked"));
                          }
                      else if (row.attr('class').substr(0, 7) === 'KYLOREN' && this.attr('class').substr(0, 7) === 'KYLOREN') {
                          if ((row.attr('class').substr(0, 8) === 'KYLORENU' && this.attr('class').substr(0, 8) === 'KYLORENU') || (row.attr('class').substr(0, 8) !== 'KYLORENU' && this.attr('class').substr(0, 8) !== 'KYLORENU'))
                              this.find('input:checkbox.tooncheckbox').prop("checked", !this.find('input:checkbox').prop("checked"));

                          }
                      else
                          this.find('input:checkbox.tooncheckbox').prop("checked", !this.find('input:checkbox.tooncheckbox').prop("checked"));
                      }
                  })
          })
      })

      function changeTabs() {
          var tabName = document.querySelector("#results ul li.active a")[0].innerText;
          var isHeroic = tabName === "Sith raid" || tabName === "Heroic Rancor" || tabName === "Heroic Tank";
          //For each section
          document.querySelector('table tbody').each(function() {
              var strikeHeader = false;
              //for each row
              this.find('tr').each(function() {
                  var row = this[0];
                  this.find('td.rarity').each(function() {
                      var rarityElement = this;
                      if (rarityElement.length === 1) {
                          var rarity = rarityElement[0].innerText;
                          if (isHeroic) {
                              strikeHeader = strikeHeader || rarity !== "7";
                              row.css("text-decoration", function(_, td) {
                                  return rarity !== "7"
                                      ? "line-through"
                                      : "none";
                              });
                          } else {
                              row.css("text-decoration", function(_, td) {
                                  return "none";
                              });
                          }
                      } else {
                          //locked characters
                          strikeHeader = true;
                      }
                  });
              });
              if (isHeroic)
                  (((this[0].parentNode)[0].parentNode)[0]).find("H4").css("text-decoration", function(_, td) {
                      return strikeHeader
                          ? "line-through"
                          : "none";
                  });
              }
          );
      }

      //add in strikethrough for items below level 7 for heroic teams
      document.querySelector('#results ul li').click(function() {
          this.changeTabs();
      });
      (() => {
          this.changeTabs();
      })();
  };



  //Add readiness to each table
  calculateTeamReadiness() {
      var tables = document.querySelector('div[class*="tablestart"]');
      for (var t = 0; t < tables.length; t++) {
          var success = document.querySelector(tables[t]).find('.glyphicon-ok');
          var score = success.length;;
          if (score < 5) {
              document.querySelector(tables[t]).addClass('notready');
          }
      }
  }

  async login( url, body ) {
    console.log(`login()`)

    const res = await fetch(`https://api.swgoh.help/auth/signin`, {
     method: "POST",
     headers: {
       'Content-Type': 'application/x-www-form-urlencoded',
     },
     body: `username=shittybill&password=shittybilly&grant_type=password&client_id=123&client_secret=abc`
   });
    return res
      .json()
      .then(data => this.setState({accessToken: data.access_token}))
      .catch(err => this.setState({errors: err}));
    }

  async fetchAPI( url, criteria, lang ) {

      const { accessToken } = this.state;

    	try {
        const res = await fetch(`https://api.swgoh.help${url}`, {
           method: "POST",
           headers: {
             'Authorization': `Bearer ${accessToken}`,
             'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
           },
           body: `${criteria}&lang=ENG_US`
         });

        return await res.json();

    	} catch(e) {
    		throw e;
    	}

    }

  async fetchData( criteria ) {
    console.log(`fetchData()`)
    	try {
    		return await this.fetchAPI( '/swgoh/data/', criteria );
    	} catch(e) {
    		throw e;
    	}
  }

  async getPlayerProfile() {
    console.log(`getPlayerProfile()`)
    const { playerData } = this.state;

    return await playerData.map(data => {
      this.setState({
        playerName: data.name,
        guildName: data.guildName,
        playerArena: data.arena,
        playerGrandArena: data.grandArena,
        playerPortraits: data.portraits,
        playerStats: data.stats,
        playerRoster: data.roster,
        playerTitles: data.titles,
      });
    });

  }

  async fetchPlayer( allycode ) {
    this.setState({isLoaded: false});
  	try {
  		return await this.fetchAPI( playerUrl, `allycode=${allycode}`, 'ENG_US' )
        .then(res => this.setState({playerData: res, isLoaded: true}, this.getPlayerProfile ) )
        .then(() => this.getSquads());
  	} catch(e) {
  		throw e;
  	}
  }

  async getSquads() {
    const {squadsList} = this.state;

    try {
      return await this.fetchAPI( '/swgoh/squads' )
        .then(res => squadsList.push(res))
        .then(() => console.log('getSquads complete'))
    } catch(e) {
      throw e;
    }
  }

  async getSkillList() {

    try {
      const res = await this.fetchAPI( '/swgoh/data', `collection=skillList&enums=${true}` )
       console.log(`res: ${JSON.stringify(res, undefined, 2)}`);

      return await res;

    } catch(e) {
      throw e;
    }
  }

  async getUnitsList() {

    try {
      return await this.fetchAPI( '/swgoh/data', `collection=unitsList&enums=${true}&match={rarity:7}` )
      .then(json => this.setState({unitsList: json}, console.log(`json: ${JSON.stringify(json, undefined, 2)}`) ) )

    } catch(e) {
      throw e;
    }
  }

  async getAbilityList() {

    try {
      return await this.fetchAPI( '/swgoh/data', `collection=abilityList&enums=${true}` )
      .then(json => this.setState({abilityList: json}, console.log(`json: ${JSON.stringify(json, undefined, 2)}`) ) )

    } catch(e) {
      throw e;
    }
  }

  async displayRoster() {
    const {
      playerRoster,
      unitsList,
      unitEquipment,
      unitCrew,
      unitMods,
      unitRelic,
      unitXP,
      skillsList
    } = this.state;

    if (playerRoster) {
      playerRoster.map((unit, index) => (
        unitsList.push(unit),
        unitEquipment.push(unit.equipped),
        unitCrew.push(unit.crew),
        unitMods.push(unit.mods),
        unitRelic.push(unit.relic),
        skillsList.push(unit.skills),
        unitsList.map((item, index) => (<p key={index}>Unit: {item.nameKey}</p>)),
        <h4 key={index}>Name: {unit.nameKey}</h4>,
        <p key={unit.id}>Gear: {unit.gear}</p>,
        <p key={unit.defId}>GP: {unit.gp}</p>,
        <p>Level: {unit.level}</p>,
        <p>XP: {unit.xp}</p>,
        <p>Relic Tier: {unit.relic.currentTier}</p>,
        <h5>Equipped</h5>,
        unit.equipped.map((item, index) => (<p key={index}>Equipment: {item.nameKey}</p>)),
        unit.crew.map((item, index) => (<p key={index}>Crew: {item.crew}</p>)),
        unit.mods.map((item, index) => (<p key={index}>Mods: {item.mods}</p>)),

        unit.skills.map(skill => (<p key={skill.id}>Skill: {skill.nameKey} Zeta:{skill.isZeta}</p>))
      ))

    }
  }

  async displayStats() {
    const { playerStats } = this.state;
    if (playerStats) { playerStats.map(stat => (<p>Stat: {stat.nameKey}</p>)) }
  }

  async displayUnits() {
    const { unitsList, playerRoster } = this.state;
    if (playerRoster) { playerRoster.map(roster => this.setState({unitsList: roster.nameKey, }))}
    if (unitsList) { unitsList.map(unit => (<p>{unit}</p>)) }
  }

  async displayPortrait() {
    const { playerPortraits } = this.state;
    if (playerPortraits) { return (<p>{playerPortraits.selected}</p>) }

  }

   /**
    * getZetaRecommendations()
    * Return current zeta list, rated by their various uses throughout the game.
    * This dataset is an aggregated summary of rankings collected through a grouping of krakens, whales, dolphins and free-to-players.
    * Note: This dataset is care of a third party and does not have available translation.
    * @param  {[type]}  structure [description]
    * @param  {[type]}  project   [description]
    * @return {Promise}           [description]
    */
   async getZetaRecommendations() {
    //  try {
   	// 	return await this.fetchAPI( `/swgoh/zetas`, `structure=true`, 'ENG_US' )
    //      .then(res => this.setState({playerData: res, isLoaded: true}, this.getPlayerProfile ) )
    //      .then(() => this.getSquads());
   	// } catch(e) {
   	// 	throw e;
   	// }

        // fetch(`https://api.swgoh.help/swgoh/zetas`, {
        //   method: "POST",
        //   headers: {
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${this.state.accessToken}`,
        //   },
        //   body: allycode
        // })
        //  .then(response => {
        //    return response.json()
        //  })
        //  .then(data => {
        //    console.log(`Zeta Recommendations: ${JSON.stringify(data, undefined, 4)}`)
        //  })



   }

   /**
    * getSquadRecommendations()
    * Squad recommendations /swgoh/squads
    * Return current list of recommended squads, organized around their various uses throughout the game.
    * Note: This dataset is care of a third party and does not have available translation.
    * Parameters
    * structure : Boolean
    * project : MongoDB $project object
    * @param  {[type]}  structure [description]
    * @param  {[type]}  project   [description]
    * @return {Promise}           [description]
    */
   async getSquadRecommendations(structure, project) {
     fetch(`https://api.swgoh.help/swgoh/squads`, {
       method: "POST",
       headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${this.state.accessToken}`,
       },
       //body: JSON.stringify(allyCodes)
     })
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(`Guilds: ${JSON.stringify(data, undefined, 4)}`)
      })
   }

   /**
    * [getEventSchedule description]
    * Event schedule
    * Return the current in-game event schedule.
    * Parameters
    * language : String
    * enums : Boolean
    * structure : Boolean
    * project : MongoDB $project object
    * @param  {[type]}  structure [description]
    * @param  {[type]}  project   [description]
    * @return {Promise}           [description]
    */
   async getEventSchedule() {
     return await this.fetchAPI( '/swgoh/events' )
     .then(json => console.log(`json: ${JSON.stringify(json, undefined, 2)}`) )


   }

   /**
    * Campaign battles /swgoh/battles
    * Return current list of all campaigns, nodes and battle data.
    * @param  {[type]}  language  [description]
    * @param  {[type]}  enums     [description]
    * @param  {[type]}  structure [description]
    * @param  {[type]}  project   [description]
    * @return {Promise}           [description]
    */
   async getCampaignBattles() {
     const {accessToken} = this.state;
     accessToken === null && this.login()
     fetch(`https://api.swgoh.help/swgoh/battles`, {
       method: "POST",
       mode: 'cors',
       credentials: 'same-origin',
       headers: {
         'Authorization': `Bearer ${accessToken}`,
         'Content-Type': 'application/json',
         'Content-Length': new Buffer(`allycode=${388591888}&lang=ENG_US`).length
       },
       body: `allycode=${388591888}&lang=ENG_US`
     })
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(`Battles: ${JSON.stringify(data, undefined, 4)}`)
      })
   }

  render() {
    const {
      playerData,
      latestVersion,
      accessToken,
      playerName,
      galacticPower,
      guildName,
      errors,
      playerGrandArena,
      playerPortraits,
      playerStats,
      playerRoster,
      skillsList,
      abilityList,
      gearList,
      squadsList,
      isLoaded,
      unitsList,
      unitEquipment,
      unitCrew,
      unitMods,
      unitRelic,
      unitXP,
    } = this.state;

    return (
			<>
        <Container id="content">
          <Row>
            <Col>
              <Overlay
                isLoaded={isLoaded}
              />
              <Header
                accessToken={accessToken ? accessToken : ''}
                gameVersion={latestVersion ? latestVersion : ''}
                playerName={playerName ? playerName : ''}
                galacticPower={galacticPower ? galacticPower : ''}
                guildName={guildName ? guildName : ''}
                hasError={errors ? errors : 'None'}
                onClick={() => this.fetchPlayer(388591888)}
              />
            </Col>
          </Row>
          <Row>
            <Col>

              <Router>
                <NavBar />
              </Router>
            
            </Col>
          </Row>
          <Row id="results">
            {/** Results section to provide visual feedback */}
            <Col>
              {
                squadsList.map((unit, index) => (
                  unit.psummary.phase.map((item) => (
                    <>
                      <h3>
                        {item.name}
                      </h3>

                      {item.squads.map((squad) => (
                        <>
                          <h4>
                            {squad.name}
                          </h4>

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
                              {squad.team.map((toon) => (
                                <tr key={index}>
                                  <td className="toonnamecolumn">
                                    {toon}
                                  </td>
                                  <td style={{padding: "0px"}} className="success">
                                        <table className="table">
                                          <tbody>


                                          </tbody>
                                        </table>
                                  </td>
                                  <td className="success rarity">{unit.rarity}</td>
                                  <td className="success">{unit.gear}</td>
                                  <td className="success">{unit.level}</td>
                                  <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </>
                      ))}
                    </>
                  ))
                ))
              }

              {/** playerGrandArena.length > 0 ? <DataTable dataArray={playerGrandArena} /> : '' */}

              <h3>Roster:</h3>
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
                  {
                    playerRoster.map((unit, index) => (
                      <tr className={unit.defId} key={index}>
                        <td className="toonnamecolumn">{unit.nameKey}</td>
                        <td style={{padding: "0px"}} className="success">
                              <table className="table">
                                <tbody>
                                  {unit.skills.map((skill, index) => (
                                    <tr key={index}>
                                      {skill.isZeta && (<td className={skill.isZeta ? `success ${skill.id}` : `danger ${skill.id}`} key={skill.id}>{skill.nameKey}</td>)}
                                    </tr>
                                  ))}

                                </tbody>
                              </table>
                        </td>
                        <td className="success rarity">{unit.rarity}</td>
                        <td className="success">{unit.gear}</td>
                        <td className="success">{unit.level}</td>
                        <td className="completeunit danger"><span className="glyphicon glyphicon-remove"></span></td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
              <div>
                <h3>Stats:</h3>
                {playerStats ? playerStats.map((stat, index) => (<p key={index}>{stat.nameKey} {stat.value}</p>)) : ''}
              </div>

              <div>
                <h3>Player Portrait:</h3>
                <p>{playerPortraits ? playerPortraits.selected : ''}</p>
              </div>

              <hr />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Dashboard
