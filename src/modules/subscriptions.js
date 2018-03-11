import Immutable from 'immutable'
import { SUBSCRIBE } from '../constants/action-types'

const initialState = Immutable.Map({
})

export default function reduce(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}