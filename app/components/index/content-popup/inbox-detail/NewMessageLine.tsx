import Image from "next/image";
import imgArrow from "@/public/img/inbox-detail/gray-down-arrow.svg";

const NewMessageLine = () => {
  return (
    <div className="py-6 box-equal gap-x-2.5">
      {/* red line */}
      <div className="flex-1 h-px bg-red1" />

      <div className="box-equal gap-x-1">
        {/* text */}
        <p className="text-red1 text-sm font-bold">New Message</p>

        {/* icon */}
        <Image src={imgArrow} alt="Down Arrow" />
      </div>

      {/* red line */}
      <div className="flex-1 h-px bg-red1" />
    </div>
  );
};

export default NewMessageLine;
