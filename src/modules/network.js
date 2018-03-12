import Immutable from 'immutable'

export const CONNECT = 'network/CONNECT'

const initialState = {
    connected: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export const connect = () => {
    return {
        connected: true,
        type: CONNECT
    }
}
