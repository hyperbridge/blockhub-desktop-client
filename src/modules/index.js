import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import native from './native'
import account from './account'
import network from './network'
import site from './site'
import subscriptions from './subscriptions'

export default {
    router,
    native,
    account,
    network,
    site,
    subscriptions
}
