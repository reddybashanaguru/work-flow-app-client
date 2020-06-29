import React from 'react';
import './App.css';
import LoginComponent from './login';
import HeaderComponent from './header-component';

function App() {
  return (
    <div className="container-fluid">
      <HeaderComponent />
      <LoginComponent />
    </div>
  );
}

export default App;
