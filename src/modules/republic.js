import Immutable from 'immutable'

export const APP_LISTING_REQUEST = 'network/APP_LISTING_REQUEST'

const initialDelegate = {
    name: null,
    address: null,
    industry: null
}

const initialState = {
    council: {
        delegates: []
    },
    elections: []
}

initialState.council.delegates = [
    {
        name: 'Hyperbridge',
        address: "0x0",
        industry: "Technology"
    }
]

initialState.elections = [
    {
        nominees: []
    }
]

initialState.apps = [
    {
        name: 'Battlerite',
        type: 'game',
        downloads: 4000,
        owner: '0x0'
    },
    {
        name: 'Fortnite',
        type: 'game',
        downloads: 4000,
        owner: '0x0'
    }
]

export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        default:
            return state
    }
}

export const getAppListing = (dispatch) => {

    return {
        type: APP_LISTING_REQUEST
    }
}
