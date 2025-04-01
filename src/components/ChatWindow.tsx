
import { useEffect, useRef, useState } from "react";
import { Message } from "../types/chatTypes";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { chatApi } from "../services/apiService";

const ChatWindow = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load past conversations when component mounts
    const loadPastConversations = async () => {
      try {
        const pastMessages = await chatApi.getPastConversations();
        setMessages(pastMessages);
      } catch (error) {
        console.error("Error loading past conversations:", error);
      }
    };

    loadPastConversations();
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (content: string) => {
    // Add user message to chat
    const userMessage: Message = {
      id: `msg-${Date.now()}-user`,
      content,
      sender: "user",
      timestamp: new Date().toISOString(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      // Get response from API
      const assistantMessage = await chatApi.sendMessage(content);
      
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      
      // Add error message
      const errorMessage: Message = {
        id: `msg-${Date.now()}-error`,
        content: "Sorry, there was an error processing your request. Please try again.",
        sender: "assistant",
        timestamp: new Date().toISOString(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full rounded-lg shadow-lg border bg-white overflow-hidden">
      <ChatHeader />
      
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {messages.map((message, index) => (
          <ChatMessage 
            key={message.id} 
            message={message} 
            animate={index === messages.length - 1}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} isLoading={loading} />
    </div>
  );
};

export default ChatWindow;
