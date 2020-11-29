import * as React from 'react';
import Header from '../components/Header'
import CardProfile from '../components/CardProfile'
import FormProfileContainer from '../containers/FormProfileContainer'


export interface ProfilePageProps {
    
}
 
const ProfilePage: React.SFC<ProfilePageProps> = () => {
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
                    </div>
                </div>
            </div>
            
        </section>
     );
}
 
export default ProfilePage;