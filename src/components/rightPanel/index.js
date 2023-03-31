import React from "react";
import TopHeader from "../topHeader";
import InputBox from "../inputBox";
import ChatBox from "../chatBox";

export const RightPanel = () => {
  const chatData = [
    {
      id: 123,
      message: {
        code: "hello I am user",
        text: "",
        suggestions: [],
        actions: [],
      },
      author: {
        name: "HUMAN",
      },
    },
    {
      id: 456,
      message: {
        code: "hello I am AI",
        text: "",
        suggestions: [],
        actions: [],
      },
      author: {
        name: "AI",
      },
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
