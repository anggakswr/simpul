import Image from "next/image";
import imgDots from "@/public/img/inbox-detail/more.svg";
import { useState } from "react";
import ClickOutside from "@/app/components/ClickOutside";

const MoreOptions = () => {
  const [bPopupOn, setBPopupOn] = useState(false);

  const onClickOutside = () => {
    setBPopupOn(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="w-4 min-w-4"
        disabled={bPopupOn}
        onClick={() => setBPopupOn(true)}
      >
        <Image src={imgDots} alt="Options" />
      </button>

      {/* popup */}
      {bPopupOn ? (
        <ClickOutside onClickOutside={onClickOutside}>
          <div className="absolute z-20 bg-white rounded border text-sm w-[126px]">
            <button
              type="button"
              className="w-full h-10 flex items-center px-3 font-medium text-left text-blue1 border-b"
              onClick={() => setBPopupOn(false)}
            >
              Edit
            </button>

            <button
              type="button"
              className="w-full h-10 flex items-center px-3 font-medium text-left text-red1"
              onClick={() => setBPopupOn(false)}
            >
              Delete
            </button>
          </div>
        </ClickOutside>
      ) : null}
    </div>
  );
};

export default MoreOptions;
