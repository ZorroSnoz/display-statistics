import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Main from './components/main/main';
import Stats from './components/stats/stats';
import Charts from './components/charts/charts';

let App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' exact render={() => <Main />} />
        <Route path='/stats' render={() => <Stats />} />
        <Route path='/charts' render={() =>  <Charts />} />      
      </div>
    </BrowserRouter>
  );
}

export default App;
