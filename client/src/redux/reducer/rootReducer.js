import {combineReducers} from 'redux'
import { coutReducer } from './userReducer'

export const rootReducer=combineReducers({
    coutReducer:coutReducer
})