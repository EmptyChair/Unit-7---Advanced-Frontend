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
  const [isTask, setIsTask] = React.useState("Empty Slot");
  const textRef = React.useRef();

  return isEdit ? (    
    <div>
      <textarea ref={textRef} defaultValue={isTask}></textarea>
      <button onClick={() => {setIsEdit(false), setIsTask(textRef.current.value)}}>SAVE</button>
      <button>DELETE</button>
    </div>
  ) : (
    <div>
      <p>{isTask}</p>
      <button onClick={() =>setIsEdit(true)}>EDIT</button>
      <button>DELETE</button>
    </div> 
  )
};

/////////////////////
//RENDER
/////////////////////

root.render(
  <>
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
  </>
);
