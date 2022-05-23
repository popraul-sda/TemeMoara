const Message = ({ messages , socket}) => {
    return (
      <>
        <div className="chat-box">
        {messages.map((message, index) => (
          <p style={{ padding: 5 }} key={`message-${index}`}>
            {message}
          </p>
        ))}
      </div>
      </>
    );
};

export default Message;