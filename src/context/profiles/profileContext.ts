import { createContext } from 'react';

interface PrContextProps {
    enterProfile: string;
    valueProfile: string;
    enterProfileFn: any;
    profileValueFn: any
}

const profileContext = createContext({} as PrContextProps);

export default profileContext;