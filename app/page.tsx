"use client";

import Image from "next/image";
import imgWhiteLightning from "@/public/img/white-lightning.svg";
import imgBlueMessage from "@/public/img/blue-message.svg";
import imgOrangeBook from "@/public/img/orange-book.svg";
import usePopupStore from "./store/popup";
import WhiteBtn from "./components/index/WhiteBtn";
import ContentPopup from "./components/index/ContentPopup";

const Page = () => {
  const { sPopup, setSPopup } = usePopupStore((state) => state);

  return (
    <div className="fixed bottom-[27px] right-[34px] flex">
      {/* popup / white btn content */}
      <ContentPopup />

      {/* white btns */}
      <div
        className={`h-[68px] box-equal gap-x-[26px] fixed ${
          sPopup === "" ? "right-0 opacity-0" : "right-32"
        }`}
      >
        {/* if inbox btn is clicked */}
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
        className={`absolute w-[68px] h-[68px] rounded-full bg-gray3 ${
          ["Inbox", "Task"].includes(sPopup) ? "!right-[15px]" : "right-0"
        }`}
      />
    </div>
  );
};

export default Page;
