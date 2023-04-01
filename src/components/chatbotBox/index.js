import React, {useRef, useEffect} from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Row, Column, Icon, Avatar, Divider, Placeholder, PlaceholderParagraph } from "@innovaccer/design-system";
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

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const type = chat.author.name;
  const message = chat.message.text;
  const codeResponse = chat.message.code;
  const timeStamp = chat.time;

  return (
    <div className="m-5" ref={divRef}>
      <Row>
        {message && (
          <Row className="pb-6">
            <Column className="flex-grow-0 pr-5">
              <div className="bot-human-icon-wrapper">
                <Avatar
                  appearance={type === "HUMAN" ? 'secondary' : 'accent2'}
                  firstName={type === "HUMAN" ? 'You' : 'MDS'}
                  size="regular" />
              </div>
            </Column>
            <Column className="border-bottom pb-5">
              <div className="mb-4"><b>{type === "HUMAN" ? 'You' : 'MDS-Chef'}</b><span className="pl-5">{timeStamp}</span></div>
              <div className="bg-secondary-lightest p-4 message-box">{message}</div>
            </Column>
          </Row>
        )}
      </Row>
      <Row>
        {codeResponse && (
          <Row>
            <Column className="flex-grow-0 pr-5">
              <div className="bot-human-icon-wrapper">
                <Avatar
                  appearance={type === "HUMAN" ? 'secondary' : 'accent2'}
                  firstName={type === "HUMAN" ? 'You' : 'MDS'}
                  size="regular" />
              </div>
            </Column>
            <Column className="border-bottom pb-5">
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

const goToBottom = () => {
  window.scrollTo({
    bottom: 0,
    behavior: 'smooth',
  });
};

export const ChatBox = ({ chatData, showLoader }) => {
  return (
    <div className="bg-light chatbox p-4 overflow-auto">
      {chatData.map((chat, key) => (
        <ChatItem chat={chat} key={key} />
      ))}
      {showLoader && (
        <Row className="m-5">
          <Row>
            <Column className="flex-grow-0 pr-5">
              <div className="bot-human-icon-wrapper">
                <Avatar
                  appearance={'accent2'}
                  firstName={'MDS'}
                  size="regular" />
              </div>
            </Column>
            <Column>
              <Placeholder withImage={false}>
                <PlaceholderParagraph length="medium" />
                <PlaceholderParagraph length="medium" />
                <PlaceholderParagraph length="small" />
              </Placeholder>
            </Column>
          </Row>
        </Row>
      )}
      {goToBottom()}
    </div>
  );
};

export default ChatBox;
