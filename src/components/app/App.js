import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import './App.css';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </>
    </Router>
  );
}
