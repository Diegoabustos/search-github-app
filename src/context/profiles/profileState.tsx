import * as React from 'react';
import profileContext from './profileContext';
import profileReducer from './profileReducer';
import {
    ENTER_PROFILE,
    VALUE_PROFILE,
    INFO_USER,
    INFO_REPOS,
} from '../../types';


const ProfileState = (props: any) => {
    const initialState = {
        enterProfile: '',
        valueProfile: '',
        profileInfo: [],
        repositoriesInfo: []
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

    const profileInfoFn = (response: any) => {
      dispatch({
          type: INFO_USER,
          payload: response
      })
  }
  const repositoriesInfoFn = (responseRepos: any) => {
      dispatch({
          type: INFO_REPOS,
          payload: responseRepos
      })
  }

    return (
        <profileContext.Provider
          value={{
            enterProfile: state.enterProfile,
            valueProfile: state.valueProfile,
            enterProfileFn,
            profileValueFn,
            profileInfoFn,
            repositoriesInfoFn,
          }}
        >
          {props.children}
        </profileContext.Provider>
      );



}

export default ProfileState;
