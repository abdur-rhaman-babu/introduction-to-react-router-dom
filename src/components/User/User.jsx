import PropTypes from "prop-types";

const User = ({ user }) => {
  console.log(user);
  const { brand, image, model, price  } = user;
  return (
    <div className="card bg-base-100 shadow-xl border border-blue-400">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="p-5">
        <h2 className="card-title">{brand}</h2>
        <p>{model}</p>
        <p>Price:${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
