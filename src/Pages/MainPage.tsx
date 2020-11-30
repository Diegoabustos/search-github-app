import React from 'react'
import Header from '../components/Header'
import FormProfileContainer from '../containers/FormProfileContainer'
import CardProfile from '../components/CardProfile'
import ReposList from '../components/ReposList'



export interface MainPageProps {
    
}
 
const MainPage: React.SFC<MainPageProps> = () => {
    return ( 
        <section className="hero is-primary is-fullheight">
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
                        <CardProfile />
                        <ReposList />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default MainPage;