import Image from "next/image";
import imgDots from "@/public/img/inbox-detail/more.svg";

interface IChatBoxProps {
  sType: "RIGHT" | "LEFT";
}

const ChatBox = ({ sType }: IChatBoxProps) => {
  return (
    <div>
      <div className="ml-auto w-2/3">
        {/* sender */}
        <p className="font-bold text-[#9B51E0] text-sm text-right mb-1.5">
          You
        </p>

        <div className="flex items-start gap-x-[5px]">
          {/* dots */}
          <button className="w-4 min-w-4">
            <Image src={imgDots} alt="Options" />
          </button>

          {/* texts */}
          <div className="bg-[#EEDCFF] text-xs text-gray3 rounded-[5px] p-2.5">
            <p className="break-words mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              iure ipsa, maiores dignissimos laudantium vitae?
            </p>

            <p>19:32</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
