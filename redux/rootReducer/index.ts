import { combineReducers } from 'redux'
import formReducer from '../home/reducers/formReducer'

// COMBINED REDUCERS
const reducers = {
  forms: formReducer,
}

export default combineReducers(reducers)