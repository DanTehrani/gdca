import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Top from './Top.js';
import FAQ from './FAQ.js';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Top />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
