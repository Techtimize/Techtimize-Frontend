import React from "react";
import { PiPaperPlaneRightFill } from "react-icons/pi";

interface ChatInputProps {
  message: string;
  setMessage: (msg: string) => void;
  handleSendMessage: () => void;
  loading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({
  message,
  setMessage,
  handleSendMessage,
  loading,
}) => (
  <div className="w-[90%] lg:w-[80%] mx-auto py-4 fixed bottom-0 left-[5%] lg:left-[10%] z-[99999]">
    <div className="relative flex items-center">
      <textarea
        className="w-full border text-black rounded-[18px] py-[15px] px-[10px] sm:pl-6 sm:py-4 lg:py-6 pr-8 lg:pr-12 
          focus:outline-none focus:ring-2 focus:ring-[#54AFF0] bg-[#f1f1f1] resize-none"
        placeholder="Ask anything about techtimize"
        value={message}
        rows={1}
        autoFocus={true}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        disabled={loading}
      ></textarea>
      <button
        className="absolute right-[3%] sm:right-4 bg-[#54AFF0] text-white p-[10px] sm:p-1 lg:p-2 rounded-full shadow 
          hover:bg-[#3a8cd1] transition"
        onClick={handleSendMessage}
        disabled={loading}
      >
        <PiPaperPlaneRightFill className="h-4 w-4 lg:h-5 lg:w-5" />
      </button>
    </div>
  </div>
);

export default ChatInput;
