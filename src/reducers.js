import { combineReducers } from 'redux'
import homeReducer from './Home/reducer';
import loginReducer from "./Login/reducer"


const rootReducer = combineReducers({
  home: homeReducer,
  login: loginReducer,
})

export default rootReducer;