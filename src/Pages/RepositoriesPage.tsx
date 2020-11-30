import React from 'react'
import Header from '../components/Header'
import ReposList from '../components/ReposList'
import CardRepo from '../components/CardRepo'
import FormProfileContainer from '../containers/FormProfileContainer'

export interface RepositoriesPageProps {
    
}
 
const RepositoriesPage: React.SFC<RepositoriesPageProps> = () => {
    return ( 
        <section className="hero is-primary is-small">
            <Header />
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="column is-6 is-offset-3">
                        <h1 className="title">
                            Coming Soon
                        </h1>
                        <h2 className="subtitle">
                                $this is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.
                        </h2>
                        <FormProfileContainer />
                        
                    </div>
                </div>
            </div> 
            
                <CardRepo />
                 
        </section>
     );
}
 
export default RepositoriesPage;
