import React from 'react'
import { auth } from '../fireBase/config'

const Messages = ({ data }) => {

console.log(data.author.name)
    // if the ID of the logged in user is equal to the ID of the person who sent the message, render the text of the message.
    if (auth.currentUser?.uid === data.author.id) {

        return <p className='msg-user'>{data.text}
        </p>
              
    };
    //if not render user info + message
    return (
        <div className='msg-other'>
            <div>
                <img src={data.author.photo} />
                <span>{data.author.name}</span>
            </div>
        <p>{data.text}</p>
        </div>
    )
}

export default Messages;