import Immutable from 'immutable'

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
    specials: [
        {
            id: 'sadas3asdasd-asd34asd3-adsas3',
            name: 'Battlerite',
            type: 'game',
            downloads: 4000,
            owner: '0x0',
            author: {
                id: '0x0'
            }
        },
        {
            id: 'vsdvs-asd34asfdssd3-ad434sas3',
            name: 'Fortnite',
            type: 'game',
            downloads: 4000,
            owner: '0x0',
            author: {
                id: '0x0'
            }
        }
    ]
}


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
