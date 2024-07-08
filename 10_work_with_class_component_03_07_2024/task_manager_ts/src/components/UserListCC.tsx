//////////////////////////
// USERS LIST
// USER: name, job, place - take from JASOn palceholder
/////////////////////77

import { ChangeEvent, Component, ReactNode } from "react";
import axios from "axios";
import UserCC from "./UserCC";

interface IUser {
  id: number;
  name: string;
  company: { name: string };
  phone: string;
}

interface IState {
  users: IUser[];
  //newUser: IUser without an id
  newUser: Omit<IUser, "id">;
  //newName: string,
  //newCompany: string;
  //newPhone: string
}



class UserListCC extends Component<Record<string, never>, IState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      users: [],
      newUser: {
        company: {
          name: "",
        },
        name: "",
        phone: "",
      },
      //newCompany:"",
      //newName:"",
      //newPhone:"",
    };
  }

  //before rendering (when we load the page) we must make request and then save state
  componentDidMount(): void {
    axios
      .get<IUser[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({ ...this.state, users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // each class will have this function/property
  addUser = () => {
    this.setState((prevState) => ({
      //store new values as a new user and add it to the existing array of users
      users: [
        {
          id: this.state.users.length + 1,
          company: { name: this.state.newUser.company.name },
          name: this.state.newUser.name,
          phone: this.state.newUser.phone,
        },
        ...prevState.users,
      ],
      //wipe new values from the input window
      newUser: {
        company: {
          name: "",
        },
        name: "",
        phone: "",
      },
    }));
  };

  // ADD USER with destructured version
  /*
    addUser2 = () => {
        const { length } = this.state.users;
        const { company : {name: companyName}, name, phone } = this.state.newUser;

        this.setState((prevState) => ({
            //store new values as a new user and add it to the existing array of users
            users: [
                {
                    id: length + 1,
                    company: { name: companyName },
                    name,
                    phone,
                },
                ...prevState.users,
            ],
            //wipe new values from the input window
            newUser: {
                company: {
                    name: "",
                },
                name: "",
                phone: "",
            },
        }));
    };
    */

  deleteUser = (userId: number) => {
    this.setState((prevState) => ({
      users: [...prevState.users.filter((user) => user.id !== userId)],
      newUser: { ...prevState.newUser },
    }));
  };

  //extra index not needed! In this case each user has a unique id, so we don't need to provide index to this function
  editUser = (updatedUser: IUser) => {
    this.setState((prevState) => ({
      users: [
        ...prevState.users.map((e) =>
          e.id === updatedUser.id ? updatedUser : e
        ),
      ],
      newUser: { ...prevState.newUser },
    }));
  };

  //hand over element and key

  inputData = (event: ChangeEvent<HTMLInputElement>, key: string) => {
    const { value } = event.target;

    if (key === "companyName") {
      this.setState({
        ...this.state,
        newUser: { ...this.state.newUser, company: { name: value } },
      });
      return;
    }
    this.setState({
      ...this.state,
      newUser: {
        ...this.state.newUser,
        [key === "name" ? "name" : "phone"]: event.target.value,
      },
    });
  };

  render(): ReactNode {
    return (
      <div className="container mt-4">
        <h1 className="mb-4 text-center">User List App</h1>

        <div className="input-group mb-3">
          <input
            type="text"
            value={this.state.newUser.name}
            name="name"
            //target - what changed onCHange
            /*
            onChange={(e) => 
                (
                this.setState({ ...this.state, newUser: { ...this.state.newUser, name: e.target.value } })
                )
            }
            */
            onChange={(e) => this.inputData(e, "name")}
            className="form-control"
            placeholder="New name"
          />

          <input
            type="text"
            value={this.state.newUser.company.name}
            name="companyName"
            onChange={(e) => this.inputData(e, "companyName")}
            className="form-control"
            placeholder="New company name"
          />

          <input
            type="text"
            value={this.state.newUser.phone}
            name="phone"
            onChange={(e) => this.inputData(e, "phone")}
            className="form-control"
            placeholder="New phone number"
          />

          <button onClick={this.addUser} className="btn btn-primary">
            Add User
          </button>

          <div>
            {this.state.users.map((user, index) => (
              <UserCC
                key={index}
                user={user}
                deleteUser={() => this.deleteUser(index)}
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
      </div>
    );
  }
}

export default UserListCC;
