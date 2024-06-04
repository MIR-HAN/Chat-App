import React from 'react'

const RoomPage = ({ setIsAuth, setRoom }) => {
    // logout
    const logout = () => {
        setIsAuth(false)
        //clean the local
        localStorage.removeItem("token")
    };

    // save the room name
    const handleSubmit = (e) => {
        e.preventDefault();

        //get inputs value
        const room = e.target[0].value.toLowerCase();
        //updated choosen room's state
        setRoom(room)
        console.log(room)
    }

    return (
        <form  onSubmit={handleSubmit} className='room-form'>
            <h1>Chat Room</h1>
            <p>Choose Room</p>

            <input type="text" placeholder='e.g.: night shift' required />

            <button >Enter</button>
            <button onClick={logout}>Exit</button>
        </form>
    )
}

export default RoomPage;