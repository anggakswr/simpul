import { create } from "zustand";

interface IChat {
  id: number;
  sMessage: string;
  sTime: string;
}

interface ChatState {
  chats: IChat[];
  setChats: (chats: IChat[]) => void;
  setNewChat: (chat: IChat) => void;
}

const useChatStore = create<ChatState>()((set) => ({
  chats: [],
  setChats: (chats) => set(() => ({ chats })),
  setNewChat: (chat) => set((state) => ({ chats: [...state.chats, chat] })),
}));

export default useChatStore;
