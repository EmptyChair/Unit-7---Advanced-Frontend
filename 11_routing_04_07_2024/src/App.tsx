import TaskList from "./components/TaskList";
import UserListFC from "./components/UserListFC";
import UserListCC from "./components/UserListCC";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TaskList />} />
        <Route path="/users" element={<UserListCC />} />
      </Route>
    </Routes>
  )
}

export default App;
