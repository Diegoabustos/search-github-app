import React from 'react'
import SearchField from '../components/SearchField'
import SearchButton from '../components/SearchButton'


export interface FormProfileContainerProps {
    
}
 
const FormProfileContainer: React.SFC<FormProfileContainerProps> = () => {
    return ( 
        <>
        <div className="box">
                            <div className="field is-grouped">
                                <p className="control is-expanded">
                                <SearchField />
                                </p>
                                <p className="control">
                                <SearchButton />
                                </p>
                            </div>
                        </div>
            
            
        </>
     );
}
 
export default FormProfileContainer;