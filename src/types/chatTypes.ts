
export interface Message {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: string;
}

export interface Ticket {
  id: string;
  subject: string;
  description: string;
  status: "open" | "in_progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high";
  createdAt: string;
  updatedAt: string;
}

export interface CompanyInfo {
  name: string;
  description: string;
  services: string[];
  contactInfo: {
    support: string;
    sales: string;
    email: string;
    address: string;
  };
}
