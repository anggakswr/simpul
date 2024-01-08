import useLoadingStore from "@/app/store/loading";

const GlobalLoading = () => {
  const { bLoading } = useLoadingStore((state) => state);

  if (!bLoading) {
    return null;
  }

  return (
    <div className="fixed z-10 right-[34px] bg-white rounded h-3/4 w-2/5 box-center pointer-events-none">
      <div className="box-center flex-col gap-4">
        {/* circle */}
        <div className="animate-spin w-20 h-20 border-[10px] border-[#F8F8F8] border-t-[#C4C4C4] border-l-[#C4C4C4] rounded-full"></div>

        {/* text */}
        <p className="text-sm text-gray3">Loading Chats ...</p>
      </div>
    </div>
  );
};

export default GlobalLoading;
