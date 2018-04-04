import Immutable from 'immutable'

export const CUSTOMIZE_SECTION = 'user/CUSTOMIZE_SECTION'
export const SAVE_PROFILE_REQUEST = 'user/SAVE_PROFILE_REQUEST'

const initialState = {
    defaultSection: "home",
    dashsets: [
        {
            id: 1,
            name: "Best Dashset"
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
