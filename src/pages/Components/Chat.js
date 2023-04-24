import styles from "@/styles/Chat.module.css";
import React from "react";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';


export const Chat = () => {

    const [newMessage, setNewMessage] = useState("");
    
    const messagesRef = collection(db,"messages");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newMessage === "") return;

        await addDoc(messagesRef, {
            text: newMessage,
            createdAt:
        });
    };

    return( <div className="">
        <form onSubmit={handleSubmit} className="">
            <input 
                className=""
                placeholder="Type your message here"
                onChange = {(e) => setNewMessage(e.target.value)}
            />
            <button type="submit" className="send-button">
                Send
            </button>
        </form>
    </div>
    )
}