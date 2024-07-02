/////////////////////
//HOMEWORK FOR LESSON 4 - TEACHER'S SOLUTION
/////////////////////

const root = ReactDOM.createRoot(document.getElementById("root"));

/////////////////////
//TASK
/////////////////////

const Task = ({ task: { title, isComplete }, deleteTask, editTask, index }) => {
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

/////////////////////
//TASK LIST
/////////////////////

const TaskList = () => {
  // чтобы менять список задач, нужно выбирать между стейтом или массивом
  // мы выбираем локальное состояние, у которого значение - массив
  // for keeping and updating task list
  //
  // const [tasks, setTasks] = React.useState(["Task 1", "Task 2", "Task 3"]);
  const [tasks, setTasks] = React.useState([
    { title: "Task 1", isComplete: false },
    { title: "Task 2", isComplete: false },
    { title: "Task 3", isComplete: false },
  ]);
  // for adding new tasks
  const [newTask, setNewTask] = React.useState({
    title: "",
    isComplete: false,
  });

  const addTask = () => {
    //local state is immutable, so this song and dance!
    if (newTask.title.trim()) {
      const tasksCopy = [...tasks];
      tasksCopy.push(newTask);
      setTasks(tasksCopy);
    }
  };

  const deleteTask = (i) => {
    setTasks(tasks.filter((_, index) => i !== index));
    //use filter because it works with a copy
  };

  const editTask = (i, updatedTask) => {
    setTasks(tasks.map((e, index) => (index === i ? updatedTask : e)));
    //maps works with a copy, so we can change the task state
  };

  return (
    <>
      <h1 class="d-flex justify-content-center align-items-center p-3 mb-2 bg-secondary text-white">
        Task Manager App
      </h1>
      <div class="d-flex justify-content-center align-items-center mb-3 mt-5">
        {/* onChange waits for changing of value, just like onClick waits for a click, while onInput - when cursor is moved elsewhere */}
        <input
          class="border border-primary rounded w-50"
          type="text"
          value={newTask.title}
          onChange={(e) =>
            setNewTask({ title: e.target.value, isComplete: false })
          }
        />
        <button type="button" class="btn btn-primary" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div class="container col-6 px-4 text-left">
        {tasks.map((task, index) => (
          <div class="border border-success rounded">
            <Task
              key={Math.random()}
              task={task}
              deleteTask={() => deleteTask(index)}
              //since we don't know new name for editTaskyet, we won't mention the paramenters here
              editTask={editTask}
              index={index}
            />
          </div>
        ))}
      </div>
      <div class="fixed-bottom mx-3 d-flex justify-content-end ">
        <p class="fw-bold border border-dark px-3 py-2">
          <div class ="d-flex justify-content-end">Author: Roman Sheludko, Group FS-40-2</div>
          <div class ="d-flex justify-content-end">July 2024</div>           
        </p>
      </div> 
     
    </>
  );
};

/////////////////////
//RENDERING OF ROOT
/////////////////////

root.render(
  < >
    <TaskList />
  </>
);
