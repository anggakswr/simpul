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
      {sPopup === "Inbox" ? (
        <WhiteBtn
          sText="Inbox"
          rnIcon={<Image src={imgBlueMessage} alt="Blue Message" />}
        />
      ) : null}

      {/* if task btn is clicked */}
      {sPopup === "Task" ? (
        <WhiteBtn
          sText="Task"
          rnIcon={<Image src={imgOrangeBook} alt="Orange Book" />}
        />
      ) : null}

      {/* if blue btn is clicked */}
      {sPopup === "All" ? (
        <>
          <WhiteBtn
            sText="Task"
            rnIcon={<Image src={imgOrangeBook} alt="Orange Book" />}
          />

          <WhiteBtn
            sText="Inbox"
            rnIcon={<Image src={imgBlueMessage} alt="Blue Message" />}
          />
        </>
      ) : null}

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
      {["Inbox", "Task"].includes(sPopup) ? (
        <div className="absolute w-[68px] h-[68px] rounded-full bg-[#4F4F4F] !right-[15px]" />
      ) : null}
    </div>
  );
};

export default Page;
