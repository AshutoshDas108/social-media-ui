import React from "react";

const ChatMessage = () => {
  return (
    <div
      className={` flex ${true ? "justify-start" : "justify-end"} text-white`}
    >
        {/* div designed for message with/without image */}
      <div
        className={`p-1 ${
         true ? "rounded-md" : "px-5 rounded-full"
        } text-white bg-[#191c29]`}
      >
        {true && <img className="w-[12rem] h-[17rem] object-cover rounded-md"
        src='https://cdn.pixabay.com/photo/2023/12/06/08/56/winter-8433264_1280.jpg' alt=""/>}
        <p className={`${true ? "py-2" : "py-1"}`}>message....</p>

      </div>
    </div>
  );
};

export default ChatMessage;
