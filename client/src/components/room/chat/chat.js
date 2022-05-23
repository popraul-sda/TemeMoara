import ChatBox from "./chatBox";

const Chat = ({ socket}) => {

  return (
    <>
      <ChatBox socket={socket}/>
    </>
  );
};

export default Chat;
