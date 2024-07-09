import { FunctionComponent, RefObject, useRef, useState } from "react";
import { ITask } from "./TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
/////////////////////
//TASK
/////////////////////

interface IProps {
  task: ITask,
  deleteTask: () => void,
  editTask: (i: number, updatedTask: ITask) => void,
  index: number
}

//also possible to write FC
const Task: FunctionComponent<IProps> = ({
  task: { number, title, isComplete, updatedAt },
  deleteTask,
  editTask,
  index,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const textRef: RefObject<HTMLTextAreaElement> = useRef(null); //???

  const handleClickSave = () => {
    if (textRef.current) {
      editTask(index, {
        number,
        title: textRef.current.value,
        isComplete,
        updatedAt: new Date().toISOString(),
      });
      setIsEdit(false);
    }
  };

  return (
    <div
      className={`container-fluid w-75 card mb-3 ${isComplete ? "bg-light" : ""}`}
      style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
    >
      <div className="card-body">
        {isEdit ? (
          <div>
            <textarea
              ref={textRef}
              defaultValue={title}
              className="form-control mb-2"
            ></textarea>
            <button
              onClick={handleClickSave}
              className="btn btn-success btn-sm me-2"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="d-flex align-items-center">
            <div>
              {number}.&nbsp;
            </div>
            <p
              className={`mb-0 ${isComplete ? "text-decoration-line-through text-muted" : ""
                }`}
              style={{ flexGrow: 1 }}
            >
              {title}
            </p>
            <small className="text-muted me-5">Updated on: {new Date(updatedAt).toLocaleString()}</small>
            <input
              checked={isComplete}
              onChange={() =>
                editTask(index, { title, isComplete: !isComplete, updatedAt: new Date().toISOString() })
              }
              type="checkbox"
              className="form-check-input me-2"
            />
            <button
              onClick={() => setIsEdit(true)}
              className="btn btn-warning btn-sm me-2"
            >
              Edit
            </button>
            <button onClick={deleteTask} className="btn btn-danger btn-sm">
              Del
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


export default Task;
