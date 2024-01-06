import useMessageStore from "@/app/store/message";
import CustomHeader from "./inbox-detail/CustomHeader";
import ChatBox, { IChat } from "./inbox-detail/ChatBox";
import getInboxDetails from "@/app/query/getInboxDetails";

const InboxDetail = () => {
  // fetcher
  const { data, isLoading, isFetching } = getInboxDetails();
  const aChats = data?.data ?? [];

  // global state
  const { id } = useMessageStore((state) => state);

  if (!id) {
    return null;
  }

  return (
    <div>
      {/* header */}
      <CustomHeader />

      {/* body */}
      <div className="p-5 !pt-[86px]">
        {aChats.map((oChat: IChat) => (
          <ChatBox key={`chat-${oChat.id}`} sType="LEFT" oChat={oChat} />
        ))}

        {/* <ChatBox sType="RIGHT" /> */}
      </div>
    </div>
  );
};

export default InboxDetail;
