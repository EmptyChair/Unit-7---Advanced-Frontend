import { FC } from "react";
import { IUser } from "./UserList";
import { NavLink } from "react-router-dom";

interface IProps extends IUser {
  //IUser plus props
  changeIsDetails: (userDetails: IUser | null) => void;
}

//destructuring the IUser props

const UserDetails: FC<IProps> = ({
  name: userName,
  company: { name: companyName },
  phone,
  email,
  address,
  website,
  changeIsDetails,
}) => {
  //destructure the address
  const { street, city, geo, suite, zipcode } = address as {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  return (
    <div className="container mt-4 bg-secondary text-white">
      <div>
        <h1 className="text-center px-4 py-4 fw-bold">{userName}</h1>
        <p>
          <strong>Company:</strong> {companyName}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Website:</strong> {website}
        </p>
        <p>
          <strong>Address:</strong>
        </p>
        <ul>
          <li>
            <strong>Street:</strong> {street}
          </li>
          <li>
            <strong>Suite:</strong> {suite}
          </li>
          <li>
            <strong>City:</strong> {city}
          </li>
          <li>
            <strong>Zipcode:</strong> {zipcode}
          </li>
          <li>
            <strong>Geolocation:</strong> {geo.lat}(latitude), {geo.lng}
            (longitude){" "}
          </li>
        </ul>
      </div>
      <NavLink to="/users">
        <div className="d-flex justify-content-end px-4 py-4">
          <button
            className="btn btn-dark "
            onClick={() => changeIsDetails(null)}
          >
            Close
          </button>
        </div>
      </NavLink>
    </div>
  );
};

export default UserDetails;
