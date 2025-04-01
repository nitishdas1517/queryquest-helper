
import { Message, Ticket, CompanyInfo } from "../types/chatTypes";

export const companyInfo: CompanyInfo = {
  name: "TechVista Solutions",
  description: "TechVista Solutions is a leading technology company providing innovative IT solutions to businesses worldwide. We specialize in cloud services, cybersecurity, AI-driven analytics, and enterprise software development.",
  services: [
    "Cloud Infrastructure and Management",
    "Cybersecurity Solutions",
    "AI and Machine Learning Implementations",
    "Enterprise Software Development",
    "IT Consultation and Strategy",
    "Data Analytics and Business Intelligence",
    "Tech Support and Maintenance"
  ],
  contactInfo: {
    support: "+1-800-555-0123",
    sales: "+1-800-555-0145",
    email: "support@techvista-solutions.com",
    address: "123 Tech Park Avenue, Silicon Valley, CA 94043"
  }
};

export const dummyTickets: Ticket[] = [
  {
    id: "TKT-2023-10-15-001",
    subject: "Login Issues",
    description: "I'm unable to login to my account since yesterday. I've tried resetting my password but still facing issues.",
    status: "in_progress",
    priority: "high",
    createdAt: "2023-10-15T14:23:10Z",
    updatedAt: "2023-10-15T15:45:22Z"
  },
  {
    id: "TKT-2023-10-10-002",
    subject: "Billing Inquiry",
    description: "I want to understand the charges on my recent invoice dated October 8th.",
    status: "resolved",
    priority: "medium",
    createdAt: "2023-10-10T09:14:32Z",
    updatedAt: "2023-10-11T11:30:15Z"
  },
  {
    id: "TKT-2023-10-14-003",
    subject: "Service Outage Report",
    description: "Our cloud services dashboard is showing intermittent connectivity issues.",
    status: "closed",
    priority: "high",
    createdAt: "2023-10-14T16:42:05Z",
    updatedAt: "2023-10-14T19:20:18Z"
  },
  {
    id: "TKT-2023-10-16-004",
    subject: "Feature Request",
    description: "We'd like to request an additional reporting feature for our analytics dashboard.",
    status: "open",
    priority: "low",
    createdAt: "2023-10-16T10:30:00Z",
    updatedAt: "2023-10-16T10:30:00Z"
  }
];

export const pastConversations: Message[] = [
  {
    id: "msg-1",
    content: "Hello, I need help with my account.",
    sender: "user",
    timestamp: "2023-10-15T14:20:10Z"
  },
  {
    id: "msg-2",
    content: "Hi there! I'm your TechVista Solutions support assistant. I'd be happy to help with your account. Could you please provide more details about the issue you're experiencing?",
    sender: "assistant",
    timestamp: "2023-10-15T14:20:30Z"
  },
  {
    id: "msg-3",
    content: "I can't log into my account. It says 'invalid credentials'.",
    sender: "user",
    timestamp: "2023-10-15T14:21:45Z"
  },
  {
    id: "msg-4",
    content: "I'm sorry to hear that. Let me help you troubleshoot this login issue. Have you tried resetting your password?",
    sender: "assistant",
    timestamp: "2023-10-15T14:22:15Z"
  },
  {
    id: "msg-5",
    content: "Yes, I tried that but still having issues.",
    sender: "user",
    timestamp: "2023-10-15T14:23:00Z"
  },
  {
    id: "msg-6",
    content: "I understand. I'll create a high-priority ticket for our technical team to investigate this further. Your ticket ID is TKT-2023-10-15-001. Our team will look into this right away and get back to you as soon as possible.",
    sender: "assistant",
    timestamp: "2023-10-15T14:23:30Z"
  },
  {
    id: "msg-7",
    content: "Thank you. When can I expect a response?",
    sender: "user",
    timestamp: "2023-10-15T14:24:00Z"
  },
  {
    id: "msg-8",
    content: "For high-priority tickets like yours, our team typically responds within 2-4 hours during business hours. You'll receive an email notification when they update your ticket. Is there anything else I can help you with in the meantime?",
    sender: "assistant",
    timestamp: "2023-10-15T14:24:30Z"
  },
  {
    id: "msg-9",
    content: "No, that's all for now. Thank you.",
    sender: "user",
    timestamp: "2023-10-15T14:25:00Z"
  },
  {
    id: "msg-10",
    content: "You're welcome! If you have any other questions or concerns, feel free to reach out to us. Our support team is available 24/7. Have a great day!",
    sender: "assistant",
    timestamp: "2023-10-15T14:25:30Z"
  }
];
