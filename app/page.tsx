"use client";

import Image from "next/image";
import imgWhiteLightning from "@/public/img/white-lightning.svg";
import imgBlueMessage from "@/public/img/blue-message.svg";
import imgOrangeBook from "@/public/img/orange-book.svg";
import usePopupStore from "./store/popup";
import WhiteBtn from "./components/index/WhiteBtn";

const Page = () => {
  const { sPopup, setSPopup } = usePopupStore((state) => state);

  return (
    <div className="fixed bottom-[27px] right-[34px] box-equal gap-x-[26px]">
      {/* if inbox btn is clicked */}
      <div
        className={`box-equal gap-x-[26px] fixed ${
          sPopup === "" ? "right-0" : "right-32"
        }`}
      >
        {["All", "Inbox"].includes(sPopup) ? (
          <WhiteBtn
            sText="Inbox"
            rnIcon={<Image src={imgBlueMessage} alt="Blue Message" />}
          />
        ) : null}

        {/* if task btn is clicked */}
        {["All", "Task"].includes(sPopup) ? (
          <WhiteBtn
            sText="Task"
            rnIcon={<Image src={imgOrangeBook} alt="Orange Book" />}
          />
        ) : null}
      </div>

      {/* default blue btn */}
      <button
        className="w-[68px] h-[68px] rounded-full bg-blue1 box-center relative z-10"
        onClick={() => {
          if (sPopup === "All") {
            setSPopup("");
          } else {
            setSPopup("All");
          }
        }}
      >
        <Image src={imgWhiteLightning} alt="White Lightning" />
      </button>

      {/* gray bg */}
      <div
        className={`absolute w-[68px] h-[68px] rounded-full bg-[#4F4F4F] ${
          ["Inbox", "Task"].includes(sPopup) ? "!right-[15px]" : "right-0"
        }`}
      />
    </div>
  );
};

export default Page;
