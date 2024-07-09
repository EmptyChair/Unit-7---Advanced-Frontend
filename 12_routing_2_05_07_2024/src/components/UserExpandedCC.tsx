//////////////////////////
// USERS LIST
// USER: name, job, place - take from JASOn placeholder
/////////////////////77

import { Component, ReactNode } from "react";
import style from "../styles/user.module.css";

interface IProps {
  user: IExpandedUser;
}

interface IExpandedUser {
  isEdit: boolean;
  isExpanded: boolean;
  name: string;
  userName: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchphrase: string;
    bs: string;
  };
}

export class UserExpandedCC extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isEdit: false,
      isExpanded: true,
      name: "",
      userName: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: 0,
          lng: 0,
        },
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchphrase: "",
        bs: "",
      },
    };
  }

  render(): ReactNode {
    return (
      <div className="d-flex justify-content-between">
        <div>
          <h5 className="card-title">{this.props.user.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Company: {this.props.user.company.name}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            Email: {this.props.user.email}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            Address: {this.props.user.address.street},{" "}
            {this.props.user.address.suite} in {this.props.user.address.city}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            Website: {this.props.user.website}
          </h6>
          <p className={"card-text " + style.color}>
            Telephone: {this.props.user.phone}
          </p>
        </div>
      </div>
    );
  }
}

export default UserExpandedCC;
