import Image from "next/image";
import imgArrow from "@/public/img/inbox-detail/gray-down-arrow.svg";

const NewMessageTag = () => {
  const vScrollDown = () => {
    window.scrollTo(0, 100);
  };

  return (
    <div className="absolute -top-10 inset-x-0 box-center">
      <a
        href="#bottom"
        className="cursor-pointer box-equal bg-[#E9F3FF] rounded-[5px] py-2 px-3"
        onClick={vScrollDown}
      >
        {/* text */}
        <p className="text-blue1 text-xs font-bold">New Message</p>

        {/* icon */}
        <Image src={imgArrow} alt="Down Arrow" />
      </a>
    </div>
  );
};

export default NewMessageTag;
