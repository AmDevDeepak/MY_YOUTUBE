import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";
const LiveChat = () => {
  const [liveMessage, setliveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      //API POLLING
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="ml-2 w-full h-[500px] p-2 border bg-[#] rounded-md overflow-y-scroll flex-reverse livechat">
        {chatMessages.map((message, idx) => (
          <ChatMessage
            name={message.name}
            message={message.message}
            key={idx}
          />
        ))}
      </div>
      <form
        className=" w-full relative flex gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(addMessage({ name: "Deepak 👩‍💻", message: liveMessage }));
          setliveMessage("");
        }}
      >
        <input
          type="text"
          className="w-[85%] font-medium border-none outline-none rounded-md px-3 py-2 bg-[#212121] text-gray-200"
          placeholder="Enter message..."
          onChange={(event) => setliveMessage(event.target.value)}
          value={liveMessage}
          spellCheck="false"
          required
        />
        <button className="w-[15%] font-medium py-1 px-5  rounded-md bg-[#ED1C24] text-white">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
