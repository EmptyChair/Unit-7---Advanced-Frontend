import {
  RefObject,
  useRef,
  useState,
  Component,
  ReactNode,
  ChangeEvent,
} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IUser } from "./UserListCC";

/////////////////////
// USER
/////////////////////

interface IProps {
  user: IUser;
  deleteUser: () => void;
  editUser: (updatedUser: IUser) => void;
}

interface IState {
  isEdit: boolean;
  name: string;
  company: string;
  phone: string;
}

export default class UserCC extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isEdit: false,
      name: props.user.name,
      company: props.user.company.name,
      phone: props.user.phone,
    };
  }

  toggleEdit = () => {
    this.setState((prevState) => ({ ...prevState, isEdit: !prevState.isEdit }));
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //extract name and value from e.target
    const { name, value } = e.target;
    //[e.target.name] - key value, hence []
    this.setState((prevState) => ({ ...prevState, [name]: value }));
    //this.setState((prevState) => ({...prevState, [e.target.name]: e.target.value }))
  };

  saveUser = () => {
    const { company, name, phone } = this.state;
    const { editUser, user } = this.props;

    const updatedUser = {
      ...user,
      name,
      company: {name: company},
      phone
    }
    editUser(updatedUser);
    this.toggleEdit();

  }; 

  render() {
    return (
      <div
        className="card mb-3"
        style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
      >
      <div className="card-body">
        {this.state.isEdit ? (
          <div>
            <input
              className="form-control mb-2"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              className="form-control mb-2"
              name="company"
              value={this.state.company}
              onChange={this.handleChange}
            />
            <input
              className="form-control mb-2"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <button
              onClick={this.saveUser}
              className="btn btn-success btn-sm me-2"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="d-flex align-items-center">
            <h5 className="card-title">{this.props.user.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{this.props.user.company.name}</h6>
            <p className="card-text">{this.props.user.phone}</p>
            <button
              onClick={this.toggleEdit}
              className="btn btn-warning btn-sm me-2"
            >
              Edit
            </button>
            <button onClick={this.props.deleteUser} className="btn btn-danger btn-sm">
              Del
            </button>
          </div>
        )}
        </div>
      </div>
    );
  }
}


