import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import Apps from './Apps';
import Debug from './Debug';
import Bulbs from './Bulbs';
import Pipsta from './Pipsta';
import Plug from './Plug';
import Notify from './Notify';

import { IndexRedirect, Router, Route, hashHistory } from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';


export default class Root extends Component {
  
  render(){
	
    const { store } = this.props;
    const history = syncHistoryWithStore(hashHistory, store);
 
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
              <Route path="/" component={App}>
                <Route path="app" component={Apps}/>
                <Route path="debugger" component={Debug}/>
                <Route path="bulbsout" component={Bulbs}/>
                <Route path="pipstaprint" component={Pipsta}/>
                <Route path="plugout" component={Plug}/>
                <Route path="notify" component={Notify}/>
                <IndexRedirect to="app" />
                <Route path="*" component={Apps}/>
              </Route>
          </Router>
        </div>
      </Provider>
    );
  }
}