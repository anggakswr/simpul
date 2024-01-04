import usePopupStore from "@/app/store/popup";
import { ReactNode } from "react";

interface IWhiteBtnProp {
  sText: "Task" | "Inbox";
  rnIcon: ReactNode;
}

const WhiteBtn = ({ sText, rnIcon }: IWhiteBtnProp) => {
  const { setSPopup } = usePopupStore((state) => state);

  return (
    <button
      className="w-[60px] h-[60px] rounded-full bg-white box-center relative"
      onClick={() => setSPopup(sText)}
    >
      <p className="absolute -top-8 text-white text-sm font-bold">{sText}</p>
      {rnIcon}
    </button>
  );
};

export default WhiteBtn;
