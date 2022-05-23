import { useState } from "react";

const MessageForm = ({ socket }) => {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const sendMessage = () => {
        socket.emit("send-info", name, message);
        setMessage("");
      };
    
      const handleMessageInputChange = (e) => {
        setMessage(e.target.value);
      };

      const handleNameInputChange = (e) => {
        setName(e.target.value);
      };

    return (
        <>
            <input
                value={message}
                placeholder="Enter a message"
                type="text"
                onChange={handleMessageInputChange}
            ></input>
            <input
                value={name}
                placeholder="Enter your name"
                type="text"
                onChange={handleNameInputChange}
            ></input>
            <button onClick={sendMessage}>Send message!</button>
        </>
    );
};

export default MessageForm;