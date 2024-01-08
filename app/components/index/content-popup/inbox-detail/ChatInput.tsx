import axios1 from "@/app/helpers/axios1";
import useChatStore from "@/app/store/chat";
import useMessageStore from "@/app/store/message";
import dayjs from "dayjs";
import { useState } from "react";

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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        vSubmit();
      }}
      className="fixed z-10 right-[34px] bottom-[110px] w-2/5 p-5 bg-white rounded flex gap-x-[13px]"
    >
      <input
        type="text"
        className="w-full rounded-[5px] px-4 py-2.5 border border-gray1 text-xs placeholder-gray2"
        placeholder="Type a new message"
        value={sMessage}
        onChange={(e) => setSMessage(e.target.value)}
      />

      <button className="font-bold text-white text-xs bg-blue1 rounded py-2 px-4">
        Send
      </button>
    </form>
  );
};

export default ChatInput;
