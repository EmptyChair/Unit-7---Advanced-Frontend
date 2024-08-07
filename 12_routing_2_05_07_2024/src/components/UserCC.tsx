import {
  Component,
  ChangeEvent,
} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IUser } from "./UserListCC";
//style is a variable invented by us
import style from "../styles/user.module.css";
import UserExpandedCC from "./UserExpandedCC";

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
  isExpanded: boolean;
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

export default class UserCC extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isEdit: false,
      isExpanded: false,
      name: props.user.name,
      userName: props.user.userName,
      email: props.user.email,
      address: {
        street: props.user.address.street,
        suite: props.user.address.suite,
        city: props.user.address.city,
        zipcode: props.user.address.zipcode,
        geo : {
          lat: props.user.address.geo.lat,
          lng: props.user.address.geo.lng, 
        }
      },
      phone: props.user.phone,
      website: props.user.website,
      company: {
        name: props.user.company.name,
        catchphrase: props.user.company.catchphrase,
        bs: props.user.company.bs,
      }     
    };
  }

  toggleEdit = () => {
    this.setState((prevState) => ({ ...prevState, isEdit: !prevState.isEdit }));
  };

  toggleExpand = () => {
    this.setState((prevState) => ({
      ...prevState,
      isExpanded: !prevState.isExpanded,
    }));
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
      company: {name : company}, 
      phone
    };
    editUser(updatedUser);
    this.toggleEdit();
  };

  render() {
    return (
      <div
        className="container-fluid w-75 card mb-3"
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
                value={this.state.company.name}
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
          ) : this.state.isExpanded ? (
            <div>
              {/* TODO user expanded here*/}              
                <UserExpandedCC
                  user={this.state}
                />             
              <button
                onClick={this.toggleExpand}
                className="btn btn-danger btn-sm me-2"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="d-flex justify-content-between">
              <div>
                <h5 className="card-title">{this.props.user.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {this.props.user.company.name}
                </h6>
                {/* <p className={`card-text ${style.color}`} >{this.props.user.phone}</p> */}
                {/* строчка из значения - выйди из jsx и читать. Не забудь пробел! Он важен что конкатенция прошла успешно. */}
                <p className={"card-text " + style.color}>
                  {this.props.user.phone}
                </p>
              </div>
              <div>
                <button
                  onClick={this.toggleExpand}
                  className="btn btn-info btn-sm me-2"
                >
                  Expand
                </button>
                <button
                  onClick={this.toggleEdit}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </button>
                <button
                  onClick={this.props.deleteUser}
                  className="btn btn-danger btn-sm"
                >
                  Del
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
