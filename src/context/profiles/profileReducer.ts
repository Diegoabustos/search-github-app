import {
    ENTER_PROFILE,
    VALUE_PROFILE
} from '../../types';

export default (state: any, action:any) => {
    switch(action.type) {
        case ENTER_PROFILE:
            return {
                ...state,
                enterProfile: action.payload
            }
        case VALUE_PROFILE:
            return {
                ...state,
                valueProfile: action.payload
            }
        default:
            return state;
    }
}