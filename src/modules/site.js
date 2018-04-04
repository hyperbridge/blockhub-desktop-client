import Immutable from 'immutable'

export const CHANGE_SECTION = 'site/CHANGE_SECTION'
export const CONNECT = 'site/CONNECT'

const initialState = {
    section: "home"
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SECTION:
            return { ...state, section: action.section }
        default:
            return state
    }
}

export const changeSection = (section) => {
    return {
        section: section,
        type: CONNECT
    }
}
