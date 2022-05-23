import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import Chat from "./components/room/chat/chat.js";

function App() {

  const [connectedSocket, setConnectedSocket] = useState();

  useEffect(() => {
    const socket = io();

    socket.on("connected", () => {
      setConnectedSocket(socket);
    });
  },[]);

  if(!connectedSocket) {
    return <p>Waiting for connection ...</p>;
  }

  return (
    <div style = {{ padding: 10}}>
      <Chat socket={connectedSocket}/>
    </div>
  );
}

export default App;
