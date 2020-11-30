import {
    ENTER_PROFILE,
    VALUE_PROFILE,
    INFO_USER,
    INFO_REPOS
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
        case INFO_USER:
            return {
                ...state,
                profileInfo: action.payload
            }
        case INFO_REPOS:
            return {
                ...state,
                repositoriesInfo: action.payload
            }
        default:
            return state;
    }
}