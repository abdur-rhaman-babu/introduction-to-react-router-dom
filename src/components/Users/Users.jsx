import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-center mb-5 text-3xl font-bold">
        Users: {users.length}
      </h1>
      <div className="grid md:grid-col-2 lg:grid-cols-4 gap-5">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
