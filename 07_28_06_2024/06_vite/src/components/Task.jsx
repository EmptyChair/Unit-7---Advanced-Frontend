import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
/* eslint-disable react/prop-types */
/////////////////////
//TASK
/////////////////////

// eslint-disable-next-line react/prop-types
function Task ({ task: { title, isComplete, updatedAt }, deleteTask, editTask, index }) {
    const [isEdit, setIsEdit] = React.useState(false);
    //const [updatedTask, setUpdatedTask] = React.useState(title);
    const textRef = React.useRef();
    //const completeRef = React.useRef();
  
    const handleClickSave = () => {
      //setUpdatedTask(textRef.current.value);
      editTask(index, { title: textRef.current.value, isComplete, updatedAt: new Date().toISOString()  });
      setIsEdit(false);
    };
  
    return isEdit ? (
      <>
        <div>
          {/* diving into JS using the {} */}
          <textarea ref={textRef} defaultValue={title}></textarea>
          <button type="button" className="btn btn-success" onClick={handleClickSave}>
            Save
          </button>
        </div>
      </>
    ) : (
      <>
        <div className="d-flex flex-row">
          <p className="container col-8 text-center" style={{ textDecoration: isComplete ? "line-through" : "none" }}>
            {title}
          </p>
          <small className="text-muted me-5">Updated on: {new Date(updatedAt).toLocaleString()}</small>
          <button
            type="button"
            className="btn btn-secondary mx-3"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
          <button type="button" className="btn btn-danger mx-3" onClick={deleteTask}>
            Delete
          </button>
  
          <input
            className="mx-3"
            checked={isComplete}
            onChange={() => editTask(index, { title, isComplete: !isComplete, updatedAt: new Date().toISOString() })}
            type="checkbox"
          />
        </div>
      </>
    );
  };

export default Task