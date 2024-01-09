import useMessageStore from "@/app/store/message";
import imgClose from "@/public/img/inbox-detail/close.svg";
import imgArrow from "@/public/img/inbox-detail/left-arrow.svg";
import Image from "next/image";

const CustomHeader = () => {
  const { setId, sName } = useMessageStore((state) => state);

  return (
    <div className="fixed z-10 right-[34px] w-2/5 bg-white rounded p-5 box-between border-b border-[#BDBDBD]">
      <div className="box-equal gap-x-3.5">
        {/* back btn */}
        <button onClick={() => setId(0)}>
          <Image src={imgArrow} alt="Arrow" />
        </button>

        {/* texts */}
        <div>
          <p className="text-blue1 font-bold">{sName}</p>
          <p className="text-gray2 text-xs">2 Participants</p>
        </div>
      </div>

      {/* close */}
      <button onClick={() => setId(0)}>
        <Image src={imgClose} alt="Close" />
      </button>
    </div>
  );
};

export default CustomHeader;
