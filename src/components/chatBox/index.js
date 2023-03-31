import React from "react";

const ChatItem = ({ chat }) => {
  const type = chat.author.name;

  return <>{type === "AI" ? <div>AI chat</div> : <div>Human chat</div>}</>;
};

export const ChatBox = ({ chatData }) => {
  console.log("chat dataaa", chatData);
  return (
    <div className="bg-secondary chatbox">
      {chatData.map((chat, key) => (
        <ChatItem chat={chat} key={key} />
      ))}
    </div>
  );
};

export default ChatBox;
