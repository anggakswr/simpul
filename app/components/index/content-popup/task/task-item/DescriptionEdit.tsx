import Image from "next/image";
import imgPencil from "@/public/img/task/pencil.svg";
import { useState } from "react";

const DescriptionEdit = () => {
  const [bEdit, setBEdit] = useState(false);
  const [sDesc, setSDesc] = useState(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est cumque, ipsum, eum et libero enim vel nostrum quasi labore fuga suscipit perferendis facere ear."
  );

  return (
    <div className="flex items-start gap-x-[18px] mb-[13px]">
      <div
        className="cursor-pointer w-5 h-5 box-center"
        onClick={() => setBEdit(!bEdit)}
      >
        <Image src={imgPencil} alt="Pencil" />
      </div>

      {bEdit ? (
        <textarea
          className="w-full text-xs text-gray3 rounded-[5px] border border-gray1 p-3"
          value={sDesc}
          onChange={(e) => setSDesc(e.target.value)}
          onBlur={() => setBEdit(false)}
        />
      ) : (
        <p className="flex-1 text-xs text-gray3">{sDesc}</p>
      )}
    </div>
  );
};

export default DescriptionEdit;
