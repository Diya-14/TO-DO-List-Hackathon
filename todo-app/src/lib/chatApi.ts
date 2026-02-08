import { fetchWithAuth } from './api';

export interface ChatMessage {
  id?: string;
  role: 'user' | 'assistant';
  message_text: string;
  timestamp?: string;
}

export interface ChatResponse {
  response: string;
}

export const chatApi = {
  // Send a message and get a response
  sendMessage: async (message: string): Promise<ChatResponse> => {
    const res = await fetchWithAuth('/chat', {
      method: 'POST',
      body: JSON.stringify({ message }),
    });
    
    if (!res.ok) {
      throw new Error('Failed to send message');
    }
    
    return res.json();
  },

  // Get chat history
  getHistory: async (): Promise<ChatMessage[]> => {
    const res = await fetchWithAuth('/chat/history');
    
    if (!res.ok) {
      throw new Error('Failed to load chat history');
    }
    
    return res.json();
  }
};
