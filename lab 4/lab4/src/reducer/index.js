import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import {githubReducer} from './githubReducer'
import { combineReducers, createStore, applyMiddleware } from 'redux'


export const rootReducer = combineReducers({data: githubReducer})
export const store = createStore(rootReducer, applyMiddleware(thunk,logger))