import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import tracks from './tracks';
import event from './event';
import partners from './partners';
import sections from './sections';

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  tracks: tracks,
  event: event,
  partners: partners,
  sections: sections
});

export default reducers;
