import React from "react";

const ChatMessage = ({ chat }) => {
  const { name, message } = chat;
  return (
    <>
      <div className="flex items-center shadow-sm p-2">
        <img
          alt="user icon"
          className="h-8 px-2"
          src="https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg"
        />
        <span className="px-1 font-semibold">{name}</span>
        <span>{message}</span>
      </div>
    </>
  );
};

export default ChatMessage;
