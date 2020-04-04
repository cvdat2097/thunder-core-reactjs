import { combineReducers } from 'redux';

import subState from './sub-state/reducer';
import auth from './auth/reducer';

export default combineReducers({ subState, auth });
