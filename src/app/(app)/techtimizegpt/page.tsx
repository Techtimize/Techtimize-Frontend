"use client";
import React, { useState, useEffect } from "react";
import ChatBody from "./components/ChatBody";
import ChatInput from "./components/ChatInput";

interface ChatMessageProps {
  message: string;
  user: boolean;
  createdAt: Date;
}

const ChatBotHome = () => {
  const [chats, setChats] = useState<ChatMessageProps[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSendMessage = async () => {
    if (message.trim() === "") return;
    setChats([...chats, { message, user: true, createdAt: new Date() }]);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("https://bot.api.techtimize.co/api/v1/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          accept: "application/json",
        },
        body: new URLSearchParams({
          msg: message,
          session_id: "4",
        }),
      });
      const data = await response.json();
      setChats((prev) => [
        ...prev,
        { message: data.answer, createdAt: new Date(), user: false },
      ]);
    } catch (error) {
      setChats((prev) => [
        ...prev,
        {
          message: "Error connecting to server.",
          createdAt: new Date(),
          user: false,
        },
      ]);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center w-full pt-6 
      bg-gradient-to-br from-[#54AFF0]/20 via-white via-30% to-transparent">
      <div className="w-full rounded-2xl flex flex-col ">
        <ChatBody chats={chats} loading={loading} />
        <ChatInput
          message={message}
          setMessage={setMessage}
          handleSendMessage={handleSendMessage}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ChatBotHome;
