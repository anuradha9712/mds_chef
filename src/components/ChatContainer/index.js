import React from "react";
import LeftPanel from "../leftPanel";
import RightPanel from "../rightPanel";
import { Row, Column } from "@innovaccer/design-system";

export const ChatContainer = () => {
  return (
    <div className="App-container">
      <Row>
        <Column size={3}>
          <LeftPanel />
        </Column>
        <Column size={9}>
          <RightPanel />
        </Column>
      </Row>
    </div>
  );
};

export default ChatContainer;
