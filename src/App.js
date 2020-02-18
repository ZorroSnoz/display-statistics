import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Main from './components/main/main';
import Charts from './components/charts/charts';
import StatsContainer from './components/stats/stats-container';

let App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' exact render={() => <Main />} />
        <Route path='/stats' render={() => <StatsContainer />} />
        <Route path='/user' render={() =>  <Charts />} />      
      </div>
    </BrowserRouter>
  );
}



export default App;
