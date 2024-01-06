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
        {/* right box */}
        <ChatBox sType="RIGHT" />

        {/* left box */}
        <div>
          <div className="mr-auto w-2/3">
            <p className="font-bold text-[#9B51E0] text-sm">You</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxDetail;
