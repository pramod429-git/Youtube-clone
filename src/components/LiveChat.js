import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { chats } from "../utils/liveChatMessage";
import { generateRandomName } from "../utils/helpers";
import { makeid } from "../utils/helpers";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveChatMessage, setliveChatMessage] = useState("");
  console.log(liveChatMessage);
  const chatMessage = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      //api poll
      // Pick a random chat message from the chats array
      //const randomChat = chats[Math.floor(Math.random() * chats.length)];
      dispatch(
        addMessage({
          // name: randomChat.name,
          name: generateRandomName(),
          //message: randomChat.message,
          message: makeid(15),
        })
      );
      console.log("hi");
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <form className=" w-[20rem] flex" onSubmit={(e) => e.preventDefault()}>
        <input
          className="border border-black w-80 p-2"
          value={liveChatMessage}
          onChange={(e) => {
            setliveChatMessage(e.target.value);
          }}
        />
        <button
          className="p-2 ml-6 bg-slate-300 rounded-lg w-36"
          onClick={() => {
            dispatch(addMessage({ name: "Pramod", message: liveChatMessage }));
            setliveChatMessage("");
          }}
        >
          Send
        </button>
      </form>

      <div className="absolute pb-[36rem] ">Live Chat</div>
      <div className="p-2">
        {chatMessage.map((c, i) => {
          return (
            <ChatMessage chat={{ name: c.name, message: c.message }} key={i} />
          );
        })}
      </div>
    </>
  );
};

export default LiveChat;
