import { create } from "zustand";

interface MessageState {
  id: number;
  sName: string;
  setId: (id: number) => void;
  setSName: (sName: string) => void;
}

const useMessageStore = create<MessageState>()((set) => ({
  id: 0,
  sName: "",
  setId: (id) => set(() => ({ id })),
  setSName: (sName) => set(() => ({ sName })),
}));

export default useMessageStore;
