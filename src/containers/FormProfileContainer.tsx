import React from 'react'
import SearchField from '../components/SearchField'
import SearchButton from '../components/SearchButton'


export interface FormProfileContainerProps {
    
}
 
const FormProfileContainer: React.SFC<FormProfileContainerProps> = () => {
    return ( 
        <>
            <SearchField />
            <SearchButton />
        </>
     );
}
 
export default FormProfileContainer;