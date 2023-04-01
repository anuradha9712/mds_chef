import React, { useState } from "react";
import TopHeader from "../topHeader";
import InputBox from "../inputBox";
import ChatBox from "../chatbotBox";
import getChatData from "../../api";

export const RightPanel = ({ componentName }) => {
  const dummyData = [
    {
      id: 123,
      message: {
        code: "",
        text: `Hello! I am Masala Design System Chef \n Please select an ingredient from panel to start making a recipe`,
        suggestions: [],
        actions: [],
      },
      author: {
        name: "AI",
      },
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: true })
    }
  ];
  const [chatData, setChatData] = useState(dummyData);
  const [showLoader, setShowLoader] = useState(false);

  const onSubmitHandler = (query) => {
    setShowLoader(true);
    getChatData(componentName, query)
      .then((data) => {
        console.log("api data->>", data);
        const userQuery = {
          message: {
            text: query,
          },
          author: {
            name: "HUMAN",
          },
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }),
        };
        const response = {
          message: {
            code: data.code.trim(),
          },
          author: {
            name: "AI",
          },
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }),
        };
        setShowLoader(false);
        setChatData([...chatData, userQuery, response]);
      })
      .catch((err) => {
        console.log("error data", err);
        setShowLoader(false);
        const defaultResponse = {
          message: {
            text: "Please provide more details!",
          },
          author: {
            name: "AI",
          },
        };
        setChatData([...chatData, defaultResponse]);
      });
  };

  return (
    <div>
      <TopHeader />
      <ChatBox chatData={chatData} showLoader={showLoader} />
      <InputBox
        onSubmitHandler={onSubmitHandler}
        componentName={componentName}
      />
    </div>
  );
};

export default RightPanel;
