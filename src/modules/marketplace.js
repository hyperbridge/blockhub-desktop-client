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
    games: {
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
    upcoming: db.marketplace.apps.find({ 'republicTags': { '$contains': 'upcoming' } }),
    newTrending: db.marketplace.apps.find({ 'republicTags': { '$contains': 'newTrending' } }),
    topSellers: db.marketplace.apps.find({ 'republicTags': { '$contains': 'topSellers' } }),
    specials: db.marketplace.apps.find({ 'republicTags': { '$contains': 'specials' } })
}

initialState.games = {
    upcoming: db.marketplace.apps.find({ 'republicTags': { '$contains': ['upcoming', 'game'] } }),
    newTrending: db.marketplace.apps.find({ 'republicTags': { '$contains': ['newTrending', 'game'] } }),
    topSellers: db.marketplace.apps.find({ 'republicTags': { '$contains': ['topSellers', 'game'] } }),
    specials: db.marketplace.apps.find({ 'republicTags': { '$contains': ['specials', 'game'] } })
}

// var specials = db.marketplace.apps.addDynamicView('specials')
// specials.applyFind({ 'republicTags': { '$contains': 'specials' } })
// specials.applySimpleSort('id')

// initialState.apps.specials = specials.data()


initialState.selectedApp = initialState.apps.specials[0]

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

export const getApp = (id) => {
    return db.marketplace.apps.findOne({ id: id })
}
