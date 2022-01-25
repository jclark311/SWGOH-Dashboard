import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'react-bootstrap/Image';

import Header from '../../containers/Header/Header.js';
import Overlay from '../../containers/Overlay/Overlay.js';
import NavBar from '../../containers/NavBar/NavBar.js';
import DataTable from '../../containers/Table/Table.js';
import CharacterProfile from '../../containers/CharacterProfile/CharacterProfile.js';

import './Dashboard.css'

const allycode = 388591888;
const playerUrl  = '/swgoh/players';
const statsUrl = 'https://crinolo-swgoh.glitch.me/baseStats/api/';
const charStatsApi = 'https://crinolo-swgoh.glitch.me/statCalc/api/characters';
const shipStatsApi = 'https://crinolo-swgoh.glitch.me/statCalc/api/ships';

const Star = ({ marked, starId }) => {
  return (
    <span data-star-id={starId} className={`${marked ? "star" : ""}`} role="button">
      {marked ? '\u2605' : '\u2606'}
    </span>
  );
};

const StarRating = ({ value }) => {
  const [rating, setRating] = useState(parseInt(value) || 0);
  const [selection, setSelection] = useState(0);

  const hoverOver = event => {
    let val = 0;
    if (event && event.target && event.target.getAttribute('data-star-id'))
      val = event.target.getAttribute('data-star-id');
    setSelection(val)
  };
  return (
    <div
      className="star-rating"
      onMouseOut={() => hoverOver(null)}
      onClick={e => setRating(e.target.getAttribute('data-star-id') || rating)}
      onMouseOver={hoverOver}
    >
      {Array.from({ length: 7 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1}`}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
    </div>
  );
};


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
      skillsList: [],
      abilityList: [],
      gearList: [],
      playerData: [],
      playerLastUpdated: null,
      allyCode: 388591888,
      apiUsername: 'joncclark11',
      apiPassword: 'Cl0ckwork',
      accessToken: null,
      expiresIn: null,
      isLoaded: true,
      squadsList: [],
    }
    this.login = this.login.bind(this);
    this.fetchPlayer = this.fetchPlayer.bind(this);
    this.getPlayerProfile = this.getPlayerProfile.bind(this);
    this.displayRoster = this.displayRoster.bind(this);
    this.handleShowPage = this.handleShowPage.bind(this);

  }

  componentDidMount() {
    const { accessToken } = this.state;
    if ( accessToken === null ) { this.login() }

    this.getGameVersion()
  }

  async handleShowPage(event) {
    event.preventDefault()
    console.log(`Nav: ${event.target}`)
  }

  async getGameVersion() {
    try {
  		return await this.fetchAPI( '/version', `allycode=${allycode}`, 'ENG_US' )
        .then(res => this.setState({latestVersion: res.game}) )
        .then(() => this.fetchPlayer(388591888));
  	} catch(e) {
  		throw e;
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
        playerRoster: data.roster.sort((b, a) => a.gp - b.gp),
        playerTitles: data.titles,
      }, this.getSquads);
    });

  }

  async fetchPlayer( allycode ) {

    this.setState({isLoaded: false});
  	try {
  		return await this.fetchAPI( playerUrl, `allycode=${allycode}`, 'ENG_US' )
        .then(res => this.setState({playerData: res, isLoaded: true}, this.getPlayerProfile ) )
        .then(() => console.log('done'));
  	} catch(e) {
  		throw e;
  	}
  }

  async storePlayerData() {
    const { playerData, squadsList, playerStats, playerArena, playerGrandArena, playerPortraits, playerTitles, playerRoster, playerName } = this.state;
    const localPlayerData = await localStorage.setItem('playerData', JSON.stringify(playerData))
    const localSquadsList = await localStorage.setItem('squadsList', JSON.stringify(squadsList))
    const localPlayerStats = await localStorage.setItem('playerStats', JSON.stringify(playerStats))
    const localPlayerArena = await localStorage.setItem('playerArena', JSON.stringify(playerArena))
    const localPlayerGrandArena = await localStorage.setItem('playerGrandArena', JSON.stringify(playerGrandArena))
    const localPlayerPortraits = await localStorage.setItem('playerPortraits', JSON.stringify(playerPortraits))
    const localPlayerTitles = await localStorage.setItem('playerTitles', JSON.stringify(playerTitles))
    const localPlayerRoster = await localStorage.setItem('playerRoster', JSON.stringify(playerRoster))
    const localPlayerName = await localStorage.setItem('playerName', JSON.stringify(playerName))
    return [
      localPlayerData,
      localSquadsList,
      localPlayerStats,
      localPlayerArena,
      localPlayerGrandArena,
      localPlayerPortraits,
      localPlayerTitles,
      localPlayerRoster,
      localPlayerName
    ]
  }

  async getSquads() {
    const {squadsList} = this.state;

    try {
      return await this.fetchAPI( '/swgoh/squads' )
        .then(res => squadsList.push(res))
        .then(() => this.storePlayerData())
    } catch(e) {
      throw e;
    }
  }

  async handleStats() {
    const { playerStats } = this.state;
    await playerStats.map((stat, index) => (console.log(`playerStats: index=${index} nameKey=${stat.nameKey} value=${stat.value}`)))
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
      latestVersion,
      accessToken,
      playerName,
      galacticPower,
      guildName,
      errors,
      playerRoster,
      squadsList,
      isLoaded
    } = this.state;

    return (
			<>
        <Container id="content" fluid>
          <Row>
            <Col>
              <Overlay
                isLoaded={isLoaded}
              />
              <Header
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
              <NavBar />
            </Col>
          </Row>

          <Row id="character-grid">
            {
              playerRoster.map((r) => (
                r.combatType === 1 && (
                  <>
                    <Col className="character-box" xs={6} sm={3} md={3} lg={2}>
                      <div className="collection-char collection-char-dark-side">
                        <div className="player-char-portrait char-portrait-full char-portrait-full-gear-t13 char-portrait-full-alignment-dark-side">
                          <a href={`/character-profile/${r.id}`} className="char-portrait-full-link">

                            <Image className="char-portrait-full-img initial loading" src="https://game-assets.swgoh.gg/tex.charui_sithrevan.png" alt={`${r.nameKey}`} height="80" width="80" roundedCircle />

                            <div className="char-portrait-zetas">{r.skills.filter(s => s.isZeta === true).length}</div>
                            <div className="char-portrait-full-relic">{Object.values(r.relic)}</div>
                            <div className="char-portrait-full-level">{r.level}</div>

                            <StarRating value={r.rarity} />
                          </a>
                        </div>
                        <div className="collection-char-gp" data-toggle="tooltip" data-container="body" title="" data-original-title={`Power ${r.gp} 35,308 / 37,585`}>
                          <ProgressBar now={60} />

                          <div className="collection-char-gp-label">
                            <span className="collection-char-gp-label-value">93</span>
                            <span className="collection-char-gp-label-percent">%</span>
                          </div>
                        </div>
                        <div className="collection-char-name">
                          <a className="collection-char-name-link" href={`/character-profile/${r.id}`}>
                            {r.nameKey}
                          </a>
                        </div>
                      </div>
                    </Col>
                  </>
                )
              ))
            }
          </Row>

          <Row>
            <Col>
              {
                squadsList.map((unit) => (
                  <>
                    <div className="col-xs-12">
                      <h2>{unit.psummary.name}</h2>
                    </div>

                    {unit.psummary.phase.map((p) => (
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
}

export default Dashboard;
