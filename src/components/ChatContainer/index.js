import React, { useState } from "react";
import LeftPanel from "../leftPanel";
import RightPanel from "../rightPanel";
import { Row, Column } from "@innovaccer/design-system";

export const ChatContainer = () => {
  const [componentName, setComponentName] = useState("");

  const optionClickHandler = (option) => {
    console.log('click data', option)
    setComponentName(option);
  };

  return (
    <div className="App-container p-6">
      <Row>
        <Column size={3}>
          <LeftPanel optionClickHandler={optionClickHandler} />
        </Column>
        <Column size={8.5} className='ml-6'>
          <RightPanel componentName={componentName} />
        </Column>
      </Row>
    </div>
  );
};

export default ChatContainer;
