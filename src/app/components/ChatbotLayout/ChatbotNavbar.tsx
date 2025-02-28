import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface ChatbotNavbarProps {
  setOpenSidebar: (open: boolean) => void;
  openSidebar: boolean;
}

const ChatbotNavbar: React.FC<ChatbotNavbarProps> = ({
  setOpenSidebar,
  openSidebar,
}) => {
  return (
    <div className="sticky top-0 w-full h-[85px] bg-white z-10">
      {!openSidebar && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center space-x-3 h-[67px]">
            <h2 className="text-xl sm:text-2xl font-bold text-primary-dark">
              AI Chat
            </h2>
          </div>
          {/* Mobile Menu Button (if needed for sidebar toggle) */}

          <button
            className="lg:hidden block text-primary text-lg font-semibold"
            onClick={() => {
              setOpenSidebar(!openSidebar);
            }}
          >
            <RxHamburgerMenu width={20} height={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatbotNavbar;
