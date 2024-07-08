import { useEffect, useState } from "react";
//import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Task from "./Task.js";

/////////////////////
//TASK LIST
/////////////////////
// NOTE: first hooks, then customer functions

export interface ITask { //to export into Task
  number?: number,
  title: string,
  isComplete: boolean,
  updatedAt: number | string
}

const TaskList = () => {
  // чтобы менять список задач, нужно выбирать между стейтом или массивом
  // мы выбираем локальное состояние, у которого значение - массив
  // for keeping and updating task list  
  const [number, setNumber] = useState(1);
  // SINCE useState will contain arrays of ITasks Objects
  const [tasks, setTasks] = useState<ITask[]>([]);
  // Reduced ITask - > use Omit to allow  reduced input intake
  const [newTask, setNewTask] = useState<Omit<ITask, 'updatedAt' | "number">>({
    title: "",
    isComplete: false,
  });



  const sortByDate = (array: ITask[]) => {
    //added method getTime() to make sure a number is retrieved from Object
    return array.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
  }
  // useEffect launches fetchToDos
  useEffect(() => {
    const fetchToDos = async () => {
      try {
        // const response = await axios.get("https://jsonplaceholder.typicode.com/todos").data;
        // console.log(response);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        //take elements 10 elements from element 0
        setTasks(sortByDate(
          data
            .splice(0, 10)
            .map((e: { id: number, title: string, completed: boolean }) => ({
              number: e.id,
              title: e.title,
              isComplete: e.completed,
              //* 1000 * 60 * 60 - ms to s to mins to hrs months, to provide variance to current date
              updatedAt: new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 30).toISOString(),
            }))
        ));
      } catch (error) {
        console.log(error);
      }
    };
    fetchToDos();
  }, []);



  ///NB! slice changes the original
  ///NB! splice makes a copy

  const addTask = () => {
    if (newTask.title.trim()) {
      setNumber(number + 1);
      const tasksCopy = [...tasks];
      tasksCopy.unshift({
        ...newTask,
        updatedAt: new Date().toISOString(),
        number,
      });
      setTasks(tasksCopy);
      setNewTask({
        title: "",
        isComplete: false
      });
    }
  };

  const deleteTask = (i: number) => {
    setTasks(tasks.filter((_, index) => i !== index));
    //use filter because it works with a copy
  };

  const editTask = (i: number, updatedTask: ITask) => {
    if ((updatedTask.title) !== tasks[i].title || (updatedTask.isComplete) !== tasks[i].isComplete) {
      setTasks(sortByDate(tasks.map((e, index) => (index === i ? updatedTask : e))));
    }

    //maps works with a copy, so we can change the task state
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center text-muted bg-secondary">Task List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          value={newTask.title}
          onChange={(e) =>
            setNewTask({ title: e.target.value, isComplete: false })
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
          <div className="d-flex justify-content-end">
            Author: Roman Sheludko
          </div>
          <div className="d-flex justify-content-end">Group FS-40-2</div>
          <div className="d-flex justify-content-end">July 2024</div>
        </p>
      </div>
    </div>
  );
};

export default TaskList;
