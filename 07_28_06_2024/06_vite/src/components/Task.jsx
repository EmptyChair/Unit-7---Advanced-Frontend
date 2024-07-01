import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
/* eslint-disable react/prop-types */
/////////////////////
//TASK
/////////////////////

// eslint-disable-next-line react/prop-types
function Task ({ task: { title, isComplete }, deleteTask, editTask, index }) {
    const [isEdit, setIsEdit] = React.useState(false);
    //const [updatedTask, setUpdatedTask] = React.useState(title);
    const textRef = React.useRef();
    //const completeRef = React.useRef();
  
    const handleClickSave = () => {
      //setUpdatedTask(textRef.current.value);
      editTask(index, { title: textRef.current.value, isComplete });
      setIsEdit(false);
    };
  
    return isEdit ? (
      <>
        <div>
          {/* diving into JS using the {} */}
          <textarea ref={textRef} defaultValue={title}></textarea>
          <button type="button" class="btn btn-success" onClick={handleClickSave}>
            Save
          </button>
        </div>
      </>
    ) : (
      <>
        <div class="d-flex flex-row">
          <p class="container col-8 text-center" style={{ textDecoration: isComplete ? "line-through" : "none" }}>
            {title}
          </p>
          <button
            type="button"
            class="btn btn-secondary mx-3"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
          <button type="button" class="btn btn-danger mx-3" onClick={deleteTask}>
            Delete
          </button>
  
          <input
            class="mx-3"
            checked={isComplete}
            onChange={() => editTask(index, { title, isComplete: !isComplete })}
            type="checkbox"
          />
        </div>
      </>
    );
  };

export default Task