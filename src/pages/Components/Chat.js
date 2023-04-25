import styles from "@/styles/Chat.module.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { db, auth } from "../firestore-config";
// tstpoofcake19@gmail.com

export const Chat = (props) => {
    const {room} = props;
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const messagesRef = collection(db, "messages");

    useEffect(() => {
        const queryMessages = query(
            messagesRef, 
            where("room", "==", room), 
            orderBy("createdAt")
        );

        const usubscribe = onSnapshot(queryMessages, (snapshot) => {
            let messages = []
            snapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id});
            });
            setMessages(messages);
        });
        return () => usubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newMessage === "") return;

        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        });

        setNewMessage("");
    };

    return( 
    <div className={styles.chatapp}>
        <div className={styles.header}>
            <h1>Welcome to: {room.toUpperCase()}</h1>
        </div>
        <div className={styles.messages}> 
            {messages.map((message) => <div className={styles.message} key={message.id}>
                <span className={styles.user}>{message.user}</span>
                {message.text}
            </div>)} 
        </div>
        <form onSubmit={handleSubmit} className="">
            <input 
                className=""
                placeholder="Type your message here"
                onChange = {(e) => setNewMessage(e.target.value)}
                value = {newMessage}
            />
            <button type="submit" className="send-button">
                Send
            </button>
        </form>
    </div>
    )
}