import usePopupStore from "@/app/store/popup";
import Inbox from "./content-popup/Inbox";
import InboxDetail from "./content-popup/InboxDetail";
import GlobalLoading from "./content-popup/GlobalLoading";
import Task from "./content-popup/Task";

const ContentPopup = () => {
  // global state
  const { sPopup } = usePopupStore((state) => state);

  const sDefaultCSS =
    "overflow-x-hidden fixed right-[34px] bg-white rounded h-3/4 w-2/5";

  const sPosition = ["Inbox", "Task"].includes(sPopup)
    ? "bottom-[110px]"
    : "-bottom-[999px] opacity-0";

  // inbox
  return (
    <div className={`${sDefaultCSS} ${sPosition}`}>
      <GlobalLoading />

      {sPopup === "Inbox" ? (
        <>
          <Inbox />
          <InboxDetail />
        </>
      ) : null}

      {sPopup === "Task" ? (
        <>
          <Task />
          {/* <TaskDetail /> */}
        </>
      ) : null}
    </div>
  );
};

export default ContentPopup;
