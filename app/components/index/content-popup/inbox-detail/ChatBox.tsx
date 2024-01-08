import Image from "next/image";
import imgDots from "@/public/img/inbox-detail/more.svg";

export interface IChat {
  id: number;
  email: string;
  body: string;
  sTime?: string;
}

interface IChatBoxProps {
  sType: "RIGHT" | "LEFT";
  oChat: IChat;
}

const ChatBox = ({ sType, oChat }: IChatBoxProps) => {
  const bRight = sType === "RIGHT";
  const sReverse = bRight ? "justify-end" : "flex-row-reverse justify-start";
  const sBg = bRight ? "bg-[#EEDCFF]" : "bg-[#FCEED3]";

  return (
    <div className="mb-2.5 last:mb-0">
      <div className={`w-2/3 ${bRight ? "ml-auto" : "mr-auto"}`}>
        {/* sender */}
        {bRight ? (
          <p className="font-bold text-[#9B51E0] text-sm text-right mb-1.5">
            You
          </p>
        ) : (
          <p className="font-bold text-[#E5A443] text-sm mb-1.5">
            {oChat.email}
          </p>
        )}

        <div className={`flex ${sReverse} items-start gap-x-[5px]`}>
          {/* dots */}
          <button className="w-4 min-w-4">
            <Image src={imgDots} alt="Options" />
          </button>

          {/* texts */}
          <div className={`${sBg} text-xs text-gray3 rounded-[5px] p-2.5`}>
            <p className="break-words mb-3">{oChat.body}</p>

            <p>{oChat.sTime ?? "19:32"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
