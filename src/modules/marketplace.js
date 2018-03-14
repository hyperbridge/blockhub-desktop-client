import Immutable from 'immutable'

import db from '../app/db/db'

export const APP_LISTING_REQUEST = 'network/APP_LISTING_REQUEST'


const initialApp = {
    name: null
}

const initialState = {
    apps: {
        upcoming: [],
        newTrending: [],
        topSellers: [],
        specials: []
    },
    selectedApp: {
        title: null,
        id: null
    }
}

initialState.apps = {
    upcoming: [],
    newTrending: [],
    topSellers: [],
    specials: []
}


var games = db.apps.addDynamicView('games')
games.applyFind({ id: { '$gt': 2 } })
games.applySimpleSort('id')

initialState.apps.specials = games.data()


initialState.selectedApp = {
    title: "World of Warcraft",
    id: "29dsa90-asdsad9adas-asdadas-asdasd"
}

export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        default:
            return state
    }
}

// get apps by tag topSellers upcoming newTrending 

export const getAppListing = (dispatch) => {

    return {
        type: APP_LISTING_REQUEST
    }
}
