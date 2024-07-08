import { RefObject, useRef, useState, Component, ReactNode} from "react";
import IUser from "./UserListCC";
import "bootstrap/dist/css/bootstrap.min.css";

/////////////////////
// USER
/////////////////////

interface IProps {
  user: IUser,
  deleteUser: () => void,
  editUser: (i: number, updatedUser: IUser) => void,
  index: number
}

interface IUserState {
  isEdit: boolean;
}

class UserCC extends Component<IProps> {
  constructor(props) {
    super(props);
    this.state = {
      isEdit : false,  
    };
  }
  
  textRef: RefObject<HTMLTextAreaElement> = useRef(null);

  handleClickSave = () => {    
    if (this.textRef.current) {
        const entryData = this.textRef.current.value.split(",",3)
        editUser(index, {
        name: entryData[0],
        companyName: entryData[1],
        phone: entryData[2],
        updatedAt: new Date().toISOString(),
      });
      this.state = false;
    }
  };






  render() : ReactNode {
    return (
      <div className="card-body">
        {isEdit ? (
          <div>
            <textarea
              ref={textRef}
              defaultValue={name+", "+companyName+", "+phone}
              className="form-control mb-2"
            ></textarea>
            <button
              onClick={handleClickSave}
              className="btn btn-success btn-sm me-2"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="d-flex align-items-center">
            <p className={`mb-0`} style={{ flexGrow: 1 }} >
              {name}
            </p>
            <p className={`mb-0`} style={{ flexGrow: 1 }} >
              {companyName}
            </p>
            <p className={`mb-0`} style={{ flexGrow: 1 }} >
              {phone}
            </p>
            <small className="text-muted me-5">Updated on: {new Date(updatedAt).toLocaleString()}</small>
            <button
              onClick={() => setIsEdit(true)}
              className="btn btn-warning btn-sm me-2"
            >
              Edit
            </button>
            <button onClick={deleteUser} className="btn btn-danger btn-sm">
              Del
            </button>
          </div>
        )}
      </div>
    )
  }
}


export default UserCC;
