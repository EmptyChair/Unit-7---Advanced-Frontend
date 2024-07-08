import { FunctionComponent, RefObject, useRef, useState } from "react";
import { IUser } from "./UserListFC";
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

//also possible to write FC
const UserFC: FunctionComponent<IProps> = ({
  user: { name, companyName, phone, updatedAt },
  deleteUser,
  editUser,
  index,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const textRef: RefObject<HTMLTextAreaElement> = useRef(null); //???

  const handleClickSave = () => {    
    if (textRef.current) {
        const entryData = textRef.current.value.split(",",3)
        editUser(index, {
        name: entryData[0],
        companyName: entryData[1],
        phone: entryData[2],
        updatedAt: new Date().toISOString(),
      });
      setIsEdit(false);
    }
  };

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
  );
};


export default UserFC;
