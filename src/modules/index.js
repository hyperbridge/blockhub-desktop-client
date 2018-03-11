import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import native from './native'
import account from './account'
import subscriptions from './subscriptions'

export default {
    router,
    native,
    account,
    subscriptions
}
