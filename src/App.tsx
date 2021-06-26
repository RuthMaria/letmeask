import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home';
import {AuthContextProvider} from './contexts/AuthContext';
import { Room } from './pages/Room';

import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/rooms/new" component={NewRoom}/>
          <Route path="/rooms/:id" component={Room}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
