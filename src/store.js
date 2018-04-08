import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createBrowserHistory from 'history/createBrowserHistory'
import persistState from 'redux-localstorage'

export const history = createBrowserHistory()
export const initialState = {}
export const enhancers = [
    //persistState()
]
export const middleware = [
    thunk,
    routerMiddleware(history)
]