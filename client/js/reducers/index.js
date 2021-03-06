import { combineReducers } from 'redux';
import apps from './apps';
import network from './network';
import screen from './screen';
import layout from './layout';
import debug from './debug';
import bulbs from './bulbs';
import pipsta from './pipsta';
import uibuilder from './uibuilder';

import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  apps,
  layout,
  network,
  screen,
  debug,
  bulbs,
  pipsta,
  uibuilder,
  routing: routerReducer,
});

export default rootReducer;
