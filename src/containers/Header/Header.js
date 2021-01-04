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

const Header = ({ accessToken, onClick, playerName, galacticPower, guildName, hasError }) => {
  // const [hasError, setErrors] = useState(false);
  // const [playerData, setPlayerData] = useState([]);
  // const [playerTitles, setPlayerTitles] = useState([]);
  // const [playerStats, setPlayerStats] = useState([]);
  // const [playerRoster, setPlayerRoster] = useState([]);
  // const [playerArena, setPlayerArena] = useState([]);
  // const [arenaCharacter, setArenaCharacter] = useState([]);
  // const [arenaSquad, setArenaSquad] = useState([]);
  // const [arenaShip, setArenaShip] = useState([]);
  // const [shipArenaSquad, setShipArenaSquad] = useState([]);
  // const [playerPortraits, setPlayerPortraits] = useState([]);
  // const [playerGrandArena, setPlayerGrandArena] = useState([]);
  // const [accessToken, setAccessToken] = useState();
  //
  // const urlBase = 'https://api.swgoh.help'
	// const signin  = '/auth/signin';
	// const data    = '/swgoh/data';
  // const player  = '/swgoh/players';
  // const guild   = '/swgoh/guilds';
  // const units   = '/swgoh/units';
  // const events  = '/swgoh/events';
  // const battles = '/swgoh/battles';
  // const zetas   = '/swgoh/zetas';
  // const squads  = '/swgoh/squads';
  // const roster  = '/swgoh/roster';
  // const verbose = true;
  // const debug   = true;
  // const dump    = true;
  //
  // const statsUrl = 'https://crinolo-swgoh.glitch.me/baseStats/api/';
  // const charStatsApi = 'https://crinolo-swgoh.glitch.me/statCalc/api/characters';
  // const shipStatsApi = 'https://crinolo-swgoh.glitch.me/statCalc/api/ships';


  // async function login( url, body ) {
  //   	try {
  //   		url = url ? this.urlBase+url : this.urlBase+this.signin;
  //   		body = body || this.user;
  //
  //   		let token = await this.fetch(this.urlBase+this.signin, {
  //   		    method: 'POST',
  //   		    body:this.user,
  //   		    headers: {
  //   		    	'Content-Type': 'application/x-www-form-urlencoded',
  //   		    	'Content-Length': new Buffer(JSON.stringify(this.user)).length
  //   		    }
  //   		});
  //
  //   		if ( token.status !== 200 ) { throw new Error('! Cannot login with these credentials'); }
  //
  //   		token = await token.json();
  //   		this.token = { 'Authorization':"Bearer "+token.access_token };
  //
  //   	} catch(e) {
  //   		throw e;
  //   	}
  //
  //   }

  // async function fetchAPI( url, criteria, lang ) {
  // 	try {
  //
  // 		// if( !accessToken ) { await login(); }
  //     //
  // 		// let fetchUrl = lang ? `${urlBase}${url}${criteria}/${lang}` : `${urlBase}${url}${criteria}`;
  //
  //     const res = await fetch(`https://api.swgoh.help${url}`, {
  //        method: "POST",
  //        headers: {
  //          'Authorization': `Bearer ${accessToken}`,
  //          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  //          //'Content-Length': new Buffer(user).length,
  //        },
  //        body: `${criteria}&lang=ENG_US`
  //      });
  //      console.log(`res: ${JSON.stringify(res, undefined, 2)}`)
  //      console.log(res.headers.get('Content-Type'));
  //       console.log(res.headers.get('Date'));
  //       console.log(res.status);
  //       console.log(res.statusText);
  //       console.log(res.type);
  //       console.log(res.url);
  //
  //     return await res.json();
  //
  //
  // 		// const response = await fetch(JSON.stringify(fetchUrl), {
  // 		//     method: 'POST',
  // 		//     headers: accessToken
  // 		// });
  //     //
  // 		// return await response.json();
  //
  // 	} catch(e) {
  // 		throw e;
  // 	}
  //
  // }
  //
  // async function fetchData( criteria ) {
  // 	try {
  // 		return await this.fetchAPI( this.data, criteria );
  // 	} catch(e) {
  // 		throw e;
  // 	}
  // }
  //
  // async function fetchPlayer( allycode ) {
  // 	try {
  // 		return await fetchAPI( player, `allycode=${allycode}`, 'ENG_US' )
  //       // .then(res => setPlayerData(res));
  // 	} catch(e) {
  // 		throw e;
  // 	}
  // }
  //
  // async function fetchGuild( allycode ) {
  // 	try {
  // 		return await this.fetchAPI( this.guild, allycode );
  // 	} catch(e) {
  // 		throw e;
  // 	}
  // }

  // function playerMarkup() {
  //   <p>{player.stats.map((item, i) => item)}</p>,
  //   <p>{player.roster.map((item, i) => item)}</p>,
  //   <p>{player.arena.map((item, i) => item)}</p>,
  //   <p>{player.portraits.selected}</p>,
  //   <p>{player.grandArena.map((item, i) => item)}</p>
  // }

  // async function parsePlayerData() {
  //   await getPlayerTitles()
  // }
  //
  // async function getPlayerTitles() {
  //   playerData && await playerData.map(player =>
  //     setPlayerTitles(player.titles)
  //   )
  // }
  //
  // async function getPlayerTitles() {
  //   playerData && await playerData.map(player =>
  //     setPlayerTitles(player.titles)
  //   )
  // }
  //
  // async function getPlayerStats() {
  //   playerData && await playerData.map(player =>
  //     setPlayerStats(player.stats)
  //   )
  // }
  //
  // async function getPlayerRoster() {
  //   playerData && await playerData.map(player =>
  //     setPlayerRoster(player.roster)
  //   )
  // }
  //
  // async function getPlayerArena() {
  //   playerData && await playerData.map(player =>
  //     setPlayerArena(player.arena)
  //   )
  // }
  //
  // async function getPlayerPortraits() {
  //   playerData && await playerData.map(player =>
  //     setPlayerPortraits(player.portraits)
  //   )
  // }
  //
  // async function getPlayerGrandArena() {
  //   playerData && await playerData.map(player =>
  //     setPlayerGrandArena(player.grantArena)
  //   )
  // }

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

  return (
    <Jumbotron>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <h1> Erlkonig's SWGOH Dashboard </h1>
            <p>
              Data dashboard that lists data pulled from SWGOH Help API.
            </p>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <section id="input">
              <div className="well">
                <Form className="form-inline" id="playerForm">
                  <InputGroup>
                    <InputGroup.Prepend id="allycode_input">
                      <InputGroup.Text>Allycode:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="text" id="allycode" name="allycode" aria-describedby="allycode_example" />
                  </InputGroup>
                  <InputGroup>
                    <Form.Control as="select" id="lang">
                      <option value="ENG_US">English</option>
                      <option value="CHS_CN">簡體中文</option>
                      <option value="CHT_CN">繁體中文</option>
                      <option value="FRE_FR">Français</option>
                      <option value="GER_DE">Deutsch</option>
                      <option value="IND_ID">Indonesia</option>
                      <option value="ITA_IT">Italiano</option>
                      <option value="JPN_JP">日本語</option>
                      <option value="KOR_KR">한국어</option>
                      <option value="POR_BR">Português</option>
                      <option value="RUS_RU">русский</option>
                      <option value="SPA_XM">Español</option>
                      <option value="THA_TH">ไทย</option>
                      <option value="TUR_TR">Türkçe</option>
                    </Form.Control>
                  </InputGroup>
                  <Form.Group>
                    <Button variant="primary" id="getPlayer">Go!</Button>
                  </Form.Group>
                </Form>
              </div>
            </section>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <br />
            <section id="playerName">
              {
                // playerData && playerData.map((player, index) => (
                //   console.log(`
                //     playerData
                //     index: ${index}
                //     player.name: ${player.name}
                //     player.stats: ${JSON.stringify(player.stats)}Array of Objects
                //     Roster: ${JSON.stringify(player.roster)} Array of Objects
                //     Arena: ${JSON.stringify(player.arena)}
                //     Selected Portrait: ${JSON.stringify(player.portraits.selected)}
                //     Grand Arena: ${JSON.stringify(player.grandArena)}
                //   `),
                //   setPlayerStats(player.stats),
                //   setPlayerRoster(player.roster),
                //   setPlayerArena(player.arena),
                //   setPlayerPortraits(player.portraits.selected),
                //   setPlayerGrandArena(player.grandArena),
                //   setPlayerTitles(player.titles),
                //   setArenaCharacter(player.arena.char),
                //   setArenaShip(player.arena.ship),
                //   setArenaSquad(player.arena.ship.squad),
                //
                //
                //   <p key={player.name}>Player Name: {JSON.stringify(player.name)}</p>,
                //   <p key={player.guildRefId}>Guild: {JSON.stringify(player.guildName)}</p>,
                //   <p>Selected Title: {JSON.stringify(playerTitles.selected)}</p>,
                //   <p>Squad Arena Rank: {JSON.stringify(arenaCharacter.rank)}</p>,
                //   <p>Squad Arena Team: {JSON.stringify(arenaCharacter.squad)}</p>,
                //   <p>Ship Arena Rank: {JSON.stringify(arenaShip.rank)}</p>,
                //   <p>Ship Arena Team: {JSON.stringify(arenaShip.squad)}</p>
                // ))
              }
            </section>
            <div>
              <span>Access Token: {accessToken}</span>

              <hr />
              <span>Has error: {JSON.stringify(hasError)}</span>
              <div>
                <Button onClick={onClick}>Get Player Profile</Button>
              </div>
            </div>
          </Col>
        </Row>

    </Jumbotron>
  );
}

export default Header;
