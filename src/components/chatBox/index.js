import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Row, Spinner } from "@innovaccer/design-system";

const CodePreview = ({ codeResponse }) => {
  //   const codeResponse = `
  // // import { ChipGroup } from '@innovaccer/design-system';
  // () => {
  //   return(
  //     <ChipGroup list={[ { disabled: false, icon: 'assessment' , label: 'Action' , name: '1' , type: 'action' }, { clearButton: true, disabled: false, icon: 'assessment' , label: 'Input' , name: '2' , type: 'input' }, { clearButton: true, disabled: false, icon: 'assessment' , label: 'Selection' , name: '3' , selected: true, type: 'selection' }, { clearButton: true, disabled: false, icon: 'assessment' , label: 'Selection' , name: '4' , type: 'selection' } ]} onClick={function(){}} onClose={function(){}} />
  //   );
  // }`;

  return (
    <SyntaxHighlighter
      wrapLongLines={true}
      language="javascript"
      style={nightOwl}
      customStyle={{
        margin: "0 16px",
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
    <div className="m-5">
      <Row className={`${type === "HUMAN" ? "justify-content-end" : ""}`}>
        {message && (
          <div className="bg-secondary-lightest p-4 message-box">{message}</div>
        )}
      </Row>
      <Row>{codeResponse && <CodePreview codeResponse={codeResponse} />}</Row>
    </div>
  );
};

export const ChatBox = ({ chatData, showLoader }) => {
  return (
    <div className="bg-light chatbox p-4 overflow-auto">
      {chatData.map((chat, key) => (
        <ChatItem chat={chat} key={key} />
      ))}
      {showLoader && (
        <Row className="justify-content-center">
          <Spinner />
        </Row>
      )}
    </div>
  );
};

export default ChatBox;
