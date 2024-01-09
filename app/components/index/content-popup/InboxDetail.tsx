import useMessageStore from "@/app/store/message";
import CustomHeader from "./inbox-detail/CustomHeader";
import ChatBox, { IChat } from "./inbox-detail/ChatBox";
import getInboxDetails from "@/app/query/getInboxDetails";
import TodayLine from "./inbox-detail/TodayLine";
import NewMessageLine from "./inbox-detail/NewMessageLine";
import ChatInput from "./inbox-detail/ChatInput";
import useChatStore from "@/app/store/chat";
import { useEffect } from "react";

const InboxDetail = () => {
  // fetcher
  const { data } = getInboxDetails();
  const aChats = data?.data ?? [];

  // global state
  const { id } = useMessageStore((state) => state);
  const { chats, setChats } = useChatStore((state) => state);

  useEffect(() => {
    setChats([]);
  }, [id, setChats]);

  if (!id) {
    return null;
  }

  return (
    <div>
      {/* header */}
      <CustomHeader />

      {/* body */}
      {aChats.length ? (
        <div className="px-5 pt-[86px] pb-[78px]">
          {/* render first chat */}
          <ChatBox sType="LEFT" oChat={aChats[0]} />

          {/* today mmmm dd, yyyy */}
          <TodayLine />

          {/* render chats except first & last chats */}
          {aChats
            .filter(
              (oChat2: any, nIndex: number) =>
                nIndex > 0 && nIndex < aChats.length - 1
            )
            .map((oChat: IChat) => (
              <ChatBox key={`chat-${oChat.id}`} sType="LEFT" oChat={oChat} />
            ))}

          {/* new message */}
          <NewMessageLine />

          {/* render last chat */}
          <ChatBox sType="LEFT" oChat={aChats[aChats.length - 1]} />

          {/* render my chats */}
          {chats.map((oChat) => (
            <ChatBox
              key={`my-chat-${oChat.id}`}
              sType="RIGHT"
              oChat={{
                id: oChat.id,
                body: oChat.sMessage,
                email: "You",
                sTime: oChat.sTime,
              }}
            />
          ))}
        </div>
      ) : null}

      {/* footer */}
      <ChatInput />
    </div>
  );
};

export default InboxDetail;
