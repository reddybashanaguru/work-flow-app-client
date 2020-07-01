import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginComponent from './routes/login/';
import HeaderComponent from './header-component';
import Flowlist from './flowlist';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <HeaderComponent />
        <Route exact path="/" component={LoginComponent} />
        <Route exact path="/login" component={LoginComponent} />
        <Route exact path="/flow/list" component={Flowlist} />
        {/* <LoginComponent /> */}
      </div>
    </Router>

  );
}

export default App;
