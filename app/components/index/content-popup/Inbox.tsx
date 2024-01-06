import getMessages from "@/app/query/getMessages";
import useMessageStore from "@/app/store/message";
import Image from "next/image";
import Message, { IMessage } from "./inbox/Message";
import imgSearch from "@/public/img/search.svg";

const Inbox = () => {
  // fetcher
  const { data, isLoading, isFetching } = getMessages();
  const aMessages = data?.data ?? [];

  // global state
  const { id } = useMessageStore((state) => state);
  const sTransition = id ? "left-[100%]" : "";

  // if (id) {
  //   return null;
  // }

  return (
    <div
      className={`absolute inset-0 overflow-y-scroll bg-white ${sTransition}`}
    >
      {/* search input */}
      <div className="fixed z-10 right-[34px] w-2/5 bg-white rounded py-5 px-[29px]">
        <div className="relative">
          <input
            type="text"
            className="w-full h-8 rounded-[5px] px-[10%] border border-gray1 text-xs placeholder-gray2"
            placeholder="Search"
          />

          {/* search icon */}
          <div className="absolute inset-y-0 right-[10%] box-center">
            <Image src={imgSearch} alt="Search" />
          </div>
        </div>
      </div>

      {/* loading */}
      {isLoading || isFetching ? (
        <div className="absolute inset-x-0 box-center h-full">
          <div className="box-center flex-col gap-4">
            {/* circle */}
            <div className="animate-spin w-20 h-20 border-[10px] border-[#F8F8F8] border-t-[#C4C4C4] border-l-[#C4C4C4] rounded-full"></div>

            {/* text */}
            <p className="text-sm text-gray3">Loading Chats ...</p>
          </div>
        </div>
      ) : null}

      {/* messages */}
      <div className="pt-[52px] pb-5 px-[29px]">
        {!aMessages.length ? <p>No data</p> : null}

        {aMessages.map((oMessage: IMessage) => (
          <Message oMessage={oMessage} />
        ))}
      </div>
    </div>
  );
};

export default Inbox;
