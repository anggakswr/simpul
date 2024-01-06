import usePopupStore from "@/app/store/popup";
import Inbox from "./content-popup/Inbox";
import InboxDetail from "./content-popup/InboxDetail";

const ContentPopup = () => {
  // global state
  const { sPopup } = usePopupStore((state) => state);

  const sDefaultCSS =
    "overflow-x-hidden overflow-y-scroll fixed right-[34px] bg-white rounded h-3/4 w-2/5";

  const sPosition = ["Inbox", "Task"].includes(sPopup)
    ? "bottom-[110px]"
    : "-bottom-[999px] opacity-0";

  // inbox
  return (
    <div className={`${sDefaultCSS} ${sPosition}`}>
      {sPopup === "Inbox" ? (
        <>
          <Inbox />
          <InboxDetail />
        </>
      ) : null}
    </div>
  );
};

export default ContentPopup;
