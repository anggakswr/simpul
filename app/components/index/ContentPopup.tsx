import usePopupStore from "@/app/store/popup";
import Image from "next/image";
import imgSearch from "@/public/img/search.svg";

const ContentPopup = () => {
  const { sPopup } = usePopupStore((state) => state);

  const bPopupOn = ["Inbox", "Task"].includes(sPopup);
  const sDefaultCSS = "fixed right-[34px] bg-white rounded h-3/4 w-2/5";
  // const sPosition = bPopupOn ? "bottom-[110px]" : "-bottom-[999px]";

  return (
    <div
      className={`${sDefaultCSS} ${
        sPopup === "Inbox" ? "bottom-[110px]" : "-bottom-[999px]"
      }`}
    >
      {/* search input */}
      <div className="absolute z-10 inset-x-0 pt-5 px-[34px]">
        <div className="relative">
          <input
            type="text"
            className="w-full rounded-[5px] px-[10%] py-2 border border-gray1 text-sm placeholder-gray2"
            placeholder="Search"
          />

          {/* search icon */}
          <div className="absolute inset-y-0 right-[10%] box-center">
            <Image src={imgSearch} alt="Search" />
          </div>
        </div>
      </div>

      {/* loading */}
      <div className="absolute inset-x-0 box-center h-full">
        <div className="box-center flex-col gap-4">
          {/* circle */}
          <div className="animate-spin w-20 h-20 border-[10px] border-[#F8F8F8] border-t-[#C4C4C4] border-l-[#C4C4C4] rounded-full"></div>

          {/* text */}
          <p className="text-sm text-gray3">Loading Chats ...</p>
        </div>
      </div>
    </div>
  );
};

export default ContentPopup;