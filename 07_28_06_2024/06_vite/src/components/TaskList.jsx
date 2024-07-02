import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from "./Task.jsx"

/////////////////////
//TASK LIST
/////////////////////
// NOTE: first hooks, then customer functions

function TaskList  ()  {
    // чтобы менять список задач, нужно выбирать между стейтом или массивом
    // мы выбираем локальное состояние, у которого значение - массив
    // for keeping and updating task list
    //
    // const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
    const [tasks, setTasks] = useState([
      { title: "Task 1", isComplete: false, updatedAt: new Date().toISOString() },
      { title: "Task 2", isComplete: false, updatedAt: new Date().toISOString() },
      { title: "Task 3", isComplete: false, updatedAt: new Date().toISOString() },
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
          const response = await axios.get("https://jsonplaceholder.typicode.com/todos").data;          
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
        const tasksCopy = [...tasks];
        tasksCopy.push({...newTask, updatedAt: new Date().toISOString()});
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
        <h1 className="d-flex justify-content-center align-items-center">
          Task Manager
        </h1>
        <div className="d-flex justify-content-center align-items-center mb-3 mt-5">
          {/* onChange waits for changing of value, just like onClick waits for a click, while onInput - when cursor is moved elsewhere */}
          <input
            className="border border-primary rounded w-50"
            type="text"
            value={newTask.title}
            onChange={(e) =>
              setNewTask({ title: e.target.value, isComplete: false })
            }
          />
          <button type="button" className="btn btn-primary" onClick={addTask}>
            Add Task
          </button>
        </div>
        <div className="container col-6 px-4 text-left">
          {tasks.map((task, index) => (            
              <Task 
                key={Math.random()}
                className="border border-success rounded"
                task={task}
                deleteTask={() => deleteTask(index)}
                //since we don't know new name for editTask yet, we won't mention the parameters here
                editTask={editTask}
                index={index}
              />
          ))}
        </div>
        <div className="fixed-bottom mx-3 d-flex justify-content-end">
          <p className="fw-bold">Author: Roman Sheludko, Group FS-40-2</p>
        </div>
      </>
    );
  }

export default TaskList

