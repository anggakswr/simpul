import imgMore from "@/public/img/inbox-detail/more.svg";
import imgArrow from "@/public/img/task/up-arrow.svg";
import Image from "next/image";
import { useState } from "react";

const TaskCheckbox = () => {
  const [bOpened, setBOpened] = useState(true);
  const [bChecked, setBChecked] = useState(false);

  const bLineThrough = bChecked ? "line-through" : "";

  return (
    <div className="box-between">
      <div className="box-equal gap-x-[22px]">
        <input
          type="checkbox"
          className="w-[18px]"
          defaultChecked={bChecked}
          onClick={(e) => {
            setBChecked(e.currentTarget.checked);

            if (e.currentTarget.checked) {
              setBOpened(false);
            } else {
              setBOpened(true);
            }
          }}
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

        <button>
          <Image src={imgMore} alt="More" />
        </button>
      </div>
    </div>
  );
};

export default TaskCheckbox;
