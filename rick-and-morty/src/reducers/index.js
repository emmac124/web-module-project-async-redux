import { CHARACTERS_SUCCESS, /*GET_CHARACTER_INFO*/ } from './../actions/index';

const initialState = {
    characters: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHARACTERS_SUCCESS: 
            return {
                ...state,
                characters: action.payload
            }
        // case GET_CHARACTER_INFO:
        //     return {
        //         ...state,
        //         characters: state.characters
        //     }
        default: 
            return state;
    }
}