import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData()
    const navigate = useNavigate()
    const {id, body, title} = post;
    const handleGoBack = () =>{
        navigate(-1)
    }

    const {postId} = useParams()
    console.log(postId)
    return (
        <div>
            <h1>{id}</h1>
            <h1>{body}</h1>
            <h1>{title}</h1>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;