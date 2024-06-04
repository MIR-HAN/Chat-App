import React, { useState } from 'react'
import LoginPage from './pages/LoginPage'
import RoomPage from './pages/RoomPage';
import ChatPage from './pages/ChatPage';


const App = () => {
  //authorization state
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  //selected room's state
  const [room, setRoom] = useState(null);

  //If authorization null, redirect to login page
  if (!isAuth) return <LoginPage setIsAuth={setIsAuth} />;
  //If authorization tru redirect to chat rooms page
  return (
    <div className='container' >

      {room ? (
        //if room selected
        <ChatPage room={room} setRoom={setRoom} />) : (
        //if room not selected
        <RoomPage setIsAuth={setIsAuth} setRoom={setRoom} />
      )}

    </div>

  )
}

export default App