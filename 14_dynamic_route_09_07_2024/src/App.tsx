import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserList, { IUser } from './components/UserList';
import Layout from './components/Layout';
import TaskList from './components/TaskList';
import UserDetails from './components/UserDetails';
import { useState } from 'react';

function App() {
  // два локальных состояния user и change, но методы которые их меняют переданы в UL,
  // поэтому их можно сменить из нижнего уровня, чего вообще в React не подразумевалось
  //user таскает пользователя по уровням
  const [user, setUser] = useState<IUser | null>(null);
  //change is a function, setChange - changes the function
  //
  const [change, setChange] = useState<(() => void) | null>(null);
  console.log("user")
  console.log(user)
  console.log("change")
  console.log(change)

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<TaskList />} />
        <Route path='/users' element={<UserList setUser={setUser} setChange={setChange} />} />
        {/* if we have a user to show and change - show userDetails, or no user selected */}
        <Route path='/users/details' 
          element={user && change 
          ? <UserDetails {...user} changeIsDetails={change} /> 
          : <div>No user selected</div>} 
        />
      </Route>
    </Routes>
  );
}

export default App;