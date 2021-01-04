import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

/** Nav tabs - THIS LIST SHOULD CONTAIN ALL THE PRIMARY KEYS FROM squads.json - Auto-activate Sith tab */
const NavBar = ({}) => {
  <Nav variant="pills">

    {/**<Nav.Item>
      <Nav.Link eventKey="fetchPlayer" onClick={this.fetchPlayer}>Players</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="zetas" onClick={() => this.getZetaRecommendations()}>Zeta Recommendations</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="guild" onClick={() => this.fetchGuild()}>
        Guild
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="battles" onClick={() => this.getCampaignBattles()}>
        getCampaignBattles
      </Nav.Link>
    </Nav.Item>*/}

    {/**<Nav.Item className="active">
      <Nav.Link onClick={() => this.getCampaignBattles()} eventKey="playerOverview">Player Overview</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={() => this.getCampaignBattles()} eventKey="">Events</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#rancor" aria-controls="rancor" onClick={() => this.getCampaignBattles()} eventKey="">Heroic Rancor</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#aat" aria-controls="aat" onClick={() => this.getCampaignBattles()} eventKey="">Normal Tank</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#haat" aria-controls="haat" onClick={() => this.getCampaignBattles()} eventKey="">Heroic Tank</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#sith" aria-controls="sith" onClick={() => this.getCampaignBattles()} eventKey="">Sith raid</Nav.Link>
    </Nav.Item>*/}
    {/**<Nav.Item><Nav.Link href="#twdefense" aria-controls="twdefense" onClick={() => this.getCampaignBattles()} eventKey="">Territory War Defense</Nav.Link></Nav.Item>*/}
    {/**<Nav.Item>
      <Nav.Link href="#lstb" aria-controls="lstb" onClick={() => this.getCampaignBattles()} eventKey="">Hoth LSTB</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#dstb" aria-controls="dstb" onClick={() => this.getCampaignBattles()} eventKey="">Hoth DSTB</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#geonosistbds" aria-controls="geonosistbds" onClick={() => this.getCampaignBattles()} eventKey="">Geonosis DSTB</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#geonosistbls" aria-controls="geonosistbls" onClick={() => this.getCampaignBattles()} eventKey="">Geonosis LSTB</Nav.Link>
    </Nav.Item>*/}
    {/**<Nav.Item role="presentation"><Nav.Link href="#gsummary" aria-controls="gsummary" onClick={() => this.getCampaignBattles()} eventKey="">Guild Overview</Nav.Link></Nav.Item>*/}

  </Nav>
}

export default NavBar;
