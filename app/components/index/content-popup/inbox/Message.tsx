import Image from "next/image";
import imgPerson from "@/public/img/person.svg";
import imgPerson2 from "@/public/img/white-person.svg";
import useMessageStore from "@/app/store/message";

export interface IMessage {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const Message = ({ oMessage }: { oMessage: IMessage }) => {
  const { setId } = useMessageStore((state) => state);

  return (
    <div
      className="cursor-pointer border-b-2 border-gray1 last:border-b-0 py-[22px] flex justify-between"
      onClick={() => setId(oMessage.id)}
    >
      <div className="flex pr-12">
        {/* gray circle */}
        <div className="w-[34px] h-[34px] bg-[#E0E0E0] rounded-full box-center">
          <Image src={imgPerson} alt="Person" />
        </div>

        {/* blue circle */}
        <div className="-ml-[17px] mr-[17px] w-[34px] h-[34px] bg-blue1 rounded-full box-center">
          <Image src={imgPerson2} alt="Person" />
        </div>

        {/* texts */}
        <div>
          <p className="font-bold text-blue1">{oMessage.name}</p>
          <p className="text-sm text-gray3 font-bold">{oMessage.username}</p>
          <p className="text-sm text-gray3">{oMessage.email}</p>
        </div>
      </div>

      {/* date & red dot */}
      <div className="flex flex-col justify-between items-end">
        <p className="text-sm text-gray3">{oMessage.phone}</p>

        {/* red dot */}
        {oMessage.id > 1 ? null : (
          <div className="w-2.5 h-2.5 rounded-full bg-red1" />
        )}
      </div>
    </div>
  );
};

export default Message;
