import imgMore from "@/public/img/inbox-detail/more.svg";
import imgArrow from "@/public/img/task/up-arrow.svg";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import ClickOutside from "@/app/components/ClickOutside";

interface ITaskCheckbox {
  bOpened: boolean;
  setBOpened: Dispatch<SetStateAction<boolean>>;
}

const TaskCheckbox = ({ bOpened, setBOpened }: ITaskCheckbox) => {
  const [bPopupOn, setBPopupOn] = useState(false);
  const [bChecked, setBChecked] = useState(false);

  const bLineThrough = bChecked ? "line-through" : "";

  return (
    <div className="box-between mb-[17px]">
      <div className="box-equal gap-x-[22px]">
        <input
          type="checkbox"
          className="w-[18px]"
          defaultChecked={bChecked}
          onClick={(e) => setBChecked(e.currentTarget.checked)}
        />

        <p className={`text-gray3 font-bold text-xs ${bLineThrough}`}>
          Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div className="box-equal text-xs">
        {bOpened ? <p className="text-red1 mr-5">2 Days Left</p> : null}

        <p className="text-gray3 mr-2.5">12/06/2021</p>

        <button className="mr-2.5" onClick={() => setBOpened(!bOpened)}>
          <Image
            src={imgArrow}
            alt="Arrow"
            className={bOpened ? "" : "rotate-180"}
          />
        </button>

        <div className="relative">
          <button disabled={bPopupOn} onClick={() => setBPopupOn(true)}>
            <Image src={imgMore} alt="More" />
          </button>

          {/* delete popup */}
          {bPopupOn ? (
            <ClickOutside onClickOutside={() => setBPopupOn(false)}>
              <div className="absolute right-0 z-20 bg-white rounded border border-gray1 text-sm w-[126px]">
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
      </div>
    </div>
  );
};

export default TaskCheckbox;
