import { create } from "zustand";

interface MessageState {
  id: number;
  setId: (id: number) => void;
}

const useMessageStore = create<MessageState>()((set) => ({
  id: 0,
  setId: (id) => set(() => ({ id })),
}));

export default useMessageStore;
