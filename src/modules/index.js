import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import native from './native'
import account from './account'
import network from './network'
import marketplace from './marketplace'
import republic from './republic'
import dataforce from './dataforce'
import site from './site'
import subscriptions from './subscriptions'

export default {
    router,
    native,
    account,
    network,
    marketplace,
    republic,
    dataforce,
    site,
    subscriptions
}
