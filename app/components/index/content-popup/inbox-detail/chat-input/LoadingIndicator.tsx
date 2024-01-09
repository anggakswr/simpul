import useLoadingStore from "@/app/store/loading";
import Image from "next/image";
import imgLoading from "@/public/img/inbox-detail/loading-circle.svg";

const LoadingIndicator = () => {
  // global state
  const { bLoading } = useLoadingStore((state) => state);

  if (!bLoading) {
    return null;
  }

  return (
    <div className="absolute -top-11 px-5 inset-x-0">
      <div className="bg-[#E9F3FF] rounded-[5px] h-[54px] box-equal gap-x-[11px] px-2.5">
        <div className="w-[34px] h-[34px] box-center animate-spin">
          <Image src={imgLoading} alt="Blue Circle" />
        </div>

        <p className="text-xs">
          Please wait while we connect you with one of our team ...
        </p>
      </div>
    </div>
  );
};

export default LoadingIndicator;
