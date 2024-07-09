//////////////////////////
// USERS LIST
// USER: name, job, place - take from JASOn placeholder
/////////////////////77

import { ChangeEvent, Component, ReactNode } from "react";
import axios from "axios";
import UserCC from "./UserCC";

export interface IUser {
  id: number,
  name: string,
  userName: string,
  email: string,
  address : {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: number,
        lng: number
    },
  },
  phone: string,
  website: string,
  company: { 
      name: string, 
      catchphrase:string, 
      bs: string 
  };  
}

interface IState {
  users: IUser[];
  //newUser: IUser without an id
  newUser: Omit<IUser, ("id")>;
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
        name: "",
        userName: "",
        email: "",
        address : {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
            geo: {
              lat: 0,
              lng: 0
            },
        },
        phone:"",
        website: "",
        company: {
          name: "",
          catchphrase: "",
          bs: ""
        }
      } 
    }
  }

  //before rendering (when we load the page) we must make request and then save state
  componentDidMount(): void {
    axios
      .get<IUser[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({ ...this.state, users: this.sortByName(response.data) });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  sortByName = (array: IUser[]) => {
    return array.sort((a, b) => a.name.localeCompare(b.name));
  };

  // each class will have this function/property
  addUser = () => {
    this.setState((prevState) => ({
      //store new values as a new user and add it to the existing array of users
      users: [
        {
          id: this.state.users.length + 1,
          name: this.state.newUser.name,
          userName: this.state.newUser.userName,
          email: this.state.newUser.email,
          address: {
            street: this.state.newUser.address.street,
            suite: this.state.newUser.address.suite,
            city: this.state.newUser.address.city,
            zipcode: this.state.newUser.address.zipcode,
            geo : {
              lat: this.state.newUser.address.geo.lat,
              lng: this.state.newUser.address.geo.lng,
            }
          },
          phone: this.state.newUser.phone,
          website: this.state.newUser.website,
          company: {
             name: this.state.newUser.company.name,
             catchphrase: this.state.newUser.company.catchphrase,
             bs: this.state.newUser.company.bs 
          },         
        },
        ...prevState.users,
      ],
      //wipe new values from the input window
      newUser: {
        name: "",
        userName: "",
        email: "",
        address : {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
            geo: {
              lat: 0,
              lng: 0
            },
        },
        phone:"",
        website:"",
        company: {
          name: "",
          catchphrase: "",
          bs: ""
        }
      }
    })),
    this.setState((prevState) => ({
      users: this.sortByName(prevState.users),
    }));
  };

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
    this.setState((prevState) => ({
      users: this.sortByName(prevState.users),
    }));
  };

  //hand over element and key

  inputData = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    console.log("value is: "+value)
    console.log("name is: "+value)
    if (name === "companyName") {
      this.setState({
        ...this.state,
        newUser: { ...this.state.newUser, company: { name: value, catchphrase: this.state.newUser.company.catchphrase, bs: this.state.newUser.company.bs } },
      });
      
      return;
    }
    this.setState({
      ...this.state,
      newUser: {
        ...this.state.newUser,
        [name === "name" ? "name" : "phone"]: event.target.value,
      },
    });
  };

  render(): ReactNode {
    return (
      <div className="container-fluid w-75 mt-4">
        <h1 className="mb-4 text-center text-light bg-dark">User List App</h1>
        {/* save user */}
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
            onChange={(e) => this.inputData(e)}
            className="form-control"
            placeholder="New name"
          />

          <input
            type="text"
            value={this.state.newUser.company.name}
            name="companyName"
            onChange={(e) => this.inputData(e)}
            className="form-control"
            placeholder="New company name"
          />

          <input
            type="text"
            value={this.state.newUser.phone}
            name="phone"
            onChange={(e) => this.inputData(e)}
            className="form-control"
            placeholder="New phone number"
          />

          <button onClick={this.addUser} className="btn btn-primary">
            Add User
          </button>
        </div>
          {/* depict users */}
        <div>
          {this.state.users.map((user) => (
            <UserCC
              key={user.id}
              user={user}
              //wrapper function which tells that this function is to be started with this parameter
              deleteUser={() => this.deleteUser(user.id)}
              editUser={this.editUser}
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
  }
}

export default UserListCC;
