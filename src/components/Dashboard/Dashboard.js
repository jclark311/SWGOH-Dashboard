import React from 'react';
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
import Spinner from 'react-bootstrap/Spinner';

import Header from '../../containers/Header/Header.js';
import Overlay from '../../containers/Overlay/Overlay.js';

const allycode = 388591888;
const urlBase = 'https://api.swgoh.help';
const signin  = '/auth/signin';
const data    = '/swgoh/data';
const player  = '/swgoh/players';
const guild   = '/swgoh/guilds';
const units   = '/swgoh/units';
const events  = '/swgoh/events';
const battles = '/swgoh/battles';
const zetas   = '/swgoh/zetas';
const squads  = '/swgoh/squads';
const roster  = '/swgoh/roster';
const verbose = true;
const debug   = true;
const dump    = true;

const statsUrl = 'https://crinolo-swgoh.glitch.me/baseStats/api/';
const charStatsApi = 'https://crinolo-swgoh.glitch.me/statCalc/api/characters';
const shipStatsApi = 'https://crinolo-swgoh.glitch.me/statCalc/api/ships';

// const ApiSwgohHelp = require('api-swgoh-help');
// const swapi = new ApiSwgohHelp({
//   "username":"shittybill",
//   "password":"shittybilly",
//   "debug":true
// });



class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
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
      player: [],
      playerLastUpdated: null,
      allyCode: null,
      apiUsername: 'joncclark11',
      apiPassword: 'Cl0ckwork',
      tokenType: null,
      accessToken: null,
      expiresIn: null,
      isLoaded: true,
    }
    this.login = this.login.bind(this);
    this.fetchPlayer = this.fetchPlayer.bind(this);
    this.getPlayerProfile = this.getPlayerProfile.bind(this);
    this.displayRoster = this.displayRoster.bind(this);
  }

  componentDidMount() {
    console.log(this)
    const { accessToken } = this.state;
    if ( accessToken === null ) { this.login() }
    // useEffect(() => {
    //   async function fetchData() {
    //     const res = await fetch(`https://api.swgoh.help/auth/signin`, {
    //        method: "POST",
    //        headers: {
    //          'Content-Type': 'application/x-www-form-urlencoded',
    //          //'Content-Length': new Buffer(user).length,
    //        },
    //        body: `username=shittybill&password=shittybilly&grant_type=password&client_id=123&client_secret=abc`
    //      });
    //     res
    //       .json()
    //       .then(res => setAccessToken(res.access_token))
    //       .catch(err => setErrors(err));
    //   }
    //
    //   fetchData();
    // }, []);
  }

  async login( url, body ) {
    console.log(`value of this in login(): `, this)

    const res = await fetch(`https://api.swgoh.help/auth/signin`, {
     method: "POST",
     headers: {
       'Content-Type': 'application/x-www-form-urlencoded',
       //'Content-Length': new Buffer(user).length,
     },
     body: `username=shittybill&password=shittybilly&grant_type=password&client_id=123&client_secret=abc`
   });
    return res
        .json()
        .then(data => this.setState({accessToken: data.access_token}))
        .catch(err => this.setState({errors: err}));

    	// try {
    	// 	url = url ? urlBase+url : urlBase+signin;
    	// 	body = body || user;
      //
    	// 	let token = await this.fetch(urlBase+signin, {
    	// 	    method: 'POST',
    	// 	    body:this.user,
    	// 	    headers: {
    	// 	    	'Content-Type': 'application/x-www-form-urlencoded',
    	// 	    	'Content-Length': new Buffer(JSON.stringify(this.user)).length
    	// 	    }
    	// 	});
      //
    	// 	if ( token.status !== 200 ) { throw new Error('! Cannot login with these credentials'); }
      //
    	// 	token = await token.json();
    	// 	token = { 'Authorization':"Bearer "+token.access_token };
      //
    	// } catch(e) {
    	// 	throw e;
    	// }

    }

  async fetchAPI( url, criteria, lang ) {
    console.log(`value of this in fetchAPI(): `, this)
      const { accessToken } = this.state;
    	try {

    		// if( !accessToken ) { await login(); }
        //
    		// let fetchUrl = lang ? `${urlBase}${url}${criteria}/${lang}` : `${urlBase}${url}${criteria}`;

        const res = await fetch(`https://api.swgoh.help${url}`, {
           method: "POST",
           headers: {
             'Authorization': `Bearer ${accessToken}`,
             'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
             //'Content-Length': new Buffer(user).length,
           },
           body: `${criteria}&lang=ENG_US`
         });
         console.log(`res: ${JSON.stringify(res, undefined, 2)}`)
         console.log(res.headers.get('Content-Type'));
          console.log(res.headers.get('Date'));
          console.log(res.status);
          console.log(res.statusText);
          console.log(res.type);
          console.log(res.url);

        return await res.json();


    		// const response = await fetch(JSON.stringify(fetchUrl), {
    		//     method: 'POST',
    		//     headers: accessToken
    		// });
        //
    		// return await response.json();

    	} catch(e) {
    		throw e;
    	}

    }

  async fetchData( criteria ) {
    console.log(`value of this in fetchData(): `, this)
    	try {
    		return await this.fetchAPI( '/swgoh/data/', criteria );
    	} catch(e) {
    		throw e;
    	}
  }

  async getPlayerProfile() {
    console.log(`value of this in getPlayerProfile(): `, this)
    const { player } = this.state;

    return await player.map(data => {
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
  		return await this.fetchAPI( player, `allycode=${allycode}`, 'ENG_US' )
        .then(res => this.setState({player: res, isLoaded: true}, this.getPlayerProfile ) )
        .then(() => this.getSquads());
  	} catch(e) {
  		throw e;
  	}
  }

  async getSquads() {

    try {
      const res = await this.fetchAPI( '/swgoh/squads' )
       console.log(`res: ${JSON.stringify(res, undefined, 2)}`);

      return await res;

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
   async getZetaRecommendations(structure, project) {
     this.isToken()
      .then(() => {
        fetch(`https://api.swgoh.help/swgoh/zetas`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.state.accessToken}`,
          },
          body: allycode
        })
         .then(response => {
           return response.json()
         })
         .then(data => {
           console.log(`Guilds: ${JSON.stringify(data, undefined, 4)}`)
         })
      })


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
      player,
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
                playerName={playerName ? playerName : ''}
                galacticPower={galacticPower ? galacticPower : ''}
                guildName={guildName ? guildName : ''}
                hasError={errors ? errors : 'None'}
                onClick={() => this.fetchPlayer(388591888)}
              />
            </Col>
          </Row>
          <Row>
            {/** Results section to provide visual feedback */}
            <Col>
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


                  <h4 key={index}>Name: {unit.nameKey[index]}</h4>,
                  <p key={unit.id}>Gear: {unit.gear}</p>,
                  <p key={unit.defId}>GP: {unit.gp}</p>,
                  <p>Level: {unit.level}</p>,
                  <p>XP: {unit.xp}</p>,
                  <p>Relic Tier: {unit.relic}</p>,
                  <h5>Equipped</h5>,
                  unit.equipped.map((item, index) => (<p key={index}>Equipment: {item.nameKey}</p>)),
                  unit.crew.map((item, index) => (<p key={index}>Crew: {item.crew}</p>)),
                  unit.mods.map((item, index) => (<p key={index}>Mods: {item.mods}</p>)),



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
              <div>Has error: {errors ? JSON.stringify(errors) : 'None'}</div>
            </Col>

          </Row>
        </Container>
      </>
    );
  }
}

export default Dashboard
