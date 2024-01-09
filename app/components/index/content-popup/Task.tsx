import TaskItem from "./task/TaskItem";

const Task = () => {
  return (
    <div className="px-8 py-6">
      {/* header */}
      <div className="fixed z-10 right-[34px] px-8 w-2/5 box-between">
        {/* select */}
        <div className="pl-[10%]">
          <select className="h-10 bg-white py-2.5 px-3.5 border border-gray1 text-gray3 text-xs rounded font-semibold">
            <option value="My Tasks">My Tasks</option>
          </select>
        </div>

        {/* btn */}
        <button className="h-10 btn1">New Task</button>
      </div>

      <div className="pt-16">
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </div>
  );
};

export default Task;
