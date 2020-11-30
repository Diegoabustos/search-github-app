import * as React from 'react';
import profileContext from './profileContext';
import profileReducer from './profileReducer';
import {
    ENTER_PROFILE,
    VALUE_PROFILE
} from '../../types';


const ProfileState = (props: any) => {
    const initialState = {
        enterProfile: '',
        valueProfile: ''
    };

    // Dispatch to execute the actions
    const [ state, dispatch ] = React.useReducer(profileReducer, initialState);

    // funtions series of the search bar
    const enterProfileFn = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: ENTER_PROFILE,
            payload: e,
        })
    }
    
    const profileValueFn = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: VALUE_PROFILE,
            payload: e,
        })
    }

    return (
        <profileContext.Provider
          value={{
            enterProfile: state.enterProfile,
            valueProfile: state.valueProfile,
            enterProfileFn,
            profileValueFn
          }}
        >
          {props.children}
        </profileContext.Provider>
      );



}

export default ProfileState;
