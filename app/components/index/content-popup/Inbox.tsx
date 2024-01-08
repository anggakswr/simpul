import getMessages from "@/app/query/getMessages";
import useMessageStore from "@/app/store/message";
import Image from "next/image";
import Message, { IMessage } from "./inbox/Message";
import imgSearch from "@/public/img/search.svg";

const Inbox = () => {
  // fetcher
  const { data } = getMessages();
  const aMessages = data?.data ?? [];

  // global state
  const { id } = useMessageStore((state) => state);
  const sTransition = id ? "left-[100%]" : "";

  return (
    <div
      className={`absolute inset-0 overflow-y-scroll bg-white ${sTransition}`}
    >
      {/* search input */}
      <div className="fixed z-10 right-[34px] w-2/5 bg-white rounded py-6 px-8">
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

      {/* loading was here */}

      {/* messages */}
      <div className="pt-20 pb-6 px-8">
        {!aMessages.length ? <p>No data</p> : null}

        {aMessages.map((oMessage: IMessage) => (
          <Message key={`msg-${oMessage.id}`} oMessage={oMessage} />
        ))}
      </div>
    </div>
  );
};

export default Inbox;
