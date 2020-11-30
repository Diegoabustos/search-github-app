import { createContext } from 'react';

interface PrContextProps {
    enterProfile: string;
    valueProfile: string;
    enterProfileFn: any;
    profileValueFn: any;
    profileInfoFn: any;
    repositoriesInfoFn: any;
}

const profileContext = createContext({} as PrContextProps);

export default profileContext;