import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import loginReducer from './loginReducer';
import userInfoReducer from './userInfoReducer';
import userIdReducer from './userIdReducer';

export default combineReducers({
 simple: simpleReducer,
 loginDetails: loginReducer,
 userInformation: userInfoReducer,
 userId: userIdReducer
});
