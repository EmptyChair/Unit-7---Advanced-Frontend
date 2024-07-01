/////////////////////
//HOMEWORK FOR LESSON 4
/////////////////////

const root = ReactDOM.createRoot(document.getElementById("root"));

/////////////////////
//TASK LIST
/////////////////////

const taskList = [
  { number: 1, task: "Clean the stairs", deadline: "none", done: false },
  { number: 2, task: "Do Homework", deadline: "1 day", done: false },
  { number: 3, task: "Wash the floor", deadline: "2 days", done: false },
  { number: 4, task: "Remove Stains", deadline: "3 days", done: true },
  { number: 5, task: "Unknown", deadline: "none", done: true },
  { number: 6, task: "Unknown", deadline: "none", done: true },
  { number: 7, task: "Unknown", deadline: "none", done: true },
];

/////////////////////
//TASK
/////////////////////

const ToDoApp = () => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);
  const [isTask, setIsTask] = React.useState("Unknown Task");
  const [isTaskDate, setIsTaskDate] = React.useState("unknown date");
  const textRefTask = React.useRef();
  const textRefDate = React.useRef();

  return isDeleted ? (
    <div></div>
  ) : isEdit ? (
    <div>
      <textarea ref={textRefTask} defaultValue={isTask}></textarea>
      <textarea ref={textRefDate} defaultValue={isTaskDate}></textarea>
      <button
        onClick={() => {
          setIsEdit(false),
            setIsTask(textRefTask.current.value),
            setIsTaskDate(textRefDate.current.value);
        }}
      >
        SAVE
      </button>
      <button
        onClick={() => {
          setIsDeleted(true);
        }}
      >
        DELETE
      </button>

    </div>
  ) : (
    <div>
      <p>__________________________________________</p>
      <p>
        {isTask}, by {isTaskDate}        
      </p>
      <button
        onClick={() => {
          setIsEdit(true);
        }}
      >
        EDIT
      </button>
      <button
        onClick={() => {
          setIsDeleted(true);
        }}
      >
        DELETE
      </button>
    </div>
  );
};

/////////////////////
//RENDER
/////////////////////

root.render(
  <>
    <h1>My ToDoApp</h1>
    <div>
      {/* key={Math.random() нужен только при map */}
      <ToDoApp key={Math.random()} />
      <ToDoApp key={Math.random()} />
      <ToDoApp key={Math.random()} />
      <ToDoApp key={Math.random()} />
      <ToDoApp key={Math.random()} />
      <ToDoApp key={Math.random()} />
      <ToDoApp key={Math.random()} />
      <ToDoApp key={Math.random()} />
      <ToDoApp key={Math.random()} />
      <ToDoApp key={Math.random()} />
    </div>
  </>
);
