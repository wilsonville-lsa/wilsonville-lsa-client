import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Header from '../header/Header';
import Home from '../home/Home';
import Belief from '../belief/Belief';
import Gatherings from '../gatherings/Gatherings';
import Contact from '../../containers/contact/Contact';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/what-bahais-believe' component={Belief} />
          <Route exact path='/gatherings' component={Gatherings} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </>
    </Router>
  );
}
