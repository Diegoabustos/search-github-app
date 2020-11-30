import * as React from 'react'
import CardRepo from '../components/CardRepo';
import profileContext from '../context/profiles/profileContext'



export interface ReposListProps {
    
}
 
const ReposList: React.SFC<ReposListProps> = () => {

    const [ repositorieList, setRepositorieList ] = React.useState([]);
    console.log('repositorie', repositorieList)
    const profilesContext = React.useContext(profileContext);
    const { repositoriesInfo } = profilesContext;

    React.useEffect(() => {
        if (repositoriesInfo) {
            setRepositorieList(repositoriesInfo.data)
        }
    }, [repositoriesInfo])

    return ( 
        <div>
            {
                repositorieList.map((repositorie: any) => {
                    return (
                        <CardRepo
                            key={repositorie.id}
                            repositorie={repositorie}
                        />
                    )
            })
            } 
        </div>
     );
}
 
export default ReposList;