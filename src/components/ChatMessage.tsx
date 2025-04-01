
import { Message } from "../types/chatTypes";
import { cn } from "../lib/utils";

interface ChatMessageProps {
  message: Message;
  animate?: boolean;
}

const ChatMessage = ({ message, animate = false }: ChatMessageProps) => {
  const isUser = message.sender === "user";
  const formattedTime = new Date(message.timestamp).toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <div
      className={cn(
        "flex w-full mb-4",
        isUser ? "justify-end" : "justify-start",
        animate && "animate-message-fade-in"
      )}
    >
      <div className="max-w-[80%]">
        {!isUser && (
          <div className="flex items-center mb-1">
            <div className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center mr-2">
              <span className="text-white text-xs font-bold">TV</span>
            </div>
            <span className="text-xs text-gray-500">Support Agent</span>
          </div>
        )}
        <div
          className={cn(
            "rounded-lg p-3",
            isUser 
              ? "bg-brand-600 text-white rounded-tr-none" 
              : "bg-gray-100 text-gray-800 rounded-tl-none"
          )}
        >
          <div className="whitespace-pre-wrap">{message.content}</div>
          <div
            className={cn(
              "text-xs mt-1",
              isUser ? "text-brand-200" : "text-gray-500"
            )}
          >
            {formattedTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
