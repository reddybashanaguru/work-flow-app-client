import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginComponent from './routes/login/';
import HeaderComponent from './components/header/';
import Flowlist from './routes/workflow-list/';
import CreateWorkflowComponent from './routes/create-workflow/';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <HeaderComponent />
        <Route exact path="/" component={LoginComponent} />
        <Route exact path="/login" component={LoginComponent} />
        <Route exact path="/flow" component={Flowlist} />
        <Route exact path="/flow/create" component={CreateWorkflowComponent} />
        <Route exact path="/flow/edit/:id" component={CreateWorkflowComponent} />
        {/* <LoginComponent /> */}
      </div>
    </Router>

  );
}

export default App;
