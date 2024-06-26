const root = ReactDOM.createRoot(document.getElementById("root"));

/////////////////////
//TASK LIST
/////////////////////

const taskList = [
  { number: 1, task: "Clean the stairs", deadline: "none", done: false },
  { number: 2, task: "Do Homework", deadline: "1 day", done: false },
  { number: 3, task: "Wash the floor", deadline: "2 days", done: false },
  { number: 4, task: "Unknown", deadline: "none", done: true },
  { number: 5, task: "Unknown", deadline: "none", done: true },
  { number: 6, task: "Unknown", deadline: "none", done: true },
  { number: 7, task: "Unknown", deadline: "none", done: true },
];

/////////////////////
//TASK
/////////////////////

const Task = (props) => {
  return (
    <>
      <h3>
        {props.number}: {props.task} | Deadline: {props.deadline} | Status:{" "}
        {props.done ? "COMPLETE" : "PENDING"}{" "}
      </h3>
    </>
  );
};

/////////////////////
//RENDER
/////////////////////

root.render(
  <>
    {taskList.map((e) => (
      <div>
        <Task
          key={Math.random() * 1000 + 1} //требование для служебного польщования
          number={e.number}
          task={e.task}
          deadline={e.deadline}
          done={e.done}
        />
      </div>
    ))}
  </>
);
