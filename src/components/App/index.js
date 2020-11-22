import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from '../Header';
import Home from '../pages/Home';
import Upload from '../pages/Upload';
import Log from '../pages/Log';
import Gallery from '../pages/Gallery';
import NotFound from '../pages/NotFound';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/log" component={Log} />
          <Route exact path="/gallery" component={Gallery} />
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}