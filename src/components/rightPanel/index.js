import React, { useState } from "react";
import TopHeader from "../topHeader";
import InputBox from "../inputBox";
import ChatBox from "../chatbotBox";
import getChatData from "../../api";

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
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
  },
];
export const RightPanel = ({ componentName }) => {
  const [chatData, setChatData] = useState(dummyData);
  const [showLoader, setShowLoader] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);

  const onSubmitHandler = async (query) => {
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
    setChatData([...chatData, userQuery]);
    setTimeout(() => {
      setShowLoader(true);
    }, 300);
    setInputDisabled(true);
    getChatData(componentName, query)
      .then((data) => {
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
        setInputDisabled(false);
        setChatData([...chatData, userQuery, response]);
      })
      .catch((err) => {
        setShowLoader(false);
        setInputDisabled(false);
        const defaultResponse = {
          message: {
            text: "We couldn't cook your recipe, Please send the command again!",
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
        setChatData([...chatData, userQuery, defaultResponse]);
      });
  };

  return (
    <div>
      <TopHeader />
      <ChatBox chatData={chatData} showLoader={showLoader} />
      <InputBox
        onSubmitHandler={onSubmitHandler}
        setInputDisabled={inputDisabled}
        componentName={componentName}
      />
    </div>
  );
};

export default RightPanel;
