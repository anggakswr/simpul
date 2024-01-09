import axios1 from "@/app/helpers/axios1";
import useChatStore from "@/app/store/chat";
import useMessageStore from "@/app/store/message";
import dayjs from "dayjs";
import { useRef, useState } from "react";
import NewMessageTag from "./chat-input/NewMessageTag";
import useOnScreen from "@/app/hooks/useOnScreen";
import LoadingIndicator from "./chat-input/LoadingIndicator";

const ChatInput = () => {
  // local state
  const [sMessage, setSMessage] = useState("");

  // global state
  const { id } = useMessageStore((state) => state);
  const { setNewChat } = useChatStore((state) => state);

  const vSubmit = async () => {
    try {
      await axios1.post(`/posts/${id}/comments`, {
        data: sMessage,
      });

      const nRandom = Math.floor(Math.random() * (502 - 1000 + 1)) + 1000;

      setNewChat({ id: nRandom, sMessage, sTime: dayjs().format("HH:mm") });
      setSMessage("");
    } catch {}
  };

  const ref = useRef(null);
  const bVisible = useOnScreen(ref);

  return (
    <>
      {/* element in the bottom of the popup */}
      <hr id="bottom" ref={ref} />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          vSubmit();
        }}
        className="fixed z-10 right-[34px] bottom-[110px] w-2/5 p-5 bg-white rounded flex gap-x-[13px]"
      >
        <LoadingIndicator />

        <div className="relative w-full">
          {/* blue new message tag */}
          {!bVisible ? <NewMessageTag /> : null}

          <input
            type="text"
            className="w-full rounded-[5px] px-4 py-2.5 border border-gray1 text-xs placeholder-gray2"
            placeholder="Type a new message"
            value={sMessage}
            onChange={(e) => setSMessage(e.target.value)}
          />
        </div>

        <button className="btn1">Send</button>
      </form>
    </>
  );
};

export default ChatInput;
