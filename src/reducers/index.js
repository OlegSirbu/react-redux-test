import {combineReducers} from 'redux';
import flights from './flightsReducer';
import companies from './companyReducer';

const rootReducer = combineReducers({
  flights,
  companies
});

export default rootReducer;