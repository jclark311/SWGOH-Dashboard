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

const HeroicRancor = Loadable({
  loader: () => import('../containers/HeroicRancor/HeroicRancor'),
  loading: LoadingComponent
});

const NormalTank = Loadable({
    loader: () => import('../containers/NormalTank/NormalTank'),
    loading: LoadingComponent
});

const HeroicTank = Loadable({
    loader: () => import('../containers/HeroicTank/HeroicTank'),
    loading: LoadingComponent
});

const SithRaid = Loadable({
    loader: () => import('../containers/SithRaid/SithRaid'),
    loading: LoadingComponent
});

const HothLSTB = Loadable({
    loader: () => import('../containers/HothLSTB/HothLSTB'),
    loading: LoadingComponent
});

const HothDSTB = Loadable({
    loader: () => import('../containers/HothDSTB/HothDSTB'), //DeploymentReview/DeploymentReview
    loading: LoadingComponent
});

const GeonosisDSTB = Loadable({
    loader: () => import('../containers/GeonosisDSTB/GeonosisDSTB'), //DeploymentReview/DeploymentReview
    loading: LoadingComponent
});

const GeonosisLSTB = Loadable({
    loader: () => import('./GeonosisLSTB/GeonosisLSTB'), //DeploymentReview/DeploymentReview
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
        <Route path="/character-profile" component={CharacterProfile} />
        <Route path="/rancor" component={HeroicRancor} />
        <Route path="/aat" component={NormalTank} />
        <Route path="/haat" component={HeroicTank} />
        <Route path="/sith" component={SithRaid} />
        <Route path="/lstb" component={HothLSTB} />
        <Route path="/dstb" component={HothDSTB} />
        <Route path="/geonosisdstb" component={GeonosisDSTB} />
        <Route path="/geonosislstb" component={GeonosisLSTB} />
      </Switch>
  </Router>
);

const Main = () => (
  <Routes />
);

export default Main;
