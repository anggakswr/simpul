import useMessageStore from "@/app/store/message";

const ChatInput = () => {
  const { id } = useMessageStore((state) => state);

  const vSubmit = () => {
    //
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        vSubmit();
      }}
      className="fixed right-[34px] bottom-[110px] w-2/5 p-5 bg-white rounded flex gap-x-[13px]"
    >
      <input
        type="text"
        className="w-full rounded-[5px] px-4 py-2.5 border border-gray1 text-xs placeholder-gray2"
        placeholder="Type a new message"
      />

      <button className="font-bold text-white text-xs bg-blue1 rounded py-2 px-4">
        Send
      </button>
    </form>
  );
};

export default ChatInput;
