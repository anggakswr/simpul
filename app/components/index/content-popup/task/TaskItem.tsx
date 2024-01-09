import { useState } from "react";
import TaskCheckbox from "./task-item/TaskCheckbox";
import DatePicker from "./task-item/DatePicker";
import DescriptionEdit from "./task-item/DescriptionEdit";

const TaskItem = () => {
  const [bOpened, setBOpened] = useState(true);

  return (
    <div className="border-b border-gray1 mb-5">
      <TaskCheckbox bOpened={bOpened} setBOpened={setBOpened} />

      {bOpened ? (
        <>
          <DatePicker />
          <DescriptionEdit />
        </>
      ) : null}
    </div>
  );
};

export default TaskItem;
