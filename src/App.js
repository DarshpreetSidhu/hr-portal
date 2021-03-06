import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import LoginPage from './pages/login-page';
import SignupPage from './pages/signup-page';
import HomePage from './pages/home-page';
import PageNotFound from './pages/page-not-found';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage}></Route>
        <Route path="/signup" component={SignupPage}></Route>
        <Route path="/home" component={HomePage}></Route>
        <Route component={PageNotFound}></Route>


        
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;