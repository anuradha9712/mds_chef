import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Row, Spinner, Icon } from "@innovaccer/design-system";
// import openSandbox from "./sandbox.js";

const CopyCode = (props) => {
  const { jsxCode } = props;

  const onClickHandler = () => {
    navigator.clipboard.writeText(jsxCode);
  };

  return (
    <div className="ml-auto d-flex justify-content-end ">
      {/* <img
        src="/icons/4691539_codesandbox_icon.svg"
        className="codesandBox-icon cursor-pointer mr-6 align-self-center"
        onClick={(e) => {
          e.preventDefault();
          openSandbox(jsxCode);
        }}
      /> */}
      <div className="d-flex align-self-end">
        <Icon
          name="content_copy"
          size={20}
          appearance="white"
          onClick={onClickHandler}
          className="align-self-center cursor-pointer"
        />
      </div>
    </div>
  );
};
const CodePreview = ({ codeResponse }) => {

  return (
    <div className="codeblock-container">
      <CopyCode jsxCode={codeResponse} />
      <SyntaxHighlighter
        wrapLongLines={true}
        language="javascript"
        style={nightOwl}
      >
        {codeResponse}
      </SyntaxHighlighter>
    </div>
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
