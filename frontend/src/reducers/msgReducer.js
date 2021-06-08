import { GET_MSG } from '../actions/types';

const initialState = {};

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_MSG:
            return action.payload;
        default: 
            return state;
    }
}