import { combineReducers } from 'redux'
import authReducer from './AuthReduser'
export default combineReducers({
    authReducer: authReducer
})