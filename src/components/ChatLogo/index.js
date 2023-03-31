import React, {useState} from 'react';
import ChatContainer from '../chatContainer';

export const ChatLogo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <ChatContainer />}
      <div
        className="Chat-logo d-flex align-items-center justify-content-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <div>OPEN</div> : <div>CLOSE</div>}
      </div>
    </>
  );
}

export default ChatLogo;
