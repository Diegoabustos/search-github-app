import React from 'react'
import profileContext from '../context/profiles/profileContext'



export interface SearchFieldProps {
    
}
 
const SearchField: React.SFC<SearchFieldProps> = () => {
    const profilesContext = React.useContext(profileContext);

    const { enterProfileFn } = profilesContext;


    const onChange = (e: any) => {
        enterProfileFn(e.target.value)
    }
    return ( 

                <input 
                    className="input in-primary" 
                    type="text" 
                    name="profile"
                    onChange={onChange}
                />

     );
}
 
export default SearchField;