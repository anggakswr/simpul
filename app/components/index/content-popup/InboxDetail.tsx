import useMessageStore from "@/app/store/message";
import CustomHeader from "./inbox-detail/CustomHeader";
import ChatBox from "./inbox-detail/ChatBox";

const InboxDetail = () => {
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
        <ChatBox sType="RIGHT" />
        <ChatBox sType="LEFT" />
      </div>
    </div>
  );
};

export default InboxDetail;
