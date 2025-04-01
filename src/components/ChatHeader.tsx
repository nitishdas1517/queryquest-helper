
import { ArrowLeftCircle } from "lucide-react";
import { companyInfo } from "../data/mockData";

const ChatHeader = () => {
  return (
    <div className="flex items-center p-4 border-b bg-brand-700 text-white rounded-t-lg">
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center">
            <span className="font-bold text-lg">TV</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium">{companyInfo.name} Support</h3>
          <p className="text-xs text-brand-100">Online | Typically replies in minutes</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
