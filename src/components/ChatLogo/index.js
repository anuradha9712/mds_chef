import React, {useState} from 'react';
import ChatContainer from '../chatContainer';
import { Icon } from "@innovaccer/design-system";
import chefLogo from "../../images/masterchef.svg";

export const ChatLogo = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && <ChatContainer />}
      <div
        className="Chat-logo d-flex align-items-center justify-content-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <Icon size={50}>
          <img alt="Innovaccer logo" height="50" width="50" src={chefLogo} />
        </Icon>
      </div>
    </>
  );
}

export default ChatLogo;
