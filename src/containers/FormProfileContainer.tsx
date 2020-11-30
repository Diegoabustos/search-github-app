import React from 'react'
import SearchField from '../components/SearchField'
import SearchButton from '../components/SearchButton'
import profileContext from '../context/profiles/profileContext'


export interface FormProfileContainerProps {
    
}
 
const FormProfileContainer: React.SFC<FormProfileContainerProps> = () => {

    const profilesContext = React.useContext(profileContext);
    const { enterProfile } = profilesContext;


    const onSubmit = ( e:any) => {
        e.preventDefault()
        console.log('data', enterProfile)
    }
    return ( 
        <form onSubmit={onSubmit}>
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
        </form>
     );
}
 
export default FormProfileContainer;