import React, {useState} from "react";
import TopHeader from "../topHeader";
import InputBox from "../inputBox";
import ChatBox from "../chatBox";
import getChatData from "../../api";

export const RightPanel = ({ componentName }) => {
  const dummyData = [
    {
      id: 123,
      message: {
        code: "",
        text: "Hello! I am Masala Design System Chef",
        suggestions: [],
        actions: [],
      },
      author: {
        name: "AI",
      },
    },
    {
      id: 456,
      message: {
        code: "",
        text: "Please select an ingredient from panel to start making a recipe",
        suggestions: [],
        actions: [],
      },
      author: {
        name: "AI",
      },
    },
  ];
  const [chatData, setChatData] = useState(dummyData);
  

  const onSubmitHandler = (query) => {
    getChatData(componentName, query)
      .then((data) => {
        console.log('get data', data)
        const response = {
          message: {
            code: data.code,
          },
          author: {
            name: "AI",
          },
        };
        setChatData([...chatData, response]);
      })
      .catch((err) => {
        console.log('error data', err)
      })
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
