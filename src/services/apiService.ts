
import { Message, Ticket } from "../types/chatTypes";
import { companyInfo, dummyTickets, pastConversations } from "../data/mockData";

// Helper function to simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Function to generate a response based on user query
const generateResponse = async (query: string): Promise<string> => {
  const lowerQuery = query.toLowerCase();
  
  // Check for ticket status questions
  if (lowerQuery.includes("ticket") && (lowerQuery.includes("status") || lowerQuery.includes("yesterday"))) {
    const ticket = dummyTickets.find(t => t.id === "TKT-2023-10-15-001");
    if (ticket) {
      return `Your ticket ${ticket.id} regarding "${ticket.subject}" is currently ${ticket.status.replace('_', ' ')}. Our technical team is actively working on this issue. The ticket was last updated on ${new Date(ticket.updatedAt).toLocaleString()}.`;
    }
  }
  
  // Check for services questions
  if (lowerQuery.includes("service") || lowerQuery.includes("what do you offer")) {
    return `${companyInfo.name} offers the following services:\n${companyInfo.services.map(service => `- ${service}`).join('\n')}`;
  }
  
  // Check for contact info
  if (lowerQuery.includes("contact") || lowerQuery.includes("phone") || lowerQuery.includes("number") || lowerQuery.includes("support team")) {
    return `You can reach our support team at ${companyInfo.contactInfo.support} or via email at ${companyInfo.contactInfo.email}. For sales inquiries, please call ${companyInfo.contactInfo.sales}.`;
  }
  
  // Check for company info
  if (lowerQuery.includes("about") || lowerQuery.includes("company") || lowerQuery.includes("who are you")) {
    return companyInfo.description;
  }
  
  // General greeting
  if (lowerQuery.includes("hello") || lowerQuery.includes("hi") || lowerQuery.includes("hey")) {
    return `Hello! I'm your ${companyInfo.name} support assistant. How can I help you today?`;
  }
  
  // Default response
  return `Thank you for reaching out to ${companyInfo.name} support. I'm not sure I understand your query. Could you please provide more details or rephrase your question? You can ask me about our services, check ticket status, or get contact information.`;
};

export const chatApi = {
  // Get past conversations
  getPastConversations: async (): Promise<Message[]> => {
    await delay(500); // Simulate network delay
    return [...pastConversations];
  },
  
  // Send message and get response
  sendMessage: async (message: string): Promise<Message> => {
    await delay(1000); // Simulate processing time
    
    const response = await generateResponse(message);
    
    return {
      id: `msg-${Date.now()}`,
      content: response,
      sender: "assistant",
      timestamp: new Date().toISOString()
    };
  },
  
  // Get ticket by ID
  getTicketById: async (ticketId: string): Promise<Ticket | undefined> => {
    await delay(300);
    return dummyTickets.find(ticket => ticket.id === ticketId);
  },
  
  // Get all tickets
  getAllTickets: async (): Promise<Ticket[]> => {
    await delay(300);
    return [...dummyTickets];
  }
};
