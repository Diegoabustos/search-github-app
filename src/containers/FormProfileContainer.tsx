import React from 'react'
import SearchField from '../components/SearchField'
import SearchButton from '../components/SearchButton'
import profileContext from '../context/profiles/profileContext'
import axios from 'axios';



export interface FormProfileContainerProps {
    
}
 
const FormProfileContainer: React.SFC<FormProfileContainerProps> = () => {

    const profilesContext = React.useContext(profileContext);
    const { enterProfile, profileInfoFn, repositoriesInfoFn } = profilesContext;

    const [ profile, setProfile, ] = React.useState('')


    React.useEffect(() => {
        if (enterProfile) {
            setProfile(enterProfile)
        }

    }, [enterProfile])


    const onSubmit = async (e: any) => {
        e.preventDefault();
        const url = `https://api.github.com/users/${profile}`
        const urlRepos = `https://api.github.com/users/${profile}/repos`
        const response = await axios.get(url)
        const responseRepos = await axios.get(urlRepos)
        profileInfoFn(response)
        repositoriesInfoFn(responseRepos)
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