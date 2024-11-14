// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Wallet from './pages/Wallet';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import DeFi from './pages/DeFi';
import Help from './pages/Help';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/profile" component={Profile} />
          <Route path="/settings" component={Settings} />
          <Route path="/defi" component={DeFi} />
          <Route path="/help" component={Help} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
