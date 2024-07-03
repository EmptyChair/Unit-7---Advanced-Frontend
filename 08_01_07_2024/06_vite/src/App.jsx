
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './components/TaskList'

function App() {
  
  return (
    <>     
      <h1 className="d-flex justify-content-center align-items-center p-3 mb-2 bg-secondary text-white">
        Task Manager App
      </h1>
      <TaskList />
    </>
   
  )
}
//export from this file - App
export default App
