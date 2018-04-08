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
    currentElections: [],
    pastElections: [],
    currentCitizen: {
        name: "eric",
        address: "0x0",
        apps: [
            {
                id: "0asdasd0a-adsasda-asdasd9",
                name: "blockhub",
                link: "http://something/blockhub.exe"
            }
        ]
    }
}

initialState.council.delegates = [
    {
        name: 'Hyperbridge',
        address: "0x0",
        industry: "Technology"
    }
]

initialState.currentElections = [
]

initialState.pastElections = [
]

initialState.apps = [
]

export default (state = initialState, action) => {
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
