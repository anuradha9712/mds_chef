import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Row } from "@innovaccer/design-system";

const CodePreview = () => {
  const codeResponse = `
// import { ChipGroup } from '@innovaccer/design-system';
() => {
  return(
    <ChipGroup list={[ { disabled: false, icon: 'assessment' , label: 'Action' , name: '1' , type: 'action' }, { clearButton: true, disabled: false, icon: 'assessment' , label: 'Input' , name: '2' , type: 'input' }, { clearButton: true, disabled: false, icon: 'assessment' , label: 'Selection' , name: '3' , selected: true, type: 'selection' }, { clearButton: true, disabled: false, icon: 'assessment' , label: 'Selection' , name: '4' , type: 'selection' } ]} onClick={function(){}} onClose={function(){}} />
  );
}`;

  return (
    <SyntaxHighlighter
      wrapLongLines={true}
      language="javascript"
      style={nightOwl}
      customStyle={{
        margin: "0 auto",
        borderRadius: "8px",
        paddingTop: "26px",
      }}
    >
      {codeResponse}
    </SyntaxHighlighter>
  );
};

const ChatItem = ({ chat }) => {
  const type = chat.author.name;
  const message = chat.message.text;
  const codeResponse = chat.message.code;

  return (
    <div className={`m-5 ${type === "HUMAN" ? "justify-content-end" : ""}`}>
      <Row>
        <div className="bg-secondary-lightest p-4 message-box my-5">{message}</div>
      </Row>
      <Row>{<CodePreview codeResponse={codeResponse} />}</Row>
      {/* {codeResponse && <div> <code>{codeResponse}</code> </div>} */}
    </div>
  );
};

export const ChatBox = ({ chatData }) => {
  return (
    <div className="bg-light chatbox p-4 overflow-auto">
      {chatData.map((chat, key) => (
        <ChatItem chat={chat} key={key} />
      ))}
    </div>
  );
};

export default ChatBox;
