import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Task from "./Task.jsx";

/////////////////////
//TASK LIST
/////////////////////
// NOTE: first hooks, then customer functions

const TaskList = () => {
  // чтобы менять список задач, нужно выбирать между стейтом или массивом
  // мы выбираем локальное состояние, у которого значение - массив
  // for keeping and updating task list
  //
  // const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
  const [number, setNumber] = useState(4);
  const [tasks, setTasks] = useState([
    {
      number: 1,
      title: "House Cleaning",
      isComplete: false,
      updatedAt: new Date().toISOString(),
    },
    {
      number: 2,
      title: "Stairs Cleaning",
      isComplete: false,
      updatedAt: new Date().toISOString(),
    },
    {
      number: 3,
      title: "Walk - 4,5 km",
      isComplete: false,
      updatedAt: new Date().toISOString(),
    },
  ]);
  // for adding new tasks
  const [newTask, setNewTask] = useState({
    title: "",
    isComplete: false,
  });
  // useEffect accepts function and array
  useEffect(() => {
    const fetchToDos = async () => {
      try {
        /*
          const response = await fetch("https://jsonplaceholder.typicode.com/todos");
          const data = await response.json();
          */
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        ).data;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchToDos();
  }, []);

  const addTask = () => {
    //local state is immutable, so this song and dance!
    if (newTask.title.trim()) {
      setNumber(number+1);
      const tasksCopy = [...tasks];
      tasksCopy.push({ ...newTask, updatedAt: new Date().toISOString(), number});
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
    <div className="container mt-4">
      <div className="input-group mb-3">
        <input
          type="text"
          value={newTask.title}
          onChange={(e) =>
            setNewTask({ title: e.target.value, isCompleted: false })
          }
          className="form-control"
          placeholder="New Task"
        />
        <button onClick={addTask} className="btn btn-primary">
          Add Task
        </button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            deleteTask={() => deleteTask(index)}
            editTask={editTask}
            index={index}
          />
        ))}
      </div>
      <div className="fixed-bottom mx-3 d-flex justify-content-end ">
        <p className="fw-bold border border-dark px-3 py-2">
          <div className ="d-flex justify-content-end">Author: Roman Sheludko, Group FS-40-2</div>
          <div className ="d-flex justify-content-end">July 2024</div>           
        </p>
      </div> 
    </div>    
  );
};


export default TaskList;
