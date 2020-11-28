import React from 'react'
import Header from '../components/Header'

export interface MainPageProps {
    
}
 
const MainPage: React.SFC<MainPageProps> = () => {
    return ( 
        <>
        <Header />
        <div>
            Tittle and description to the App and Routes to search by repos or profles.
        </div>
        </>
     );
}
 
export default MainPage;