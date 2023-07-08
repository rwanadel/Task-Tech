import { combineReducers } from 'redux'
import authReducer from './AuthReduser'
import topusersReducer from './topusersReducer'
import relatesposts from './relatedpostsReducer'
import currtenuserReducer from './currtenuserReducer'
import allusersReducer from './allusersReducer'

export default combineReducers({
    authReducer: authReducer,
    topusersReducer:topusersReducer,
    relatesposts :relatesposts,
    currtenuserReducer:currtenuserReducer,
    allusersReducer:allusersReducer,
    
})