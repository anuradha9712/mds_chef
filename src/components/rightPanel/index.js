import React from "react";
import TopHeader from "../topHeader";
import InputBox from "../inputBox";
import ChatBox from "../chatBox";

export const RightPanel = () => {
  const chatData = [
    {
      HUMAN: "hello I am user",
    },
    {
      AI: "hi i am ai",
    },
  ];
  const onSubmitHandler = (query) => {
    console.log("submit query -> ", query);
  };

  return (
    <div>
      <TopHeader />
      <ChatBox chatData={chatData} />
      <InputBox onSubmitHandler={onSubmitHandler} />
    </div>
  );
};

export default RightPanel;
