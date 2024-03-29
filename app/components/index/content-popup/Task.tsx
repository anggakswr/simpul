import { useEffect } from "react";
import TaskItem from "./task/TaskItem";
import usePopupStore from "@/app/store/popup";
import axios1 from "@/app/helpers/axios1";

const Task = () => {
  const { sPopup } = usePopupStore((state) => state);

  const vGetTasks = async () => {
    try {
      const res = await axios1.get("/todos");
      console.log("res.data", res.data);
    } catch {}
  };

  useEffect(() => {
    if (sPopup === "Task") {
      vGetTasks();
    }
  }, [sPopup]);

  return (
    <div className="px-8 py-6">
      {/* header */}
      <div className="bg-white fixed z-10 right-[34px] -mt-6 py-6 px-8 w-2/5 box-between">
        {/* select */}
        <div className="pl-[10%]">
          <select className="h-10 bg-white py-2.5 px-3.5 border border-gray1 text-gray3 text-xs rounded font-semibold">
            <option value="My Tasks">My Tasks</option>
            <option value="Personal Errands">Personal Errands</option>
            <option value="Urgent To-Do">Urgent To-Do</option>
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
