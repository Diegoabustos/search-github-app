import * as React from 'react';
import Header from '../components/Header'
import CardProfile from '../components/CardProfile'
import FormProfileContainer from '../containers/FormProfileContainer'


export interface ProfilePageProps {
    
}
 
const ProfilePage: React.SFC<ProfilePageProps> = () => {
    return ( 
        <>
            <Header />
            <FormProfileContainer />
            <CardProfile />
        </>
     );
}
 
export default ProfilePage;