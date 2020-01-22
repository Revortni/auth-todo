import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './components/Routes';
import './components/styles/App.css';

function App() {
  return (
    <div className='app'>
      <Router>
        <Route path='/' component={Routes} />
      </Router>
    </div>
  );
}

export default App;
