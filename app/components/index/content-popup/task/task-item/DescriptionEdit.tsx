import Image from "next/image";
import imgPencil from "@/public/img/task/pencil.svg";

const DescriptionEdit = () => {
  return (
    <div className="flex items-start gap-x-[18px] mb-[13px]">
      <div className="w-5 h-5 box-center">
        <Image src={imgPencil} alt="Pencil" />
      </div>

      <p className="flex-1 text-xs text-gray3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est cumque,
        ipsum, eum et libero enim vel nostrum quasi labore fuga suscipit
        perferendis facere ear.
      </p>
    </div>
  );
};

export default DescriptionEdit;
