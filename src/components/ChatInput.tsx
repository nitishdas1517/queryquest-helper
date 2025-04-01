
import { useState, KeyboardEvent } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const trimmedMessage = message.trim();
    if (trimmedMessage && !isLoading) {
      onSendMessage(trimmedMessage);
      setMessage("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="border-t p-4 bg-white rounded-b-lg">
      <div className="flex items-end space-x-2">
        <textarea
          className="flex-1 min-h-[56px] max-h-32 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        <button
          className={`p-3 rounded-full ${
            message.trim() && !isLoading
              ? "bg-brand-600 hover:bg-brand-700"
              : "bg-gray-300"
          } text-white flex-shrink-0 transition-colors`}
          onClick={handleSendMessage}
          disabled={!message.trim() || isLoading}
        >
          <Send size={20} />
        </button>
      </div>
      {isLoading && (
        <div className="text-xs text-gray-500 mt-2">Support assistant is typing...</div>
      )}
    </div>
  );
};

export default ChatInput;
