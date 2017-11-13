import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Skills from './containers/Skills';
import Portfolios from './containers/Portfolios';
import Contacts from './containers/Contact';

const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/skills" component={Skills} />
    <Route path="/portfolio" component={Portfolios} />
    <Route path="/contact" component={Contacts} />
  </Switch>
);

export default MainRoutes;