import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
//   console.log(post);
  const { title, body, id } = post;
  const navigate = useNavigate()
  const handleShowDetails = () =>{
    navigate( `/post/${id}`)
  }
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
          <Link to={`/post/${id}`}>
            <button className="btn btn-primary">Show Details</button>
          </Link>
          <button onClick={handleShowDetails}>Show Details!!!!!</button>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
