import React from "react";
import TopHeader from "../topHeader";
import InputBox from "../inputBox";
import ChatBox from "../chatBox";

export const RightPanel = () => {
  return (
    <div>
      <TopHeader />
      <ChatBox />
      <InputBox />
    </div>
  );
};

export default RightPanel;
