import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import Belief from '../belief/Belief';
import './App.css';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/what-bahais-believe' component={Belief} />
        </Switch>
      </>
    </Router>
  );
}
