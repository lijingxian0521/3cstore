import React, {Component} from 'react';
import '../style/common.less'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { ConnectedRouter} from 'react-router-redux'
import createHashHistory from 'history/createHashHistory'
import Ads from "./Ads/index";
import Home from "./Home/index";
import List from "./List/index";
import Discovery from "./Discovery/index";
import Cart from "./Cart/index";
import Profile from "./Profile/index";
import Detail from "./Detail/index";
import Tab from "../components/Tab/index";

const history = createHashHistory();

export default class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Wrap>

            </Wrap>
            {/*<Route exact path="/" component={Ads}/>*/}
            <Route exact path="/home" component={Home}/>
            <Route exact path="/list" component={List}/>
            <Route exact path="/discovery" component={Discovery}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/detail" component={Detail}/>
          </Switch>
          <Tab/>
        </div>
      </ConnectedRouter>
    )
  }
}