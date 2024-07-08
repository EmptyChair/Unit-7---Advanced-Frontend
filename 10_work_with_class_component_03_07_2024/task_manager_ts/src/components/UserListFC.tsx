import { useEffect, useState } from "react";
//import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import UserFC from "./UserFC.js";

/////////////////////
// USER LIST - Functional Version
/////////////////////
// NOTE: first hooks, then customer functions

export interface IUser {
  //to export into UserFC
  name: string;
  companyName: string;
  phone: string;
  updatedAt: number | string;
}

const UserListFC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const [newUser, setNewUser] = useState<Omit<IUser, "updatedAt">>({
    name: "",
    companyName: "",
    phone: "",
  });

  const sortByName = (array: IUser[]) => {
    return array.sort((a, b) => a.name.localeCompare(b.name));
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        //take elements 5 elements from element 2
        setUsers(
          sortByName(
            data
              .splice(0, 10)
              .map(
                (e: {
                  name: string;
                  company: { name: string };
                  phone: string;
                }) => ({
                  name: e.name,
                  companyName: e.company.name,
                  phone: e.phone,
                  //* 1000 * 60 * 60 - ms to s to mins to hrs months, to provide variance to current date
                  updatedAt: new Date(
                    Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 30
                  ).toISOString(),
                })
              )
          )
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  ///NB! slice changes the original
  ///NB! splice makes a copy

  const addUser = () => {
    if (newUser.name.trim()) {
      const usersCopy = [...users];
      const entryData = newUser.name.trim().split(",", 3);
      usersCopy.unshift({
        name: entryData[0],
        updatedAt: new Date().toISOString(),
        companyName: entryData[1],
        phone: entryData[2],
      });
      setUsers(usersCopy);
      //clear the line for new entries
      setNewUser({
        name: "",
        companyName: "",
        phone: "",
      });
    }
  };

  const deleteUser = (i: number) => {
    setUsers(users.filter((_, index) => i !== index));
    //use filter because it works with a copy
  };

  const editUser = (i: number, updatedUser: IUser) => {
    if (updatedUser.name !== users[i].name) {
      setUsers(
        sortByName(users.map((e, index) => (index === i ? updatedUser : e)))
      );
    }

    //maps works with a copy, so we can change the user state
  };

  return (
    <div className="container mt-4">
      <div className="input-group mb-3">
        <input
          type="text"
          value={newUser.name}
          onChange={(e) => setNewUser({ name: e.target.value })}
          className="form-control"
          placeholder="New name, company, phone number"
        />
        <button onClick={addUser} className="btn btn-primary">
          Add User
        </button>
      </div>
      <div>
        {users.map((user, index) => (
          <UserFC
            key={index}
            user={user}
            deleteUser={() => deleteUser(index)}
            editUser={editUser}
            index={index}
          />
        ))}
      </div>
      <div className="fixed-bottom mx-3 d-flex justify-content-end ">
        <div className="fw-bold border border-dark px-3 py-2">
          <div className="d-flex justify-content-end">
            Author: Roman Sheludko
          </div>
          <div className="d-flex justify-content-end">Group FS-40-2</div>
          <div className="d-flex justify-content-end">July 2024</div>
        </div>
      </div>
    </div>
  );
};

export default UserListFC;
