
import ChatWindow from "../components/ChatWindow";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-brand-700">TechVista Solutions Support</h1>
          <p className="text-gray-600">
            How can we help you today? Ask about our services, check your ticket status, or get support contact information.
          </p>
        </div>
        
        <div className="h-[600px]">
          <ChatWindow />
        </div>

        <div className="text-center mt-6 text-sm text-gray-500">
          <p>© 2023 TechVista Solutions. All rights reserved.</p>
          <p className="mt-1">This is a demonstration of a RAG-based support chatbot system.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
