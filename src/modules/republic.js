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
    pastElections: []
}

initialState.council.delegates = [
    {
        name: 'Hyperbridge',
        address: "0x0",
        industry: "Technology"
    }
]

initialState.currentElections = [
    {
        title: '2018 Election',
        description: 'We intend to do things. Learn more here: https://hyperbridge.org/election2018',
        startAt: '03-03-1987',
        endAt: '03-03-2008',
        nominees: [
            {
                address: "0x0",
                name: "Microsoft"
            },
            {
                address: "0x0",
                name: "Google"
            }
        ]
    }
]

initialState.pastElections = [
    {
        startAt: '03-03-1987',
        endAt: '03-03-2008',
        nominees: [
            {
                address: "0x0",
                name: "Microsoft"
            },
            {
                address: "0x0",
                name: "Google"
            }
        ],
        winners: [
            {
                address: "0x0",
                name: "Google"
            }
        ]
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
