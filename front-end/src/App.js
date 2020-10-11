import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import Assessment from './components/Assessment/Assessment';
import Category from './components/Category/Category';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <HashRouter>
      <Navigation></Navigation>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/category" exact={true} component={Category}></Route>
      <Route path="/assessment" exact={true} component={Assessment}></Route>   
    </HashRouter>
  );
}

export default App;
