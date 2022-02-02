import React, {Component} from 'react';
import {
  NavLink,
  useMatch
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

import './NavBar.css';

function TabNavBar({ label, to, activeOnlyWhenExact }) {
  let match = useMatch({
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
        return (
          <>
            <Nav variant="tabs">
              <TabNavBar activeOnlyWhenExact={true} to="/psummary" label="Player Summary" />
              <TabNavBar activeOnlyWhenExact={true} to="/events" label="Events" />
              <TabNavBar activeOnlyWhenExact={true} to="/characters" label="Characters" />
              <TabNavBar activeOnlyWhenExact={true} to="/checklist" label="Checklist" />
              <TabNavBar activeOnlyWhenExact={true} to="/player-profile" label="Player Profile" />
            </Nav>
          </>
        );
    }
}


export default NavBar;
