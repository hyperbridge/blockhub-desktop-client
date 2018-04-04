import Immutable from 'immutable'

import Blockhub from 'blockhub-protocol'

import db from '../app/db/db'

export const APP_LISTING_REQUEST = 'network/APP_LISTING_REQUEST'
export const APP_LISTING_RESPONSE = 'network/APP_LISTING_RESPONSE'
export const APP_DETAIL_REQUEST = 'network/APP_DETAIL_REQUEST'
export const APP_DETAIL_RESPONSE = 'network/APP_DETAIL_RESPONSE'
export const VOTE_FOR_APP_REQUEST = 'network/VOTE_FOR_APP_REQUEST'
export const VOTE_FOR_APP_RESPONSE = 'network/VOTE_FOR_APP_RESPONSE'
export const SUBMIT_APP_FOR_REVIEW_REQUEST = 'network/SUBMIT_APP_FOR_REVIEW_REQUEST'
export const SUBMIT_APP_FOR_REVIEW_RESPONSE = 'network/SUBMIT_APP_FOR_REVIEW_RESPONSE'
export const SETUP_CONTRACTS_REQUEST = 'network/SETUP_CONTRACTS_REQUEST'
export const SETUP_CONTRACTS_RESPONSE = 'network/SETUP_CONTRACTS_RESPONSE'
export const FETCH_CONTRACT_META_RESPONSE = 'network/FETCH_CONTRACT_META_RESPONSE'


const network = {
    ropsten: {
        marketplaceContract: "0x7ed7885cbc32668242a53b806ce676980ebb084e",
        userFromAddress: "0x66fb0ff9a23e90f3f205a406fd3253532919fb69",
        userToAddress: ""
    },
    local: {
        marketplaceContract: "0x8cdaf0cd259887258bc13a92c0a6da92698644c0",
        userFromAddress: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
        userToAddress: ""
    }
}

const currentNetwork = "local"

const initialApp = {
    name: null
}

const initialState = {
    contractAddress: null,
    apps: {
        all: [],
        upcoming: [],
        newTrending: [],
        topSellers: [],
        specials: []
    },
    games: {
        all: [],
        upcoming: [],
        newTrending: [],
        topSellers: [],
        specials: []
    },
    selectedApp: null
}

initialState.apps = {
    all: db.marketplace.apps.find({ 'republicTags': { '$contains': ['app'] } }),
    upcoming: db.marketplace.apps.find({ 'republicTags': { '$contains': ['app', 'upcoming'] } }),
    newTrending: db.marketplace.apps.find({ 'republicTags': { '$contains': ['app', 'newTrending'] } }),
    topSellers: db.marketplace.apps.find({ 'republicTags': { '$contains': ['app', 'topSellers'] } }),
    specials: db.marketplace.apps.find({ 'republicTags': { '$contains': ['app', 'specials'] } })
}

initialState.games = {
    all: db.marketplace.apps.find({ 'republicTags': { '$contains': ['game'] } }),
    upcoming: db.marketplace.apps.find({ 'republicTags': { '$contains': ['upcoming', 'game'] } }),
    newTrending: db.marketplace.apps.find({ 'republicTags': { '$contains': ['newTrending', 'game'] } }),
    topSellers: db.marketplace.apps.find({ 'republicTags': { '$contains': ['topSellers', 'game'] } }),
    specials: db.marketplace.apps.find({ 'republicTags': { '$contains': ['specials', 'game'] } })
}

// var specials = db.marketplace.apps.addDynamicView('specials')
// specials.applyFind({ 'republicTags': { '$contains': 'specials' } })
// specials.applySimpleSort('id')

// initialState.apps.specials = specials.data()

export default (state = initialState, action) => {
    console.log(action)

    switch (action.type) {
        case APP_LISTING_RESPONSE:
            return { ...state, apps: { ...state.apps, all: action.apps } }

        case SETUP_CONTRACTS_RESPONSE:
            return { ...state, contractAddress: action.contractAddress }

        case APP_DETAIL_RESPONSE:
            return { ...state, selectedApp: action.app }

        default:
            return state
    }
}


let contractMeta = null
let contractAddress = null

export const fetchContractMeta = async () => {
    if (contractMeta)
        return contractMeta

    return await new Promise((resolve) => {
        fetch("/contracts/Marketplace.json").then((data) => {
            contractMeta = data.json()

            resolve(contractMeta)
        })
    })
}



export const getApp = (id) => {
    console.log("Attempting to get app by ID: ", id)

    return dispatch => {
        fetchContractMeta().then((contractMeta) => {
            Blockhub.Ethereum.Models.Marketplace.init(contractMeta, contractAddress, network[currentNetwork].userFromAddress)

            // let app = db.marketplace.apps.findOne({ id: id })

            // if (app) {
            //     dispatch({
            //         type: APP_DETAIL_RESPONSE,
            //         app: app
            //     })
            // }

            Blockhub.Ethereum.Models.Marketplace.getApp(id).then((res) => {
                const app = {
                    name: res.name,
                    author: {
                        id: res.appOwner
                    },
                    type: "game",
                    rating: res.votes,
                    downloads: 100,
                    category: res.category,
                    files: res.files,
                    authorTags: ["demo"],
                    repubicTags: ["demo"]
                }

                dispatch({
                    type: APP_DETAIL_RESPONSE,
                    app: app
                })
            })
        })

        return {
            type: APP_DETAIL_REQUEST
        }
    }
}

export const setupContracts = () => {
    return dispatch => {
        fetchContractMeta().then((contractMeta) => {
            // dispatch({
            //     type: FETCH_CONTRACT_META_RESPONSE,
            //     contractMeta: contractMeta
            // })

            const contract = new window.web3.eth.Contract(contractMeta.abi)

            contract.deploy({
                data: contractMeta.bytecode
            }).send({
                from: network[currentNetwork].userFromAddress,
                gas: 4500000
            }).then((res) => {
                contractAddress = res._address

                dispatch({
                    type: SETUP_CONTRACTS_RESPONSE,
                    contractAddress: contractAddress
                })
            })
        })

        return {
            type: SETUP_CONTRACTS_REQUEST
        }
    }
}


// get apps by tag topSellers upcoming newTrending 

export const getAppListing = () => {
    console.log("Attempting to get app listing by filters: ", [null])

    return dispatch => {
        fetchContractMeta().then((contractMeta) => {
            Blockhub.Ethereum.Models.Marketplace.init(contractMeta, contractAddress, network[currentNetwork].userFromAddress)

            // let apps = null

            // if (apps) {
            //     dispatch({
            //         type: APP_LISTING_RESPONSE,
            //         apps: apps
            //     })
            //     return
            // }

            Blockhub.Ethereum.Models.Marketplace.getAppListing(0, 0).then((res) => {
                debugger
                const apps = res
                dispatch({
                    type: APP_LISTING_RESPONSE,
                    apps: apps
                })
            })
        })

        return {
            type: APP_LISTING_REQUEST
        }
    }
}


export const voteForApp = (id, version, vote) => {
    return dispatch => {
        fetchContractMeta().then((contractMeta) => {
            Blockhub.Ethereum.Models.Marketplace.init(contractMeta, contractAddress, network[currentNetwork].userFromAddress)

            Blockhub.Ethereum.Models.Marketplace.voteForApp(id, version, vote).then(() => {
                dispatch({
                    type: VOTE_FOR_APP_RESPONSE
                })
            })
        })

        return {
            type: VOTE_FOR_APP_REQUEST
        }
    }
}


export const submitApp = (name, version, category, files, checksum, permissions) => {
    return dispatch => {
        fetchContractMeta().then((contractMeta) => {
            Blockhub.Ethereum.Models.Marketplace.init(contractMeta, contractAddress, network[currentNetwork].userFromAddress)

            Blockhub.Ethereum.Models.Marketplace.submitAppForReview(name, version, category, files, checksum, permissions).then(() => {
                dispatch({
                    type: SUBMIT_APP_FOR_REVIEW_RESPONSE
                })
            })
        })

        return {
            type: SUBMIT_APP_FOR_REVIEW_REQUEST
        }
    }
}