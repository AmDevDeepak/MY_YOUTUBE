import React from "react";
import userIcon from "../assets/user-icon.png"
const ChatMessage = ({ name, message = "❤️‍🔥❤️‍🔥❤️‍🔥" }) => {
  return (
    <div className="flex items-center gap-2 p-2 ">
      <img
        className="h-8 rounded-full"
        src={userIcon}
        alt="user"
      />
      <div>
        <h4 className="text-sm font-medium">{name}</h4>
        <h5 className="text-sm">{message}</h5>
      </div>
    </div>
  );
};

export default ChatMessage;
