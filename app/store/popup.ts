import { create } from "zustand";

type PopupType = "" | "All" | "Task" | "Inbox";

interface PopupState {
  sPopup: PopupType;
  setSPopup: (sType: PopupType) => void;
}

const usePopupStore = create<PopupState>()((set) => ({
  sPopup: "",
  setSPopup: (sType) => set(() => ({ sPopup: sType })),
}));

export default usePopupStore;
