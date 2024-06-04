import React, { useEffect, useState } from 'react'
import { auth, db } from '../fireBase/config'
import {
    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    query,
    where,
    orderBy
} from "firebase/firestore";
import Messages from '../components/Messages';

const ChatPage = ({ room, setRoom }) => {

    const [messages, setMessages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        //get collection referance
        const messagesCol = collection(db, "messages");

        await addDoc(messagesCol, {
            text: e.target[0].value,
            room,
            author: {
                id: auth.currentUser.uid,
                name: auth.currentUser.displayName,
                photo: auth.currentUser.photoURL
            },
            createdAt: serverTimestamp(),
        })
        //reset the form
        e.target.reset();

    }

    //get messages instantly from the server

    useEffect(() => {
        //chose the collection
        const messagesCol = collection(db, "messages");

        //filter messages

        //get current messages from selected room
        const q = query(messagesCol, where("room", "==", room),
            orderBy("createdAt", "asc"))

        onSnapshot(q, (snapshot) => {

            const tempMsg = [];

            snapshot.docs.forEach((doc) => {
                tempMsg.push(doc.data())
            });
            // send updated messages to the state
            setMessages(tempMsg);

        })
    }, [])

    return (
        <div className='chat-page'>
            <header>
                <p>{auth.currentUser?.displayName}</p>
                <p>{room}</p>
                <button onClick={() => setRoom(null)}>Change the Room</button>
            </header>
            <main >
                {messages.map((data) => <Messages key={data.id} data={data} />)}
            </main>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='your message...' />
                <button>Send</button>
            </form>

        </div>
    )
}

export default ChatPage