import React from 'react'
import Header from '../components/Header'
import ReposList from '../components/ReposList'
import FormProfileContainer from '../containers/FormProfileContainer'

export interface RepositoriesPageProps {
    
}
 
const RepositoriesPage: React.SFC<RepositoriesPageProps> = () => {
    return ( 
        <>
            <Header />
            <FormProfileContainer />
            <ReposList />
        </>
     );
}
 
export default RepositoriesPage;
