import * as React from 'react'
import profileContext from '../context/profiles/profileContext'



export interface CardProfileProps {
    
}
 
const CardProfile: React.SFC<CardProfileProps> = () => {

  const profilesContext = React.useContext(profileContext);
    const { profileInfo } = profilesContext;
    const [ avatar, setAvatar ] = React.useState('')
    const [ login, setLogin ] = React.useState(null)
    const [ name, setName ] = React.useState(null)
    const [ description, setDescription ] = React.useState(null)
    const [ location, setLocation ] =React.useState(null)
    React.useEffect(() => {
      if (profileInfo) {
          const avatar = profileInfo.data.avatar_url
          setAvatar(avatar)
          const login = profileInfo.data.login
          setLogin(login)
          const  name = profileInfo.data.name
          setName(name)
          const  description = profileInfo.data.bio
          setDescription(description)
          const  location = profileInfo.data.location
          setLocation(location)

      }
  }, [profileInfo])
    return ( 
      <section className="container">
        <div className="columns feature">
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={avatar} alt="Placeholder image" className="modal-button" data-target="modal-image2"/>
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                <h4>{login}</h4>
                <p>{description}</p>
                  {/* <span className="button is-link modal-button" data-target="modal-image2">Image modal</span> */}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    );
}
 
export default CardProfile;