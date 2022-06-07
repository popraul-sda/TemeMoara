import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Feedback from "./components/FeedBack";
import StickyNote from "./components/StickyNote";
function App() {

  const [connectedSocket, setConnectedSocket] = useState();

  useEffect(() => {
    const socket = io();

    socket.on("connected", () => {
      setConnectedSocket(socket);
    });

  }, []);

  if (!connectedSocket) {
    return <p>Waiting for connection ...</p>;
  }

  return (
    <div className="App">
      < Feedback socket={connectedSocket}/>
      <br />
      < StickyNote socket={connectedSocket}/>
    </div>
  );
}

export default App;
