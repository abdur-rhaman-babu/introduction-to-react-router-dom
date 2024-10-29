import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
//   console.log(user);
  const { name,email,id } = user;
  return (
    <div className="card bg-base-100 shadow-xl border border-blue-400">
      <figure>
      </figure>
      <div className="p-5">
        <h2 className="card-title">{name}</h2>
        <p>{email}</p>
       
        <div className="card-actions justify-end">
          <Link to = {`/user/${id}`}>
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
