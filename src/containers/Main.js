import React, {Fragment} from "react";
import Loadable from 'react-loadable';
import { Cookies } from 'react-cookie';
import {
  Route, Redirect, BrowserRouter as Router, Switch
} from "react-router-dom";

const LoadingComponent = () => null;

const Dashboard = Loadable({
    loader: () => import('../components/Dashboard/Dashboard'),
    loading: LoadingComponent
});

const PlayerSummary = Loadable({
    loader: () => import('../containers/PlayerSummary/PlayerSummary'),
    loading: LoadingComponent
});

const Events = Loadable({
    loader: () => import('../containers/Events/Events'),
    loading: LoadingComponent
});

const PlayerProfile = Loadable({
    loader: () => import('../containers/PlayerProfile/PlayerProfile'),
    loading: LoadingComponent
});

const Checklist = Loadable({
    loader: () => import('../containers/Checklist/Checklist'),
    loading: LoadingComponent
});

const Characters = Loadable({
    loader: () => import('../containers/Characters/Characters'),
    loading: LoadingComponent
});

const CharacterProfile = Loadable({
    loader: () => import('../containers/CharacterProfile/CharacterProfile'),
    loading: LoadingComponent
});

function PrivateRoute ({component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => localStorage.getItem('accessToken')
                ? <Component {...props} />
                : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
        />
    )
}

const Routes = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/psummary" component={PlayerSummary} />
        <Route path="/events" component={Events} />
        <Route path="/player-profile" component={PlayerProfile} />
        <Route path="/checklist" component={Checklist} />
        <Route path="/characters" component={Characters} />
        <Route path="/character-profile/:id" component={CharacterProfile} />
      </Switch>
  </Router>
);

const Main = () => (
  <Routes />
);

export default Main;
