import { useState, useEffect } from "react";
import Message from "./message";
import MessageForm from "./messageForm";
import Notification from "../../notification";

const ChatBox = ({ socket }) => {
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState("");

    const addMessage = (message) => {
        setMessages((messages) => {
            return [...messages, message];
          });
    };

    useEffect(() => {

        socket.on("received-info", (n, m) => {
            setName(n);
            addMessage(n + " : " + m);


        });

    }, []);

    return (
        <>
            <Message messages={messages} socket={socket} />

            <MessageForm socket={socket}/>

            <Notification name={name} socket={socket} withLoading={true}/>
        </>
    );
};

export default ChatBox;