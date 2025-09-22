import React, { useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";

interface ChatBodyProps {
  chats: { message: string; user: boolean; createdAt: Date }[];
  loading: boolean;
}

const ChatBody = ({ chats, loading }: ChatBodyProps) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const isHeaderVisible = chats.length === 0;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats, loading]);

  return (
    <div
      ref={chatContainerRef}
      className={`flex flex-col flex-1 w-full px-4 py-6 rounded-xl w-[90%] lg:w-[80%] mx-auto overflow-y-auto scrollbar-hide
        ${isHeaderVisible ? "justify-center items-center" : "justify-start"}`}
      style={{ maxHeight: "calc(100vh - 200px)" }} // adjust so input is always visible
    >
      {isHeaderVisible ? (
        <ChatHeader />
      ) : (
        <div className="flex flex-col space-y-4">
          {chats.map((chat, index) => (
            <ChatMessage
              key={index}
              message={chat.message}
              user={chat.user}
              createdAt={chat.createdAt}
            />
          ))}
          {loading && (
            <div className="flex justify-start p-3">
              <div className="flex items-center space-x-1 bg-[#54AFF0]/20 px-4 py-2 rounded-lg shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#54AFF0] animate-bounce delay-100"></span>
                <span className="h-2 w-2 rounded-full bg-[#54AFF0] animate-bounce delay-200"></span>
                <span className="h-2 w-2 rounded-full bg-[#54AFF0] animate-bounce delay-300"></span>
              </div>
            </div>
          )}
          {/* Scroll anchor */}
          <div ref={bottomRef} />
        </div>
      )}
    </div>
  );
};

export default ChatBody;
