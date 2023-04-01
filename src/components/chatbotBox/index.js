import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Row, Column, Spinner, Icon, Avatar, Divider } from "@innovaccer/design-system";
import openSandbox from "./sandbox.js";
import codesandbox_icon from "./codesandbox_icon.svg";

const CopyCode = (props) => {
  const { jsxCode } = props;

  const onClickHandler = () => {
    navigator.clipboard.writeText(jsxCode);
  };

  return (
    <div className="ml-auto d-flex justify-content-end ">
      <img
        alt="codesandbox"
        src={codesandbox_icon}
        className="codesandBox-icon cursor-pointer mr-6 align-self-center"
        onClick={(e) => {
          e.preventDefault();
          openSandbox(jsxCode);
        }}
      />
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
  const timeStamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: true });

  return (
    <div className="m-5">
      <Row>
        {message && (
          <Row>
            <Column size={1}>
              <div className="bot-human-icon-wrapper">
                <Avatar
                  appearance={type === "HUMAN" ? 'secondary' : 'accent2'}
                  firstName={type === "HUMAN" ? 'You' : 'MDS'}
                  size="regular" />
              </div>
            </Column>
            <Column size={11} className="border-bottom pb-5">
              <div className="mb-4"><b>{type === "HUMAN" ? 'You' : 'MDS-Chef'}</b><span className="pl-5">{timeStamp}</span></div>
              <div className="bg-secondary-lightest p-4 message-box">{message}</div>
            </Column>
          </Row>
        )}
      </Row>
      <Row>
        {codeResponse && (
          <Row>
            <Column size={1}>
              <div className="bot-human-icon-wrapper">
                <Avatar
                  appearance={type === "HUMAN" ? 'secondary' : 'accent2'}
                  firstName={type === "HUMAN" ? 'You' : 'MDS'}
                  size="regular" />
              </div>
            </Column>
            <Column size={11} className="border-bottom pb-5">
              <div className="mb-4"><b>{type === "HUMAN" ? 'You' : 'MDS-Chef'}</b><span className="pl-5">{timeStamp}</span></div>
              <CodePreview codeResponse={codeResponse} />
            </Column>
            <Divider appearance="basic" />
          </Row>
        )}
      </Row>
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
