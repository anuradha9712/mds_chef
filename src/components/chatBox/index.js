import React from "react";

const ChatItem = ({ chat }) => {
  const type = chat.author.name;
  const message = chat.message.text;
  const codeResponse = chat.message.code;

  return (
    <div
      className={`m-5 d-flex ${type === "HUMAN" ? "justify-content-end" : ""}`}
    >
      <div className="w-25 bg-secondary-lightest p-4 message-box">
        {message}
      </div>
      {codeResponse && <div> <code>{codeResponse}</code> </div>}
    </div>
  );
};

export const ChatBox = ({ chatData }) => {
  return (
    <div className="bg-light chatbox p-4">
      {chatData.map((chat, key) => (
        <ChatItem chat={chat} key={key} />
      ))}
    </div>
  );
};

export default ChatBox;
