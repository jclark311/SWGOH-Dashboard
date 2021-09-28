import React, {Component} from 'react';
import {
  NavLink,
  useRouteMatch,
  withRouter
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import './NavBar.css';

function TabNavBar({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <Nav.Item className={match ? "active" : ""}>
      <NavLink to={to}>{label}</NavLink>
    </Nav.Item>
  );
}

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

    render() {
      const { location } = this.props;
        return (
          <>
            <Nav variant="tabs">
              <TabNavBar activeOnlyWhenExact={true} to="/psummary" label="Player Summary" />
              <TabNavBar activeOnlyWhenExact={true} to="/events" label="Events" />
              <TabNavBar activeOnlyWhenExact={true} to="/rancor" label="Heroic Rancor" />
              <TabNavBar activeOnlyWhenExact={true} to="/aat" label="Normal Tank" />
              <TabNavBar activeOnlyWhenExact={true} to="/haat" label="Heroic Tank" />
              <TabNavBar activeOnlyWhenExact={true} to="/sith" label="Sith Raid" />
              <TabNavBar activeOnlyWhenExact={true} to="/lstb" label="Hoth LSTB" />
              <TabNavBar activeOnlyWhenExact={true} to="/dstb" label="Hoth DSTB" />
              <TabNavBar activeOnlyWhenExact={true} to="/geonosisdstb" label="Geonosis DSTB" />
              <TabNavBar activeOnlyWhenExact={true} to="/geonosislstb" label="Geonosis LSTB" />
            </Nav>
          </>
        );
    }
}


export default withRouter(NavBar);
