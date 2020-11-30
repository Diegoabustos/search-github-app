import React from 'react';
import MainPage from './Pages/MainPage';
import ProfileState from './context/profiles/profileState'

function App() {
  return (
    <ProfileState>
    <div>
      <MainPage />
    </div>
    </ProfileState>
  );
}

export default App;
