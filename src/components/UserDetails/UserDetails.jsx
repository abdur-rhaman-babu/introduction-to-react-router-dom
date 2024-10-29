import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData()
    const {name} = user;  
    // console.log(user)
    return (
        <div>
            <h3>{name}</h3>
            <h1>UserDetails</h1>
        </div>
    );
};

export default UserDetails;