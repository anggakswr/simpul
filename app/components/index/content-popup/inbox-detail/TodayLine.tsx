import dayjs from "dayjs";

const TodayLine = () => {
  return (
    <div className="py-6 box-equal gap-x-2.5">
      {/* red line */}
      <div className="flex-1 h-px bg-gray1" />

      {/* text */}
      <p className="text-gray1 text-sm font-bold">
        Today {dayjs().format("MMMM DD, YYYY")}
      </p>

      {/* red line */}
      <div className="flex-1 h-px bg-gray1" />
    </div>
  );
};

export default TodayLine;
