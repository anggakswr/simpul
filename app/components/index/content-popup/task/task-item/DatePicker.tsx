import Image from "next/image";
import imgClock from "@/public/img/task/clock.svg";
import { useState } from "react";

const DatePicker = () => {
  const [sDate, setSDate] = useState("2024-01-01");

  return (
    <div className="box-equal gap-x-[18px] mb-[13px]">
      <div className="w-5 h-5 box-center">
        <Image src={imgClock} alt="Clock" />
      </div>

      <input
        type="date"
        className="h-10 text-xs text-gray3 rounded-[5px] border border-gray1 px-3.5"
        value={sDate}
        onChange={(e) => setSDate(e.target.value)}
      />
    </div>
  );
};

export default DatePicker;
