import React, {Fragment} from "react";
import Dashboard from '../components/Dashboard/Dashboard';

import PlayerSummary from '../containers/PlayerSummary/PlayerSummary';

import Events from '../containers/Events/Events';

import PlayerProfile from '../containers/PlayerProfile/PlayerProfile';

import Checklist from '../containers/Checklist/Checklist';

import Characters from '../containers/Characters/Characters';

import CharacterProfile from '../containers/CharacterProfile/CharacterProfile';

import Loadable from 'react-loadable';
import { Cookies } from 'react-cookie';
import {
  Route, Routes, BrowserRouter
} from "react-router-dom";

const LoadingComponent = () => null;

// const Dashboard = Loadable({
//     loader: () => import('../components/Dashboard/Dashboard'),
//     loading: LoadingComponent
// });
//
// const PlayerSummary = Loadable({
//     loader: () => import('../containers/PlayerSummary/PlayerSummary'),
//     loading: LoadingComponent
// });
//
// const Events = Loadable({
//     loader: () => import('../containers/Events/Events'),
//     loading: LoadingComponent
// });
//
// const PlayerProfile = Loadable({
//     loader: () => import('../containers/PlayerProfile/PlayerProfile'),
//     loading: LoadingComponent
// });
//
// const Checklist = Loadable({
//     loader: () => import('../containers/Checklist/Checklist'),
//     loading: LoadingComponent
// });
//
// const Characters = Loadable({
//     loader: () => import('../containers/Characters/Characters'),
//     loading: LoadingComponent
// });
//
// const CharacterProfile = Loadable({
//     loader: () => import('../containers/CharacterProfile/CharacterProfile'),
//     loading: LoadingComponent
// });

const Main = () => (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/psummary" element={<PlayerSummary />} />
        <Route path="/events" element={<Events />} />
        <Route path="/player-profile" element={<PlayerProfile />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/character-profile/:id" element={<CharacterProfile />} />
      </Routes>
  </BrowserRouter>
);

export default Main;
